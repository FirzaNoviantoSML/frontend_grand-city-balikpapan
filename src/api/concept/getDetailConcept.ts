import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getConceptDetail = async (lang: "en" | "id",slug:string) => {
  try {
    const query = qs.stringify({
    locale:lang,
    filters:{
    slug:{
    $eq:slug,
    },
    },
    fields:["title","description","color","content"],
    populate:{
    hero_banner:{
    fields:["url","name"]},
    icon:{
    fields:["url","name"]},
    content_image:{
    fields:["url","name"]},
    zone_location_image:{
    fields:["url","name"]},
    gallery:{
    fields:["url","name"]},}
    });

    const response = await axiosInstance.get(`/concepts?${query}`);
    return response.data.data[0];
  } catch (error) {
    console.log("Error fetching concepts page data:", error);
  }
};