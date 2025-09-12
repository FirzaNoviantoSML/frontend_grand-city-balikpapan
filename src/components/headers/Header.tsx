"use client";
import { useRoutes } from "@/hooks/navigation/useRoutes";
import { useClickOutside } from "@/hooks/useClickOutside";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { FiSearch } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonChangeLanguage from "./ButtonChangeLanguage";
import HeaderMobileView from "./HeaderMobileView";
import {useLanguage} from "@/contex/LanguageContext"
import {useGetConceptList} from "@/hooks/conceptList/useRoutes"
import {useGetDevelopmentTypeThumbnailList} from "@/hooks/developmentsList/useRoutes"

const Header = () => {
  const { routes,handleToggleDropdown,activeDropdown } = useRoutes();
  const [query, setQuery ]  = useState("");
  const [isActiveMenuMobile, setisActiveMenuMobile] = useState<boolean>(false);
  const refDropdown = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const {language} = useLanguage()
  const {conceptData} = useGetConceptList(language)
  const {developmentTypeData} = useGetDevelopmentTypeThumbnailList(language)
  useClickOutside(refDropdown, () => handleToggleDropdown(""), !!activeDropdown);
    useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
  <nav
    className={clsx(
      "fixed top-0 left-0 right-0 z-50  w-full transition-all duration-300 shadow-md p-0"
    )}
  >
    {/* === DESKTOP HEADER === */}
    <div className="hidden xl:flex items-center justify-between md:px-20 bg-amber-50 py-2">
      <Link href="/" className="flex gap-x-2 items-center">
        <Image
          width={220}
          height={220}
          src="/logo-grandcitybalikpapan.png"
          alt="logo Grand City Balikpapan"
          priority
          className="h-12 w-auto"   // <- kunci tinggi logo
        />
      </Link>

      <ul className="flex items-center gap-x-5 h-full">
        {routes.map((route) => (
          <li
            key={route.href}
            className={clsx(
              "text-sm hover:text-primary/80 gap-x-1 dropdown-container font-extrabold",
              route.active
                ? "text-orange-500"
                : route.isOpen
                ? "text-amber-800"
                : "text-neutral-500 hover:text-amber-800"
            )}
          >
          <Link
            target={route.target}
            href={
              route.label === "Concept" || route.label === "Developments"
                ? "#" // cegah redirect langsung
                : route.href
            }
            onClick={
              route.label === "Concept" || route.label === "Developments"
                ? (e) => {
                    e.preventDefault(); // cegah reload
                      handleToggleDropdown(route.label); // toggle dropdown
                    console.log("ini jalanin button headers",activeDropdown)
                  }
                : undefined
            }
            className="flex items-center cursor-pointer"
          >
            {route.label}
            {route.icon && <route.icon className="text-2xl" />}
          </Link>

            {/* Dropdown */}
            {route.isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 top-full w-screen flex items-center justify-center bg-amber-50 shadow-md py-5"
              >
                {route.label === "Concept" && (
                  <div>
                    <div className="flex justify-center gap-8">
                      {conceptData?.map((item, index) => (
                        <Link
                          onClick={route.onClick}
                          href={`/concept/${item.slug}`}
                          key={index}
                          className="bg-amber-50 py-6 px-16 text-center rounded-2xl shadow-md"
                        >
                          <Image
                            alt={item.icon.url}
                            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.icon.url}`}
                            height={100}
                            width={100}
                            className="mb-4"
                          />
                          <p style={{ color: item.color }}>{item.title}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-t-neutral-200 text-md text-neutral-500 font-light text-center mt-6">
                      <Link
                        onClick={route.onClick}
                        href="/concept"
                        className="flex justify-center items-center pt-3 gap-2"
                      >
                        <p>View All Concept</p>
                        <IoIosArrowRoundForward className="mt-1" />
                      </Link>
                    </div>
                  </div>
                )}

                {route.label === "Developments" && (
                  <div className="flex justify-center gap-12">
                    {developmentTypeData?.map((item, index) => (
                      <Link key={index} href="#">
                        <div className="text-neutral-500 hover:text-orange-500 text-center text-xl font-semibold">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail.url}`}
                            alt={item.thumbnail.name}
                            width={600}
                            height={300}
                            className="w-[350px] h-[200px] rounded-2xl"
                          />
                          {item.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </li>
        ))}
      </ul>

      <section className="hidden xl:flex gap-4 items-center">
        <div className="border-r-2 border-r-gray-400 min-h-7" />
        <ButtonChangeLanguage />
      </section>
    </div>

    {/* === MOBILE HEADER === */}
    <div className="flex xl:hidden items-center  md:px-20 bg-amber-50 px-2 py-4">
      <Link href="/" className="flex-1 flex justify-center">
        <Image
          width={150}
          src="/logo-grandcitybalikpapan.png"
          alt="logo Grand City Balikpapan"
          height={150}
        />
      </Link>
      <button
        onClick={() => setisActiveMenuMobile(true)}
        className="text-gray-900 "
      >
        <MdMenu size={30} />
      </button>
    </div>

    {/* === MOBILE SIDEBAR === */}
    <HeaderMobileView
      isOpen={isActiveMenuMobile}
      isScroll={isScroll}
      onClose={() => setisActiveMenuMobile(false)}
      concept={conceptData!}
      development={developmentTypeData!}
    />
  </nav>
);

};

export default Header;