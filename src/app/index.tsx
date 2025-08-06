"use client"

import React from 'react'
import EmblaCarousel from '@/components/carousel/Carousel'
import VideoTestimoni from '@/components/VideoTestimoni'
import Concept from '@/components/Concept'
import BannerHome from '@/components/BannerHome'
import ResidentialHome from '@/components/ResidentialHome'
import CommercialHome from '@/components/CommercialHome'
import FacilitiesHome from '@/components/FacilitiesHome'
import News from '@/components/News'
import LocationHome from '@/components/LocationHome'
import FooterImageRibbon from '@/components/FooterImageRibbon'

const HomeIndex = () => {
 
    
   const images = [
   {
    image:"/carousel/mainbanner-grandcity-2-gerbangutama.jpg",
    imageMobile:"/carousel/mainbanner-grandcity-2-gerbangutama-mobile.jpg",
    title: "Grand City Main Gate",
    slug:"/residential"
   },
   {
    image:"/carousel/mainbanner-grandcity.jpg",
    imageMobile:"/carousel/mainbanner-grandcity-mobile.jpg",
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
        <News/>
        <LocationHome/>
        <FooterImageRibbon/>

    </div>
  )
}

export default HomeIndex