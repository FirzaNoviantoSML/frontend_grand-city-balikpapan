"use client"
import { useRef, useEffect,useState } from "react";
import { useRoutes } from "@/hooks/navigation/useRoutes"
import SlideIn from "@/components/animate/SlideIn";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contex/LanguageContext";
import { MdClose } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import ButtonChangeLanguageMobile from "./ButtonChangeLanguageMobile";
import {Concept} from "@/types/conceptListTypes"

type DevelopmentType = {
    title:string,
    slug:string,
    thumbnail:{
        url:string,
        name:string
    }
}

interface HeaderMobileProps {
  isOpen: boolean;
  onClose: () => void;
  isScroll: boolean;
  concept : Concept[]
  development : DevelopmentType[]
}

const HeaderMobileView: React.FC<HeaderMobileProps> = ({
  isOpen,
  onClose,
  concept,
  development
}) => {
  const { routes, activeDropdown } = useRoutes();
  const refDropdown = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
   const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onClose()

    // tambahkan logika search di sini
  };

  // 🔒 Scroll lock effect
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  return (
    <SlideIn
      isOpen={isOpen}
      widthFull
      position="right"
      className={clsx("px-4 py-4 max-w-full overflow-x-hidden")}
    >
      {/* Header Logo + Close */}
      <div className="flex items-center justify-between w-full">
        <Image
          src="/logo-grandcitybalikpapan.png"
          alt="logo Grand City Balikpapan"
          width={100}
          height={10}
          className="max-w-full h-5"
        />
        <button
          onClick={onClose}
          className="bg-primary-blue p-3 rounded-full text-neutral-500 pr-0 md:pr-12"
        >
          <MdClose size={25} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-3 text-white mt-10 relative">


        {/* Routes */}
 {routes.map((route) => (
  <div key={route.label} className="border-b dropdown-container">
    {route.onClick ? (
      <button
        onClick={route.onClick}
        className={clsx(
          "text-xl text-neutral-500 hover:text-white transition-all duration-200 block",
          route.active ? "font-semibold text-amber-500" : "font-medium"
        )}
      >
        <div className="flex items-center justify-start gap-1">
          {route.label}
          {route.icon && <route.icon />}
        </div>
      </button>
    ) : (
      <Link
        target={route.target}
        href={route.href}
        onClick={onClose}
        className={clsx(
          "text-xl text-neutral-500 hover:text-white transition-all duration-200 block",
          route.active ? "font-semibold text-amber-500" : "font-medium"
        )}
      >
        {route.label}
      </Link>
    )}

    {/* Dropdown Concept */}
    {activeDropdown === "concept" && route.label.toLowerCase().includes("concept") && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="mt-2 flex flex-col gap-1 rounded-b-lg p-2 text-gray-400"
      >
        {concept.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </motion.div>
    )}

    {/* Dropdown Developments */}
    {activeDropdown === "developments" && route.label.toLowerCase().includes("development") && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="mt-2 flex flex-col gap-1 rounded-b-lg p-2 text-gray-400"
      >
        {development.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </motion.div>
    )}
  </div>
))}

                {/* Search form */}
      <form onSubmit={handleSearch} className="relative w-full max-w-md text-neutral-500 ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500 outline-none shadow-sm"
          />
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
    </form>
    <div className="flex justify-center border-t-1 border-neutral-200 pt-3">
    <ButtonChangeLanguageMobile/>
    </div>
      </nav>
    </SlideIn>
  );
}

export default HeaderMobileView;

