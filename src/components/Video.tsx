"use client"

import React from 'react'
import Image from 'next/image'

type PropType = {
    thumbnail_video:string,
    thumbnail_video_name:string,
    url_video:string

}

const Video:React.FC<PropType> = (props)=> {
  const {thumbnail_video,url_video,thumbnail_video_name} = props
  return (
    <div>
            <div className="relative z-20  py-16 font-serif px-6 md:px-0">
        
        <div className="flex justify-center mt-12">
        <div className="relative w-[100%] md:w-[70%] h-[25vh] lg:h-[50vh]">
            <Image
            className="rounded-2xl object-cover shadow-2xl"
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${thumbnail_video}`}
            alt={thumbnail_video_name}
            fill
            />
              <button
            onClick={() => console.log('Play clicked')}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white text-amber-600 w-16 h-16 pl-1 rounded-full shadow-lg hover:scale-110 transition cursor-pointer"
        >
    ▶
  </button>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Video