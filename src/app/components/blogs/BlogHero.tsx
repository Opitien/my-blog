"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] flex items-end pb-20 overflow-hidden">
      {/* Background image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/blog-hero.jpg"
          alt="Blog hero"
          fill
          priority
          className="object-cover"
        />
        {/* Graded overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-24 left-6 md:left-12 text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-medium"
        >
          <span className="hover:text-white transition cursor-pointer">Home</span>
          <span className="mx-2 font-light opacity-30">&gt;</span>
          <span className="hover:text-white transition cursor-pointer">Growth</span>
          <span className="mx-2 font-light opacity-30">&gt;</span>
          <span className="text-white">Organization Rules</span>
        </motion.div>

        {/* Main Text Content */}
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* TITLE */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.05] uppercase tracking-tight mb-6">
              5 Efficient Rules How to <br /> <span className="text-white/80 font-light italic capitalize">Organize Your Working Place</span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-white/70 text-sm md:text-xl mb-8 font-light tracking-wide max-w-2xl">
              Relationship tips couples therapists are giving all the time to improve productivity and mental clarity.
            </p>

            {/* META ROW */}
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20">
                  <Image src="/images/joanna-blogavatar.jpg" alt="Joanna Wellick" width={20} height={20} className="object-cover" />
                </div>
                <span className="text-white">Joanna Wellick</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>2 minute read</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>1.6K views</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>1.2K shares</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
