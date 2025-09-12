import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getConceptPage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
        locale: lang,
        fields:["description","title"],
        populate: {
            hero_banner: {
            fields:["name","formats"]
            },
            main_banner: {
            fields: ["url", "name"],
            },
            zona_area_image: {
            fields: ["url", "name"],
            },
        },
        }
    );

    const response = await axiosInstance.get(`concept-page?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching concept data:", error);
  }
};