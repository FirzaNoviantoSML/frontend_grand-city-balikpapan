import React from 'react'
import Image from 'next/image'

const Video = () => {
  return (
    <div>
            <div className="relative z-20  py-16 font-serif">
        <div className="relative flex justify-center gap-24">
            <div className="text-3xl w-[16%] font-extralight">
                Experience nature in vibrant city
            </div>
            <div className="w-[48%] text-lg font-extralight">
                Balikpapan, a city full of life dynamics, is now more complete with the presence of Grand City, an international standard residential and commercial area, offered by Sinarmas land, one of the leading and trusted developers in Indonesia…. Experience nature in vibrant city.
            </div>
        </div>
        <div className="flex justify-center mt-12">
        <div className="relative w-[70%] h-[50vh]">
            <Image
            className="rounded-2xl object-cover shadow-2xl"
            src={"/background/thumb-videoprofile.jpg"}
            alt="bacground"
            fill
            />
              <button
            onClick={() => console.log('Play clicked')}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white text-amber-600 w-16 h-16 pl-1 rounded-full shadow-lg hover:scale-110 transition cursor-pointer"
        >
    ▶
  </button>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Video