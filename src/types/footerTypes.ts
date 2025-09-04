// ----- Entity Types -----
export type Project = {
  id: number;
  title: string;
  link: string;
};

export type Image = {
  id: number;
  documentId: string;
  url: string;   // contoh: "/uploads/tentangkami_konsepbanner_06baf83e11.jpg"
  name: string;  // contoh: "tentangkami-konsepbanner.jpg"
};

export type Footer = {
  id: number;
  documentId: string;
  address: string;       // bisa multiline pakai \n
  link_map: string;      // iframe embed Google Maps
  phone_number: string;  // contoh: "05428810999"
  project: Project[];
  image: Image;
};

// ----- Meta -----
export type Meta = Record<string, never>; 
// karena meta kosong, lebih aman dikasih tipe object kosong

// ----- Response Shape -----
export type ContactResponse = {
  data: Footer;
  meta: Meta;
};
