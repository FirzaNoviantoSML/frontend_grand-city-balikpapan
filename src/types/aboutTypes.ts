export type Media = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};

export type AboutData = {
  id: number;
  documentId: string;
  description: string;
  link_video: string;
  comprehensive_masterplan_description: string;
  hero_banner: Media;
  thumbnail_video: Media;
  masterplan_image: Media;
};

export type AboutResponse = {
  data: AboutData;
  meta: Record<string, unknown>;
};
