'use client'

import React from 'react'
import EmblaCarousel from './carouselFacilitiesMobile/Carousel'
import {Facilities} from '@/types/facilitiesListTypes'

type PropType = {
    facilities: Facilities[]
}

const CarouselFacilities: React.FC<PropType> = (props) => {

const { facilities } = props

  return (
    <div>
        <EmblaCarousel slides={facilities}/>
    </div>
  )
}

export default CarouselFacilities