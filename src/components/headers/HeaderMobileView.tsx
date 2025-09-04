"use client"
import { useRef } from "react";
import { useRoutes } from "@/hooks/navigation/useRoutes"
import SlideIn from "@/components/animate/SlideIn";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
// import { useGetAllUnit } from "@/hooks/units/useGetAllUnits";
import Image from "next/image";
import { useLanguage } from "@/contex/LanguageContext";
import ButtonChangeLanguage from "./ButtonChangeLanguage";
// import { useSearch } from "@/hooks/useSearch";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

interface HeaderMobileProps {
  isOpen: boolean;
  onClose: () => void;
  isScroll: boolean;
}

const HeaderMobileView: React.FC<HeaderMobileProps> = ({
  isOpen,
  isScroll,
  onClose,
}) => {
    const { routes, activeDropdown, handleToggleDropdown  } = useRoutes();
    // const { handleChange, handleSearch, query } = useSearch("");
    const refDropdown = useRef<HTMLDivElement>(null);
    // const {unitData} = useGetAllUnit()

    const handleClose = () => {
    handleToggleDropdown()
    onClose()
  }

   const {language} = useLanguage()


    return (
    <SlideIn
      isOpen={isOpen}
      widthFull
      position="right"
      className={clsx("px-4", isScroll ? "" : "py-4")}
    >
      <div className="flex justify-between items-center">
        <Image
        src="/logo-grandcitybalikpapan.png"
        alt="logo Grand City Balikpapan"
        width="20"
        height={10}
        />
        <div className="flex gap-6">
          <ButtonChangeLanguage />
          <button
            onClick={onClose}
            className="bg-primary-blue p-3 rounded-full text-white md:hidden flex"
          >
            <FaBarsStaggered size={25} />
          </button>
        </div>
      </div>

      <nav className="flex flex-col gap-4 px-3 text-white mt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(e);
            onClose()
            
          }}
          className="flex justify-between items-center border-b pb-4"
        >
          {/* <input
            type="text"
            className="outline-none w-full"
            placeholder={language === "en"?"Search":"Cari"}
            autoComplete="off"
            value={query}
            onChange={handleChange}
          /> */}
          <IoSearch size={20} className="cursor-pointer" />
        </form>

        {routes.map((route, idx) => (
          <div key={route.label} className={routes.length - 1 === idx ? "" : "border-b"}>
                  <Link
                    href={route.link}
                    onClick={route.onClick ? route.onClick : handleClose}
                    className={clsx(
                      "text-xl pb-4 text-gray-400 hover:text-white transition-all duration-200",
                      route.active ? "font-semibold text-white" : " font-medium",
                    )}
                  >
              <div className="flex justify-start items-center">
                  {route.label}
                  {route.icon && <route.icon />}
              </div>
                </Link>

          {activeDropDown && (route.label === "Developments" || route.label === "Development"  ) && (
          <motion.div
            ref={refDropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-1 top-14 left-[33%] min-w-28 rounded-b-lg p-2 text-gray-400"
          >
           { (unitData ?? []).map((item, index) => (
            <Link
              key={index}
              href={`/developments/${item.slug}`}
              onClick={handleClose}
            >
              <div className="flex justify-start gap-2 ">
                <div className="w-[50px] h-[50px]  relative ">
                <Image
                alt={item.unit_name}
                src={`${item.banner.url}`}
                fill
                className="rounded-md object-cover"
                />
                </div>
                <div className="flex justify-center flex-col">
                  <div className="font-bold">
                  {item.unit_name}
                </div>
                <div className="text-sm">
                {item.development}
                </div>
                </div>
              </div>
            </Link>
          ))}
          </motion.div>
        )}   
      
          </div>
        )
        )}
      
        
      </nav>
    </SlideIn>
  );
}

export default HeaderMobileView