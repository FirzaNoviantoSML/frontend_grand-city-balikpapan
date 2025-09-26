"use client"
import React from 'react'
import {useLanguage} from "@/contex/LanguageContext"
import {useGetNewsPage} from "@/hooks/newsPromoPage/useNewsPromoPage"
import Image from 'next/image'
import Link from 'next/link'
import NewsListPagination from './NewsListPagination'

const NewsPromoIndex = () => {
    const {language} = useLanguage()
    const {newsPageData,isLoading} = useGetNewsPage(language)
    
    if(isLoading){
        return(
            <div>

            </div>
        )
    }
  return (
    <div className="mt-16 bg-[#FFFCE4]">
        <div className="relative">
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${newsPageData?.hero_banner?.url}`}
                alt={newsPageData?.hero_banner?.name || "News Hero Banner"}
                width={1440}
                height={450}
                className="object-cover w-full  lg:h-[480px] brightness-75"
                />
                    <div className="absolute bottom-16 md:inset-y-1/3  left-4 md:inset-x-1/12 text-white">
          <div className="flex justify-start items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-xs md:text-sm">
                {language === "en" ? "Home" : "Beranda"}
              </Link>
            </div>
          </div>
          <p className="font-extrabold text-2xl md:text-3xl lg:text-5xl md:w-[40%] lg:w-[35%] w-[100%]">
            {language === "en"?"News & Promo":"Berita & Promo"}
          </p>
        </div>
        </div>
        <div className="flex justify-center py-16">
        <NewsListPagination/>
        </div>
    </div>
  )
}

export default NewsPromoIndex