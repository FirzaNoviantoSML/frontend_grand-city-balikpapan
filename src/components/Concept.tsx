"use client"

import React from 'react'
import Image from 'next/image'
import { IoChevronForwardSharp } from "react-icons/io5";
import EmblaCarousel from './carouselConceptlMobile/Carousel';
import {useGetConceptList} from "@/hooks/conceptList/useRoutes"
 
type PropType = {
    language: "en" | "id"
    isShowTitle?:boolean
}

const Concept: React.FC<PropType> = (props) => {
    const {language,isShowTitle} = props

    const {conceptData,isLoading} = useGetConceptList(language)

    if(isLoading){
    return (
        <div>
            
        </div>
    )
}

  return (
    <div>
        {
            isShowTitle &&
        <div className="relative h-[15vh] md:h-[20vh] bg-[#C5C1A5]">
            <div className="md:w-[600px] h-[20vh]">
                <Image
            src="/background/bgleaf.jpg"
            alt="bfleaf"
            fill
            className='object-cover object-top'
            />
            <div className="absolute md:top-1/6 md:left-12 left-1/12 top-1/8 inline-block ">
                <p className="inline-block border-b-4 border-amber-600 font-bold text-xl md:text-2xl text-[#834520] py-2">
                    Concept
                </p>
                <p className="font-extralight text-xl md:text-3xl text-[#834520] py-2 ">
                    Inspiration Behind the Grand Design
                </p>
            </div>
            </div>
            </div>
        }
        <div className="hidden md:hidden lg:flex justify-center">
            {
                conceptData!.map((item,index) => {
                    return(
                        <div className="relative w-full bg-[#FFFCDF] xl:h-[500px]"
                        key={index}>
                        <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-[#D7D4BC] to-transparent"></div>
                        <div className="relative z-10 px-8 py-8">
                        <div className="flex justify-center">
                            <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.icon.url}`}
                        alt={item.icon.name}
                        width={70}
                        height={70}
                        />
                        </div>
                        <p 
                        className={`text-center font-bold mt-2 lg:text-xl`}
                        style={{ color: item.color }}
                        >{item.title}</p>
                        <div
                        style={{ color: item.color }}
                        className="text-sm mt-4 mb-12">
                            {item.description}
                        </div>

                        </div>
                        <div className="absolute left-4 bottom-2 font-bold flex justify-start items-center"
                        style={{ color: item.color }}>
                            See Details
                            <IoChevronForwardSharp className='font-bold' />
                        </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="xl:hidden block">
            <EmblaCarousel slides={conceptData!} language={language}/>
        </div>
        
        
        </div>
  )
}

export default Concept