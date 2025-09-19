import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getUnitTypeList = async (lang: "en" | "id", slug: string) => {
  try {
    const query = qs.stringify({
      locale: lang,
      filters: {
        development: {
          slug: {
            $eq: slug,
          },
        },
      },
      fields:["type","surface_description","available","slug"],
      populate: {
        development: {
          fields: ["slug"],
        },
        thumbnail_image:{
            fields:["url","name"]
        },
        gallery:{
            fields:["url","name"]
        }
      },
    });

    const response = await axiosInstance.get(`/unit-types?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};
