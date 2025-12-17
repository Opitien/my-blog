// src/app/components/layout/Header.tsx
"use client";

import { Search } from "lucide-react";
import { useState } from "react";

const navItems = [
  "DESTINATIONS",
  "FOOD",
  "WELL BEING",
  "SPORT",
  "FAMILY",
  "LIFESTYLE",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 sm:px-6 py-2 sm:py-6">
        {/* Logo */}
        <div className="text-overlay-text text-base sm:text-lg leading-tight text-white ">
          <span className="italic block">Yourtravelblog</span>
          <span className="ml-8 font-semibold">by Opitien</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex items-center gap-2 text-lg sm:text-sm tracking-[0.18em] text-overlay-text text-white ">
            {navItems.map((item) => (
              <button
                key={item}
                className="uppercase hover:opacity-80 transition-opacity"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Search */}
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center bg-[rgba(0,0,0,0.7)]"
          >
            <Search className="h-4 w-4 text-white  text-overlay-text" />
          </button>

          {/* CTA */}
          <button className="inline-flex h-10 items-center bg-black px-5 text-[10px] sm:text-xs font-semibold tracking-[0.14em] text-white uppercase text-center">
            GET YOUR 120$ CHRISTMAS GIFT
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 items-end"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-4 bg-white" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden bg-[rgba(0,0,0,0.85)] text-overlay-text">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-4">
            <nav className="flex flex-col gap-3 text-sm tracking-[0.18em]">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="uppercase text-left w-full"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3 pt-3 border-t border-white/20">
              <button
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center bg-[rgba(0,0,0,0.7)]"
              >
                <Search className="h-4 w-4 text-overlay-text" />
              </button>
              <button className="flex-1 h-9 bg-black text-[10px] font-semibold tracking-[0.14em] uppercase text-white">
                GET YOUR 120$ CHRISTMAS GIFT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
