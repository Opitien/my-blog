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
  const [activeCategory, setActiveCategory] = useState("anime");
  const [isAnimating, setIsAnimating] = useState(false);

  // Define posts per category
  const categories: Record<string, Post[]> = {
    anime: [
      {
        title:
          "Featured Anime Adventure",
        image: "/images/featured-article.jpg",
        date: "1 Month Ago",
        excerpt:
          "It. Phasellus aliquet nisi dui pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem.",
      },
      { title: "Akame Ga Kill: Finale", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Uzumaki Village", image: "/images/small-article2.jpg", date: "21 March 2021" },
      { title: "Love Juice Premiere", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "One Piece Marathon", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    naruto: [
      {
        title: "Featured Naruto Post",
        image: "/images/small-article1.jpg",
        date: "2 Months Ago",
        excerpt: "Special Naruto episode review.",
      },
      { title: "Naruto vs Sasuke", image: "/images/featured-article.jpg", date: "21 March 2021" },
      { title: "Hidden Leaf Festival", image: "/images/small-article2.jpg", date: "21 March 2021" },
      { title: "Team 7 Reunion", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "Shippuden Marathon", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    tv: [
      {
        title: "Featured TV Post",
        image: "/images/small-article2.jpg",
        date: "3 Months Ago",
        excerpt: "Top TV show picks this season.",
      },
      { title: "Breaking Bad Finale", image: "/images/small-article1.jpg", date: "21 March 2021" },
      { title: "Game of Thrones Review", image: "/images/featured-article.jpg", date: "21 March 2021" },
      { title: "Stranger Things Recap", image: "/images/small-article3.jpg", date: "21 March 2021" },
      { title: "The Witcher Insights", image: "/images/small-article4.jpg", date: "21 March 2021" },
    ],
    travel: [
      {
        title: "Featured Travel Post",
        image: "/images/featured-article-4.jpg",
        date: "4 Months Ago",
        excerpt: "Best travel destinations for 2025.",
      },
      { title: "Paris Getaway", image: "/images/small-1.jpg", date: "21 March 2021" },
      { title: "Tokyo Streets", image: "/images/small-2.jpg", date: "21 March 2021" },
      { title: "Safari Adventure", image: "/images/small-3.jpg", date: "21 March 2021" },
      { title: "Beach Escapes", image: "/images/small-4.jpg", date: "21 March 2021" },
    ],
    lifestyle: [
      {
        title: "Featured Lifestyle Post",
        image: "/images/featured-article-5.jpg",
        date: "5 Months Ago",
        excerpt: "Tips to level up your daily life.",
      },
      { title: "Morning Routine", image: "/images/small-1.jpg", date: "21 March 2021" },
      { title: "Healthy Eating", image: "/images/small-2.jpg", date: "21 March 2021" },
      { title: "Fitness Hacks", image: "/images/small-3.jpg", date: "21 March 2021" },
      { title: "Work-Life Balance", image: "/images/small-4.jpg", date: "21 March 2021" },
    ],
  };

  const handleCategoryClick = (category: string) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setIsAnimating(true);

    setTimeout(() => {
      const posts = categories[category];
      setFeatured(posts[0]);
      setMiniPosts(posts.slice(1));
      setIsAnimating(false);
    }, 200); // animation sync
  };

  const [featured, setFeatured] = useState<Post>(categories[activeCategory][0]);
  const [miniPosts, setMiniPosts] = useState<Post[]>(categories[activeCategory].slice(1));

  return (
    <section className="bg-white px-6 md:px-12 py-10">
      {/* CATEGORY ROW */}
      <div className="flex gap-6 border-b border-gray-200 pb-3 mb-8 text-sm">
        {["anime", "naruto", "tv", "travel", "lifestyle"].map((cat) => (
          <span
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`cursor-pointer pb-2 transition-colors ${activeCategory === cat
                ? "border-b-2 border-black font-medium text-black"
                : "text-gray-500 hover:text-black"
              }`}
          >
            Category Name
          </span>
        ))}
      </div>


      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-8">
        {/* ================= LEFT BIG BOX ================= */}
        <div className="col-span-12 lg:col-span-8 border border-gray-200 p-4">
          <div className="grid grid-cols-12 gap-6">
            {/* FEATURED */}
            <div
              className={`col-span-12 md:col-span-7 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
            >
              <div className="relative w-full h-[300px]">
                <Image src={featured.image} alt="" fill className="object-cover" />
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500">{featured.date}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug">{featured.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{featured.excerpt}</p>
                <span className="mt-3 inline-block text-sm underline cursor-pointer">View Post</span>
                <TagPill />
              </div>
            </div>

            {/* MINI LIST */}
            <div
              className={`col-span-12 md:col-span-5 flex flex-col gap-4 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
            >
              {miniPosts.map((post, i) => (
                <div key={i} className="flex gap-4">
                  <Image src={post.image} alt="" width={140} height={110} className="object-cover" />
                  <div>
                    <p className="text-sm font-medium leading-snug">{post.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT BIG BOX — MANGA READS ================= */}
        <div className="col-span-12 lg:col-span-4 border border-gray-200 p-4">
          <h4 className="font-semibold text-sm mb-5">Manga reads</h4>
          <div className="flex flex-col gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Image src={`/images/sidebar${i}.jpg`} alt="" width={150} height={80} className="object-cover" />
                <div>
                  <p className="text-sm font-medium leading-snug">
                    Tick one more destination off of your bucket list with one of our most popular vacations in 2022
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
