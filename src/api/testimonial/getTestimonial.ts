import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getTestimonial = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    fields:["name","quote"],
    populate:{
        profile_picture:{
            fields:["url","name"]
        }
    }
   
    });

    const response = await axiosInstance.get(`/testimonials?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};