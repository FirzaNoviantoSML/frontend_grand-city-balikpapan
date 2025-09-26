"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LiaWindowClose } from "react-icons/lia";

type PropType = {
  thumbnail_video: string;
  thumbnail_video_name: string;
  url_video: string;
};

const Video: React.FC<PropType> = (props) => {
  const { thumbnail_video, url_video, thumbnail_video_name } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="relative z-20 font-serif px-6 md:px-0">
        <div className="flex justify-center mt-12">
          <div className="relative w-[100%] md:w-[70%] h-[25vh] lg:h-[50vh]">
            <Image
              className="rounded-2xl object-cover shadow-2xl"
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${thumbnail_video}`}
              alt={thumbnail_video_name}
              fill
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white text-amber-600 w-16 h-16 pl-1 rounded-full shadow-lg hover:scale-110 transition cursor-pointer"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-16 right-4 md:right-12 lg:right-4 text-white text-2xl font-bold"
          >
            <LiaWindowClose className="text-4xl cursor-pointer" />
          </button>
          <div className="flex justify-center">
                      <iframe
            src={`https://www.youtube.com/embed/${url_video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-[80vw] h-[30vh] lg:h-[60vh]"
          ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
