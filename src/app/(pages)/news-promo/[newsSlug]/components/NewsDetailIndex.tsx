'use client'
import React from 'react'
import {useLanguage} from '@/contex/LanguageContext'
import {useGetNewsDetail} from '@/hooks/newsDetail/useGetNewsDetail'
import {useGetNewsPage} from '@/hooks/newsPromoPage/useNewsPromoPage'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import RichTextRenderer from "@/libs/RichText";
import NewsOthers from './NewsOthers'

const NewsDetailIndex = ({slug}:{slug:string}) => {
    const {language} = useLanguage()
    const {newsDetailData,isLoading:newsDetailLoading} = useGetNewsDetail(language,slug)
    const {newsPageData,isLoading: newsPageLoading} = useGetNewsPage(language)


    if(newsDetailLoading || newsPageLoading){
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
                className="object-cover w-full h-[350px]  lg:h-[300px] brightness-50"
                />
  <div className="absolute bottom-16 md:inset-y-1/3  left-4 md:inset-x-1/12 text-white">
          <div className="flex justify-start items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-xs md:text-sm">
                {language === "en" ? "Home" : "Beranda"}
              </Link>
              <MdKeyboardDoubleArrowRight className="text-xs md:text-sm" />
              <Link href="/news-promo" className="text-xs md:text-sm">
                {language === "en" ? "News & Promo" : "Berita & Promo"}
              </Link>
            </div>
          </div>
          <p className="font-extrabold text-2xl md:text-2xl lg:text-3xl  w-[100%]">
            {newsDetailData?.title}
          </p>
          <div>
                <p className="font-light text-md text-white mt-3 mb-2">
                        {new Date(newsDetailData!.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    </p>
          </div>
          <div>
            <div className="group flex justify-start w-24">
                <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https://grandcitybalikpapan.com/news-promo/${slug}`}>
                <div className="group-hover:text-4xl text-3xl hover:text-blue-800 hover:bg-white hover:rounded-full p-2 duration-300">
                <GrFacebookOption />
                </div>       
                </Link>
                <Link
                href={`https://x.com/intent/post?url=https://grandcitybalikpapan.com/news-promo/${slug}`}>
                <div className="group-hover:text-4xl text-3xl hover:text-black hover:bg-white hover:rounded-full p-2 duration-300">
                <RiTwitterXLine />
                </div>
                </Link>
            </div>
          </div>
        </div>
        </div>
        <div className="flex justify-center py-16">
            <div className="w-[70%]">
            <RichTextRenderer content={newsDetailData?.content || []} />
            </div>
        </div>
        <div>
          <NewsOthers slug={slug}/>
        </div>
    </div>
  )
}

export default NewsDetailIndex