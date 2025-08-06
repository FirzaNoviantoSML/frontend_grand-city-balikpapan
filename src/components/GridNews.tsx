import Image from 'next/image'
import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";

const GridNews = () => {

    const news:NewsItemType[] = [
        {
            image:"/news/News-Hayfield.jpg",
            title:"WFH, Solution To Have A Dream House in Grand City Balikpapan",
            date: "2021-3-29"
        },
        {
            image:"/news/news-sinarmas.jpg",
            title:"Sinar Mas Wisesa Moves Offices to Grand City",
            date: "2020-11-19"
        },
        {
            image:"/news/News-Hayfield.jpg",
            title:"WFH, Solution To Have A Dream House in Grand City Balikpapan",
            date: "2021-3-29"
        },
        {
            image:"/news/news-sinarmas.jpg",
            title:"Sinar Mas Wisesa Moves Offices to Grand City",
            date: "2020-11-19"
        }
    ]

    type NewsItemType = {
  image: string;
  title: string;
  date: string;
};

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
                    src={item.image}
                    alt={item.title}
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