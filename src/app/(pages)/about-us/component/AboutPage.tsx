"use client"

import React from 'react'
import {useGetAboutPage} from '@/hooks/about/useAboutPage'
import {useLanguage} from '@/contex/LanguageContext'
import Image from 'next/image'
import { useIsMobile } from '@/libs/useIsMobile'
import Link from 'next/link'
import { MdChevronRight } from "react-icons/md";

import Video from '@/components/Video'
import Testimoni from '@/components/Testimoni'

const AboutPage = () => {

const isMobile = useIsMobile()
const {language} = useLanguage()    
const {aboutPageData,isLoading} = useGetAboutPage(language)  

if(isLoading){
    return(
        <div>

        </div>
    )
}
  return (
<div className="mt-14 bg-[#FFFCE4] relative">
     <div className="absolute z-30 md:top-[420] lg:top-96  lg:left-48 top-44 left-8">
        <div className="relative lg:w-38 lg:h-80 w-42 h-12"
        >
                <Image src="/background/panelimg.jpg"
                alt="pannel"
                height={500}
                width={500}
                className='object-cover object-right  w-full h-full shadow-[7px_7px_0px_2px_rgba(0,0,0,0.1)]'
                
                />

        </div>

            </div>
        <div className="absolute z-10 right-0 md:top-170 lg:top-120 top-200 pointer-events-none">
            <Image
            src="/background/ornamenleaf.png"
            alt="leafts"
            width={isMobile?400:800}
            height={1000}
            className="pointer-events-none"/>

        </div>
        
        <div className="absolute z-0 left-0 md:top-150  lg:bottom-0 top-150 pointer-events-none">
            <Image
            src="/background/bgleaft-invert.png"
            alt="leafts"
            width={isMobile?200:300}
            height={1000}
            className="pointer-events-none"/>

        </div>
        <div className="relative">
            {
                isMobile ? 
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${aboutPageData?.hero_banner.url}`}
                alt={aboutPageData?.hero_banner.name || "Facility Hero Banner"}
                width={515}
                height={345}
                className="object-cover w-full  h-[200px]  brightness-75"
                />
                :
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${aboutPageData?.hero_banner.url}`}
                alt={aboutPageData?.hero_banner.name || "Facility Hero Banner"}
                width={1440}
                height={450}
                className="object-cover w-full  h-[450px] brightness-75"
                />
            }
            <div className="absolute bottom-16 md:inset-y-1/2  left-4 md:inset-x-1/12 text-white">
           <div className="flex justify-start items-center">
                <div className="flex items-center space-x-2 mb-4">
                <Link href="/" className="text-sm md:text-xl">
                    {language === "en" ? "Home" : "Beranda"}
                </Link>
                </div>

                </div>
               <p className='font-extrabold text-2xl md:text-5xl'>
                    {language === "en"? "About Us":"Tentang Kami"}
                </p>
            </div>
            

        </div>

        <div className="relative z-10">
           
        <div className="mb-8 px-4 mt-12 min-h-48 lg:pl-96 font-extralight lg:w-[80%] lg:text-xl">
            {aboutPageData?.description}
        </div>
            <Video thumbnail_video={aboutPageData!.thumbnail_video.url} thumbnail_video_name={aboutPageData!.thumbnail_video.name} url_video={aboutPageData!.link_video}  />
        <div className="flex justify-center">
            <div className="w-full pb-12">
            <Testimoni language={language}/>
            </div>
        </div>
        {
            isMobile ? 
        <div>
            <div>
                <div className="relative w-full h-24">
                    <Image
                    src={"/background/bgleaf.jpg"}
                    alt="background leaf"
                    width={800}
                    height={800}
                    className="object-cover object-top w-full h-full poin"
                    />
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-4 flex justify-center text-2xl text-amber-900">
                    <div>
                    Comprehensive Masterplan
                    </div>
                    </div>
                </div>
                <div className="bg-[#FAF6D6] p-8 text-amber-900">
                {aboutPageData?.comprehensive_masterplan_description}
                <div className='mt-6'>
                <Link href="/concept">
                <button className="rounded-lg px-4 py-2 text-amber-600 text-md border font-bold border-amber-600 hover:bg-amber-600  hover:text-white flex justify-center items-center transition-all duration-300 cursor-pointer">Lihat Konsep<MdChevronRight className="text-2xl mt-1" /></button>
                </Link>
                </div>
                </div>
            </div>

        </div>
        :
        <div className="grid grid-cols-3">
            <div className="relative md:h-72 lg:h-52">
                <Image
                src="/background/bgleaf.jpg"
                alt="background leaf"
                width={800}
                height={800}
                className="object-cover object-top w-full h-full"
                />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-4 flex justify-center text-2xl text-amber-900">
                Comprehensive Masterplan
            </div>
            
            </div>
            <div className="col-span-2 py-8 bg-[#FAF6D6] flex justify-center">
                <div className="w-[70%]">
                    <p className="text-amber-800 mb-4">
                    {aboutPageData?.comprehensive_masterplan_description}
                    </p>
                <div>
                    <Link href="/concept">
                    <button className="rounded-lg px-6 py-3 text-amber-600 text-md border font-bold border-amber-600 hover:bg-amber-600  hover:text-white flex justify-center items-center transition-all duration-300 cursor-pointer">Lihat Konsep<MdChevronRight className="text-2xl mt-1" /></button>
                    </Link>
                </div>
                </div>
            </div>
        </div>

        }
                    <div className="w-full">
                <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${aboutPageData?.masterplan_image.url}`}
                alt={aboutPageData!.masterplan_image.name}
                width={1000}
                height={1000}
                className="object-cover w-full"
                />
                </div>
        </div>
    </div>
  )
}

export default AboutPage