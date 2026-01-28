"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

import ScrollReveal from "../layout/ScrollReveal";

export default function BlogSidebar() {
  return (
    <aside className="space-y-12 w-full lg:max-w-[320px]">
      {/* Follow Us */}
      <ScrollReveal>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gray-300 after:mt-2">
            Follow Us
          </h4>
          <div className="flex justify-between gap-1 text-center">
            {/* FB */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaFacebookF size={14} className="text-gray-400 group-hover:text-black transition" />
              <span className="mt-2 text-[10px] font-semibold text-gray-400">10</span>
            </div>
            {/* TW */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaTwitter size={14} className="text-gray-400 group-hover:text-black transition" />
              <span className="mt-2 text-[10px] font-semibold text-gray-400">69k</span>
            </div>
            {/* IN */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaInstagram size={14} className="text-gray-400 group-hover:text-black transition" />
              <span className="mt-2 text-[10px] font-semibold text-gray-400">6k</span>
            </div>
            {/* PT */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaPinterestP size={14} className="text-gray-400 group-hover:text-black transition" />
              <span className="mt-2 text-[10px] font-semibold text-gray-400">69k</span>
            </div>
            {/* YT */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaYoutube size={14} className="text-gray-400 group-hover:text-black transition" />
              <span className="mt-2 text-[10px] font-semibold text-gray-400">168k</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Subscription */}
      <ScrollReveal delay={0.1}>
        <div className="border border-gray-200 p-8 bg-gray-50/50">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gray-300 after:mt-2">
            Subscription
          </h4>
          <p className="text-gray-500 text-xs leading-relaxed mb-5">
            Subscribe to our newsletter and receive a selection of cool articles
            every weeks
          </p>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 bg-white px-4 py-3 text-xs outline-none focus:border-black transition"
            />
            <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
              Subscribe
            </button>
          </form>

          <label className="flex gap-2 text-[10px] text-gray-400 mt-4 leading-tight cursor-pointer">
            <input type="checkbox" className="mt-0.5" />
            By checking this box, you confirm that you have read and are agreeing
            to our terms.
          </label>
        </div>
      </ScrollReveal>

      {/* Latest Stories */}
      <ScrollReveal delay={0.2}>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gray-300 after:mt-2">
            The Latest
          </h4>

          <ul className="space-y-4">
            {[
              { title: "3 Dreaming Tips Will Change Your Lives for the Better", date: "June 21, 2022", img: "/images/small-article1.jpg", dark: true },
              { title: "Efficient Organizing Guidelines", date: "June 20, 2022", img: "/images/small-article2.jpg", dark: false },
              { title: "Envy and Jealousy: Dealing with it", date: "June 19, 2022", img: "/images/small-article3.jpg", dark: false },
              { title: "Hidden Gems in Your Friendships", date: "June 18, 2022", img: "/images/small-article4.jpg", dark: false },
            ].map((item, i) => (
              <Link href="/blog" key={i}>
                <li className={`flex gap-4 group cursor-pointer p-3 rounded-md transition ${item.dark ? 'bg-black text-white' : 'hover:bg-gray-50'}`}>
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-200">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className={`text-[11px] font-bold leading-snug line-clamp-2 ${item.dark ? 'text-white' : 'text-gray-900 group-hover:text-black'}`}>
                      {item.title}
                    </h5>
                    <div className={`flex gap-2 text-[9px] mt-1 uppercase tracking-wider ${item.dark ? 'text-white/60' : 'text-gray-400'}`}>
                      <span>{item.date}</span>
                      <span>2 minute read</span>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </aside>
  );
}
