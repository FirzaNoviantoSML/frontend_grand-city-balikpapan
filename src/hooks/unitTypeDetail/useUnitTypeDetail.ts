import {getUnitTypeDetail} from "@/api/unit-type/getUnitTypeDetail"
import { useEffect, useState } from "react";
import {UnitDetail} from "@/types/unitType"

export const useGetClusterDetail = (lang: "en" | "id",slug:string) => {
  const [unitTypeData, setunitTypeDetail] = useState<UnitDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUnitTypeDetail(lang,slug) ;
        setunitTypeDetail(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,slug]);

  return { unitTypeData, isLoading };
};