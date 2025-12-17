// src/app/components/homepage/MainContentWithSidebar.tsx
import React from "react";
import TagPill from "../post/TagPill";

export default function MainContentWithSidebar() {
  return (
    <section className="bg-white py-8 px-6 md:px-12">
      {/* -------------------- CATEGORY NAVIGATION ROW -------------------- */}
      <div className="flex gap-6 border-b border-gray-200 pb-4 mb-8 overflow-x-auto">
        <span className="text-gray-600 font-medium text-sm cursor-pointer whitespace-nowrap hover:text-gray-900">
          Category name
        </span>
        <span className="text-gray-600 font-medium text-sm cursor-pointer whitespace-nowrap hover:text-gray-900">
          Category name
        </span>
        <span className="text-gray-600 font-medium text-sm cursor-pointer whitespace-nowrap hover:text-gray-900">
          Category name
        </span>
        <span className="text-gray-600 font-medium text-sm cursor-pointer whitespace-nowrap hover:text-gray-900">
          Category name
        </span>
        <span className="text-gray-600 font-medium text-sm cursor-pointer whitespace-nowrap hover:text-gray-900">
          Category name
        </span>
        <span className="text-gray-600 font-medium text-sm cursor-pointer whitespace-nowrap hover:text-gray-900">
          Category name
        </span>
      </div>

      {/* -------------------- THREE-COLUMN CONTENT -------------------- */}
      <div className="grid grid-cols-12 gap-8">
        {/* -------------------- COLUMN 1: FEATURED ARTICLE -------------------- */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src="/images/featured-article.jpg"
              alt="Featured Article"
              className="w-full h-64 md:h-72 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm">1 Month Ago</p>
              <h3 className="text-xl md:text-2xl font-semibold text-black mt-2 leading-snug">
                Tick one more destination off of your bucket list with one of our most popular vacations in 2022
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
              </p>
              <a href="#" className="text-blue-600 font-medium mt-2 inline-block hover:underline">
                View Post
              </a>
              <TagPill />
            </div>
          </div>
        </div>

        {/* -------------------- COLUMN 2: MINI ARTICLES -------------------- */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          {/* MINI ARTICLE 1 */}
          <div className="flex gap-4">
            <img src="/images/small-article1.jpg" alt="Akame Go Kill" className="w-20 h-20 object-cover rounded-md shrink-0" />
            <div>
              <h4 className="font-medium text-black text-sm">Akame Go Kill: Season finale</h4>
              <p className="text-gray-500 text-xs mt-1">21 March 2021</p>
            </div>
          </div>

          {/* MINI ARTICLE 2 */}
          <div className="flex gap-4">
            <img src="/images/small-article2.jpg" alt="Haruto Umenai" className="w-20 h-20 object-cover rounded-md shrink-0" />
            <div>
              <h4 className="font-medium text-black text-sm">Haruto Umenai – Hidden Village</h4>
              <p className="text-gray-500 text-xs mt-1">15 March 2021</p>
            </div>
          </div>

          {/* MINI ARTICLE 3 */}
          <div className="flex gap-4">
            <img src="/images/small-article3.jpg" alt="Love Juice" className="w-20 h-20 object-cover rounded-md shrink-0" />
            <div>
              <h4 className="font-medium text-black text-sm">Love Juice Season Premiere</h4>
              <p className="text-gray-500 text-xs mt-1">10 March 2021</p>
            </div>
          </div>

                    {/* MINI ARTICLE 3 */}
          <div className="flex gap-4">
            <img src="/images/small-article3.jpg" alt="Love Juice" className="w-20 h-20 object-cover rounded-md shrink-0" />
            <div>
              <h4 className="font-medium text-black text-sm">Love Juice Season Premiere</h4>
              <p className="text-gray-500 text-xs mt-1">10 March 2021</p>
            </div>
          </div>
        </div>

        {/* -------------------- COLUMN 3: MANGA READS SIDEBAR -------------------- */}
        <aside className="col-span-12 lg:col-span-2 border border-gray-300 rounded-lg p-6 flex flex-col gap-6">
          <h3 className="font-semibold text-black text-lg">Manga reads</h3>

          {/* SIDEBAR ARTICLE 1 */}
          <div className="flex flex-col gap-2">
            <img src="/images/sidebar1.jpg" alt="Sidebar 1" className="w-full h-32 object-cover rounded-md" />
            <h4 className="font-medium text-black text-sm mt-2">
              Tick one more destination off of your bucket list with one of our most popular vacations in 2022
            </h4>
            <p className="text-gray-500 text-xs">21 March 2021</p>
          </div>

          {/* SIDEBAR ARTICLE 2 */}
          <div className="flex flex-col gap-2">
            <img src="/images/sidebar2.jpg" alt="Sidebar 2" className="w-full h-32 object-cover rounded-md" />
            <h4 className="font-medium text-black text-sm mt-2">
              Tick one more destination off of your bucket list with one of our most popular vacations in 2022
            </h4>
            <p className="text-gray-500 text-xs">15 March 2021</p>
          </div>

          {/* SIDEBAR ARTICLE 3 */}
          <div className="flex flex-col gap-2">
            <img src="/images/sidebar3.jpg" alt="Sidebar 3" className="w-full h-32 object-cover rounded-md" />
            <h4 className="font-medium text-black text-sm mt-2">
              Tick one more destination off of your bucket list with one of our most popular vacations in 2022
            </h4>
            <p className="text-gray-500 text-xs">10 March 2021</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
