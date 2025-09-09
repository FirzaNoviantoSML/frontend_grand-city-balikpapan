'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { IoChevronForwardSharp } from "react-icons/io5";
import {Concept} from "@/types/conceptListTypes"


type PropType = {
    slides: Concept[]
    options?: EmblaOptionsType
    language: "en" | "id"
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
                        <div className="relative z-10 p-4">
                        <div className="flex justify-center">
                            <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.icon.url}`}
                        alt={item.icon.name}
                        width={80}
                        height={80}
                        />
                        </div>
                        <p 
                        className={`text-center font-bold mt-2`}
                        style={{ color: item.color }}
                        >{item.title}</p>
                        <div
                        style={{ color: item.color }}
                        className="text-sm mt-4 mb-12">
                            {item.description}
                        </div>

                        </div>
                        <div className="absolute left-8 bottom-2 font-bold flex justify-start items-center"
                        style={{ color: item.color }}>
                            See Details
                            <IoChevronForwardSharp className='font-bold' />
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
