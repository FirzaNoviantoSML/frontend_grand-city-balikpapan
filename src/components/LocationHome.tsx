"use client"
import React from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'
import {Footer} from "@/types/footerTypes"

type PropType = {
    footer: Footer
}






const LocationHome: React.FC<PropType> = (props) => {
    const { footer } = props


  return (
    <div>
        <div>
            <div className="flex justify-center relative">
                <div className="w-full md:h-[25vh] h-[18vh]">
                                <Image
                src="/background/bglocation.jpg"
                alt="location"
                fill
                className="object-cover"
                />
                </div>
                <div className="text-center absolute top-1/6 md:top-1/4 md:w-[20%] w-[60%] ">
                    <div>
                    <p className="text-2xl md:text-3xl text-[#834520] md:mb-4">
                        Our Location
                    </p>
                    <p className="text-sm md:text-md">
                        {footer.address}
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <iframe 
            src={footer.link_map} className="w-full h-[600px]">                
            </iframe>
        </div>
        <div className="bg-red-600 flex justify-center flex-col md:flex-row md:gap-48 py-8 gap-6">
            <div className="flex justify-center flex-col">
                <p className='text-white text-md text-center mb-2'>
                    For Inquiry Call
                </p>
                <p className='text-white text-2xl md:text-3xl text-center'>
                    {footer.phone_number}
                </p>
            </div>
            <div className="flex justify-center flex-col">
                <p className='text-white text-md text-center mb-2'>
                    You Are Here
                </p>
                <div className="text-center">
                    <Dropdown project={footer.project}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default LocationHome