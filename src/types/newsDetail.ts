// ---- Gambar/asset dari Strapi ----
export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
  image?: RichTextImage;
}

export interface RichTextChild {
  type: string;
  text?: string;
  url?: string;
  image?: RichTextImage;
  children?: RichTextChild[];
}

export interface RichTextImage {
  name: string;
  alternativeText: string;
  url: string;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  createdAt: string;
  updatedAt: string;
}

// ---- Item utama (contoh: Forestville) ----
export interface NewsItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: RichTextBlock[];
  date:string ;
}

// ---- Wrapper response koleksi + pagination ----
export interface NewsResponse {
  data: NewsItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
