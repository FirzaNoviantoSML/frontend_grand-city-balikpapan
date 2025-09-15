// Media/file dari Strapi
export interface Media {
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


export interface ConceptDetail {
  id: number;
  documentId: string;
  title: string;
  description: string;
  color: string; // contoh: "#3B5D32"
  content: RichTextBlock[];

  hero_banner: Media | null;
  icon: Media | null;
  content_image: Media | null;
  zone_location_image: Media | null;

  gallery: Media[]; // bisa kosong []
}

// Root response (collection-type)
export interface ZonesResponse {
  data: ConceptDetail[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
