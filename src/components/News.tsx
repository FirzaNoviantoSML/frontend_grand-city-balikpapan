import React from 'react'
import GridNews from './GridNews'
import CarouselNews from './CarouselNews'

const News = () => {
  return (
        <div>
         <div className="relative bg-amber-50 py-8">
        <div>
            <div className="flex justify-center">
            <div className="text-center">
            <p className="text-[#834520] text-2xl font-bold border-b-3 inline-block mb-2">
                News
            </p>
            </div>
        </div>
        </div>

        <div className="hidden md:flex justify-center">
            <GridNews/>
        </div>
        <div className="md:hidden">
            <CarouselNews/>
        </div>
        </div>
    </div>
  )
}

export default News