'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrow'
import useEmblaCarousel from 'embla-carousel-react'
import {DotButton} from './CarouselDotButton'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import {GalleryItem} from "@/types/facilityDetailTypes"
import { LiaWindowClose } from "react-icons/lia";


type PropType = {
    slides: GalleryItem[]
    options?: EmblaOptionsType
}

const EmblaCarouselMultiple: React.FC<PropType> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [isOpen, setIsOpen] = useState(false);
    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [imageData,setImageData] =  useState<{image:string,index:number}>()

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

    const clickNextImage = (index:number) => {
        const idx = index+1
        console.log("length",slides.length )
        console.log("index",idx )
        console.log(slides.length === idx)
        if(slides.length === idx){
            setImageData({image:slides[0].url,index:0})
        }else{
            setImageData({image:slides[idx].url,index:idx})
        }
        
    }

     const clickPrevImage = (index:number) => {

        if(1 === index+1){
            setImageData({image:slides[slides.length-1].url,index:slides.length-1})
        }else{
            setImageData({image:slides[index-1].url,index:index-1})
        }
        
    }


    return (
        <div>
        <section className="relative overflow-hidden">
            <div ref={emblaRef} className="embla__viewport">
                <div className="embla__container flex touch-pan-y gap-2 md:gap-12  px-12 mb-6">
                    {slides.map((item, idx:number) => (
                        <div
                            key={idx}
                            className="embla__slide relative flex-[0_0_calc(100%)] md:flex-[0_0_calc(42%-1rem)] lg:flex-[0_0_calc(50%-1.5rem)] h-44 xl:h-96 rounded-xl shadow-md bg-white cursor-pointer"
                            onClick={() => { setIsOpen(true); setImageData({image:item.url,index:idx}); }}
                        >
                            <div className="relative w-full h-full"
                            >
                                <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.url}`}
                                alt={item.name}
                                fill
                                className="object-cover object-center rounded-lg"
                                
                            />
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="flex justify-between items-center gap-5  w-full absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        className='pointer-events-auto'
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        className='pointer-events-auto'
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
                        {/* Popup */}
            {isOpen && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                >
                                     <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-16 right-4 text-white text-2xl font-bold"
                    >
                    <LiaWindowClose className="text-4xl cursor-pointer" />
                    </button>
                <div className="relative max-w-4xl w-full px-4">
                    
                    {imageData&& (
                                            <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${imageData.image}`}
                    alt="Full View"
                    width={1200}
                    height={800}
                    className="w-full h-auto shadow-lg cursor-pointer"
                    onClick={() => {
                            clickNextImage(imageData?.index)
                    }}
                    />
                    )}
   
                </div>
                 <div className="flex justify-between items-center gap-5  w-full absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <PrevButton
                        onClick={() => imageData?.index !== undefined && clickPrevImage(imageData.index)}
                        disabled={false}
                        className='pointer-events-auto'
                    />
                    <NextButton
                        onClick={() => imageData?.index !== undefined && clickNextImage(imageData.index)}
                        disabled={false}
                        className='pointer-events-auto'
                    />
                    </div>
                </div>
                
            )}
        </div>
    )
}

export default EmblaCarouselMultiple
