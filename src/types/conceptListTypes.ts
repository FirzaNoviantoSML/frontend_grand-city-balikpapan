export type ConceptResponse = {
  data: Concept[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Concept = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  color: string;
  icon: Media;
  description:string;
};

export type Media = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};
