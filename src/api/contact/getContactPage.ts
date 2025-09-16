import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getContactPage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    fields:["description","title","marketing_office_address","marketing_phone"],
    populate: {
        hero_banner: {
        fields: ["url", "name"],
        },
    },
    });

    const response = await axiosInstance.get(`contact-us-page?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching contact page data:", error);
  }
};