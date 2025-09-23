'use client'
import React from 'react'
import  {useGetFacilityDetail} from "@/hooks/facilityDetail/useRoutes"
import {useLanguage} from "@/contex/LanguageContext"
import Image from 'next/image'
import { useIsMobile } from '@/libs/useIsMobile'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import FacilityGallery from './FacilityGallery'
import OtherFacilities from './OthersFacility'

const FacilityDetailIndex = ({slug}:{slug:string}) => {
const isMobile = useIsMobile()
const {language} = useLanguage()
const {facilityDetailData,isLoading} = useGetFacilityDetail(language,slug)

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
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${facilityDetailData?.hero_banner.url}`}
                alt={facilityDetailData?.hero_banner.name || "Facility Hero Banner"}
                width={515}
                height={345}
                className="object-cover w-full  h-[200px]  brightness-75"
                />
                :
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${facilityDetailData?.hero_banner.url}`}
                alt={facilityDetailData?.hero_banner.name || "Facility Hero Banner"}
                width={1440}
                height={450}
                className="object-cover w-full  h-[450px] brightness-75"
                />
            }
                 <div className="absolute bottom-16 md:inset-y-1/3  left-4 md:inset-x-1/12 text-white">
          <div className="flex justify-start items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-xs md:text-sm">
                {language === "en" ? "Home" : "Beranda"}
              </Link>
              <MdKeyboardDoubleArrowRight className="text-xs md:text-sm" />
              <Link href="/facility" className="text-xs md:text-sm">
                {language === "en" ? "Facility" : "Fasilitas"}
              </Link>
            </div>
          </div>
          <p className="font-extrabold text-2xl md:text-3xl lg:text-5xl md:w-[40%] lg:w-[35%] w-[100%]">
            {facilityDetailData?.title}
          </p>
        </div>
        </div>

        <div className="relative z-10">
            <div className="flex justify-center">
                    <div>
                            <div className="mb-8 px-4 mt-12 min-h-48 w-[70vw] md:text-lg">
            {facilityDetailData?.description}
        </div>
        <div className="my-12">
            <FacilityGallery gallery={facilityDetailData?.gallery} language={language} title={facilityDetailData?.title}/>
        </div>
                        </div>
            </div>

            <OtherFacilities slug={slug}/>
        </div>
    </div>
  )
}

export default FacilityDetailIndex