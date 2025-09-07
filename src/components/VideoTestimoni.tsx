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
    <div className="relative bg-amber-50 pb-12 z-0">
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
    <Video 
    title={homePageData.title} 
    description={homePageData.description} 
    thumbnail_video={homePageData.thumbnail_video.url} 
    thumbnail_video_name={homePageData.thumbnail_video.name}
    url_video={homePageData.link_video}
    />
    <Testimoni language={language}/>
    <div>

    </div>
        </div>
  )
}

export default VideoTestimoni