export type DevelopmentResponse = {
  data: Development[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Development = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  thumbnail_description: string;
  thumbnail_image: Media;
  logo: Media;
};

export type Media = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};
