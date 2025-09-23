"use client";
import React from "react";
import {useGetCommercialPage} from "@/hooks/commercialPage/useGetCommercialPage";
import { useLanguage } from "@/contex/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/libs/useIsMobile";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {useGetDevelopmentThumbnailList} from '@/hooks/development/useRoutes'
import { IoChevronForwardSharp } from "react-icons/io5";

const CommercialIndex = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const { CommercialPageData, isLoading } = useGetCommercialPage(language);
  const {developmentData,isLoading:developmentLoading} = useGetDevelopmentThumbnailList(language,"Commercial")

  if (isLoading || developmentLoading) {
    return <div>

    </div>;
  }

  return (
    <div className="mt-16 bg-[#FFFCE4]">
      <div className="relative">
        {isMobile ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${CommercialPageData?.hero_banner?.url}`}
            alt={CommercialPageData?.hero_banner?.name || "Commercial Hero Banner"}
            width={1440}
            height={450}
            className="object-cover w-full  h-[220px] brightness-75"
          />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${CommercialPageData?.hero_banner?.url}`}
            alt={CommercialPageData?.hero_banner?.name || "Commercial Hero Banner"}
            width={1440}
            height={450}
            className="object-cover w-full  lg:h-[480px] brightness-75"
          />
        )}
        <div className="absolute bottom-16 md:inset-y-1/3  left-4 md:inset-x-1/12 text-white">
          <div className="flex justify-start items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-xs md:text-sm">
                {language === "en" ? "Home" : "Beranda"}
              </Link>
              <MdKeyboardDoubleArrowRight className="text-xs md:text-sm" />
              <Link href="/commercial" className="text-xs md:text-sm">
                {language === "en" ? "Commercial" : "Commercial"}
              </Link>
            </div>
          </div>
          <p className="font-extrabold text-2xl md:text-3xl lg:text-5xl md:w-[40%] lg:w-[35%] w-[100%]">
            Commercial
          </p>
        </div>
      </div>
      <div className="relative">
      <div className="text-sm w-[85vw] md:w-[75vw] lg:w-[50vw] md:p-10 bg-[#BEBE9C] p-6 z-10 -top-12 absolute flex justify-start lg:justify-end"
      style={{color:"#515D33"}}>
        <div className="w-full lg:w-[75%] text-sm lg:text-md">
        {CommercialPageData?.description}
        </div>
      </div> 
      </div>
        <div className={`flex justify-center py-12 px-8 md:px-20 lg:px-56 mt-28 lg:flex-wrap ${developmentData!.length <=2 ?"lg:px-96":"lg:px-56"}`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${developmentData!.length <=2 ?"lg:grid-cols-2":"lg:grid-cols-3"} gap-10`}>
            {developmentData && developmentData.map((item, idx) => {
            const n = developmentData.length
            const isLast = idx === n - 1
            const round = n%2 === 0
            const centerSingleOnLg = n % 3 === 1 && isLast && round  ? "lg:col-start-2" : ""

            return (
                <Link
                href={`/commercial/${item.slug}`}
                key={idx}
                className={`relative w-full h-[45vh] md:h-[40vh] lg:h-[60vh] rounded-xl shadow-2xl bg-white ${centerSingleOnLg}`}
                >
                <div className="relative w-full h-[50%]">
                    <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                    alt={item.thumbnail_image.name}
                    fill
                    className="object-cover object-center rounded-t-xl"
                    />
                </div>

                <div className="flex justify-between flex-col h-[47%]">
                    <div className="px-4">
                    <div className="flex justify-center mt-2">
                        <Image
                        alt={item.logo.name}
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.logo.url}`}
                        width={160}
                        height={160}
                        />
                    </div>
                    <div className="py-3 text-gray-900 text-sm">
                        {item.thumbnail_description}
                    </div>
                    </div>

                    <div className="font-extralight text-sm flex justify-start items-center text-amber-600 ml-4">
                    See Details
                    <IoChevronForwardSharp className="font-bold" />
                    </div>
                </div>
                </Link>
            )
            })}
        </div>
        </div>
    </div>
  );
};

export default CommercialIndex;
