'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'
import {Testimonial} from '@/types/TestimonialTypes'


type PropType = {
    slides: Testimonial[]
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
                            className="relative w-full overflow-hidden items-center flex justify-center  group  h-[25vh] flex-0 shrink-0 grow-0 basis-full"
                            >
                            <div className="px-6 w-[80vw]">
                                <div className="flex items-start mb-2">
                                <BsQuote className="text-neutral-400 text-2xl" />
                                <p className="text-neutral-700 italic mb-4">{item.quote}</p>
                                </div>
                                <div className="grid grid-cols-4 items-center">
                                     <div className="relative w-24 h-24 ">
                                    <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.profile_picture!.url}`}
                                alt={item.profile_picture!.name}
                                    fill
                                    className="object-cover rounded-full"
                                    />
                                </div>
                                   <div className='text-md text-amber-800 font-semibold italic col-span-3 pl-12'>
                                    {item.name}
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            <div className="flex justify-between gap-5 absolute  w-full top-1/4">
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
