export type ThumbnailImage = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};

export type Facilities = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  thumbnail_image: ThumbnailImage;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

export type ItemsResponse = {
  data: Facilities[];
  meta: Meta;
};