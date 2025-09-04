import Image from 'next/image'
import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import {NewsItem} from "@/types/news-promoListTypes"

type PropType = {
    news: NewsItem[]
}

const GridNews: React.FC<PropType> = (props) => {

    const { news } = props
    return (
    <div>
                <div className="flex justify-end px-12">
                <div>
                    <p className="font-bold flex justify-start items-center text-[#834520]">
                        See More
                        <IoChevronForwardSharp className='font-bold' />
                    </p>
                </div>
                </div>

    <div className="grid grid-cols-4 gap-12 mt-12 px-12">
        {news.map((item,index) => {
            return(
                <div
                key={index}
                className="relative h-[58vh]"
                >
                    <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail.url}`}
                    alt={item.thumbnail.name}
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-md"
                    />

                    <p className="font-light text-sm text-gray-500 mt-6">
                        {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    </p>
                    <p className="text-xl font-bold text-[#834520]">
                        {item.title}
                    </p>
                    <p className="absolute bottom-0 left-0 font-bold flex justify-start items-center text-[#834520]">
                            Read More
                            <IoChevronForwardSharp className='font-bold' />
                    </p>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default GridNews