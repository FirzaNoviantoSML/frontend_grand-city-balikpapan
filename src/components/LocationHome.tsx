"use client"
import React from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'
import {Footer} from "@/types/footerTypes"
import { usePathname } from "next/navigation";

type PropType = {
    footer: Footer
}






const LocationHome: React.FC<PropType> = (props) => {
    const { footer } = props
          const url = usePathname();
          const urlIndex = url.split("/");
          console.log(urlIndex[0])


  return (
    <div>
        {
        urlIndex[1] !== "about-us" && 
        urlIndex[1] !== "residential" && 
        urlIndex[1] !== "commercial"
        && 
        <div>
            <div className="flex justify-center relative">
                <div className="w-full h-[18vh] md:h-[20vh] lg:h-[25vh]  ">
                                <Image
                src="/background/bglocation.jpg"
                alt="location"
                fill
                className="object-cover"
                />
                </div>
                <div className="text-center absolute top-1/6 md:top-1/4 w-[60%] md:w-[30%] lg:w-[20%]  ">
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
        </div>}
            {
                urlIndex[1] !== "about-us" && 
                urlIndex[1] !== "residential" && 
                urlIndex[1] !== "commercial"
                && <div>
            <iframe 
            src={footer.link_map} className="w-full h-[600px]">                
            </iframe>
        </div>
            }
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