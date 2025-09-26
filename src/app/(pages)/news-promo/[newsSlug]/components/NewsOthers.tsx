"use client";
import React from "react";
import { useLanguage } from "@/contex/LanguageContext";
import {useGetNewsPromosList} from "@/hooks/newsList/useRoutes"
import GridNews from '@/components/GridNews'
import CarouselNews from '@/components/CarouselNews'

const NewsOthers = ({ slug }: { slug: string }) => {
  const { language } = useLanguage();
  const { newsPromoData, isLoading } = useGetNewsPromosList(
    language,
    5,
    0
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="bg-[#EEEEEE] p-12">
      <div className="text-center mb-6 text-2xl font-bold text-amber-900">
        <p className="inline ">
          {language === "en" ? "Other News & Promo" : "News & Promo Lainnya"}
        </p>
      </div>
     <div className="hidden md:flex justify-center">
            <GridNews news={newsPromoData!.data} slug={slug} isHideSemore={true}/>
        </div>
        <div className="md:hidden">
            <CarouselNews news={newsPromoData!.data}/>
        </div>
    </div>
  );
};

export default NewsOthers;
