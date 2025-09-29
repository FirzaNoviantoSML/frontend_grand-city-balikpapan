'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import {DotButton} from './CarouselDotButton'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import {Development} from "@/types/developmentListTypes"
import {useIsMobile} from "@/libs/useIsMobile"
import {useLanguage} from "@/contex/LanguageContext"


type PropType = {
    slides: Development[]
    options?: EmblaOptionsType
}


const EmblaCarouselMultiple: React.FC<PropType> = (props) => {
    const {language} = useLanguage()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const isMobile = useIsMobile()
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
                <div className="embla__container flex touch-pan-y gap-3 md:gap-8 px-12 mb-6">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="embla__slide flex-[0_0_calc(90%)] h-[50vh] lg:h-[50vh] md:h-[30vh] md:flex-[0_0_calc(100%)] rounded-xl lg:flex-[0_0_calc(95%)] shadow-md bg-white md:flex justify-start"
                        > 
                            <div className="hidden md:block relative lg:w-3/5 md:w-3/6 h-[100%] z-10">
                                <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                            alt={item.thumbnail_image.name}
                            fill
                            className="absolute object-cover object-bottom rounded"/>
                                <Image
                            src="/background/framerounded.png"
                            alt="framerounded"
                            width={245}
                            height={100}
                            className="absolute h-[100%] right-0 bottom-0  z-20 object-center"
                            />
                            </div>
                            <div className="hidden pl-6 pr-4 w-[40%] md:flex justify-between flex-col h-[100%] pb-6">
                                <div className="mt-6 ">
                                   <div className="flex justify-start md:justify-start  mt-2">
                                    <Image
                                    alt={item.logo.name}
                                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.logo.url}`}
                                    width={isMobile?260:350}
                                    height={isMobile?260:350}
                                    />
                                </div>
                                <div className="text-gray-800 font-extralight text-sm lg:text-lg">
                                    {item.thumbnail_description}
                                </div>
                                </div>
                                <div className="font-extralight flex justify-start items-center text-amber-900">
                                {language === "en"? "See Details":"Lihat Detail"}
                                <IoChevronForwardSharp className='font-extralight mt-0.5' />
                                </div>                         
                            </div>
                            <div className="block md:hidden relative w-full h-[40%]">
                                 <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                                alt={item.thumbnail_image.name}
                                fill
                                className="object-cover object-center rounded-t-xl"
                            />
                            </div>
                             <div className="md:hidden flex justify-between flex-col h-[55%]">
                                <div className="px-4">
                                    <div className="flex justify-center mt-2">
                                        <Image
                                        alt={item.logo.name}
                                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.logo.url}`}
                                        width={200}
                                        height={200}
                                        />
                                    </div>
                                <div className="text-gray-800 py-2 text-sm" >
                                    {item.thumbnail_description}
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
