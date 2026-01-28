"use client";

import Image from "next/image";

export default function RelatedPosts() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <h3 className="text-lg font-bold uppercase tracking-widest mb-10 border-b border-gray-200 pb-4">
        You May Also Like
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
        {[
          { img: "/images/mountain-lake.jpg", title: "Integer Maecenas Eget Viverra", date: "June 28, 2017" },
          { img: "/images/maecenas-tincidunt.jpg", title: "Aenean Eleifend Ante Maecenas", date: "June 28, 2017" },
          { img: "/images/featured-article.jpg", title: "Integer Maecenas Eget Viverra", date: "June 28, 2017" },
          { img: "/images/desert-road.jpg", title: "Integer Maecenas Eget Viverra", date: "June 28, 2017" },
          { img: "/images/city-lady.jpg", title: "Aenean Eleifend Ante Maecenas", date: "June 28, 2017" },
          { img: "/images/cliff-lake-red-jacket.jpg", title: "Integer Maecenas Eget Viverra", date: "June 28, 2017" },
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-200 mb-4">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4">
                <span className="bg-black/20 text-white text-[10px] font-bold px-2 py-1 uppercase backdrop-blur-sm rounded-sm">
                  Travel
                </span>
              </div>
            </div>

            <h4 className="text-lg font-bold leading-tight mb-2 group-hover:underline decoration-2 underline-offset-4">
              {item.title}
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede
              dis dolor pretium donec dictum.
            </p>
            <div className="flex items-center gap-3 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
              <span>{item.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>2 min read</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
