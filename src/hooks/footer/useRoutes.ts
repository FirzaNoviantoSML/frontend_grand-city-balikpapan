import {getFooter} from "@/api/footer/getFooter"
import { useEffect, useState } from "react";
import {Footer} from "@/types/footerTypes"

export const useGetFooter = (lang: "en" | "id") => {
  const [footerData, setFooterData] = useState<Footer>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFooter(lang) ;
        setFooterData(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { footerData, isLoading };
};