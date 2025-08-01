"use client"

import React from 'react'
import EmblaCarousel from '@/components/carousel/Carousel'
import VideoTestimoni from '@/components/VideoTestimoni'
import Concept from '@/components/Concept'
import BannerHome from '@/components/BannerHome'
import ResidentialHome from '@/components/ResidentialHome'
import CommercialHome from '@/components/CommercialHome'
import FacilitiesHome from '@/components/FacilitiesHome'

const HomeIndex = () => {
 
    
   const images = [
   {
    image:"/carousel/mainbanner-grandcity-2-gerbangutama.jpg",
    title: "Grand City Main Gate",
    slug:"/residential"
   },
   {
    image:"/carousel/mainbanner-grandcity.jpg",
    title: "Comprehensive Masterplan",
    slug:"/about-us"
   }
   ]

  return (
    <div>
        <EmblaCarousel slides={images}/>
        <VideoTestimoni/>
        <Concept/>
        <BannerHome/>
        <ResidentialHome/>
        <CommercialHome/>
        <FacilitiesHome/>

    </div>
  )
}

export default HomeIndex