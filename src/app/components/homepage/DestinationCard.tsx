// src/app/components/homepage/TopDestinationsSection.tsx
import Image from "next/image";

const destinations = [
  {
    title: "Dominican Republic",
    image: "/images/dominican-republic.jpg",
  },
  {
    title: "Maecenas Tincidunt",
    image: "/images/maecenas-tincidunt.jpg",
  },
  {
    title: "Japan Experience",
    image: "/images/japan-experience.jpg",
  },
  {
    title: "Mountains & Lakes",
    image: "/images/mountains-lakes.jpg",
  },
  {
    title: "Ancient Cities",
    image: "/images/ancient-cities.jpg",
  },
];

function DestinationCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="group relative rounded-lg overflow-hidden h-40 bg-gray-200">
      {/* Skeleton placeholder */}
      <div className="absolute inset-0 animate-pulse bg-gray-300" />

      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/45" />

      {/* Title */}
      <h3 className="absolute bottom-16 left-8 z-10 text-white font-medium text-sm md:text-base drop-shadow-md">
        {title}
      </h3>
    </div>
  );
}

import ScrollReveal from "../layout/ScrollReveal";

// ... destinations array ...

export default function TopDestinationsSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-2xl mb-16 px-4">
        <ScrollReveal>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 block">
            Where to next?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Destinations
          </h2>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            One more destination off of your bucket list with one of our most
            popular vacations in 2024. Explore the world with us.
          </p>
        </ScrollReveal>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {destinations.map((destination, i) => (
          <ScrollReveal key={destination.title} delay={i * 0.1}>
            <DestinationCard
              title={destination.title}
              image={destination.image}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
