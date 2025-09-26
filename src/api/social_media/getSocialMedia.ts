import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getSocialMedia = async () => {
  try {
    const query = qs.stringify({
        fields:["instagram","linkedin","facebook","youtube","twitter","whatsapp"]
    }
);

    const response = await axiosInstance.get(`/social-media?${query}`);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching concepts page data:", error);
  }
};
