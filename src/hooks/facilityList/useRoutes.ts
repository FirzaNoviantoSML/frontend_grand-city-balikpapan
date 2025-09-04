import {getFacilityList} from "@/api/facility/getFacilityList"
import { useEffect, useState } from "react";
import {Facilities} from "@/types/facilitiesListTypes"

export const useGetFacilites = (lang: "en" | "id") => {
  const [facilitesData, setFacilities] = useState<Facilities[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFacilityList(lang) ;
        setFacilities(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { facilitesData, isLoading };
};