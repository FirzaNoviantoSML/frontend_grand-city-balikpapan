"use client";

import getSearchItemsData from "@/api/search/getSearchItems";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export interface DataSearch {
  id: string;
  title: string;
  description: string;
  slug: string;
  type: string;
  redirectUrl: string;
  thumbnail:string;
  name_thumbnail:string;
}

interface MetadataPagination {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export const useSearch = (defaultValue: string, page: number = 1) => {
  const [query, setQuery] = useState<string>(defaultValue);
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${query}&page=${page}`);

  };

  return { handleSearch, query, setQuery };
};

export const useGetSearchData = (query: string, page: number,lang:string) => {
  const [dataSearch, setDataSearch] = useState<DataSearch[]>();
  const [metadata, setMetaData] = useState<MetadataPagination>();
  const [isLoading, seIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSearchItemsData(query,lang, page);
        setDataSearch(data.data);
        setMetaData(data.metadata);
      } catch (error) {
        console.log("ERROR DALAM HOOKS:", error);
      } finally {
        seIsLoading(false);
      }
    };

    fetchData();
  }, [query, page,lang]);

  return {
    dataSearch,
    metadata,
    isLoading,
  };
};
