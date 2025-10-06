"use client";
import { useLanguage } from "@/contex/LanguageContext";
import { useGetFacilites } from "@/hooks/facilityList/useRoutes";
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { useIsMobile } from "@/libs/useIsMobile";

const FacilityList = () => {
  const { language } = useLanguage();
  const { facilitesData, isLoading } = useGetFacilites(language);
  const isMobile = useIsMobile();

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="flex justify-center px-4">
      <div>
        {facilitesData?.map((item, index) => {
          return (
            <div key={index} className="md:grid grid-cols-2 md:gap-8">
              {isMobile ? (
                <div className="pb-8">
                  <Link
                  href={`/facilities/${item.slug}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                      alt={item.thumbnail_image.name}
                          width={500}
                          height={200}
                          className="rounded-2xl w-[450] h-[220] object-cover"
                    />
                  </Link>
                  <div className="flex items-center">
                    <div className="mt-2">
                      <p className=" text-xl font-bold text-amber-800">
                        {item.title}
                      </p>
                      <p className="w-12 border-b-2 border-orange-500 pb-2 mb-2"></p>
                      <Link
                        href={`/facilities/${item.slug}`}
                        className="text-orange-500"
                      >
                        <p className="flex justify-start items-start text-xs">
                          See Details
                          <MdChevronRight className="mt-1" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    {index % 2 === 0 ? (
                      <Link
                  href={`/facilities/${item.slug}`}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                          alt={item.thumbnail_image.name}
                         width={500}
                        height={200}
                        className="rounded-2xl w-[450] h-[250] hover:scale-105 duration-300"
                        />
                      </Link>
                    ) : (
                      <div className="flex items-center h-[250px] ">
                        <div>
                          <p className=" text-2xl font-bold text-amber-800 pb-2">
                            {item.title}
                          </p>
                          <p className="w-12 border-b-4 border-orange-500 pb-4 mb-2"></p>
                          <Link
                            href={`/facilities/${item.slug}`}
                            className="text-orange-500"
                          >
                            <p className="flex justify-center items-start">
                              See Details
                              <MdChevronRight className="mt-1" />
                            </p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {index % 2 === 1 ? (
                       <Link
                  href={`/facilities/${item.slug}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail_image.url}`}
                      alt={item.thumbnail_image.name}
                      width={500}
                      height={200}
                      className="rounded-2xl w-[450] h-[250] hover:scale-105 duration-300"
                      />
                  </Link>
                    ) : (
                      <div className="flex items-center h-[250px] ">
                        <div>
                          <p className=" text-2xl font-bold text-amber-800">
                            {item.title}
                          </p>
                          <p className="w-12 border-b-4 border-orange-500 pb-4 mb-2"></p>
                          <Link
                            href={`/facilities/${item.slug}`}
                            className="text-orange-500 "
                          >
                            <p className="flex justify-start items-center">
                              See Details
                              <MdChevronRight className="mt-1" />
                            </p>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacilityList;
