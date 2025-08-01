"use client"
import React from 'react'
import Image from 'next/image'
import Video from './Video'
import Testimoni from './Testimoni'

const VideoTestimoni = () => {
  return (
    <div className="relative bg-amber-50 pb-12">
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
    <Video/>
    <Testimoni/>
    <div>

    </div>
        </div>
  )
}

export default VideoTestimoni