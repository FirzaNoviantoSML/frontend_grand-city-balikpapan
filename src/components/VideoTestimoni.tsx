"use client"
import React from 'react'
import Image from 'next/image'
import Video from './Video'
import Testimoni from './Testimoni'
import {HomePageData} from "@/types/homepageTypes"

type PropType = {
    homePageData: HomePageData
    language:"en" | "id"
}

const VideoTestimoni:React.FC<PropType> = (props) => {
      const { homePageData,language } = props
  return (
    <div className="relative bg-[#FFFCE6] pb-12 z-0">
            <div className='absolute top-0 left-0' >
            <Image 
            src={"/background/bgleaflefts.jpg"}
            alt='flefts'
            width={600}
            height={600}
            />
        </div>
        <div className="absolute bottom-0 right-0">
            <Image 
            src={"/background/ornamenleaf.png"}
            alt='flefts'
            width={600}
            height={600}
            />
        </div>
        <div>
            <div className="relative md:flex md:justify-center md:gap-24 pt-24 px-4">
                        <div className="text-3xl  md:w-[20%] font-extralight w-[70%] mb-4 md:mb-0 text-gray-800">
                            {homePageData.title}
                        </div>
                        <div className="md:w-[44%] text-lg font-extralight text-gray-800">
                            {homePageData.description}
                        </div>
                    </div>
            </div>
        <div className="mb-12">         
        <Video 
        thumbnail_video={homePageData.thumbnail_video.url} 
        thumbnail_video_name={homePageData.thumbnail_video.name}
        url_video={homePageData.link_video}
        />
        </div>
    <Testimoni language={language}/>
    <div>

    </div>
        </div>
  )
}

export default VideoTestimoni