"use client"

import React from 'react'
import GridFacilites from './GridFacilites'
import CarouselFacilities from './CarouselFacilities'
import {useGetFacilites} from '@/hooks/facilityList/useRoutes'

type PropType = {
  language: "en" | "id"
}

const FacilitiesHome: React.FC<PropType> = (props) => {

  const {language} = props
  const {facilitesData,isLoading} = useGetFacilites(language)
  console.log("page facility",facilitesData)

  if(isLoading){
    return(
      <div>

      </div>
    )
  }



  return (
    <div>
         <div className="relative bg-amber-50 py-8">
        <div>
            <div className="flex justify-center">
            <div className="text-center">
            <p className="text-[#834520] text-lg  md:text-2xl font-bold border-b-3 inline-block ">
                Facilites
            </p>
            <p className="text-[#834520] text-lg  md:text-2xl font-light my-2">
              Amenities and Convenience           
            </p>
            </div>
        </div>
        </div>
        <div className="hidden md:flex justify-center">
        <GridFacilites facilites={facilitesData!}/>
        </div>
        <div className="md:hidden">
        <CarouselFacilities facilities={facilitesData!}/>
        </div>
        </div>
    </div>
  )
}

export default FacilitiesHome