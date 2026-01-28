// src/app/components/layout/Header.tsx
"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "FOOD", href: "/food" },
  { label: "WELL BEING", href: "/well-being" },
  { label: "SPORT", href: "/sport" },
  { label: "FAMILY", href: "/family" },
  { label: "LIFESTYLE", href: "/lifestyle" },
];

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll behavior */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      setScrolled(current > 40);
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow =
      menuOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  /* ESC key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-all duration-300
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        <div className="mx-auto max-w-7xl relative flex items-center px-4 sm:px-6 py-4">
          {/* LOGO */}
          <div className="text-white leading-tight z-20">
            <span className="italic text-sm block">Yourtravelblog</span>
            <span className="font-bold text-sm block">by Opitien</span>
          </div>

          {/* NAV – CENTER */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 text-sm tracking-[0.18em] text-white">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`uppercase relative pb-1 transition-opacity
                    ${active ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="ml-auto flex items-center gap-3 z-20">
            {/* Search */}
            <button
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-black/60 hover:bg-black/40 transition"
            >
              <Search className="h-4 w-4 text-white" />
            </button>

            {/* CTA */}
            <button className="hidden md:inline-flex h-10 items-center rounded-sm bg-black hover:bg-black/70 px-5 text-[10px] font-semibold tracking-[0.14em] text-white uppercase">
              GET YOUR 120$ CHRISTMAS GIFT
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden relative h-8 w-8"
            >
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-6 bg-white transition
                  ${menuOpen ? "rotate-45" : "-translate-y-2"} -translate-x-1/2`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-0.5 w-6 bg-white transition
                  ${menuOpen ? "-rotate-45" : "translate-y-2"} -translate-x-1/2`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-sm transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-6 py-6 space-y-6 text-white">
          <nav className="flex flex-col gap-4 text-sm tracking-[0.18em]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* SEARCH */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg px-6">
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="w-full rounded-md bg-white px-4 py-3 text-black outline-none"
            />
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="absolute right-2 top-2 text-white"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </>
  );
}