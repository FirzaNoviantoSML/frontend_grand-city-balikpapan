"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contex/LanguageContext";
import Image from "next/image";
import { useIsMobile } from "@/libs/useIsMobile";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useGetClusterDetail } from "@/hooks/clusterDetail/useGetClusterDetail";
import RichTextRenderer from "@/libs/RichText";
import { useGetUnitTypeList } from "@/hooks/unit-type/useGetUnitTypeList";
import { IoChevronForwardSharp } from "react-icons/io5";
import ResidentialGallery from "./ResidentialGallery";
import { LiaWindowClose } from "react-icons/lia";
import ResidentialOthers from "./ResidentialOthers";

type ImagePopUp = {
  name: string;
  url: string;
} | null;

const ResidentialIndex = ({ slug }: { slug: string }) => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const { clusterDetailData, isLoading } = useGetClusterDetail(language, slug);
  const { UnitTypeData, isLoading: isLoadingUnitType } = useGetUnitTypeList(
    language,
    slug
  );
  const [isPopUp, setIsPopUp] = useState<ImagePopUp>(null);

  if (isLoading || isLoadingUnitType) {
    return <div></div>;
  }
  return (
    <div className="mt-14 bg-[#FFFCE4] relative">
      <div className="absolute z-30 md:top-[420] lg:top-96  lg:left-48 top-44 left-8">
        <div className="relative lg:w-38 lg:h-80 w-42 h-12">
          <Image
            src="/background/panelimg.jpg"
            alt="pannel"
            height={500}
            width={500}
            className="object-cover object-right  w-full h-full shadow-[7px_7px_0px_2px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
      <div className="relative">
        {isMobile ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${clusterDetailData?.hero_banner?.url}`}
            alt={clusterDetailData?.hero_banner?.name || "Facility Hero Banner"}
            width={515}
            height={345}
            className="object-cover w-full  h-[200px]  brightness-75"
          />
        ) : (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${clusterDetailData?.hero_banner?.url}`}
            alt={clusterDetailData?.hero_banner?.name || "Facility Hero Banner"}
            width={1440}
            height={450}
            className="object-cover w-full  h-[450px] brightness-75"
          />
        )}
        <div className="absolute bottom-16 md:inset-y-1/2  left-4 md:inset-x-1/12 text-white">
          <div className="flex justify-start items-center">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="text-sm md:text-xl">
                {language === "en" ? "Home" : "Beranda"}
              </Link>
              <MdKeyboardDoubleArrowRight className="text-lg md:text-2xl" />
              <Link href="/residential" className="text-sm md:text-xl">
                {language === "en" ? "Residential" : "Residential"}
              </Link>
            </div>
          </div>
          <p className="font-extrabold text-2xl md:text-5xl">
            {clusterDetailData?.title}
          </p>
        </div>
      </div>
      <div className="px-4 md:px-12 ">
        <div className="relative z-10">
          <div className="mb-8  mt-12 min-h-48 lg:pl-96 font-extralight lg:w-[80%] lg:text-xl">
            <RichTextRenderer content={clusterDetailData?.description || []} />
          </div>
        </div>
        <div className="text-center text-lg md:text-2xl font-bold text-amber-800">
          <p className="inline border-b-4 border-amber-500 pb-2 mb-2">
            Siteplan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:gap-8">
            {clusterDetailData?.siteplan_gallery.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.url}`}
                  alt={item.name || "site plan"}
                  width={1000}
                  height={1000}
                  className="bg-white p-4"
                  onClick={() => setIsPopUp({ url: item.url, name: item.name })}
                />
              );
            })}
          </div>
        </div>
        {/* Popup */}
        {isPopUp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <button
              onClick={() => setIsPopUp(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              <LiaWindowClose className="text-4xl cursor-pointer" />
            </button>
            <div className="relative max-w-4xl w-full px-4 scale-90 flex justify-center ">
              {isPopUp && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${isPopUp.url}`}
                  alt="Full View"
                  width={500}
                  height={500}
                  className="md:-mt-72 lg:mt-0 shadow-lg cursor-pointer bg-neutral-700 border-1 border-neutral-800 w-full md:w-[80vw] "
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="relative bg-[#C5C1A4] overflow-hidden">
        {/* Background tile di kanan */}
        <div
          className="absolute inset-y-0 right-0 w-[400px] bg-repeat [background-size:400px_400px] scale-x-[-1] z-0 pointer-events-none"
          style={{ backgroundImage: "url('/background/bgleaf.jpg')" }}
        />

        {/* Konten di tengah */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
          <div className="text-center text-lg md:text-2xl font-bold text-amber-800">
            <p className="inline border-b-4 border-amber-500 pb-2 mb-2">
              Unit Type & Floor Plan
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {UnitTypeData?.map((item, index) => (
              <Link
                key={index}
                href={`/residential/${clusterDetailData?.slug}/${item.slug}`}
                className="cursor-pointer group block"
              >
                <div className="w-[350px] md:w-[330px] lg:w-[400px] max-w-sm h-[45vh] md:h-[40vh] lg:h-[55vh] rounded-xl shadow-2xl bg-white m-6 cursor-pointer">
                  <div className="relative w-full h-[65%]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                      alt={item.thumbnail_image.name}
                      fill
                      className="object-cover object-center rounded-t-xl"
                    />
                    <div className="absolute inset-x-0 bottom-3 flex justify-center z-10">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          item.available ? "bg-[#86B81B]" : "bg-black/60"
                        } text-white text-xs md:text-sm backdrop-blur-sm`}
                      >
                        {item.available ? "Ready Stock" : "Sold Out"}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between flex-col h-[33%]">
                    <div className="px-4">
                      <div className="flex justify-center mt-2 font-bold text-xl">
                        {item.type}
                      </div>
                      <div className="py-3 text-gray-900 text-md text-center">
                        {item.surface_description}
                      </div>
                    </div>

                    <div className="font-extralight text-sm flex items-center text-amber-600 ml-4">
                      Unit Gallery & Floor Plan
                      <IoChevronForwardSharp className="font-bold" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-8">
          <p className="inline border-b-4 border-amber-500 pb-2 mb-2 text-amber-800 text-lg md:text-2xl font-bold ">
            Unit Stock
          </p>
          <p className="mt-4">
            {clusterDetailData?.information_update_stock_unit}
          </p>
          <div className="flex justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${clusterDetailData?.unit_stock_image?.url}`}
              alt={clusterDetailData?.unit_stock_image?.name || "unit stock"}
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div className="my-12 ">
        <ResidentialGallery
          gallery={clusterDetailData?.gallery}
          language={language}
          title={clusterDetailData?.title}
        />
      </div>
      <div>
        <ResidentialOthers slug={slug} />
      </div>
    </div>
  );
};

export default ResidentialIndex;
