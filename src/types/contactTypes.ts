export interface HeroBanner {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface ContactPageData {
  id: number;
  documentId: string;
  description: string;
  title: string;
  marketing_office_address: string;
  marketing_phone: string;
  hero_banner: HeroBanner;
}

export interface ContactPageResponse {
  data: ContactPageData;
  meta: Record<string, unknown>;
}