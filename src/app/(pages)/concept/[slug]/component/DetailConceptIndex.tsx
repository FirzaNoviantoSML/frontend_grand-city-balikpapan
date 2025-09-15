"use client"
import React from 'react'
import {useLanguage} from "@/contex/LanguageContext"
import {useIsMobile} from "@/libs/useIsMobile"
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {useGetConceptDetail} from "@/hooks/conceptDetail/useConceptDetail"
import RichTextRenderer from '@/libs/RichText'
import ConcecptGallery from './ConceptGallery'
import {useGetConceptList} from '@/hooks/conceptList/useRoutes'

const DetailConceptIndex = ({slug}:{slug:string}) => {
    const isMobile = useIsMobile()
    const {language} = useLanguage()
    const {conceptDetailData,isLoading} = useGetConceptDetail(language,slug)
    const {conceptData, isLoading: loadingConcept} = useGetConceptList(language)

    if(isLoading || loadingConcept){
        return(
        <div>

        </div>
        )
    }
  return (
     <div className="mt-16">
        <div className="relative">
            {
                isMobile ? 
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.hero_banner?.url}`}
                    alt={conceptDetailData?.hero_banner?.name || "Facility Hero Banner"}
                    width={1440}
                    height={450}
                    className="object-cover w-full  h-[220px] brightness-75"
                />
                :
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.hero_banner?.url}`}
                alt={conceptDetailData?.hero_banner?.name || "Facility Hero Banner"}
                width={1440}
                height={450}
                className="object-cover w-full  lg:h-[480px] brightness-75"
                />
            }
            <div className="absolute bottom-16 md:inset-y-1/3  left-4 md:inset-x-1/12 text-white">
             <div className="flex justify-start items-center">
                <div className="flex items-center space-x-2 mb-4">
                <Link href="/" className="text-xs md:text-sm">
                    {language === "en" ? "Home" : "Beranda"}
                </Link>
                <MdKeyboardDoubleArrowRight className="text-xs md:text-sm" />
                <Link href="/concept" className="text-xs md:text-sm">
                    {language === "en" ? "Concept" : "Konsep"}
                </Link>
                </div>

                </div>
               <p className='font-extrabold text-2xl md:text-3xl lg:text-5xl md:w-[40%] lg:w-[35%] w-[100%]'>
                    {conceptDetailData?.title}
                </p>
            </div>
        </div>
        <div className="bg-[#FFFCE4]">
            {
                isMobile ? 
                <div className="p-4">
                    <div>
                        <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.icon?.url}`}
                        alt={conceptDetailData?.icon?.name || "Concept Icon"}
                        width={90}
                        height={90}
                        className="mx-auto block mb-4"/>
                        <p style={{ color: conceptDetailData?.color }}>
                            {conceptDetailData?.description}
                        </p>
                    </div>
                    <div className="bg-[#C5C2A5] py-6 px-8">
                        <RichTextRenderer content={conceptDetailData?.content || []}/>
                    </div>
                    <div>
                        <Image
                         src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.content_image?.url}`}
                        alt={conceptDetailData?.content_image?.name || "image concept"}
                        width={500}
                        height={500}
                        className="mx-auto block mb-4"
                        />
                    </div>
                    <div className="text-2xl">
                        {language == "en"?"Zone Location":"Lokasi Zona"}
                        <Image
                         src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.zone_location_image?.url}`}
                        alt={conceptDetailData?.zone_location_image?.name || "location zone"}
                        width={500}
                        height={500}
                        className="mx-auto block mb-4"
                        />
                    </div>
                </div>
                :
                <div className="px-8 lg:px-44">
                    <div className="grid grid-cols-3 lg:grid-cols-8">
                    <div className="p-6 lg:col-span-2">
                        <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.icon?.url}`}
                        alt={conceptDetailData?.icon?.name || "Concept Icon"}
                        width={90}
                        height={90}
                        className="mx-auto block mb-4"/>
                        <p style={{ color: conceptDetailData?.color }}>
                            {conceptDetailData?.description}
                        </p>
                    </div>
                    <div className="col-span-2 lg:col-span-6 ">
                    <div className="bg-[#C5C2A5] py-6 px-8">
                        <RichTextRenderer content={conceptDetailData?.content || []}/>
                    </div>
                    <div>
                        <Image
                         src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.content_image?.url}`}
                        alt={conceptDetailData?.content_image?.name || "image concept"}
                        width={1000}
                        height={1000}
                        className="mx-auto block mb-4"
                        />
                    </div>
                    <div className="text-2xl">
                        {language == "en"?"Zone Location":"Lokasi Zona"}
                        <Image
                         src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptDetailData?.zone_location_image?.url}`}
                        alt={conceptDetailData?.zone_location_image?.name || "location zone"}
                        width={1000}
                        height={1000}
                        className="mx-auto block mb-4"
                        />
                    </div>
                    </div>

                    </div>

                </div>
            }
             <div>
                <ConcecptGallery gallery={conceptDetailData?.gallery} language={language} title=''/>
            </div>
            <div className="bg-white flex justify-center lg:p-12 p-4 lg:min-h-96">
            <div>
                                <div className="flex justify-center mb-6 ">
                    <p className="text-amber-800 border-b-2 border-amber-500 pb-2 mb-2 text-lg md:text-2xl font-bold">
                    {language === "en"? "Other Concept":"Konsep Lain"}
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8  lg:gap-12">
                    {
                        conceptData?.filter(item => item.slug !== slug).
                        map((item,index) => {
                            return(
                                <div
                                key={index}
                                className="rounded-2xl shadow-2xl w-32 h-32 lg:w-38 lg:h-38 lg:p-8 p-4 mx-auto my-auto">
                                     <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item?.icon?.url}`}
                                alt={item?.icon?.name || "Concept Icon"}
                                width={60}
                                height={60}
                                className="mx-auto block mb-4"/>
                                <div style={{ color: item?.color }}
                                className="flex justify-center font-bold">
                                    <p>
                                    {item?.title}
                                    </p>
                                </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default DetailConceptIndex