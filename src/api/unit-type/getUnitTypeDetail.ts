import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getUnitTypeDetail = async (lang: "en" | "id", slug: string) => {
  try {
    const query = qs.stringify({
      locale: lang,
      filters: {
        slug: {
          $eq: slug,
        },
      },
      fields: ["type", "slug", "surface_description"],
      populate: {
        gallery: {
          fields: ["url", "name"],
        },
        spesifikasi:{
         on: {
        "spesifikasi.spesifikasi": {
        populate:"*"}
        },
        },
         development:{
        fields:["title"]}
      },
    }
);

    const response = await axiosInstance.get(`/unit-types?${query}`);
    return response.data.data[0];
  } catch (error) {
    console.log("Error fetching unit type page data:", error);
  }
};
