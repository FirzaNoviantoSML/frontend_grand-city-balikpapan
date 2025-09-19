import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getClusterDetail = async (lang: "en" | "id", slug: string) => {
  try {
    const query = qs.stringify({
      locale: lang,
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ["title", "slug", "description", "information_update_stock_unit"],
      populate: {
        thumbnail_image: {
          fields: ["url", "name"],
        },
        hero_banner: {
          fields: ["url", "name"],
        },
        siteplan_gallery: {
          fields: ["url", "name"],
        },
        unit_stock_image: {
          fields: ["url", "name"],
        },
        gallery: {
          fields: ["url", "name"],
        },
      },
    });

    const response = await axiosInstance.get(`/developments?${query}`);
    return response.data.data[0];
  } catch (error) {
    console.log("Error fetching facility page data:", error);
  }
};
