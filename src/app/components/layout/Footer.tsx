// src/app/components/homepage/Footer.tsx
"use client";

import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaArrowUp, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative pt-12 pb-16 px-6 md:px-12">

<div className="flex justify-between items-center flex-wrap">
  {/* LEFT FOOTER TEXT */}
  <p className="text-gray-400 text-sm">
    Designed & Developed by XP DESIGN
  </p>

  {/* RIGHT FOOTER ICONS + COUNTERS */}
  <div className="flex items-center gap-6 mt-4 lg:mt-0">
    
    {/* Facebook */}
    <div className="flex flex-col items-center">
      <FaFacebookF className="text-white cursor-pointer hover:text-gray-400" />
      <span className="text-gray-300 text-sm mt-1">29</span>
    </div>

    {/* Twitter */}
    <div className="flex flex-col items-center">
      <FaTwitter className="text-white cursor-pointer hover:text-gray-400" />
      <span className="text-gray-300 text-sm mt-1">70k</span>
    </div>

    {/* Instagram */}
    <div className="flex flex-col items-center">
      <FaInstagram className="text-white cursor-pointer hover:text-gray-400" />
      <span className="text-gray-300 text-sm mt-1">40</span>
    </div>

    {/* Pinterest */}
    <div className="flex flex-col items-center">
      <FaPinterest className="text-white cursor-pointer hover:text-gray-400" />
      <span className="text-gray-300 text-sm mt-1">13k</span>
    </div>

    {/* YouTube */}
    <div className="flex flex-col items-center">
      <FaYoutube className="text-white cursor-pointer hover:text-gray-400" />
      <span className="text-gray-300 text-sm mt-1">168k</span>
    </div>

  </div>
</div>


      {/* SCROLL TO TOP BUTTON */}
      <button title="Scroll to top"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-black flex items-center justify-center border border-gray-700 hover:bg-gray-800 transition"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
}
