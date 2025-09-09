export interface HeroBanner {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface GalleryItem {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface FacilityDetail {
  id: number;
  documentId: string;
  title: string;
  description: string;
  hero_banner: HeroBanner;
  gallery: GalleryItem[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface FacilityDetailResponse {
  data: FacilityDetail[];
  meta: {
    pagination: Pagination;
  };
}
