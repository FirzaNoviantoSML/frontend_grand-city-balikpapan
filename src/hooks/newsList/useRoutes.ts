import {getNewsPromoList} from "@/api/news-promo/getPromoList"
import { useEffect, useState } from "react";
import {NewsItem} from "@/types/news-promoListTypes"

export const useGetNewsPromosList = (lang: "en" | "id") => {
  const [newsPromoData, setNewsPromoData] = useState<NewsItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewsPromoList(lang) ;
        console.log("hooks news",response)
        setNewsPromoData(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { newsPromoData, isLoading };
};