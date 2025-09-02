import React from 'react'
import EmblaCarouselMultiple from './carouselSingleImage/Carousel'
import {Development} from "@/types/developmentListTypes"
type PropType = {
    slides: Development[]

}


const CarouselCommercial: React.FC<PropType>  = (props) => {
    const { slides } = props


   

  return (
    <div>
        <EmblaCarouselMultiple slides={slides}/>
    </div>
  )
}

export default CarouselCommercial