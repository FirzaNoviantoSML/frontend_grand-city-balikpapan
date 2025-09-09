"use client"
import React from 'react'
import {useLanguage} from '@/contex/LanguageContext'
import {useGetFacilites} from "@/hooks/facilityList/useRoutes"
import Carousel from "@/components/otherFacilitiesMobile/Carousel"
import { useIsMobile } from '@/libs/useIsMobile'
import Link from 'next/link'
import Image from 'next/image'

const OtherFacilities = ({slug}:{slug:string}) => {

    const {language} = useLanguage()
    const {facilitesData,isLoading} = useGetFacilites(language)
    const isMobile = useIsMobile()

    if(isLoading){
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="bg-gray-50 py-16" >
            <div>
                    <p className="text-2xl md:text-2xl font-bold text-amber-800 mb-2 md:mb-12 px-4 md:px-38">
                    {language === "en"? "Other Facilities":"Fasilitas Lainnya"}        
                    </p>
                    <div className="px-6 bg-[#7C7B5A] md:bg-transparent">
                    {
                        facilitesData &&(
                            isMobile ?
                            <Carousel slides={facilitesData} slug={slug}/>
                            :
                            <div className="flex justify-center">
                            {
                                facilitesData.filter(item => item.slug !== slug)
                                .map((item, index) => (
                                    <Link
                    className="bg-[#FFFCDF]"
                    key={index}
                    href={`/facilities/${item.slug}`}       
                    >
                    <div>
                        <div className={`relative md:w-[30vw] md:h-[50vh] xl:w-[20vw] xl:h-[50vh] ${index % 2 === 0 ? "bg-[#CFCCB0]":"bg-[#C4C1A4]"}`}
                        key={index}>
                        <div className="absolute top-0 left-0 w-4 h-full from-[#D7D4BC]"></div>
                        <div className="relative z-10">
                        <div className="flex justify-center">
                            <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                        alt={item.thumbnail_image.name}
                        width={1000}
                        height={1000}
                        className="object-cover h-[320]"
                        />
                        </div>
                        <p 
                        className={`text-start mt-4 px-4 text-amber-800`}
                        >{item.title}</p>
                        </div>
                        </div>
                        </div>
                    </Link>
                                ))
                            }
                            </div>
                        )
                    }
                    </div>
                </div>

        </div>
  )
}

export default OtherFacilities