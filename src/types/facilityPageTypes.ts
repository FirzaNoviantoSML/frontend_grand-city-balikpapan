export interface HeroBanner {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface FacilityData {
  id: number;
  documentId: string;
  description: string;
  hero_banner: HeroBanner;
  hero_banner_mobile: HeroBanner;
}

export interface FacilitiesResponse {
  data: FacilityData;
  meta: Record<string, unknown>;
}
