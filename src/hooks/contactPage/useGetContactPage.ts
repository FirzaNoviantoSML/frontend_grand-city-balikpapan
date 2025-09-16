import {getContactPage} from "@/api/contact/getContactPage"
import {ContactPageData} from "@/types/contactTypes"
import { useEffect, useState } from "react";

export const useGetContactPage = (lang: "en" | "id") => {
  const [contactPageData, setContactPage] = useState<ContactPageData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContactPage(lang) ;
        setContactPage(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { contactPageData, isLoading };
};