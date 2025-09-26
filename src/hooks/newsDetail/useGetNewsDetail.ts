import {getNewsDetail} from "@/api/news-promo/getNewsDetail"
import { useEffect, useState } from "react";
import {NewsItem} from "@/types/newsDetail"

export const useGetNewsDetail = (lang: "en" | "id",slug:string) => {
  const [newsDetailData, setNewsDetail] = useState<NewsItem>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNewsDetail(lang,slug) ;
        setNewsDetail(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,slug]);

  return { newsDetailData, isLoading };
};