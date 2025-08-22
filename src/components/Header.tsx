"use client";
import { useRoutes } from "@/hooks/navigation/useRoutes";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  const { routes } = useRoutes();
  const [handleSearch, setQuery ]  = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const concept = [
    {
        image:"/concept/icon-zone-wood.png",
        label:"Wood Zone",
        color:"#386641",
        slug:"/wood-zone"

    },
    {
        image:"/concept/icon-zone-water.png",
        label:"Water zone",
        color:"#006799",
        slug:"/water-zone"

    },
    {
        image:"/concept/icon-zone-earth.png",
        label:"Earth Zone",
        color:"#8D3802",
        slug:"/earth-zone"

    },
    {
        image:"/concept/icon-zone-fire.png",
        label:"Fire Zone",
        color:"#F26522",
        slug:"/fire-zone"

    },
    {
        image:"/concept/icon-zone-metal.png",
        label:"Metal Zone",
        color:"#6D6E71",
        slug:"/metal-zone"

    },
  ]

  const develoments = [
    {
      image:"/develompments/grandcity-residential.jpg",
      label:"Residentials",
      slug:"residentials"
    },
    {
      image:"/develompments/grandcity-komersial.jpg",
      label:"Commercial",
      slug:"commercial"

    }
  ]

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpenSearch(false);
      }
    };

    if (isOpenSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenSearch, routes]);

  useEffect(() => {
    setIsOpen(routes.some((obj) => obj["isOpen"] === true));
  }, [routes]);

    const handleSubmitQueryInput = (e: FormEvent) => {

    setIsOpenSearch(false);
  };


  return (
    <div>

    <header
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

                  className="absolute left-0 top-full w-screen flex items-center justify-center text-white bg-primary py-5 bg-amber-50 shadow-md"
                >
                  {route.label == "Concept" && (
                    <div>
                      <div className="flex justify-center gap-8">
                        {concept.map((item,index) => {
                            return(
                                <Link
                                onClick={route.onClick}
                                href={`/concept/${item.slug}`}
                                key={index}
                                className="bg-amber-50 py-6 px-16 text-center rounded-2xl shadow-md "
                                >
                                    <Image
                                    alt={item.label}
                                    src={item.image}
                                    height={100}
                                    width={100}
                                    className="mb-4"/>
                                <p style={{ color: item.color }}>{item.label}</p>
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
                        develoments.map((item,index) => {
                          return(
                            <div className="text-neutral-500 hover:text-orange-500 text-center text-xl font-semibold"
                            key={index}>
                              <Image
                              src={item.image}
                              alt={item.label}
                              width={600}
                              height={300}
                              className="w-[350px] h-[200px] rounded-2xl"
                              />
                              {item.label}
                            </div>
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
            <div ref={searchRef} className="flex gap-x-4 items-center">
          <IoMdSearch
            size={23}
          />
          
        </div>
      </div>
    </header>
    <header className={clsx(
        "fixed md:hidden top-0 z-50 max-h-svh w-full transition-all duration-300  shadow-md p-0"
      )}>
        <div className="flex px-6 bg-amber-50 py-2 justify-end-safe gap-32">
        <Link href="/" className="flex gap-x-2 items-center">
          <Image
            width={140}
            height={120}
            src="/logo-grandcitybalikpapan.png"
            alt="logo Kota Wisata"
            priority
          />
        </Link>
        <div>
         =
        </div>
        </div>
    </header>
    </div>
  );
};

export default Header;
