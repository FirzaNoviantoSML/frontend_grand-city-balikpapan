export interface HeroBanner {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface DevelopmentPageData {
  id: number;
  documentId: string;
  description: string;
  hero_banner: HeroBanner;
}

export interface ZonePageResponse {
  data: DevelopmentPageData;
  meta: Record<string, unknown>;
}