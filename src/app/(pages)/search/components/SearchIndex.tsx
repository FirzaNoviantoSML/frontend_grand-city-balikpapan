"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useGetSearchData, useSearch } from "@/hooks/search/useSearch";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contex/LanguageContext";
import Image from "next/image";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";

const SearchIndex = () => {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("q") || "";
  const initialPage = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string)
    : 1;

  const [page, setPage] = useState<number>(initialPage);

  const { setQuery, query, handleSearch } = useSearch(initialSearch);
  const { dataSearch, isLoading, metadata } = useGetSearchData(
    initialSearch,
    page,
    language
  );

  useEffect(() => {
    setQuery(initialSearch);
  }, [initialSearch, setQuery]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <div className="flex justify-center bg-[#FFFCE4] mt-16">
        <div className=" flex justify-start flex-col min-h-[80vh] w-[80%] gap-12 my-12">
          <div className="border-b-1 border-neutral-200">Search</div>
          <div>
            {dataSearch&& dataSearch?.map((item, index) => {
              return (
                <Link 
                href={item.redirectUrl}
                key={index} className="grid grid-cols-5 gap-4 px-2 border-b-1 border-neutral-200 py-2">
                  <div className="relative h-[130px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail}`}
                      alt={item.name_thumbnail}
                      fill
                      className="relative object-center object-cover"
                    />
                  </div>
                  <div className="col-span-4 flex justify-start flex-col">
                    <p className="text-2xl text-amber-600 font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm text-neutral-400">{item.type}</p>
                    <p>{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center">
          {metadata!.totalPages > 1 && (
            <Pagination
              page={metadata?.currentPage || 1}
              setPage={setPage}
              totalPage={metadata?.totalPages || 8}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchIndex;
