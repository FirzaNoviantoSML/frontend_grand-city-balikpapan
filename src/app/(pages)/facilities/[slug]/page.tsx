import React from 'react'
import FacilityDetailIndex from './components/FacilitySingleIndex';


const  FacilitiesDetail = async ({ params }: {params:Promise<{ slug:string}>}) => {
      const getParams = async () => params;
  const { slug } = await getParams();
  return (
    <div>
        <FacilityDetailIndex slug={slug}/>
    </div>
  )
}

export default FacilitiesDetail 