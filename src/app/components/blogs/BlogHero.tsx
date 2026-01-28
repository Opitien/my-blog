"use client";

import Image from "next/image";
import { Clock, Eye, Share2 } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-end pb-16">
      {/* Background image */}
      <Image
        src="/images/blog-hero.jpg"
        alt="Blog hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto h-full flex flex-col justify-end">

        {/* Breadcrumbs - positioned absolute top or just part of flow if header space is accounted for. 
            The design has them relatively high up. Let's place them with margin top. */}
        <div className="absolute top-24 left-6 md:left-12 text text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-medium mb-auto">
          <span className="opacity-70">Home</span>
          <span className="mx-2">&gt;</span>
          <span className="opacity-70">Growth</span>
          <span className="mx-2">&gt;</span>
          <span>5 Efficient Rules How to Organize Your Working Place</span>
        </div>

        {/* Main Text Content */}
        <div className="max-w-4xl text-left">
          {/* TITLE */}
          <h1 className="text-white text-3xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] uppercase tracking-wide mb-4">
            5 Efficient Rules How to <br /> Organize Your Working Place
          </h1>

          {/* SUBTITLE */}
          <p className="text-white/90 text-sm md:text-xl mb-6 font-light">
            Relationship tips couples therapists are giving all the time
          </p>

          {/* META ROW */}
          <div className="flex flex-wrap items-center gap-4 text-white/90 text-[11px] md:text-xs font-medium uppercase tracking-wider">
            <span>by Joanna Wellick</span>
            <span className="text-white/60">—</span>

            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              2 minute read
            </span>
            <span className="text-white/60">—</span>

            <span className="flex items-center gap-1.5">
              <Eye className="h-3 w-3" />
              1.6K views
            </span>
            <span className="text-white/60">—</span>

            <span className="flex items-center gap-1.5">
              <Share2 className="h-3 w-3" />
              1.2K shares
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
