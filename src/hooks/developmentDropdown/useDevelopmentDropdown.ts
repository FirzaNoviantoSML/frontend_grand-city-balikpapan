import {getDevelopmentDropdown} from "@/api/developments/getDevelopmentDropdown"
import { useEffect, useState } from "react";


type DevelopmentDropdownType = {
    id:string,
    documentId:string,
    title:string,
}

export const useGetDevelopmentDropdown = (lang: "en" | "id") => {
  const [developmentDropdown, setdevelopmentType] = useState<DevelopmentDropdownType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDevelopmentDropdown(lang) ;
        setdevelopmentType(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { developmentDropdown, isLoading };
};