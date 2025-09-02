import {getTestimonial} from "@/api/testimonial/getTestimonial"
import { useEffect, useState } from "react";
import {Testimonial} from '@/types/TestimonialTypes'

export const useGetTestimonials = (lang: "en" | "id") => {
  const [testimonial, setTestimonial] = useState<Testimonial[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTestimonial(lang) ;
        console.log("hooks testimonial",response)
        setTestimonial(response);
      } catch (error) {
        console.log("ERROR SAAT FETCH:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  return { testimonial, isLoading };
};