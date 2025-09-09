import {getFacilityDetail} from "@/api/facility/getFacilityDetail"
import { useEffect, useState } from "react";
import {FacilityDetail} from "@/types/facilityDetailTypes"

export const useGetFacilityDetail = (lang: "en" | "id",slug:string) => {
  const [facilityDetailData, setFacilityDetail] = useState<FacilityDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFacilityDetail(lang,slug) ;
        setFacilityDetail(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,slug]);

  return { facilityDetailData, isLoading };
};