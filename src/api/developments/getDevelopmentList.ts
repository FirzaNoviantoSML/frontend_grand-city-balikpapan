import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getDevelopmentThumbnailList = async (lang: "en" | "id",development:"Residential" | "Commercial") => {
  try {
    const query = qs.stringify({
  locale: lang,
  filters: {
    development_type: {
      $eq: development
    }
  },
  fields: [
    "title",
    "slug",
    "thumbnail_description",
  ],
  populate: {
    thumbnail_image: {
      fields: ["url", "name"]
    },
    logo: {
      fields: ["url", "name"]
    }
  }
});
    const response = await axiosInstance.get(`/developments?${query}`);
    console.log("development concept",response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};