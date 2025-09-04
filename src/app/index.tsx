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
        <VideoTestimoni homePageData={homePage!} language={language}/>
        <Concept language={language}/>
        <BannerHome hero_banner={homePage?.zone_image.url} language={language}/>
        <ResidentialHome language={language}/>
        <CommercialHome language={language}/>
        <FacilitiesHome language={language}/>
        <News language={language}/>
        
    </div>
  )
}

export default HomeIndex