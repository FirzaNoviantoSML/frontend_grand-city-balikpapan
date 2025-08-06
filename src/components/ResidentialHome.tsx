import React from 'react'
import Image from 'next/image'
import CarouselResidentials from './CarouselResidentials'


const ResidentialHome = () => {
  return (
    <div className="relative bg-[#FEFCE5] py-12 ">
        <div className="absolute right-0 top-0 ">
          <Image
            src={"/background/bgleafright.jpg"}
            alt={"background"}
            width={600}
            height={600}
          />
        </div>
        <div>
            <div className="relative flex justify-center  w-[100%]">
            <div className="text-center">
            <p className="text-[#834520] text-md md:text-2xl font-bold border-b-3 inline-block ">
                Residential
            </p>
            <p className="text-[#834520] text-md md:text-2xl font-light my-2">
                Find the Dream Residence
            </p>
            </div>
          </div>
        </div>
        <CarouselResidentials/>
    </div>
  )
}

export default ResidentialHome