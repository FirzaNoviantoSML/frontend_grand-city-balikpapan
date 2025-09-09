'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './carouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'

import {Facilities} from "@/types/facilitiesListTypes"


type PropType = {
    slides: Facilities[]
    options?: EmblaOptionsType
    slug:string
}

const EmblaCarousel: React.FC<PropType> = (props) => {

    const { slides,slug } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })


    const {
        // prevBtnDisabled,
        // nextBtnDisabled,
        // onPrevButtonClick,
        // onNextButtonClick
    } = usePrevNextButtons(emblaApi)



    return (
        <section>
            <div ref={emblaRef} className="relative overflow-hidden cursor-grab">
                <div className="flex touch-pan-y ">
                    {slides.filter(item => item.slug !== slug)
                    .map((item, index) => (
                    <Link
                    className="relative overflow-hidden items-center flex justify-center  group flex-0 shrink-0 grow-0 basis-6/12 bg-[#FFFCDF]"
                    key={index}
                    href={`/facilities/${item.slug}`}       
                    >
                    <div>
                        <div className={`relative w-[100vw] h-[40vh] ${index % 2 === 0 ? "bg-[#CFCCB0]":"bg-[#C4C1A4]"}`}
                        key={index}>
                        <div className="absolute top-0 left-0 w-4 h-full from-[#D7D4BC]"></div>
                        <div className="relative z-10">
                        <div className="flex justify-center">
                            <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                        alt={item.thumbnail_image.name}
                        width={1000}
                        height={1000}
                        className="object-cover h-60"
                        />
                        </div>
                        <p 
                        className={`text-center mt-2 text-amber-800`}
                        >{item.title}</p>
                        </div>
                        </div>
                        </div>
                    </Link>
                    ))}
                </div>
            {/* <div className="flex justify-between gap-5 absolute  w-full top-1/3">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />

            </div> */}
            </div>

        </section>
    )
}

export default EmblaCarousel
