"use client"

import React from 'react'
import Image from 'next/image'
import { IoChevronForwardSharp } from "react-icons/io5";

 const concept = [
    {
        image:"/concept/icon-zone-wood.png",
        desc:"The Wood Element, which is closely related to the color green, is a symbol of renewal, a vision for the future, and symbolizes emotions and a confident personality. The energy from wood creates the dynamism to grow and face challenges, but always returns to its home and origin.",
        label:"Wood Zone",
        color:"#386641",
        slug:"/wood-zone"

    },
    {
        image:"/concept/icon-zone-water.png",
        desc:"Water is an element that is always moving, dynamic and always looking for a way. The Water Element cannot be separated from its adaptable nature and is identical to the blue color, with the characteristics of courage, perseverance and determination.",
        label:"Water zone",
        color:"#006799",
        slug:"/water-zone"

    },
    {
        image:"/concept/icon-zone-earth.png",
        desc:"The earth element, which is often close to a yellowish color, is a symbol of balance and transition, and is closely related to nurture and affection. The soil provides a place to grow, is a balance and a foothold for every being.",
        label:"Earth Zone",
        color:"#8D3802",
        slug:"/earth-zone"

    },
    {
        image:"/concept/icon-zone-fire.png",
        desc:"Fire is a warmth-giving element and is often associated with maturity, sensitivity and growth. The element of fire is often symbolized by a reddish color and represents joy, human connection and sunshine.",
        label:"Fire Zone",
        color:"#F26522",
        slug:"/fire-zone"

    },
    {
        image:"/concept/icon-zone-metal.png",
        desc:"Metal that is strong is a symbol of inspiration and resilience, and is often symbolized by the color white.",
        label:"Metal Zone",
        color:"#6D6E71",
        slug:"/metal-zone"

    },
  ]

const Concept = () => {
  return (
    <div>
        <div className="relative w-[100vw] h-[20vh] bg-[#C5C1A5]">
            <div className="relative w-[600px] h-[20vh]">
                <Image
            src="/background/bgleaf.jpg"
            alt="bfleaf"
            fill
            className='object-cover top-0'
            />
            <div className="absolute top-1/6 left-1/4 w-full">
                <p className="inline-block border-b-4 border-amber-600 font-bold text-2xl text-[#834520] py-2">
                    Concept
                </p>
                <p className="font-light text-3xl text-[#834520] py-2">
                    Inspiration Behind the Grand Design 
                </p>
            </div>
            </div>
            </div>
        <div className="flex justify-center">
            {
                concept.map((item,index) => {
                    return(
                        <div className="relative w-full bg-[#FFFCDF]"
                        key={index}>
                        <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-[#D7D4BC] to-transparent"></div>
                        <div className="relative z-10 p-4">
                        <div className="flex justify-center">
                            <Image
                        src={item.image}
                        alt={item.label}
                        width={80}
                        height={80}
                        />
                        </div>
                        <p 
                        className={`text-center font-bold mt-2`}
                        style={{ color: item.color }}
                        >{item.label}</p>
                        <div
                        style={{ color: item.color }}
                        className="text-sm mt-4 mb-12">
                            {item.desc}
                        </div>

                        </div>
                        <div className="absolute left-4 bottom-2 font-bold flex justify-start items-center"
                        style={{ color: item.color }}>
                            See Details
                            <IoChevronForwardSharp className='font-bold' />
                        </div>
                        </div>
                    )
                })
            }
        </div>
        
        </div>
  )
}

export default Concept