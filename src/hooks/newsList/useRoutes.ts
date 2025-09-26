import {getNewsPromoList} from "@/api/news-promo/getPromoList"
import { useEffect, useState } from "react";
import {NewsResponse} from "@/types/news-promoListTypes"

export const useGetNewsPromosList = (lang: "en" | "id",limit:number,start?:number) => {
  const [newsPromoData, setNewsPromoData] = useState<NewsResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewsPromoList(lang,limit,start) ;
        setNewsPromoData(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,limit,start]);

  return { newsPromoData, isLoading };
};