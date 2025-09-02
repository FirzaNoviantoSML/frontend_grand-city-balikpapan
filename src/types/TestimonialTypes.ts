// Media/file yang dipakai untuk foto profil
export type Media = {
  id: number;
  documentId: string;
  url: string;      // contoh: "/uploads/anna_andriano_1918f89e78.jpg"
  name: string;     // contoh: "anna-andriano.jpg"
};

// Satu item testimoni
export type Testimonial = {
  id: number;
  documentId: string;
  name: string;     // contoh: "Anna Andriano"
  quote: string;    // contoh: "Comfortable, beautiful place. I love this place."
  profile_picture: Media | null; // pakai null kalau bisa kosong di API kamu
};

// Info pagination dari meta
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

// Respon utama
export type TestimonialsResponse = {
  data: Testimonial[];
  meta: Meta;
};
