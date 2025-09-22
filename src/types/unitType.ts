// types/unitDetail.ts

export interface UnitDetailResponse {
  data: UnitDetail[];
  meta: {
    pagination: Pagination;
  };
}

export interface UnitDetail {
  id: number;
  documentId: string;
  type: string;                    // "Type 47/72"
  slug: string;                    // "type-47"
  surface_description: string;     // "Surface Area 6x12 Meter"
  gallery: Media[];
  spesifikasi: SpesifikasiComponent[];
  development: DevelopmentSummary; // ringkasan cluster/proyek
}

export interface Media {
  id: number;
  documentId: string;
  url: string;   // contoh: "/uploads/....jpg"
  name: string;
}

export interface SpesifikasiComponent {
  __component: "spesifikasi.spesifikasi";
  id: number;
  title: string | null;       // bisa null
  item: SpesifikasiItem[];
}

export interface SpesifikasiItem {
  id: number;
  name: string;               // "Pondasi", "Dinding", dll.
  description: string;        // "Batu Kali & Beton Bertulang", dst.
}

export interface DevelopmentSummary {
  id: number;
  documentId: string;
  title: string;              // "Forestville"
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
