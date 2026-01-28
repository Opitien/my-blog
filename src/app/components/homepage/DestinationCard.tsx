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

export default function TopDestinationsSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl md:text-2xl font-semibold text-gray-900">
          Top Destinations
        </h2>
        <p className="text-gray-600 mt-3 text-xs">
          One more destination off of your bucket list with one of our most
          popular vacations in 2022
        </p>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.title}
            title={destination.title}
            image={destination.image}
          />
        ))}
      </div>
    </section>
  );
}
