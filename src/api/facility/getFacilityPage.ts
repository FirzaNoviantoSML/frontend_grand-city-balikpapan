import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getFacilityPage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale:lang,
    fields:["description"],
    populate:{
    hero_banner:{
    fields:["url","name"]},
    hero_banner_mobile:{
    fields:["url","name"]
    }}
    });

    const response = await axiosInstance.get(`/facility-page?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching facility page data:", error);
  }
};