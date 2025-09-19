// Gambar/file media standar
export interface ImageFile {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

// Relasi ke Development (hanya sebagian field)
export interface DevelopmentRef {
  id: number;
  documentId: string;
  slug: string;
}

// Item unit type
export interface UnitTypeItem {
  id: number;
  documentId: string;
  type: string;
  slug:string,
  surface_description: string;
  available: boolean;
  development: DevelopmentRef;
  thumbnail_image: ImageFile;
  gallery: ImageFile[];
}

// Meta pagination bawaan Strapi
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Respons list / collection
export interface UnitTypeListResponse {
  data: UnitTypeItem[];
  meta: {
    pagination: Pagination;
  };
}
