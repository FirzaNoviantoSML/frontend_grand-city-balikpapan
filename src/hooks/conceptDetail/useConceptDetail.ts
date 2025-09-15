import {getConceptDetail} from "@/api/concept/getDetailConcept"
import { useEffect, useState } from "react";
import {ConceptDetail} from "@/types/detailConceptTypes"

export const useGetConceptDetail = (lang: "en" | "id",slug:string) => {
  const [conceptDetailData, setConceptDetail] = useState<ConceptDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getConceptDetail(lang,slug) ;
        setConceptDetail(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,slug]);

  return { conceptDetailData, isLoading };
};