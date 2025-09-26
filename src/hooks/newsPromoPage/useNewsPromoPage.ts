import {getNewsPage} from "@/api/news-promo/getNewsPage"
import { useEffect, useState } from "react";

type NewsType = {
    id:number,
    locale:string,
    hero_banner:{
        id:string,
        url:string,
        name:string
    }
}

export const useGetNewsPage = (lang: "en" | "id") => {
  const [newsPageData, setNewsPage] = useState<NewsType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewsPage(lang) ;
        setNewsPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { newsPageData, isLoading };
};