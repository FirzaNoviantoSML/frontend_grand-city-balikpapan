import React from 'react'
import EmblaCarousel from './carouselNewsMobile/Carousel';

const CarouselNews = () => {

       const news:NewsItemType[] = [
        {
            image:"/news/News-Hayfield.jpg",
            title:"WFH, Solution To Have A Dream House in Grand City Balikpapan",
            date: "2021-3-29"
        },
        {
            image:"/news/news-sinarmas.jpg",
            title:"Sinar Mas Wisesa Moves Offices to Grand City",
            date: "2020-11-19"
        },
        {
            image:"/news/News-Hayfield.jpg",
            title:"WFH, Solution To Have A Dream House in Grand City Balikpapan",
            date: "2021-3-29"
        },
        {
            image:"/news/news-sinarmas.jpg",
            title:"Sinar Mas Wisesa Moves Offices to Grand City",
            date: "2020-11-19"
        }
    ]

    type NewsItemType = {
  image: string;
  title: string;
  date: string;
};
  return (
    <div>
        <EmblaCarousel slides={news}/>
    </div>
  )
}

export default CarouselNews