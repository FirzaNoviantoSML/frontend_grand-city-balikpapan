import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getNewsPromoList = async (lang: "en" | "id",limit:number,start?:number) => {
  try {
    const query = qs.stringify({
    locale: lang,
    sort:["date:desc"],
    fields:["title","slug","date"],
    populate:{
        thumbnail:{
            fields:["url","name"]
        }
    },
    pagination: {
      limit: limit,
      start:start
    },
   
    });

    const response = await axiosInstance.get(`/content-news-promos?${query}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};