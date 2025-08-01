"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export const useRoutes = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleToggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

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
        label: "Home",
        href: "/",
        active: pathname === "/",
      },
      {
        label: "About Us",
        href: "/about",
        active: pathname.startsWith("/about"),
      },{
        label: "Concept",
        href: "/concept",
        active: pathname.startsWith("/concept"),
        icon: RiArrowDropDownLine,
        onClick: () => handleToggleDropdown("concept"),
        isOpen: activeDropdown === "concept",
      },
      {
        label: "Developments",
        href: "/developments",
        active: pathname.startsWith("/developments"),
        icon: RiArrowDropDownLine,
        onClick: () => handleToggleDropdown("developments"),
        isOpen: activeDropdown === "developments",
      },
      {
        label: "Facilities",
        href: "/facilities",
        active: pathname.startsWith("/facilities"),
      },
      {
        label: "News",
        href: "/news",
        active: pathname.startsWith("/news"),
      },
      {
        label: "Contact Us",
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
    [pathname, activeDropdown]
  );

  return { routes };
};
