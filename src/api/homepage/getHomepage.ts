import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getHomepage = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
    locale: lang,
    populate: {
        thumbnail_video: {
        fields: ["url", "name"],
        },
        zone_image: {
        fields: ["url", "name"],
        },
        carousel_banner: {
        populate: {
            hero_banner_landscape: {
            fields: ["url", "name"],
            },
            hero_banner_portrait: {
            fields: ["url", "name"],
            },
        },
        },
        metadata: {
        populate: {
            image: {
            fields: ["url", "name"],
            },
            keywords: {
            fields: ["label"],
            },
        },
        },
    },
    });

    const response = await axiosInstance.get(`/home-page?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};