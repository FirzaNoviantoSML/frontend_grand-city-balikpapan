"use client";
import React from "react";
import { useLanguage } from "@/contex/LanguageContext";
import { useGetDevelopmentThumbnailList } from "@/hooks/development/useRoutes";
import Image from "next/image";
import Link from "next/link";

const CommercialOthers = ({ slug }: { slug: string }) => {
  const { language } = useLanguage();
  const { developmentData, isLoading } = useGetDevelopmentThumbnailList(
    language,
    "Commercial"
  );

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="bg-[#EEEEEE] p-12">
      <div className="text-center mb-6 text-2xl font-bold text-amber-900">
        <p className="inline ">
          {language === "en" ? "Other Commercial" : "Komersial Lainnya"}
        </p>
      </div>
      <div className="flex justify-center gap-12">
        {developmentData
          ?.filter((item, index) => item.slug !== slug && index < 3)
          .map((item, index) => {
            return (
              <Link
                href={`${item.slug}`}
                key={index}
                className="
                                group relative w-[20%] h-[45vh] md:h-[20vh] lg:h-[30vh]
                                rounded-xl shadow-2xl bg-white overflow-hidden
                                transition-transform duration-300 ease-out
                                hover:scale-[1.03] focus-visible:scale-[1.03]
                                transform-gpu"
              >
                <div className="relative w-full h-[70%]  ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                    fill
                    alt={item.title}
                    className="object-cover object-center rounded-t-xl"
                  />
                </div>
                <div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.logo.url}`}
                    width={150}
                    height={150}
                    alt={item.title}
                    className="object-cover object-center mx-auto py-2 group"
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CommercialOthers;
