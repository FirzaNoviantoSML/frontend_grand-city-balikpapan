"use client"
import React from 'react'
import Image from 'next/image'
import CarouselCommercial from './CarouselCommercial'
import {useGetDevelopmentThumbnailList} from "@/hooks/development/useRoutes"

type PropType = {
    language:"en" | "id"
}

const CommercialHome: React.FC<PropType> = (props)=> {

    const {language} = props


const {developmentData,isLoading} = useGetDevelopmentThumbnailList(language,"Commercial")

if(isLoading){
    return(
        <div>
            
        </div>
    )
}

  return (
    <div>
        <div className="relative bg-[#C4C1A4]">
            <div>
                <Image
                src={"/background/bgleaf.jpg"}
                alt={"bgleaf"}
                fill
                />
            </div>
            <div>
                <div className="relative flex justify-center">
                <div className="text-center mt-6">
                <p className="text-[#834520] text-md md:text-2xl font-bold border-b-3 inline-block ">
                    {language === "en"?"Commercial":"Komersial"}
                </p>
                <p className="text-[#834520] text-md md:text-2xl font-extralight mb-8 mt-2">
                    {language === "en"? "Most Profitable Business Place":"Tempat Bisnis Paling Menguntungkan"}
                </p>
                </div>
            </div>
            </div>
            <CarouselCommercial slides={developmentData!}/>
        </div>
    </div>
  )
}

export default CommercialHome