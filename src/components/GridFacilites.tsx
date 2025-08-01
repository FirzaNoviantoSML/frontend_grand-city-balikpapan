import Image from 'next/image'
import React from 'react'

const GridFacilites = () => {

    const facilites = [
        {
            image:"/facilities/runbikeline.jpg",
            slug:"run-bike-line",
            title:"Bicycle & Jogging Track"
        },
        {
            image:"/facilities/danau.jpg",
            slug:"recreational-like",
            title:"Recreational Like"
        },
        {
            image:"/facilities/green-corridor.jpg",
            slug:"green-corridor",
            title:"Green Corridor"
        },
        {
            image:"/facilities/runbikeline.jpg",
            slug:"run-bike-line",
            title:"Bicycle & Jogging Track"
        },
        {
            image:"/facilities/runbikeline.jpg",
            slug:"run-bike-line",
            title:"Bicycle & Jogging Track"
        },
        {
            image:"/facilities/runbikeline.jpg",
            slug:"run-bike-line",
            title:"Bicycle & Jogging Track"
        },
        
    ]

  return (
    <div className="grid grid-cols-3">
        {
            facilites.map((facility,index) => {
                return(
                    <div
                    className= {`w-[300px] h-[400px] ${index % 2 === 0 ?"bg-[#CFCCB0]":"bg-[#C4C1A4]"}`}
                    key={index}>
                        <div className="relative w-full h-[80%] bg-amber-300">
                        <Image
                        src={facility.image}
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