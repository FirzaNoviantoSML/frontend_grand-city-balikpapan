/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from "qs";
import { axiosInstance } from "@/libs/axios";

export default async function getSearchItemsData(
  inVar: string,
  lang:string,
  page: number = 1,
  pageSize: number = 8
) {
  const queryCluster = qs.stringify({
  locale: lang,
    filters: {
      $or: [
        { title: { $containsi: inVar} },
        { thumbnail_description: { $containsi: inVar } },
      ],
    },
  fields: [
    "title",
    "slug",
    "thumbnail_description",
    "development_type"
  ],
  populate: {
    thumbnail_image: {
      fields: ["url", "name"]
    },
  }
}
);

  const queryNewsEvent = qs.stringify({
    locale: lang,
        filters: {
      $or: [
        { title: { $containsi: inVar} },
        { content: { $containsi: inVar } },
      ],
    },
    sort:["date:desc"],
    fields:["title","slug","date","content"],
    populate:{
        thumbnail:{
            fields:["url","name"]
        }
    },
}
);

  try {
    const [responseClusters, responseNews] = await Promise.all([
      axiosInstance.get("/developments?" + queryCluster),
      axiosInstance.get("/content-news-promos?" + queryNewsEvent),
    ]);


    // Mapping Data Cluster
    const searchDataClusters = responseClusters.data?.data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.thumbnail_description,
      slug: item.slug,
      type: item.development_type,
      redirectUrl: `/${
        item.development_type == "Residential" ? "residential" : "commercial"
      }/${item.slug}`,
      thumbnail:item.thumbnail_image.url,
      name_thumbnail:item.thumbnail_image.name,
    }));

    function extractTextFromRichText(content: any[]): string {
      if (!Array.isArray(content) || content.length === 0) return "";
      for (const block of content) {
        if (block.children) {
          for (const child of block.children) {
            if (child.type === "text" && child.text) {
              return child.text; // Ambil teks pertama yang tersedia
            }
          }
        }
      }
      return "";
    }

    const searchDataNews = responseNews?.data?.data?.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: extractTextFromRichText(item.content), // Ambil teks pertama dari rich_text
      slug: item.slug,
      type: "News & Promo",
      thumbnail:item.thumbnail.url,
      name_thumbnail:item.thumbnail.name,
      redirectUrl: `/news-promo/${item.slug}`, // Redirect untuk News
    }));

    const allData = [...searchDataClusters, ...searchDataNews];
    

    const metadata = {
      currentPage: page,
      pageSize: pageSize,
      totalItems:
        responseClusters.data.meta.pagination.total +
        responseNews.data.meta.pagination.total,
      totalPages: Math.ceil(
        (responseClusters.data.meta.pagination.total +
          responseNews.data.meta.pagination.total) /
          pageSize
      ),
    };
    return {
      data: allData.sort((a, b) => a.title.localeCompare(b.title)),
      
      metadata,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
