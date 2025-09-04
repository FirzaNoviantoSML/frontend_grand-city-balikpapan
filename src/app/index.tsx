"use client"
import { useLanguage } from '@/contex/LanguageContext'
import React from 'react'
import EmblaCarousel from '@/components/carousel/Carousel'
import VideoTestimoni from '@/components/VideoTestimoni'
import Concept from '@/components/Concept'
import BannerHome from '@/components/BannerHome'
import ResidentialHome from '@/components/ResidentialHome'
import CommercialHome from '@/components/CommercialHome'
import FacilitiesHome from '@/components/FacilitiesHome'
import News from '@/components/News'
import { useGetHomePage } from '@/hooks/homepage/useHomepage'

const HomeIndex = () => {

  const {language} = useLanguage()
    const { homePage,isLoading } = useGetHomePage(language);
    

   if(isLoading){
    return(
      <div>
        Loading
      </div>
    )
   }

  return (
    <div>
        <EmblaCarousel slides={homePage!.carousel_banner}/>
        <VideoTestimoni homePageData={homePage!}/>
        <Concept/>
        <BannerHome hero_banner={homePage?.zone_image.url}/>
        <ResidentialHome/>
        <CommercialHome/>
        <FacilitiesHome/>
        <News/>
        
    </div>
  )
}

export default HomeIndex