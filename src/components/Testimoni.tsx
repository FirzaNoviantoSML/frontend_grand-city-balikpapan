import React from 'react'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'

const Testimoni = () => {

    const testimonial = [
        {
        name:"Anna Andriano",
        image:"/testimoni/anna-andriano.jpg",
        testimoni:"Comfortable, beautiful place. I love this place."
        },
        {
        name:"Gustien Parir",
        image:"/testimoni/gustien-parir-1.jpg",
        testimoni:"Very strategic housing, view and cool air for morning sports."
        },
        {
        name:"Jio Yance",
        image:"/testimoni/jio-yance.jpg",
        testimoni:"Quiet, comfortable and clean."
        },
    ]

  return (
    <div  className="flex justify-center">
       <div>
         <div className="text-center">
                <p className="text-amber-800 text-2xl font-bold inline-block border-b-4 border-orange-700 pb-1 mb-8">
                Testimonial
                </p>
        </div>
        <div className="grid grid-cols-3">
            {
                testimonial.map((item,index) => {
                    return (
                        <div
                        key={index}
                        >
                        <div className="flex items-start gap-2 mb-2">
                        <BsQuote className="text-neutral-400 text-2xl" />
                        <p className="text-neutral-700 italic w-[70%] h-16">{item.testimoni}</p>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <div className="relative w-32 h-32 ">
                                <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded-full"
                                />
                            </div>
                            <div className='text-md text-amber-800 font-semibold italic'>
                                {item.name}
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
       </div>
    </div>
  )
}

export default Testimoni