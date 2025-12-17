// src/app/components/homepage/Footer.tsx
"use client";

import React from "react";
import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white relative py-6 px-6 md:px-12">
      <div className="flex justify-between items-center flex-wrap">
        {/* LEFT FOOTER TEXT */}
        <p className="text-gray-400 text-sm">Designed & Developed by XP DESIGN</p>

        {/* RIGHT FOOTER ICONS + COUNTERS */}
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4">
            <FaGlobe className="text-white cursor-pointer hover:text-gray-400" />
            <FaFacebookF className="text-white cursor-pointer hover:text-gray-400" />
            <FaTwitter className="text-white cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-white cursor-pointer hover:text-gray-400" />
          </div>

          {/* Counters */}
          <div className="flex gap-4 ml-4">
            <span className="text-gray-300 text-sm">29k</span>
            <span className="text-gray-300 text-sm">70k</span>
            <span className="text-gray-300 text-sm">140k</span>
            <span className="text-gray-300 text-sm">18k</span>
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
