import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getDevelopmentDropdown = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
  locale: lang,
  fields:["id","title","project_code","cluster_code","slug"]
});
    const response = await axiosInstance.get(`/developments?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};