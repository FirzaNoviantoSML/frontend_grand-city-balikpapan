import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getNewsDetail = async (lang: "en" | "id", slug: string) => {
  try {
    const query = qs.stringify({
      locale: lang,
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ["title", "slug", "content","date"],
    });

    const response = await axiosInstance.get(`/content-news-promos?${query}`);
    return response.data.data[0];
  } catch (error) {
    console.log("Error fetching news promo page data:", error);
  }
};
