'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type ContentType = {
    title:string,
    image:string,
    slug:string,
}
type PropType = {
    slides: ContentType[]
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
        <section className="relative">
            <div ref={emblaRef} className="overflow-hidden ">
                <div className="flex -ml-4 touch-pan-y">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-[100vw] h-[80vh] flex-0 shrink-0 grow-0 basis-full min-w-0 pl-4 transform translate-x-0"
                        >
                            <Image
                                src={item.image}
                                alt="image"
                                fill
                                className="shadow-[inset_0_0_0_2px]  text-4xl font-semibold flex items-center justify-center h-[19rem] select-none object-cover  brightness-50"
                            />
                            <div className="absolute top-64 text-white left-42  w-[300px] z-10">
                                <p className='font-extralight text-5xl'>
                                {item.title}
                                </p>
                                <button className="bg-white text-amber-600 h-10 w-38 rounded-md font-bold mt-6 cursor-pointer"
                                onClick={() => console.log("klik")}>
                                    Explore Now
                                </button>

                        
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between p-6 gap-5  w-full absolute top-1/2">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />

            </div>
        </section>
    )
}

export default EmblaCarousel
