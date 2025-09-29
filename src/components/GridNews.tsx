import Image from 'next/image'
import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import {NewsItem} from "@/types/news-promoListTypes"
import Link from 'next/link';
import {useLanguage} from "@/contex/LanguageContext"

type PropType = {
    news: NewsItem[]
    slug?: string | "", 
    isHideSemore?: boolean
}

const GridNews: React.FC<PropType> = (props) => {
    const {language} = useLanguage()
    const { news,slug,isHideSemore } = props
    return (
    <div>
                <div className="flex justify-end px-12">
                <div>
                    {isHideSemore?<div></div>:
                    <p className="font-bold flex justify-start items-center text-[#834520]">
                        See More
                        <IoChevronForwardSharp className='font-bold' />
                    </p>}
                </div>
                </div>

    <div className="flex justify-center gap-12 mt-12 px-12">
        {news.filter((item) => item.slug !== slug).map((item,index) => {
            return(
                <Link
                href={`/news-promo/${item.slug}`}
                key={index}
                className="relative h-[58vh] w-[20vw]"
                >
                    <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail.url}`}
                    alt={item.thumbnail.name}
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-md"
                    />

                    <p className="font-light text-xs text-gray-500 mt-3 mb-2">
                        {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    </p>
                    <p className="text-sm md:text-lg font-bold text-[#834520]">
                        {item.title}
                    </p>
                    <p className=" font-extralight flex justify-start items-center text-[#834520] text-sm">
                            {language === "en"?"Read More":"Selengkapnya"}
                            <IoChevronForwardSharp className='font-extralight mt-0.5' />
                    </p>
                </Link>
            )
        })}
    </div>
    </div>
  )
}

export default GridNews