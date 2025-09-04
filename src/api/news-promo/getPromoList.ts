import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getNewsPromoList = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    fields:["title","slug","date"],
    populate:{
        thumbnail:{
            fields:["url","name"]
        }
    }
   
    });

    const response = await axiosInstance.get(`/content-news-promos?${query}`);
    console.log("respon testimonial",response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};