import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getAboutPage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    fields:["description","link_video","comprehensive_masterplan_description"],
    populate: {
        hero_banner: {
        fields: ["url", "name"],
        },
        thumbnail_video: {
        fields: ["url", "name"],
        },
        masterplan_image: {
        fields: ["url", "name"],
        },
    },
    });

    const response = await axiosInstance.get(`about-us?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching about us page data:", error);
  }
};