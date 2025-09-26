import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getNewsPage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    fields:["locale"],
    populate: {
        hero_banner: {
        fields: ["url", "name"],
        },
    },
    });

    const response = await axiosInstance.get(`news-promo?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching News data:", error);
  }
};