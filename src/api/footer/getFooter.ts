import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getFooter = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale:lang,
    fields:["address","link_map","phone_number"],
    populate:{
    project:{
    fields:["title","link"],
    },
    image:{
    fields:["url","name"]}
    }
    });

    const response = await axiosInstance.get(`/footer?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching footer data:", error);
  }
};