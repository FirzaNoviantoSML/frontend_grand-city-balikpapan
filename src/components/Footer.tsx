"use client"
import React from 'react'
import FooterImageRibbon from './FooterImageRibbon'
import LocationHome from './LocationHome'
import {useLanguage} from "@/contex/LanguageContext"
import {useGetFooter} from "@/hooks/footer/useRoutes"

const Footer = () => {
    const {language} = useLanguage()
    const {footerData,isLoading} = useGetFooter(language)

    if(isLoading){
        return(
            <div>

            </div>
        )
    }

    return (
        <div>
            <LocationHome footer={footerData!}/>
            <FooterImageRibbon/>
        </div>
    )
}

export default Footer