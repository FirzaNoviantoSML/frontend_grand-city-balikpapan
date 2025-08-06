import React from 'react'
import Image from 'next/image'
import CarouselCommercial from './CarouselCommercial'

const CommercialHome = () => {
  return (
    <div>
        <div className="relative bg-[#C4C1A4]">
            <div>
                <Image
                src={"/background/bgleaf.jpg"}
                alt={"bgleaf"}
                fill
                />
            </div>
            <div>
                <div className="relative flex justify-center">
                <div className="text-center mt-6">
                <p className="text-[#834520] text-md md:text-2xl font-bold border-b-3 inline-block ">
                    Commercial
                </p>
                <p className="text-[#834520] text-md md:text-2xl font-light my-2">
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