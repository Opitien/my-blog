// src/app/components/homepage/BigCTASection.tsx
import Image from "next/image";
import React from "react";

export default function BigCTASection() {
  return (
    <section className="relative mx-auto max-w-6xl h-[500px] md:h-[400px] overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 transform transition-transform duration-500 hover:scale-105">
        <Image
          src="/images/cta-banner.jpg"
          alt="Travel banner"
          fill
          className="object-cover"
          priority={false} // Lazy load by default
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeIn">
        {/* Category Label */}
        <span className="text-white/80 rounded-sm py-1 px-3 bg-white/25 backdrop-blur-md shadow-sm uppercase tracking-wider text-xs font-medium">
          Travel
        </span>

        {/* Main Title */}
        <h2 className="text-white text-3xl md:text-[30px] font-bold leading-tight mt-3">
          Richird Norton photorealistic rendering as real photos
        </h2>

        {/* Description Paragraph */}
        <p className="text-white/90 mt-4 text-base md:text-[19px] max-w-lg mx-auto">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>

        {/* Primary Button */}
        <button className="mt-6 bg-white text-gray-900 font-medium px-6 py-3 rounded-lg hover:text-white hover:bg-black transition">
          Start planning your trip
        </button>
      </div>
    </section>
  );
}
