// src/app/components/homepage/Footer.tsx
"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    count: "29",
    href: "https://facebook.com",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    count: "70k",
    href: "https://twitter.com",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    count: "40",
    href: "https://instagram.com",
  },
  {
    label: "Pinterest",
    icon: FaPinterest,
    count: "13k",
    href: "https://pinterest.com",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    count: "168k",
    href: "https://youtube.com",
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  /* Show scroll-to-top after scroll */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-12 pb-16 px-6 md:px-12">
      <div className="flex flex-wrap items-center justify-between gap-6">
        {/* Left text */}
        <p className="text-gray-400 text-sm">
          Designed & Developed by XP DESIGN
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, icon: Icon, count, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex flex-col items-center group"
            >
              <Icon className="text-white transition-colors group-hover:text-gray-400" />
              <span className="text-gray-300 text-sm mt-1">{count}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll to top */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 z-50
          flex h-10 w-10 items-center justify-center
          rounded-full border border-gray-700
          bg-black transition-all
          hover:bg-gray-800
          ${showTop ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
}
