import React from 'react'
import EmblaCarousel from './carouselFacilitiesMobile/Carousel'

const CarouselFacilities = () => {

      const facilities = [
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
    <div>
        <EmblaCarousel slides={facilities}/>
    </div>
  )
}

export default CarouselFacilities