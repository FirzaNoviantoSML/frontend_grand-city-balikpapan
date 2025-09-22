"use client"
import React from 'react'
import {useGetClusterDetail} from '@/hooks/unitTypeDetail/useUnitTypeDetail'
import {useLanguage} from '@/contex/LanguageContext'
import { useIsMobile } from '@/libs/useIsMobile'
import EmblaCarouselMultiple from './carouselMultipleImage/Carousel'

const UnitTypeDetailIndex = ({slug}:{slug:string}) => {
  const isMobile = useIsMobile()
  const {language} = useLanguage()
  const {unitTypeData,isLoading} = useGetClusterDetail(language,slug)

  
  if(isLoading){
    return(
    <div>

    </div>
    )
  }
  return (
    <div className="bg-[#FFFCE4] relative mt-10">
                <div
              className={`absolute inset-y-0 right-0 w-[400px] bg-repeat [background-size:400px_800px] scale-x-[-1] z-0 pointer-events-none`}
            style={{ backgroundImage: "url('/background/bgleaft-invert.png')" }}
            />
              <div className="relative px-12 py-6">
              <p className="text-center text-md md:text-lg lg:text-2xl  text-amber-900 font-bold my-12">
              {`${unitTypeData?.development.title} - ${unitTypeData?.type}`}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                <EmblaCarouselMultiple slides={unitTypeData!.gallery}/>
                </div>
                <div>
                  <p className="text-start text-lg">
                      Spesifikasi
                  </p>
                    <p className="text-start border-b-1 border-neutral-200 pb-4">
                      {unitTypeData?.surface_description}
                  </p>
                  {
                    unitTypeData?.spesifikasi.map((item,index) => {
                      return(
                        <div
                        key={index}>
                          <p className="text-sm md:text-md font-bold mt-6">{item.title}</p>
                          <div >
                            {
                              item.item.map((item,index) => {
                                return(
                                  <div
                                  key={index}
                                  className="grid grid-cols-2 text-sm md:text-md"
                                  >
                                  <div>
                                    {item.name}
                                  </div>
                                  <div>
                                    {item.description}
                                  </div>
                                    </div>
                                )
                              })
                            }
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              </div>
    </div>
  )
}

export default UnitTypeDetailIndex