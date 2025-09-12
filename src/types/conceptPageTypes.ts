// ===== Image variants di dalam `formats` =====
export interface ImageVariant {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;         // dalam KB (sesuai respons Strapi)
  width: number;
  height: number;
  sizeInBytes?: number; // kadang ada di respons
}

export interface StrapiImageFormats {
  large?: ImageVariant;
  medium?: ImageVariant;
  small?: ImageVariant;
  thumbnail?: ImageVariant;
}

// ===== Hero banner (punya `formats`) =====
export interface HeroBanner {
  id: number;
  documentId: string;
  name: string;
  // Field berikut opsional karena tidak selalu dikirim di contohmu
  url?: string;
  width?: number;
  height?: number;
  alternativeText?: string | null;
  caption?: string | null;
  formats: StrapiImageFormats;
}

// ===== Gambar sederhana (tanpa `formats`) =====
export interface SimpleImage {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

// ===== Data utama halaman =====
export interface ConceptData {
  id: number;
  documentId: string;
  description: string;
  title: string;
  hero_banner: HeroBanner;
  main_banner: SimpleImage;
  zona_area_image: SimpleImage;
}

// ===== Bentuk respons API =====
export interface ConceptResponse {
  data: ConceptData;
  meta: Record<string, unknown>;
}
