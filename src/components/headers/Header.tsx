"use client";
import { useRoutes } from "@/hooks/navigation/useRoutes";
import { useClickOutside } from "@/hooks/useClickOutside";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { FiSearch } from "react-icons/fi";
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
        "md:fixed top-0 z-50 max-h-svh w-full transition-all duration-300  shadow-md p-0"
      )}
    >
      <div className="xl:flex items-center justify-between md:px-20 hidden bg-amber-50 py-2">
        <Link href="/" className="flex gap-x-2 items-center">
          <Image
            width={220}
            height={220}
            src="/logo-grandcitybalikpapan.png"
            alt="logo Kota Wisata"
            priority
          />
        </Link>
        <ul className="flex items-center gap-x-5 h-full  ">
          {routes.map((route) => (
            <li
              key={route.href}
              className={clsx(
                "text-sm hover:text-primary/80  gap-x-1 dropdown-container font-extrabold",
                route.active
                  ? "text-orange-500"
                  : route.isOpen ? "text-amber-800"
                  : "text-neutral-500 hover:text-amber-800"
              )}
            >
              <Link
                target={route.target}
                onClick={route.onClick ? route.onClick : () => {}}
                href={route.onClick ? "" : route.href}
                className="flex items-center"
              >
                {route.label}
              
              {route.icon && <route.icon className="text-2xl"/>}
              </Link>
              {route.isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}

                  className="absolute left-0 top-full w-screen flex items-center justify-center bg-primary py-5 bg-amber-50 shadow-md"
                >
                  {route.label == "Concept" && (
                    <div>
                      <div className="flex justify-center gap-8">
                        {conceptData && conceptData.map((item,index) => {
                            return(
                                <Link
                                onClick={route.onClick}
                                href={`/concept/${item.slug}`}
                                key={index}
                                className="bg-amber-50 py-6 px-16 text-center rounded-2xl shadow-md "
                                >
                                    <Image
                                    alt={item.icon.url}
                                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.icon.url}`}
                                    height={100}
                                    width={100}
                                    className="mb-4"/>
                                    <p style={{ color: item.color }}>
                                    {item.title}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="border-t-1 border-t-neutral-200 text-md text-neutral-500 font-light text-center mt-6">
                      <Link
                      onClick={route.onClick}
                      href="/concept"
                      className="flex justify-center items-center pt-3 gap-2">
                        <p>View All Concept</p>
                        <IoIosArrowRoundForward className="mt-1" />
                      </Link>
                    </div>
                    </div>
                  )}
                  {route.label === "Developments" && (
                    <div className="flex justify-center gap-12">
                      {
                        developmentTypeData &&  developmentTypeData.map((item,index) => {
                          return(
                            <Link
                            key={index}
                            href={"#"}>
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
                          )
                        })
                      }
                    </div>
                  ) }
                </motion.div>
              )}
            </li>
          ))}
        </ul>
        <section className="hidden xl:flex gap-4 items-center">
        <div className="border-r-2 border-r-gray-400 min-h-7" />
        <ButtonChangeLanguage />
      </section>
      {/* <HeaderMobileView
      isOpen={isActiveMenuMobile}
      isScroll={isScroll}
      onClose={() => setisActiveMenuMobile(!isActiveMenuMobile)}/> */}
           
      </div>
    </nav>
  );
};

export default Header;
