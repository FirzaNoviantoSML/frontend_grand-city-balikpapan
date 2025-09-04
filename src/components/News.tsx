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
    const {newsPromoData,isLoading} = useGetNewsPromosList(language)

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
            <p className="text-[#834520] text-2xl font-bold border-b-3 inline-block mb-2">
                {language === "en" ? "News":"Berita"}
            </p>
            </div>
        </div>
        </div>

        <div className="hidden md:flex justify-center">
            <GridNews news={newsPromoData!}/>
        </div>
        <div className="md:hidden">
            <CarouselNews news={newsPromoData!}/>
        </div>
        </div>
    </div>
  )
}

export default News