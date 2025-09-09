import {getFacilityPage} from "@/api/facility/getFacilityPage"
import { useEffect, useState } from "react";
import {FacilityData} from "@/types/facilityPageTypes"

export const useGetFacilityPage = (lang: "en" | "id") => {
  const [facilityPageData, setFacilityPage] = useState<FacilityData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFacilityPage(lang) ;
        setFacilityPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { facilityPageData, isLoading };
};