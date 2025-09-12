import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getMetadata = async (route:string,slug?:string) => {
  try {
    if(slug){
        const query = qs.stringify({
        locale: "en",
          filters:{
            slug:{
            $eq:slug,
            },
        },
        populate: {
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

    const response = await axiosInstance.get(`${route}?${query}`);
    return response.data.data[0].metadata;
    }else{
        const query = qs.stringify({
        locale: "en",
        populate: {
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

    const response = await axiosInstance.get(`${route}?${query}`);
    return response.data.data.metadata;
    }


  } catch (error) {
    console.log("Error fetching metadata data:", error);
  }
};