"use client"
import React,{useState} from 'react'
import {useLanguage} from '@/contex/LanguageContext'
import {useGetNewsPromosList} from "@/hooks/newsList/useRoutes"
import Link from 'next/link'
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import Image from 'next/image'

const NewsListPagination = () => {
    const {language} = useLanguage()
    const [index,setIndex] =useState<number>(0)
    const {newsPromoData,isLoading} = useGetNewsPromosList(language,9,index)
    const start = newsPromoData?.meta.pagination?.start ?? 0;
    const limit = newsPromoData?.meta.pagination?.limit ?? 9;
    const total = newsPromoData?.meta.pagination?.total ?? 0;
    const currentPage = Math.floor(start / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    const onPageChange = (page:number) => {
    const start = (page - 1) * limit;
    setIndex(start)
 
};

console.log(currentPage, totalPages); // 1, 2

    if(isLoading){
        return(
            <div>

            </div>
        )
    }
  return (
   <div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
        {
            newsPromoData?.data.map((item,index) => {
                return(
                    <Link
                    href={`/news-promo/${item.slug}`}
                    key={index}
                    className="bg-white rounded-2xl h-[50vh] w-[20vw] shadow-xl hover:shadow-2xl transition-colors duration-300"
                    >
                      <div className="relative w-full h-[75%]">
                        <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail.url}`}
                        alt={item.thumbnail.name || "News Hero Banner"}
                        fill
                        className="object-cover w-full relative rounded-t-xl"
                        />
                    </div>
                    <div className="p-2">
                                            <p className="font-light text-xs text-gray-500 mt-3 mb-2">
                        {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    </p>
                    <p className="md:text-sm text-xl font-bold text-[#834520]">
                        {item.title}
                    </p>
                    </div>   
                    </Link>
                )
            })
        }
    </div>
    <div className='mt-12'>
        <div className="flex gap-2 justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-white disabled:opacity-50"
      >
        <CgChevronLeft className='text-amber-800' />
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-amber-800 text-white" : "bg-white text-amber-800"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-white disabled:opacity-50"
      >
        <CgChevronRight className='text-amber-800'/>
      </button>
    </div>
    </div>
   </div>
  )
}

export default NewsListPagination