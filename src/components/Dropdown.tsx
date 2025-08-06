// components/Dropdown.tsx
'use client'

import { useState } from 'react'

export default function Dropdown() {
  const [open, setOpen] = useState(false)
  const [selected,setSelected] = useState("Grand City Balikpapan")

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-56 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
      >
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
        <div className="absolute left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-gray-500 ring-opacity-5">
          <div>
            <a href="https://www.grandcitybalikpapan.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 m-1 hover:rounded-md" onClick={() =>setSelected("Grand City Balikpapan")}>
              Grand City Balikpapan
            </a>
            <a href="https://www.grandwisatabekasi.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 m-1 hover:rounded-md" onClick={() =>setSelected("Grand Wisata Bekasi")}>
              Grand Wisata Bekasi
            </a>
            <a href="https://www.sinarmasland.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 m-1 hover:rounded-md" onClick={() =>setSelected("Sinarmas Land Indonesia")}>
              Sinarmas Land Indonesia
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
