"use client"
import React from 'react'
import Image from 'next/image'
import CarouselResidentials from './CarouselResidentials'
import {useGetDevelopmentThumbnailList} from "@/hooks/development/useRoutes"


type PropType = {
  language:"en" | "id"
}

const ResidentialHome: React.FC<PropType> = (props) => {
  const {language} = props

  const {developmentData,isLoading} = useGetDevelopmentThumbnailList(language,"Residential")


  if(isLoading){
    return (
      <div>

      </div>
    )
  }

  return (
    <div className="relative bg-[#FEFCE5] py-12 ">
        <div className="absolute right-0 top-0 ">
          <Image
            src={"/background/bgleafright.jpg"}
            alt={"background"}
            width={600}
            height={600}
          />
        </div>
        <div>
            <div className="relative flex justify-center  w-[100%]">
            <div className="text-center">
            <p className="text-[#834520] text-md md:text-2xl font-bold border-b-3 border-amber-600  inline-block ">
                Residential
            </p>
            <p className="text-[#834520] text-md md:text-2xl mt-2 my-8 font-extralight ">
                {language == "en"?"Find the Dream Residence":"Temukan Kediaman Impian"}
            </p>
            </div>
          </div>
        </div>
        <CarouselResidentials slides={developmentData!}/>
    </div>
  )
}

export default ResidentialHome