import React from 'react'
import Image from 'next/image'
import CarouselCommercial from './CarouselCommercial'

const CommercialHome = () => {
  return (
    <div>
        <div className="relative bg-[#C4C1A4] py-8">
            <Image
            src={"/background/bgleaf.jpg"}
            alt={"bgleaf"}
            width={500}
            height={500}
            className="absolute top-0 left-0 h-full"
            />
        <div>
            <div className="flex justify-center">
            <div className="text-center">
            <p className="text-[#834520] text-2xl font-bold border-b-3 inline-block ">
                Commercial
            </p>
            <p className="text-[#834520] text-2xl font-light mt-4">
                Most Profitable Business Place
            </p>
            </div>
        </div>
        </div>
            <CarouselCommercial/>
        </div>
    </div>
  )
}

export default CommercialHome