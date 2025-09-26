"use client"
import {useState,useEffect} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { redirect } from "next/navigation";
import Link from "next/link";

interface PaginationProps {
  page: number;
  setPage: (page: (prev: number) => number) => void;
  totalPage: number;
}



const Pagination = ({ page, totalPage }: PaginationProps) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  segments.pop(); // buang 'slug-lama'
  const newPath = '/' + segments.join('/'); // "/news/slug-baru"
   
  
  const toNewPage = (newPage:number) => {

  const newSegments = pathname.split('/').filter(Boolean);
  newSegments.pop(); // buang 'slug-lama'
  newSegments.push(newPage.toString()); // ganti dengan slug baru
  const Path = '/' + newSegments.join('/'); // "/news/slug-baru"
  
  redirect(Path)
   }

   const [paginationNumber,setPaginationNumber] = useState<number[]>([])
  
   useEffect(() => {
  // Membuat array dengan panjang 7, lalu memetakannya ke nomor halaman
  const newPagination = Array.from({ length: 7 }, (_, index) => {
    // Menghitung offset dari -3 sampai +3 (index 0 -> -3, index 1 -> -2, dst.)
    const potentialPage = page - 3 + index;

    // Memeriksa apakah halaman valid (antara 1 dan totalPage)
    if (potentialPage > 0 && potentialPage <= totalPage) {
      return potentialPage;
    }

    // Jika tidak valid, kembalikan 0, sama seperti logika awal Anda
    return 0;
  });
  const newArray = newPagination.filter(number => number !== 0);
  setPaginationNumber(newArray);
}, [page, totalPage]);


  return (
      <div className="flex items-center  gap-4 mt-4">
        <Link
      href={page > 1?`${newPath}/${page-1}`:`${newPath}/${page}`}>
      <button
        className="text-primary px-4 py-2 rounded-lg duration-100 hover:bg-primary/5"
      >
        <MdKeyboardArrowLeft size={25} />
      </button>
      </Link>
      {paginationNumber.map((number) => {
        return(
          <Link
        key={number}
        href={`${newPath}/${number}`}
        className="hidden lg:flex">
        <button
          className={`px-4 py-2 rounded-lg ${
            page === number ? "bg-secondary text-primary" : "bg-gray-200"
          }`}
          onClick={() => toNewPage(number)}
        >
          {number}
        </button>   
        </Link>)
      })}
      <Link
      href={page < totalPage?`${newPath}/${page+1}`:`${newPath}/${page}`}
      >
      <button
        className=" text-primary px-4 py-2 rounded-lg duration-100 hover:bg-primary/5"
      >
        <MdKeyboardArrowRight size={25} />
      </button>   
      </Link>
    </div>
  );
};

export default Pagination;
