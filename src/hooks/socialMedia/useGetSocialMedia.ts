import {getSocialMedia} from "@/api/social_media/getSocialMedia"
import { useEffect, useState } from "react";

type SocialMediaType = {
    instagram:string,
    twitter:string,
    facebook:string,
    youtube:string,
    whatsapp:string
    linkedin:string

}

export const useGetSocialMedia = () => {
  const [socialMediaData, setSocialMedia] = useState<SocialMediaType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSocialMedia() ;
        setSocialMedia(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, );

  return { socialMediaData, isLoading };
};