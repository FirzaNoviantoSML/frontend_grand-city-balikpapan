import React from 'react'
import GridFacilites from './GridFacilites'

const FacilitiesHome = () => {
  return (
    <div>
         <div className="relative bg-amber-50 py-8">
        <div>
            <div className="flex justify-center">
            <div className="text-center">
            <p className="text-[#834520] text-2xl font-bold border-b-3 inline-block ">
                Facilites
            </p>
            <p className="text-[#834520] text-2xl font-light mt-4">
              Amenities and Convenience           
            </p>
            </div>
        </div>
        </div>
        <div className="flex justify-center">
        <GridFacilites/>
        </div>
        </div>
    </div>
  )
}

export default FacilitiesHome