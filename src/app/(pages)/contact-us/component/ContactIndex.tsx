"use client"
import React from 'react'
import {useGetContactPage} from "@/hooks/contactPage/useGetContactPage"
import { useLanguage } from "@/contex/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/libs/useIsMobile";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import ContactForm from './ContactForm';

const ContactIndex = () => {
    const isMobile = useIsMobile()
    const {language} = useLanguage()
    const {contactPageData,isLoading} = useGetContactPage(language)

      if (isLoading) {
    return <div>

    </div>;
  }

  return (
    <div className="bg-[#FFFCE4] ">
        <div className="relative">
        {isMobile ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${contactPageData?.hero_banner?.url}`}
            alt={contactPageData?.hero_banner?.name || "Commercial Hero Banner"}
            width={1440}
            height={450}
            className="object-cover w-full  h-[220px] brightness-75"
          />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${contactPageData?.hero_banner?.url}`}
            alt={contactPageData?.hero_banner?.name || "Commercial Hero Banner"}
            width={1440}
            height={450}
            className="object-cover w-full  lg:h-[480px] brightness-75"
          />
        )}
        <div className="absolute bottom-16 md:inset-y-1/3  left-4 md:inset-x-1/12 text-white">
          <div className="flex justify-start items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-xs md:text-sm">
                {language === "en" ? "Home" : "Beranda"}
              </Link>
              <MdKeyboardDoubleArrowRight className="text-xs md:text-sm" />
              <Link href="/contact Us" className="text-xs md:text-sm">
                {language === "en" ? "contact Us" : "Kontak Kami"}
              </Link>
            </div>
          </div>
          <p className="font-extrabold text-2xl md:text-3xl lg:text-5xl w-[100%]">
            {contactPageData?.title}
          </p>
        </div>
      </div>
      <div className="p-4 md:p-8 lg:px-96">
        <p className="mb-4 lg:text-lg">
        {contactPageData?.description}
        </p>
      <div className="grid grid-cols-6 w-full md:w-[50vw] lg:w-[30vw]">
        <div className="w-10 h-10 rounded-full bg-green-600 p-2">
        <MdLocationOn className='text-2xl text-white' />
        </div>
        <div className="col-span-5 ">
            <p className="font-extrabold mt-1 text-md lg:text-lg">Marketing Gallery Grand City Balikpapan</p>
            <p>{contactPageData?.marketing_office_address}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-green-600 p-2 mt-4">
            <FaMobileAlt className='text-2xl text-white' />
        </div>
         <div className="col-span-5 mt-4">
            <Link href="#">
            <p className="font-extrabold mt-1 text-md lg:text-lg text-amber-600">{`${contactPageData?.marketing_phone} (Marketing Call)`}</p>
            </Link>
        </div>
      </div>
      <div className="bg-[#DFDCC1] mt-12 p-12 ">
        <p className="text-xl font-bold text-amber-900">{language === "en"?"Sending Message":"Kirim Pesan"}</p>
        <div className="py-4">
        <ContactForm/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactIndex