import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getConceptThumbnailList = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    sort:[
            "createdAt:asc"
    ],
    fields: ["title", "slug", "color","description"],
    populate: {
        icon: {
        fields: ["url", "name"],
        },
    },
    });
    const response = await axiosInstance.get(`/concepts?${query}`);
    console.log("respon concept",response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};