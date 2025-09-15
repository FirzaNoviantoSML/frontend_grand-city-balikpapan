import {getResidentialPage} from "@/api/residential/getResidentialPage"
import { useEffect, useState } from "react";
import {DevelopmentPageData} from "@/types/developmentPage"

export const useGetResidentialPage = (lang: "en" | "id") => {
  const [ResidentialPageData, setResidentialPage] = useState<DevelopmentPageData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getResidentialPage(lang) ;
        setResidentialPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { ResidentialPageData, isLoading };
};