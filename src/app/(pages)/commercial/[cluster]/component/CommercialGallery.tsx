import React from 'react'
import {GalleryItem} from '@/types/facilityDetailTypes'
import Carousel from '@/components/carouselGalleryResidential/Carousel' 

type PropType = {
    gallery:GalleryItem[] | undefined
    language:"en" | "id"
    title?:string | undefined
}

const CommercialGallery: React.FC<PropType> = (props) => {
const {gallery,language,title} = props
  return ( 
    <div>
        <div className="flex justify-center">
            <div>
                <p className="text-lg md:text-2xl font-bold text-amber-800 border-b-4 border-amber-500 pb-2 mb-2">
                {language === "en"? `Gallery ${title}`:`Galeri ${title}`}        
                </p>
            </div>
        </div>
        {
            gallery && (
                <div className="mt-4">
                    <Carousel slides={gallery}/>
                </div>
            )
        }
    </div>
  )
}

export default CommercialGallery