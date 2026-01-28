"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-lake.jpg"
          alt="Mountain lake"
          fill
          priority
          className="object-cover"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
            Welcome to Inspiration
          </span>
          {/* Main heading */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-[72px] font-bold uppercase leading-[1.05] tracking-tight mb-8">
            Inspiration for travel <br /> <span className="text-white/80 font-light italic">by real people</span>
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-white/70 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto">
            Discover the world's most beautiful destinations, unique cultures, and hidden gems through the eyes of those who have been there.
          </p>

          {/* CTA button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/destinations">
              <button className="bg-white px-10 py-4 text-[11px] font-bold text-black uppercase tracking-widest hover:bg-white/90 transition transform hover:scale-105">
                Explore Destinations
              </button>
            </Link>
            <Link href="/blog">
              <button className="border border-white/20 backdrop-blur-sm px-10 py-4 text-[11px] font-bold text-white uppercase tracking-widest hover:bg-white/10 transition transform hover:scale-105">
                Read the Blog
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
