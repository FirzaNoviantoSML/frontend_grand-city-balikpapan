import {getConceptPage} from "@/api/concept/getConceptPage"
import {ConceptData} from "@/types/conceptPageTypes"
import { useEffect, useState } from "react";

export const useGetConceptPage = (lang: "en" | "id") => {
  const [conceptPageData, setConceptPage] = useState<ConceptData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConceptPage(lang) ;
        setConceptPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { conceptPageData, isLoading };
};