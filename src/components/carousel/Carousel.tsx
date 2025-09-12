'use client'
import { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import {CarouselBanner} from "@/types/homepageTypes"


type PropType = {
    slides: CarouselBanner[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {

    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
     const [isMobile, setIsMobile] = useState(false)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

    return (
        <section className="relative z-0 ">
            <div ref={emblaRef} className="overflow-hidden ">
                <div className="flex -ml-4 touch-pan-y">
                    {slides.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-full overflow-hidden flex items-center justify-center group  h-[50vh] md:h-[32vh] lg:h-[73vh] flex-0 shrink-0 grow-0 basis-full min-w-0 md:pl-4 transform translate-x-0 shadow-2xl"
                        >
                            <div>
                                <Image
                                src={isMobile?`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.hero_banner_portrait.url}`:`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.hero_banner_landscape.url}`}
                                alt={isMobile?item.hero_banner_portrait.name:item.hero_banner_landscape.name}
                                fill
                                className="object-cover brightness-50 z-0"
                            />
                            </div>
                            <div className="flex md:justify-start justify-center absolute top-1/3 lg:top-2/8 md:top-2/8 text-white  text-center md:text-left md:left-42  w-full md:w-[300px] lg:w-[350px] z-10 ">
                                <div className="items-center md:block">
                                    <p className='font-extralight text-2xl md:text-3xl lg:text-5xl w-[150px] md:w-full lg:w-full'>
                                {item.title}
                                </p>
                                <button className="bg-white text-amber-600 h-10 w-38 rounded-md font-bold mt-6 cursor-pointer"
                                onClick={() => console.log("klik")}>
                                    Explore Now
                                </button>
                            </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between gap-5  w-full absolute bottom-1/2">
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
