export type MetadataData = {
  id: number;
  title: string;
  title_image: string;
  description: string;
  image: Media;
  keywords: Keyword[];
};

type Media = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};

type Keyword = {
  id: number;
  label: string;
};