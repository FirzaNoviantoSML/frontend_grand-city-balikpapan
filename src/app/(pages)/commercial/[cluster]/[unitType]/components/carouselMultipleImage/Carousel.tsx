'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import { useAutoplay } from './EmblaCarouselAutoplay'
import Autoplay from 'embla-carousel-autoplay'
import { LiaWindowClose } from "react-icons/lia";


type PropType = {
    slides: {url:string,name:string}[]
    options?: EmblaOptionsType
}

type ImagePopUp = {
    name:string,
    url:string
} | null

const EmblaCarouselMultiple: React.FC<PropType> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    // const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const { slides,options } = props
        const [isPopUp,setIsPopUp] = useState<ImagePopUp>(null)
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])
        useAutoplay(emblaApi)

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
    // setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    }, [emblaApi])


    return (
        <section className="relative">
            <div ref={emblaRef} className="embla overflow-hidden ">
                <div className="embla__container flex touch-pan-y gap-2 xl:gap-12 mb-6">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative embla__slide flex-[0_0_calc(100%)] h-[30vh] md:h-[50vh] lg:h-[60vh] rounded-xl bg-white"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.url}`}
                                alt={item.name}
                                fill
                                className="object-contain"
                                onClick={() => setIsPopUp({url:item.url,name:item.name})}
                            />
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="flex absolute top-1/2 -translate-y-1/2 z-10">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    </div>
                    <div className="flex right-0 absolute top-1/2 -translate-y-1/2 z-10">
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                    </div>
                <div className="hidden md:block">
                <div className="flex">
                {slides.map((item, index) => (
                   <div
                    key={index}
                    className={`w-[80px] h-[80px] relative ${index === selectedIndex?"border-4 border-amber-600":""} relative`}
                    >
                     <Image

                     src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.url}`}
                                alt={item.name}
                    fill
                    onClick={() => emblaApi?.scrollTo(index)}
                    className="object-cover"
                    />
                    </div>
                ))}
                </div>
                </div>
                </div>
                         {/* Popup */}
                                    {isPopUp && (
                                        <div
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                                        >
                                                             <button
                                            onClick={() => setIsPopUp(null)}
                                            className="absolute top-4 right-4 text-white text-2xl font-bold"
                                            >
                                            <LiaWindowClose className="text-4xl cursor-pointer" />
                                            </button>
                                        <div className="relative max-w-4xl w-full px-4 scale-90">
                                            
                                            {isPopUp&& (
                                                                    <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${isPopUp.url}`}
                                            alt="Full View"
                                            width={500}
                                            height={500}
                                            className="h-auto shadow-lg cursor-pointer bg-neutral-700 border-1 border-neutral-800 w-full"
                                            />
                                            )}
                           
                                        </div>
                                        </div>
                                        
                                    )}

           
        </section>
    )
}

export default EmblaCarouselMultiple
