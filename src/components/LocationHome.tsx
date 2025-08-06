import React from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'

const LocationHome = () => {
const location = {
    address:"Marketing Gallery Grand City Balikpapan Jl. Sinar Mas Land Boulevard - Grand City Kota Balikpapan - Kalimantan Timur 76129",
    maps:"https://www.google.com/maps/embed/v1/place?q=marketing+grand+city+balikpapan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    phone:"0542 8810 999"
}

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
                        {location.address}
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <iframe 
            src={location.maps} className="w-full h-[600px]">                
            </iframe>
        </div>
        <div className="bg-red-600 flex justify-center flex-col md:flex-row md:gap-48 py-8 gap-6">
            <div className="flex justify-center flex-col">
                <p className='text-white text-md text-center mb-2'>
                    For Inquiry Call
                </p>
                <p className='text-white text-2xl md:text-3xl text-center'>
                    {location.phone}
                </p>
            </div>
            <div className="flex justify-center flex-col">
                <p className='text-white text-md text-center mb-2'>
                    You Are Here
                </p>
                <div className="text-center">
                    <Dropdown/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default LocationHome