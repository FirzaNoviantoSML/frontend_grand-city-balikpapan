"use client"
import React from 'react'
import GridNews from './GridNews'
import CarouselNews from './CarouselNews'
import {useGetNewsPromosList} from "@/hooks/newsList/useRoutes"

type PropType = {
    language: "en" | "id"
}

const News: React.FC<PropType> = (props) => {
    const {language} = props
    const {newsPromoData,isLoading} = useGetNewsPromosList(language,4)

    if(isLoading){
        return(
            <div>

            </div>
        )
    }



    return (
        <div>
         <div className="relative bg-amber-50 py-8">
        <div>
            <div className="flex justify-center">
            <div className="text-center">
            <p className="text-[#834520] md:text-2xl font-bold border-b-3 inline-block mb-8">
                {language === "en" ? "News & Promo":"Berita & Promo"}
            </p>
            </div>
        </div>
        </div>

        <div className="hidden md:flex justify-center">
            <GridNews news={newsPromoData!.data}/>
        </div>
        <div className="md:hidden">
            <CarouselNews news={newsPromoData!.data}/>
        </div>
        </div>
    </div>
  )
}

export default News