export type HomePageData = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link_video: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  thumbnail_video: Media;
  zone_image: Media;
  carousel_banner: CarouselBanner[];
};

export type Media = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};

export type CarouselBanner = {
  id: number;
  title: string;
  link: string;
  hero_banner_landscape: Media;
  hero_banner_portrait: Media;
};

export type Keyword = {
  id: number;
  label: string;
};

// Untuk respon API secara keseluruhan
export type ApiResponse = {
  data: HomePageData;
  meta: Record<string, unknown>;
};
