export type MenuItem = {
  type?: "groupmenu" | "submenu" | "bottommenu" | "sidemenu";
  name: string;
  link: string;
  title?: string;
  menu?: MenuItem[];
  icon?: string;
  img?: string;
  desc?: string;
  children?: MenuItem[];
};

export const HEADER_MENU: MenuItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
    children: [
      {
        type: "submenu",
        name: "About Kota Wisata",
        link: "/about",
      },
    ],
  },
  {
    name: "Developments",
    link: "/developments",
    children: [
      {
        type: "submenu",
        name: "Residential",
        link: "/developments/residential",
      },
      {
        type: "submenu",
        name: "Commercial",
        link: "/developments/commercial",
      },
      {
        type: "submenu",
        name: "Masterplan",
        link: "/developments/masterplan",
      },
    ],
  },
  {
    name: "Facilities",
    link: "/facilities",
  },
  {
    name: "News & Events",
    link: "/news",
  },
  {
    name: "Access",
    link: "/access",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "E-Catalog",
    link: "/catalog",
  },
];
