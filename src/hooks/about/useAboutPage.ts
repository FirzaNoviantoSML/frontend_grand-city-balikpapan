import {getAboutPage} from "@/api/about/getAboutPage"
import {AboutData} from "@/types/aboutTypes"
import { useEffect, useState } from "react";

export const useGetAboutPage = (lang: "en" | "id") => {
  const [aboutPageData, setAboutPage] = useState<AboutData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAboutPage(lang) ;
        setAboutPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { aboutPageData, isLoading };
};