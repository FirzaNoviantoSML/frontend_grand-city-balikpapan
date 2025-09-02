import {getHomepage} from "@/api/homepage/getHomepage"
import {HomePageData} from "@/types/homepageTypes"
import { useEffect, useState } from "react";

export const useGetHomePage = (lang: "en" | "id") => {
  const [homePage, setHomePage] = useState<HomePageData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHomepage(lang) ;
        console.log("hooks",response)
        setHomePage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { homePage, isLoading };
};