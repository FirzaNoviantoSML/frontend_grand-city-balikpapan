import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getFacilityDetail = async (lang: "en" | "id",slug:string) => {
  try {
    const query = qs.stringify({
    locale:lang,
    filters:{
    slug:{
    $eq:slug,
    },
    },
    fields:["title","description",],
    populate:{
    hero_banner:{
    fields:["url","name"]},
    gallery:{
    fields:["url","name"]},}
    }
    );

    const response = await axiosInstance.get(`/facilities?${query}`);
    return response.data.data[0];
  } catch (error) {
    console.log("Error fetching facility page data:", error);
  }
};