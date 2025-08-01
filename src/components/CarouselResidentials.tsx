import React from 'react'
import EmblaCarouselMultiple from './carouselMultipleImage/Carousel'


const CarouselResidentials = () => {

     const images = [
   {
    thumb:"/carousel residential/forestville.jpg",
    logo: "/carousel residential/logo-forestville.png",
    slug:"/residential/forestville",
    desc:"Forestville is designed fot those of you who crave a modern life with natural nuances"
   },
   {
    thumb:"/carousel residential/pineville.jpg",
    logo: "/carousel residential/logo-pineville.png",
    slug:"/residential/pineville",
    desc:"Forestville is designed fot those of you who crave a modern life with natural nuances"
   },
   {
    thumb:"/carousel residential/hyland.jpg",
    logo: "/carousel residential/logo-hyland.png",
    slug:"/residential/hyland",
    desc:"Forestville is designed fot those of you who crave a modern life with natural nuances"
   },
   {
    thumb:"/carousel residential/hayfield.jpg",
    logo: "/carousel residential/logo-hayfield.png",
    slug:"/residential/hayfield",
    desc:"Forestville is designed fot those of you who crave a modern life with natural nuances"
   }
   ]

  return (
    <div>
        <EmblaCarouselMultiple slides={images}/>
    </div>
  )
}

export default CarouselResidentials