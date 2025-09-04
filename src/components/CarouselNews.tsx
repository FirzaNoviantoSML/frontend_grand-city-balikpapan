import React from 'react'
import EmblaCarousel from './carouselNewsMobile/Carousel';
import {NewsItem} from "@/types/news-promoListTypes"

type PropType = {
    news: NewsItem[]

}


const CarouselNews: React.FC<PropType> = (props) => {
  
  const { news } = props

  return (
    <div>
        <EmblaCarousel slides={news}/>
    </div>
  )
}

export default CarouselNews