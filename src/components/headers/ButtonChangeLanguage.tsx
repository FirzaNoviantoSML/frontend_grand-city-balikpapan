"use client";
import { useLanguage } from "@/contex/LanguageContext";
import { useState } from 'react'
import Image from "next/image";

const ButtonChangeLanguage = () => {
  const { setLanguage } = useLanguage();
  const [open, setOpen] = useState(false)
  const [selected,setSelected] = useState("English")

  const handleChangeLanguage = (bahasa:string) => {
    setSelected(bahasa)
    setLanguage(bahasa === "English"? "en":"id")
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-left w-56 rounded-md text-sm font-medium text-neutral-500"
      >
        <div style={{ position: "relative", top:5, width: "15px", height: "10px", marginRight:2 }}>
        <Image
           src={selected === "English"? "/us.png":"/id.png"}
          alt="flag"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
        {selected}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 w-56 rounded-sm shadow-lg bg-[#FDFBE6]  ring-opacity-5 z-10">
          <div className="cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700  m-1 hover:rounded-md" onClick={() =>handleChangeLanguage("English")}>
                English
              </a>
              <a target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700  m-1 hover:rounded-md" onClick={() =>handleChangeLanguage("Bahasa indonesia")}>
                Bahasa Indonesia
              </a>
          </div>
        </div>
      )}
    </div>
  )
};

export default ButtonChangeLanguage;