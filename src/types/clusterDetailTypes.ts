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
export interface ResidentialItem {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: RichTextBlock[];
  information_update_stock_unit: string | null;

  thumbnail_image: StrapiImage | null;
  hero_banner: StrapiImage | null;
  siteplan_gallery: StrapiImage[];     // array gambar
  unit_stock_image: StrapiImage | null;
  gallery: StrapiImage[];              // array gambar
}

// ---- Wrapper response koleksi + pagination ----
export interface ResidentialListResponse {
  data: ResidentialItem[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
