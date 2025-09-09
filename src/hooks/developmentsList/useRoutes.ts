import {getDevelopmentTypeThumbnailList} from "@/api/developments/getDevelopmentTypeThumbnail"
import { useEffect, useState } from "react";


type DevelopmentType = {
    title:string,
    slug:string,
    thumbnail:{
        url:string,
        name:string
    }
}

export const useGetDevelopmentTypeThumbnailList = (lang: "en" | "id") => {
  const [developmentTypeData, setdevelopmentType] = useState<DevelopmentType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDevelopmentTypeThumbnailList(lang) ;
        setdevelopmentType(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { developmentTypeData, isLoading };
};