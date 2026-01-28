"use client";

import Image from "next/image";
import { useState } from "react";
import TagPill from "../post/TagPill";

type Post = {
  title: string;
  image: string;
  date: string;
  excerpt?: string;
};

export default function MainContentWithSidebar() {
  const [activeCategory, setActiveCategory] = useState("Nature");
  const [isAnimating, setIsAnimating] = useState(false);

  const categories: Record<string, Post[]> = {
    Nature: [
      {
        title: "Exploring the Deep Forest",
        image: "/images/mountain-lake.jpg",
        date: "2 Days Ago",
        excerpt:
          "Discover the hidden gems of the northern forests. A journey through silence, greenery, and the untouched beauty of nature.",
      },
      { title: "Mountain Hiking Tips", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Lake Side Camping", image: "/images/small-article2.jpg", date: "21 March 2021" },
      { title: "Wildlife Photography", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "River Rafting Guide", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    Photography: [
      {
        title: "Capturing the Perfect Sunset",
        image: "/images/featured-article.jpg",
        date: "1 Week Ago",
        excerpt: "Lighting is everything. Learn how to time your shots to capture the golden hour in all its glory.",
      },
      { title: "Portrait Essentials", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Urban Street Photo", image: "/images/featured-article.jpg", date: "21 March 2021" },
      { title: "Drone Shots 101", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "Editing with Lightroom", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    Relaxation: [
      {
        title: "Top Spas in Bali",
        image: "/images/small-article2.jpg",
        date: "3 Weeks Ago",
        excerpt: "Unwind and rejuvenate at these top-rated wellness centers in the heart of Indonesia.",
      },
      { title: "Meditation Retreats", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Yoga by the Beach", image: "/images/featured-article.jpg", date: "21 March 2021" },
      { title: "Detox Diets", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "Digital Detox Tips", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    Vacation: [
      {
        title: "Family Trip to Disney",
        image: "/images/featured-article-4.jpg", // Fallback if missing, next/image handles error gracefully usually or we can swap
        date: "1 Month Ago",
        excerpt: "A complete guide to navigating the parks with kids, saving money, and having a magical time.",
      },
      { title: "Couple Getaway", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Solo Travel Safety", image: "/images/small-article2.jpg", date: "21 March 2021" },
      { title: "Budget Hostels", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "Luxury Resorts", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    Travel: [
      {
        title: "Backpacking Europe",
        image: "/images/featured-article.jpg",
        date: "2 Months Ago",
        excerpt: "Three months, ten countries, and one backpack. Here is my itinerary and packing list.",
      },
      { title: "Train Travel Tips", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Hidden Venice", image: "/images/small-article2.jpg", date: "21 March 2021" },
      { title: "Swiss Alps Guide", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "Greek Islands", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
  };

  const [featured, setFeatured] = useState<Post>(categories[activeCategory][0]);
  const [miniPosts, setMiniPosts] = useState<Post[]>(categories[activeCategory].slice(1));

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
    setIsAnimating(true);

    setTimeout(() => {
      const posts = categories[category];
      setFeatured(posts[0]);
      setMiniPosts(posts.slice(1));
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="bg-white px-6 md:px-12 py-10">
      {/* CATEGORY ROW */}
      <div className="flex gap-6 border-b border-gray-200 pb-3 mb-8 text-sm">
        {Object.keys(categories).map((cat) => (
          <span
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`cursor-pointer pb-2 transition-colors ${activeCategory === cat
              ? "border-b-2 border-black font-medium text-black"
              : "text-gray-500 hover:text-black"
              }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-8">
        {/* LEFT BIG BOX */}
        <div className="col-span-12 lg:col-span-8 border border-gray-200 p-4 rounded-xl">
          <div className="grid grid-cols-12 gap-6">
            {/* FEATURED */}
            <div
              className={`col-span-12 md:col-span-7 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
            >
              <div className="group relative w-full h-80 overflow-hidden rounded-xl">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">{featured.date}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug">{featured.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{featured.excerpt}</p>
                <span className="mt-3 inline-block text-sm underline cursor-pointer">
                  View Post
                </span>
                <TagPill />
              </div>
            </div>

            {/* MINI LIST */}
            <div
              className={`col-span-12 md:col-span-5 flex flex-col gap-4 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
            >
              {miniPosts.map((post, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="group relative w-[140px] h-[110px] overflow-hidden rounded-lg shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      quality={85}
                      sizes="140px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium leading-snug">{post.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT BIG BOX — TRENDING */}
        <div className="col-span-12 lg:col-span-4 border border-gray-200 p-4 rounded-xl">
          <h4 className="font-semibold text-sm mb-5">Trending Stories</h4>

          <div className="flex flex-col gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="group relative w-[150px] h-20 overflow-hidden rounded-lg shrink-0">
                  <Image
                    src={`/images/sidebar${i}.jpg`}
                    alt="Sidebar article"
                    fill
                    quality={85}
                    sizes="150px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium leading-snug">
                    Tick one more destination off of your bucket list with one of our most popular
                    vacations in 2022
                  </p>
                  <p className="text-xs text-gray-500 mt-1">21 March 2021</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
