"use client"
import React from 'react'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'
import EmblaCarousel from './carouselTestimonialMobile/Carousel'
import {useGetTestimonials} from "@/hooks/testimonial/useRoutes"


type PropType = {
    language: "en" | "id"
}
const Testimoni: React.FC<PropType> = (props) => {
    const {language} = props
    const {testimonial,isLoading} = useGetTestimonials(language)

  if(isLoading){
    return(
        <div>

        </div>
    )
  }

  return (
    <div  className="flex justify-center w-full">
       <div className="lg:w-[70%]">
         <div className="text-center">
                <p className="text-amber-800 text-md md:text-2xl font-bold inline-block border-b-4 border-orange-700 pb-1 md:mb-8 lg:mb-8">
                Testimonial
                </p>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3">
            {
                testimonial!.map((item,index) => {
                    return (
                        <div
                        key={index}
                        className="flex justify-center "
                        >
                            <div>
                        <div className="flex items-start gap-2 mb-2">
                        <BsQuote className="text-neutral-400 text-2xl" />
                        <p className="text-neutral-700 italic w-[85%] h-16">{item.quote}</p>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <div className="relative w-24 h-24">
                                <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.profile_picture!.url}`}
                                alt={item.profile_picture!.name}
                                fill
                                className="object-cover rounded-full"
                                />
                            </div>
                            <div className='text-md text-amber-800 font-semibold italic'>
                                {item.name}
                            </div>
                        </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="lg:hidden block">
                <EmblaCarousel slides={testimonial!}/>
            </div>
       </div>
    </div>
  )
}

export default Testimoni