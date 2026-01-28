"use client";

import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaShareAlt,
    FaRegComment,
    FaChartBar,
} from "react-icons/fa";

export default function BlogLeftShare() {
    return (
        <aside className="hidden lg:flex flex-col gap-8 sticky top-24 h-fit items-center pt-2 w-full">
            {/* Views */}
            <div className="flex flex-col items-center gap-1">
                <FaChartBar className="text-gray-400 text-lg" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    views
                </span>
                <span className="text-xs font-bold text-black mt-[-2px]">1.6K</span>
            </div>

            {/* Shares */}
            <div className="flex flex-col items-center gap-1">
                <FaShareAlt className="text-gray-400 text-sm" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                    shares
                </span>
                <span className="text-xs font-bold text-black mt-[-2px]">996K</span>
            </div>

            {/* Icons */}
            <div className="flex flex-col items-center gap-5 mt-2">
                <button className="text-black hover:text-[#3b5998] transition">
                    <FaFacebookF size={14} />
                </button>

                <button className="text-black hover:text-[#1DA1F2] transition">
                    <FaTwitter size={14} />
                </button>

                <button className="text-black hover:text-[#bd081c] transition">
                    <FaPinterestP size={14} />
                </button>

                <div className="flex flex-col items-center gap-1 mt-2">
                    <FaRegComment size={14} className="text-black" />
                    <span className="text-xs font-bold text-black">425</span>
                </div>
            </div>
        </aside>
    );
}
