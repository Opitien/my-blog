// src/app/components/homepage/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-lake.jpg"
          alt="Mountain lake"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-overlay-text px-4">

        {/* Main heading */}
        <h1 className="pt-25 mb-5 text-white max-w-6xl text-3xl sm:text-4xl md:text-3xl lg:text-[45px] font-semibold uppercase leading-tight tracking-wide">
          INSPIRATION FOR TRAVEL BY REAL PEOPLE
        </h1>

        {/* Subheading */}
        <p className="mb-4 text-white  text-sm sm:text-base md:text-lg">
          Book smart, travel simple
        </p>

        {/* CTA button */}
        <button className="rounded-md bg-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-black shadow hover:bg-white/30 transition cursor-pointer">
          Start planning your trip
        </button>
      </div>
    </section>
  );
}
