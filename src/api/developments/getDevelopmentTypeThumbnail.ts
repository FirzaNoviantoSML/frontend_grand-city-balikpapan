import { axiosInstance } from "@/libs/axios";
import qs from "qs";

export const getDevelopmentTypeThumbnailList = async (lang: "en" | "id") => {
  try {
    const query = qs.stringify({
  locale: lang,
  populate: {
    thumbnail: {
      fields: ["url", "name"]
    },
  }
});
    const responseCommercial = await axiosInstance.get(`commercial-page?${query}`);
    const responseResidential = await axiosInstance.get(`residential-page?${query}`);


    const developmentData = [{
      title:"Residential",
      slug:"residential",
      thumbnail:{
        url: responseResidential.data.data.thumbnail.url,
        name:responseResidential.data.data.thumbnail.name
        } 
      },
      {
      title:"Commercial",
      slug:"commercial",
      thumbnail:{
        url: responseCommercial.data.data.thumbnail.url,
        name:responseCommercial.data.data.thumbnail.name
        } 
      },
  ]
      return developmentData
    }


   catch (error) {
    console.log("Error fetching homepage data:", error);
  }
};