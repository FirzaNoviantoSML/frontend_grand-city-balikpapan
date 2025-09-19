import {getClusterDetail} from "@/api/cluster/getClusterDetail"
import { useEffect, useState } from "react";
import {ResidentialItem} from "@/types/clusterDetailTypes"

export const useGetClusterDetail = (lang: "en" | "id",slug:string) => {
  const [clusterDetailData, setClusterDetail] = useState<ResidentialItem>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClusterDetail(lang,slug) ;
        setClusterDetail(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,slug]);

  return { clusterDetailData, isLoading };
};