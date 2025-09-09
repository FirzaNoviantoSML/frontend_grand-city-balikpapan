import {getDevelopmentThumbnailList} from "@/api/developments/getDevelopmentList"
import { useEffect, useState } from "react";
import {Development} from '@/types/developmentListTypes'

export const useGetDevelopmentThumbnailList = (lang: "en" | "id",development:"Residential" | "Commercial") => {
  const [developmentData, setdevelopment] = useState<Development[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDevelopmentThumbnailList(lang,development) ;
        setdevelopment(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { developmentData, isLoading };
};