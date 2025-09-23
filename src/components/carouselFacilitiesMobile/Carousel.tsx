'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import {Facilities} from '@/types/facilitiesListTypes'


type PropType = {
    slides: Facilities[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {

    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })


    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)



    return (
         <section>
                    <div ref={emblaRef} className="relative overflow-hidden cursor-grab">
                        <div className="flex touch-pan-y ">
                            {slides.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden items-center flex justify-center  group flex-0 shrink-0 grow-0 basis-11/12 bg-[#FFFCDF]"
                                    >
                                <div className="relative w-[100vw] h-[40vh] bg-[#FFFCDF] px-4"
                                key={index}>
                                <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-[#D7D4BC] to-transparent"></div>
                                <div className=" z-10 p-4">
                                <div className="w-full h-[60%] bg-red-600">
                                    <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                                alt={item.title}
                                fill
                                className="object-cover object-center"
                                />
                                </div>
                                <p 
                                className={`text-center font-bold mt-2`}
                                >{item.title}</p>
                                </div>
                                <div className="absolute left-0 bottom-2 font-bold flex justify-start items-center text-amber-50 pl-3  bg-[rgba(0,0,0,0.56)] w-full py-1"
                                >
                                    {item.title}
                                </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    <div className="flex justify-between gap-5 absolute  w-full top-1/3">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
        
                    </div>
                    </div>
        
                </section>
    )
}

export default EmblaCarousel
