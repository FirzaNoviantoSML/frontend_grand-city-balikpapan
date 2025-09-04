"use client";
import {useLanguage} from "@/contex/LanguageContext"
import { usePathname } from "next/navigation";
import { useCallback,useMemo, useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const useRoutes = () => {
  const {language} = useLanguage()
  const pathname = usePathname();
  
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleToggleDropdown = useCallback((key: string) => {
  setActiveDropdown((prev) => {
      if (prev === key) {
        return null; // kalau klik dropdown yang sama → tutup
      }
      return key; // kalau beda → ganti aktif
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const routes = useMemo(
    () => [

      {
        label: language === "en" ? "About Us":"Tentang Kami",
        href: "/about",
        active: pathname.startsWith("/about"),
      },{
        label: language === "en" ? "Concept":"Konsep",
        href: "/concept",
        active: pathname.startsWith("/concept"),
        icon: RiArrowDropDownLine,
        onClick: () => handleToggleDropdown("concept"),
        isOpen: activeDropdown === "concept",
      },
      {
        label: language === "en" ? "Developments":"Development",
        href: "/developments",
        active: pathname.startsWith("/developments"),
        icon: RiArrowDropDownLine,
        onClick: () => handleToggleDropdown("developments"),
        isOpen: activeDropdown === "developments",
      },
      {
        label: language === "en" ? "Facilities":"Fasilitas",
        href: "/facilities",
        active: pathname.startsWith("/facilities"),
      },
      {
        label: language === "en" ? "News":"Berita",
        href: "/news",
        active: pathname.startsWith("/news"),
      },
      {
        label: language === "en" ? "Contact Us":"Kontak Kami",
        href: "/contact",
        active: pathname.startsWith("/contact"),
      },
      {
        label: "E-Catalog",
        href: "https://ecatalog.sinarmasland.com",
        target: "_blank",
      },
      {
        label: "Login",
        href: "/Login",
        active: pathname.startsWith("/login"),
      },
    ],
    [handleToggleDropdown,language,pathname, activeDropdown]
  );

  return { routes, activeDropdown, handleToggleDropdown  };
};
