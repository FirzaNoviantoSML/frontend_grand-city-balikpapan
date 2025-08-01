import React from 'react'
import EmblaCarouselMultiple from './carouselSingleImage/Carousel'


const CarouselCommercial = () => {

     const images = [
   {
    thumb:"/carousel commercial/goldenboulevard-thumb.jpg",
    logo: "/carousel commercial/logo-goldenboulevard.png",
    slug:"/commercial/golden-boulevard",
    desc:"Golden Boulevard is located on the side of the Grand City boulevard connecting Jl. MT. Haryono with Jl. Soekarno-Hatta made Golden Boulevard a profitable business and investment center"
   },
   {
    thumb:"/carousel commercial/palladium-thumb.jpg",
    logo: "/carousel commercial/logo-palladium.png",
    slug:"/commercial/palladium",
    desc:"Palladium is present as part of the Grand City area which is integrated with modern living facilities in a safe and serene atmosphere."
   },
   ]

  return (
    <div>
        <EmblaCarouselMultiple slides={images}/>
    </div>
  )
}

export default CarouselCommercial