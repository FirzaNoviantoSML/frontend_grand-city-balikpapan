import {getCommercialPage} from "@/api/commercial/getCommercialPage"
import { useEffect, useState } from "react";
import {DevelopmentPageData} from "@/types/developmentPage"

export const useGetCommercialPage = (lang: "en" | "id") => {
  const [CommercialPageData, setCommercialPage] = useState<DevelopmentPageData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCommercialPage(lang) ;
        setCommercialPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { CommercialPageData, isLoading };
};