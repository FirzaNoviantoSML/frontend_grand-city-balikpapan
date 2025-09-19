import {getUnitTypeList} from "@/api/unit-type/getUnitTypeList"
import { useEffect, useState } from "react";
import {UnitTypeItem} from "@/types/unitTypeList"

export const useGetUnitTypeList = (lang: "en" | "id",slug:string) => {
  const [UnitTypeData, setUnitType] = useState<UnitTypeItem[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUnitTypeList(lang,slug) ;
        setUnitType(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang,slug]);

  return { UnitTypeData, isLoading };
};