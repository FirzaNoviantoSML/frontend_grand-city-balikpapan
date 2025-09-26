"use client";
import { useRoutes } from "@/hooks/navigation/useRoutes";
import { useClickOutside } from "@/hooks/useClickOutside";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { FiSearch } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { useEffect, useRef, useState,FormEvent } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonChangeLanguage from "./ButtonChangeLanguage";
import HeaderMobileView from "./HeaderMobileView";
import { useLanguage } from "@/contex/LanguageContext";
import { useGetConceptList } from "@/hooks/conceptList/useRoutes";
import { useGetDevelopmentTypeThumbnailList } from "@/hooks/developmentsList/useRoutes";
import { usePathname } from "next/navigation";
import { BiSolidChevronLeft } from "react-icons/bi";
import { useSearch } from "@/hooks/search/useSearch";

const Header = () => {
  const url = usePathname();
  const urlIndex = url.split("/");
  const { routes, handleToggleDropdown, activeDropdown } = useRoutes();
  const {handleSearch, setQuery,query} = useSearch("");
  const [isActiveMenuMobile, setisActiveMenuMobile] = useState<boolean>(false);
  const refDropdown = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const { language } = useLanguage();
  const { conceptData } = useGetConceptList(language);
  const { developmentTypeData } = useGetDevelopmentTypeThumbnailList(language);

  useClickOutside(
    refDropdown,
    () => handleToggleDropdown(""),
    !!activeDropdown
  );

    const handleSubmitQueryInput = (e: FormEvent) => {
    handleSearch(e);
    setQuery("")
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (
    (urlIndex[1] === "residential" || "commercial") &&
    urlIndex.length === 4
  ) {
    return (
      <div className="bg-[#C4C1A4] h-11 text-white text-sm fixed top-0 left-0 right-0 z-50 w-full">
        <Link
          href={`/residential/${urlIndex[2]}`}
          className="block leading-[44px] px-3"
        >
          <BiSolidChevronLeft className="inline align-middle mr-1" />
          <span className="inline align-middle">
            {`Back To ${urlIndex[2]}`}
          </span>
        </Link>
      </div>
    );
  }

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50  w-full transition-all duration-300 shadow-md p-0 "
      )}
    >
      {/* === DESKTOP HEADER === */}
      <div className="hidden xl:flex items-center md:px-20 bg-amber-50 py-3">
        <Link href="/" className="flex gap-x-2 items-center">
          <Image
            width={80}
            height={80}
            src="/logo-grandcitybalikpapan.png"
            alt="logo Grand City Balikpapan"
            priority
            className="h-10 object-contain w-auto" // <- kunci tinggi logo
          />
        </Link>

        <div className="flex justify-between items-center gap-4 w-[80vw] px-2 ml-4">
          <AnimatePresence>
              <motion.ul
                initial={{ opacity: 0, y: 0, x: 0 }} // posisi awal (transparan + agak ke atas)
                animate={{ opacity: 1, y: 0, x: 0 }} // animasi masuk
                exit={{ opacity: 0, y: 0, x: 0 }} // animasi keluar
                transition={{ duration: 1, ease: "easeInOut" }}
                className="flex items-center gap-x-5 h-full"
              >
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
                        route.label === "Concept" ||
                        route.label === "Developments"
                          ? "#" // cegah redirect langsung
                          : route.href
                      }
                      onClick={
                        route.label === "Concept" ||
                        route.label === "Developments"
                          ? (e) => {
                              e.preventDefault(); // cegah reload
                              handleToggleDropdown(route.label); // toggle dropdown
                              console.log(
                                "ini jalanin button headers",
                                activeDropdown
                              );
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
                                    className="mb-4 hover:scale-110 duration-300  transition-transform"
                                  />
                                  <p
                                    style={{ color: item.color }}
                                    className="hover:text-red-500"
                                  >
                                    {item.title}
                                  </p>
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
                              <Link
                                key={index}
                                href={`/${item.slug}`}
                                onClick={route.onClick}
                              >
                                <div className="text-neutral-500 hover:text-orange-500 text-center text-xl font-semibold">
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${item.thumbnail.url}`}
                                    alt={item.thumbnail.name}
                                    width={300}
                                    height={300}
                                    className="w-[350px] h-[200px] rounded-2xl object-cover object-bottom hover:brightness-90 duration-500 transition-normal"
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
              </motion.ul>
          </AnimatePresence>
          <div className={`flex items-center justify-end `}>
              <div className="flex items-center justify-center">
                <form
                onSubmit={handleSubmitQueryInput}>
                <input
                   value={query}
                onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="
          w-40                /* ukuran awal */
          focus:w-72          /* melebar saat fokus */
          transition-all       /* aktifkan animasi */
          duration-300         /* lama animasi */
          ease-linear          /* gaya animasi */
          px-3 py-1 
          border border-gray-300 
          focus:bg-white
          rounded-sm 
          outline-none
          focus:border-amber-800
          text-sm
        "
                />
                </form>
              </div>
          </div>
        </div>
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
            className="h-7"
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
