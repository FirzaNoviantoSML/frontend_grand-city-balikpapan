import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getResidentialPage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
      locale: lang,
      fields: ["description"],
      populate: {
        hero_banner: {
          fields: ["url", "name"],
        },
      },
    });

    const response = await axiosInstance.get(`/residential-page?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching concepts page data:", error);
  }
};
