"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import FooterImageRibbon from './FooterImageRibbon'
import LocationHome from './LocationHome'
import {useLanguage} from "@/contex/LanguageContext"
import {useGetFooter} from "@/hooks/footer/useRoutes"

const Footer = () => {
      const url = usePathname();
      const urlIndex = url.split("/");
    const {language} = useLanguage()
    const {footerData,isLoading} = useGetFooter(language)

    if(isLoading){
        return(
            <div>

            </div>
        )
    }


     if (
    (urlIndex[1] !== "residential" || "commercial") &&
    urlIndex.length !== 4
  ) {
    return (
        <div>
            <LocationHome footer={footerData!}/>
            <FooterImageRibbon/>
        </div>
    );
  }
}

export default Footer