// src/app/components/homepage/TopDestinationsSection.tsx

export default function TopDestinationsSection() {
  return (
    <section className="py-16 px-6 md:px-12">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl md:text-2xl font-semibold text-gray-900">
          Top Destinations
        </h2>
        <p className="text-gray-600 mt-3 text-xs">
          One more destination off of your bucket list with one of our most popular vacations in 2022
        </p>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* ---- DESTINATION CARD 1 ---- */}
        <div className="relative rounded-lg overflow-hidden h-40">
          <img
            src="/images/dominican-republic.jpg"
            alt="Dominican Republic"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-16 left-8 text-white font-medium text-sm md:text-base drop-shadow-md">
            Dominican Republic
          </h3>
        </div>

        {/* ---- DESTINATION CARD 2 ---- */}
        <div className="relative rounded-lg overflow-hidden h-40">
          <img
            src="/images/maecenas-tincidunt.jpg"
            alt="Maecenas Tincidunt"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-16 left-8 text-white font-medium text-sm md:text-base drop-shadow-md">
            Dominican Republic
          </h3>
        </div>

        {/* ---- DESTINATION CARD 3 ---- */}
        <div className="relative rounded-lg overflow-hidden h-40">
          <img
            src="/images/japan-experience.jpg"
            alt="Japan Experience"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-16 left-8 text-white font-medium text-sm md:text-base drop-shadow-md">
            Dominican Republic
          </h3>
        </div>

        {/* ---- DESTINATION CARD 4 ---- */}
        <div className="relative rounded-lg overflow-hidden h-40">
          <img
            src="/images/mountains-lakes.jpg"
            alt="Mountains & Lakes"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-16 left-8 text-white font-medium text-sm md:text-base drop-shadow-md">
            Dominican Republic
          </h3>
        </div>

        {/* ---- DESTINATION CARD 5 ---- */}
        <div className="relative rounded-lg overflow-hidden h-40">
          <img
            src="/images/ancient-cities.jpg"
            alt="Ancient Cities"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute bottom-16 left-8 text-white font-medium text-sm md:text-base drop-shadow-md">
            Dominican Republic
          </h3>
        </div>
      </div>
    </section>
  );
}
