"use client"
import Image from 'next/image'
import React from 'react'
import {Facilities} from '@/types/facilitiesListTypes'

type PropType = {
    facilites: Facilities[]

}

const GridFacilites: React.FC<PropType> = (props) => {

    const { facilites } = props

    

  return (
    <div className="grid grid-cols-3 md:px-8 lg:px-0 bg-[#7C7B5A]">
        {
            facilites.map((facility,index) => {
                return(
                    <div
                    className= {`md:w-[28vw] lg:w-[20vw] h-[400px] ${index % 2 === 0 ?"bg-[#CFCCB0]":"bg-[#C4C1A4]"}`}
                    key={index}>
                        <div className="relative w-full h-[80%]">
                        <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${facility.thumbnail_image.url}`}
                        fill
                        alt={facility.slug}
                        className="absolute object-cover object-center"
                        />

                        </div>
                        <div className=' p-4'>
                            {facility.title}
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default GridFacilites