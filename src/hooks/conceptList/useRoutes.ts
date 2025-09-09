import {getConceptThumbnailList} from "@/api/concept/getConceptThumbnailList"
import { useEffect, useState } from "react";
import {Concept} from '@/types/conceptListTypes'

export const useGetConceptList = (lang: "en" | "id") => {
  const [conceptData, setConcept] = useState<Concept[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConceptThumbnailList(lang) ;
        setConcept(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { conceptData, isLoading };
};