'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { IoChevronForwardSharp } from "react-icons/io5";

type ContentType = {
    title:string,
    image:string,
    date:string,
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
        <section>
            <div ref={emblaRef} className="relative overflow-hidden cursor-grab">
                <div className="flex touch-pan-y ">
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden items-center flex justify-center  group flex-0 shrink-0 grow-0 basis-full px-12"
                            >
                             <div>
                                <div>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={350}
                                        height={350}
                                        className="rounded-2xl shadow-md"
                                    />
                                </div>
                                <p className="font-light text-sm text-gray-500 my-4">
                                {new Date(item.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                })}
                                </p>
                                <div className="text-md font-bold text-[#834520] w-[90%]">
                                    {item.title}
                                </div>
                                <p className="flex justify-start items-center text-[#834520] mt-6 text-xs">
                                        Read More
                                        <IoChevronForwardSharp className='font-bold' />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            <div className="flex justify-between gap-5 absolute  w-full top-2/4">
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
