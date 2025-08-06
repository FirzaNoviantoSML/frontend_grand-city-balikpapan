'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import {DotButton} from './CarouselDotButton'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";

type ContentType = {
    thumb:string,
    logo:string,
    desc:string
    slug:string,
}
type PropType = {
    slides: ContentType[]
    options?: EmblaOptionsType
}

const EmblaCarouselMultiple: React.FC<PropType> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    }, [emblaApi])


    return (
        <section className="relative">
            <div ref={emblaRef} className="embla overflow-hidden ">
                <div className="embla__container flex touch-pan-y gap-2 md:gap-12  px-12 mb-6">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative embla__slide flex-[0_0_calc(100%)] md:flex-[0_0_calc(32%-1rem)] h-[60vh] rounded-xl shadow-md bg-white"
                        >
                            <div className="relative w-full h-[50%]">
                                <Image
                                src={item.thumb}
                                alt="image"
                                fill
                                className="object-cover object-center rounded-t-xl"
                            />
                            </div>
                            <div className="flex justify-between flex-col h-[47%]">
                            <div className="px-4">
                                <div className="flex justify-center mt-2">
                                    <Image
                                    alt={item.slug}
                                    src={item.logo}
                                    width={200}
                                    height={200}
                                    />
                                </div>
                            <div className="py-3">
                                {item.desc}
                            </div>
                            </div>
                            <div className="font-bold flex justify-start items-center text-amber-900 ml-4">
                                See Details
                                <IoChevronForwardSharp className='font-bold' />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="flex justify-between items-center gap-5  w-full absolute top-1/2 -translate-y-1/2 z-50">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                    </div>
                <div>
                <div className="flex justify-center pb-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                    key={index}
                    selected={index === selectedIndex}
                    onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
                </div>
                </div>
                </div>

           
        </section>
    )
}

export default EmblaCarouselMultiple
