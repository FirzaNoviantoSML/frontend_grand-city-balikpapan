"use client"
import React,{useState} from 'react'
import {useLanguage} from "@/contex/LanguageContext"
import {useGetConceptPage} from '@/hooks/conceptPage/conceptPage'
import {useIsMobile} from "@/libs/useIsMobile"
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Concept from '@/components/Concept'
import { LiaWindowClose } from "react-icons/lia";

const ConceptIndex = () => {
    const isMobile = useIsMobile()
    const {language} = useLanguage()
    const {conceptPageData,isLoading} = useGetConceptPage(language)
    const [isOpen,setIsOpen] = useState<boolean>(false)

    if(isLoading){
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
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptPageData?.hero_banner.formats.large?.url}`}
                    alt={conceptPageData?.hero_banner.name || "Facility Hero Banner"}
                    width={1440}
                    height={450}
                    className="object-cover w-full  h-[220px] brightness-75"
                />
                :
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptPageData?.hero_banner.formats.large?.url}`}
                alt={conceptPageData?.hero_banner.name || "Facility Hero Banner"}
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
               <p className='font-extrabold text-2xl md:text-3xl lg:text-5xl md:w-[40%] lg:w-[35%] w-[60%] '>
                    {conceptPageData?.title}
                </p>
            </div>
        </div>
        {isMobile ? 
                 <div className="bg-[#C5C1A5]">
                    <div className="relative h-[350] overflow-hidden w-full">
                <Image
                src="/background/bgleaf.jpg"
                alt="background leaf"
                    width={2000}
                    height={2000}
                className="object-contain origin-center -scale-x-100 object-top"
                />
                </div>
                <div className="absolute top-88 px-4 text-green-900  md:bg-red-900 md:top-88">
            {conceptPageData?.description}
        </div>
                 </div>
        :
        <div className="bg-[#C5C1A5] flex justify-end relative">
             <div className="relative h-60 overflow-hidden w-[40vw]">
                <Image
                src="/background/bgleaf.jpg"
                alt="background leaf"
                fill
                className="object-cover origin-center -scale-x-100 object-top"
                sizes="30vw"
                priority
                />
        </div>
        <div className="absolute lg:bottom-24 lg:w-[50vw] lg:left-1/8 text-green-900 md:w-auto md:top-12 md:left-0 md:px-12">
            {conceptPageData?.description}
        </div>
        </div>
        }
        <div>
            <Concept language={language}/>
        </div>
        <div className=" md:h-52 lg:h-52 overflow-hidden">
        <Image
        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptPageData?.main_banner.url}`}
        width={2000}
        height={2000}
        alt={conceptPageData?.main_banner?.name || "Main Banner"}
        className='object-top brightness-75'/>
        </div>
        <div className="bg-amber-50 flex justify-center">
            <div className="p-8 text-center">
                <p className="text-amber-800 text-md md:text-2xl font-bold inline-block border-b-4 border-orange-700 pb-1 mb-8">
                    {language === "en" ? "Zone Area":"Zona Area" }
                </p>
                <Image
                 src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptPageData?.zona_area_image.url}`}
                 alt={conceptPageData?.zona_area_image?.name  || "Zona Image"}
                 width={1000}
                 height={1000}
                 onClick={() =>setIsOpen(true)}
                />
            </div>
            {isOpen && (
                            <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                            >
                                                 <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-white text-2xl font-bold"
                                >
                                <LiaWindowClose className="text-4xl cursor-pointer" />
                                </button>
                            <div className="relative max-w-4xl w-full px-4">
                                
                                {conceptPageData?.zona_area_image.url&& (
                                                        <Image
                                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${conceptPageData?.zona_area_image.url}`}
                                alt="Full View"
                                width={800}
                                height={800}
                                className=" shadow-lg lg:h-[95vh] md:h-[80vh]"
                                />
                                )
                                
                                }
               
                            </div>
                            </div>
                            
                        )}
        </div>
    </div>
    )
}

export default ConceptIndex