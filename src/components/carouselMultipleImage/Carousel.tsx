'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import {DotButton} from './CarouselDotButton'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import {Development} from "@/types/developmentListTypes"
import {useLanguage} from '@/contex/LanguageContext'


type PropType = {
    slides: Development[]
    options?: EmblaOptionsType
}

const EmblaCarouselMultiple: React.FC<PropType> = (props) => {
    const {language} = useLanguage()
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
                <div className="embla__container flex touch-pan-y gap-2 xl:gap-12  px-12 mb-6">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative embla__slide flex-[0_0_calc(100%)] lg:flex-[0_0_calc(30%-1rem)] md:flex-[0_0_calc(43%-1rem)] h-[50vh] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-md bg-white"
                        >
                            <div className="relative w-full h-[50%]">
                                <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                                alt={item.thumbnail_image.name}
                                fill
                                className="object-cover object-center rounded-t-xl"
                            />
                            </div>
                            <div className="flex justify-between flex-col h-[47%]">
                            <div className="px-4">
                                <div className="flex justify-center mt-2">
                                    <Image
                                    alt={item.logo.name}
                                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.logo.url}`}
                                    width={160}
                                    height={160}
                                    />
                                </div>
                            <div className="py-3 text-gray-900">
                                {item.thumbnail_description}
                            </div>
                            </div>
                            <div className=" flex font-extralight justify-start items-center text-amber-900 ml-4">
                                {language === "en" ? "See Details":"Lihat Detail"}
                                <IoChevronForwardSharp className='font-extralight' />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="flex justify-between items-center gap-5  w-full absolute top-1/2 -translate-y-1/2 z-10">
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
