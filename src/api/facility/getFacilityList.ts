import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getFacilityList = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    fields:["title","slug"],
    populate:{
        thumbnail_image:{
            fields:["url","name"]
        }
    }   
    });

    const response = await axiosInstance.get(`/facilities?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};