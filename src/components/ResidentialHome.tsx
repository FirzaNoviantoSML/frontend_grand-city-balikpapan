import React from 'react'
import Image from 'next/image'
import CarouselResidentials from './CarouselResidentials'


const ResidentialHome = () => {
  return (
    <div className="relative bg-[#FEFCE5] py-12">
        <Image
        src={"/background/bgleafright.jpg"}
        alt={"background"}
        width={600}
        height={600}
        className='absolute right-0 top-0 object-cover'
        />
        <div>
            <div className="flex justify-center">
            <div className="text-center">
            <p className="text-[#834520] text-2xl font-bold border-b-3 inline-block ">
                Residential
            </p>
            <p className="text-[#834520] text-2xl font-light mt-4">
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