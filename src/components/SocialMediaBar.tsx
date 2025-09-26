"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

const icons = [
  { id: "instagram", icon: <IoLogoInstagram className="text-2xl text-fuchsia-700" />, href: "https://instagram.com" },
  { id: "facebook", icon: <RiFacebookFill className="text-2xl text-blue-800" />, href: "https://facebook.com" },
  { id: "twitter", icon: <FaXTwitter className="text-2xl text-black" />, href: "https://twitter.com" },
  { id: "linkedin", icon: <FaLinkedinIn className="text-2xl text-blue-900" />, href: "https://linkedin.com" },
  { id: "youtube", icon: <FaYoutube className="text-2xl text-red-600" />, href: "https://youtube.com" },
  { id: "whatsapp", icon: <FaWhatsapp className="text-2xl text-green-600" />, href: "https://wa.me/123456" },
  { id: "contact-us", icon: <AiOutlineMail className="text-2xl text-black" />, href: "/contact-us" }
];

const SocialMediaBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* FAB button */}
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white rounded-full ${isOpen?"p-4":"p-2"} cursor-pointer shadow-lg flex items-center justify-center`}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <IoClose /> : <div className="grid grid-cols-2">
            <IoLogoInstagram className="text-md text-fuchsia-700" />
            <FaWhatsapp className="text-md text-green-600" />
            <LiaFacebook  className="text-md text-blue-800" />
            <MdOutlineMail  className="text-md text-black" />
            </div>}
      </motion.div>

      {/* Icons spread out */}
      <AnimatePresence>
        {isOpen &&
          icons.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, opacity: 0, x: 0, y: -50 }}
              animate={{
                scale: 1,
                opacity: 1,
                // x: (index % 3) * 60 + 60, // atur posisi horizontal
                // y: -Math.floor(index / 3) * 60 - 60, // atur posisi vertikal
                x: index * 70 + 70, // jarak antar icon 70px
                y: -48,
              }}
              exit={{ scale: 0, opacity: 0, x: 0, y:-50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bg-white rounded-full p-3 shadow-md cursor-pointer"
            >
              <Link href={item.href} target="_blank">
                {item.icon}
              </Link>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaBar;
