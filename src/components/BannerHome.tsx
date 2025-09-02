"use client"
import React from 'react'
import Image from 'next/image'
type PropType = {
    hero_banner: string | undefined
}
const BannerHome:React.FC<PropType> = (props) => {
  const {hero_banner} = props
  return (
    <div className="relative w-full h-48">
        <Image
        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${hero_banner}`}
        alt="banner"
        fill
        className="object-cover brightness-50"
        style={{ objectPosition: "center top" }}
        />
        <div className="flex justify-center">
        <button className="absolute top-1/2 text-white border-2 border-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-black cursor-pointer">
            View All Zone
        </button>
        </div>
    </div>
  )
}

export default BannerHome