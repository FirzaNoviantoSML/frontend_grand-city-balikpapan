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
                <div className="embla__container flex touch-pan-y gap-12 px-12 py-8">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="embla__slide flex-[0_0_calc(90%)] h-[50vh] rounded-xl shadow-md bg-white flex justify-start"
                        >
                            
                            <div className="relative w-3/5 h-[100%] z-10">
                                <Image
                            src={item.thumb}
                            alt={item.slug}
                            fill
                            className="absolute object-cover object-bottom"/>
                                <Image
                            src="/background/framerounded.png"
                            alt="framerounded"
                            width={245}
                            height={100}
                            className="absolute h-[100%] right-0 bottom-0  z-20 object-center"
                            />
                            </div>
                            <div className=" pl-6 pr-2 w-[40%] flex justify-between flex-col h-[100%] pb-6">
                                <div className="mt-6 ">
                                    <Image
                                src={item.logo}
                                alt={item.slug}
                                width={150}
                                height={50}
                                className='items-center w-96 h-32 mb-4'
                                />
                                <div>
                                    {item.desc}
                                </div>
                                </div>
                                <div className="font-bold flex justify-start items-center text-amber-900">
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
