"use client"
import React from 'react'
import EmblaCarouselMultiple from './carouselMultipleImage/Carousel'
import {Development} from "@/types/developmentListTypes"
type PropType = {
    slides: Development[]

}

const CarouselResidentials: React.FC<PropType>  = (props) => {
    const { slides } = props

   

  return (
    <div>
        <EmblaCarouselMultiple slides={slides}/>
    </div>
  )
}

export default CarouselResidentials