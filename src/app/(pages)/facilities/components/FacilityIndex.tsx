"use client"
import React from 'react'
import Image from 'next/image'
import {useGetFacilityPage} from "@/hooks/facilityPage/useRoutes"
import {useLanguage} from "@/contex/LanguageContext"
import {useIsMobile} from "@/libs/useIsMobile"
import FacilityList from './FacilityList'

const FacilityIndex = () => {
    
    const {language}  = useLanguage()
    const {facilityPageData,isLoading} = useGetFacilityPage(language)
    const isMobile = useIsMobile()

    if(isLoading){
        return(
        <div>

        </div>
        )
    }



  return (
    <div className="mt-14 bg-amber-50 relative">
        <div className="absolute z-0 right-0 md:bottom-0 sm:top-50">
            <Image
            src="/background/bgleafright.jpg"
            alt="leafts"
            width={isMobile?200:500}
            height={1000}/>

        </div>
        <div className="absolute z-0 left-0 bottom-0">
            <Image
            src="/background/bgleaft-invert.png"
            alt="leafts"
            width={isMobile?200:500}
            height={1000}/>

        </div>
        <div className="relative">
            {
                isMobile ? 
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${facilityPageData?.hero_banner_mobile.url}`}
                alt={facilityPageData?.hero_banner_mobile.name || "Facility Hero Banner"}
                width={515}
                height={345}
                className="object-cover w-full  h-[200px]  brightness-75"
                />
                :
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${facilityPageData?.hero_banner.url}`}
                alt={facilityPageData?.hero_banner.name || "Facility Hero Banner"}
                width={1440}
                height={450}
                className="object-cover w-full  h-[450px] brightness-75"
                />
            }
            <div className="absolute bottom-16 md:inset-y-1/2  left-4 md:inset-x-1/12 text-white">
                <p className="text-sm md:text-xl mb-4">
                    {language === "en" ? "Home":"Beranda"}
                </p>
                <p className='font-extrabold text-2xl md:text-5xl'>
                    {language === "en" ? "Facilities":"Fasilitas"}
                </p>
            </div>
        </div>
        <div 
        className="relative pt-6 pb-8 pl-2 w-[80vw] md:w-[50vw] -mt-11 z-10 flex justify-end text-sm md:text-lg"
        style={{ backgroundColor: "#BEBE9C" }}>
            <div className="w=[100%] md:w-[70%]">
                {facilityPageData?.description}
            </div>
        </div>
        <div className="relative mt-12 pb-24 z-10">
        <FacilityList/>
        </div>
    </div>
  )
}

export default FacilityIndex