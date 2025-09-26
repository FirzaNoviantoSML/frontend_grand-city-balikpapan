// ----- Entity types -----
export type Thumbnail = {
  id: number;
  documentId: string;
  url: string; // contoh: "/uploads/Image_News_Hayfield_900x900_1_3fd8e0ff60.jpg"
  name: string; // contoh: "Image-News-Hayfield-900x900-1.jpg"
};

export type NewsItem = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string; // format "YYYY-MM-DD", bisa pakai Date kalau mau diparse
  thumbnail: Thumbnail;
};

// ----- Meta/pagination -----
export type Pagination = {
  start:number,
  limit:number,
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

// ----- Response shape (spesifik untuk NewsItem) -----
export type NewsResponse = {
  data: NewsItem[];
  meta: Meta;
};

// ----- Versi generic reusable -----
export type StrapiPaginatedResponse<T> = {
  data: T[];
  meta: {
    pagination: Pagination;
  };
};

// Contoh pakai generic:
// const res = (await fetch(url).then(r => r.json())) as StrapiPaginatedResponse<NewsItem>;
