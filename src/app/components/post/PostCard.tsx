"use client";

import Image from "next/image";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type PostCardProps = {
  title: string;
  imageSrc: string;
  category?: string;
  href?: string;
};

export default function PostCard({ title, imageSrc, category = "Aenean Eleifend", href = "/blog" }: PostCardProps) {
  return (
    <Link href={href}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col bg-white cursor-pointer"
      >
        {/* ... existing card code ... */}
        <div className="relative aspect-[1.35/1] w-full overflow-hidden bg-gray-100 rounded-sm">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
          {/* ... tags ... */}
          <div className="absolute left-3 top-3 z-10 flex gap-1.5 font-sans">
            <span className="rounded-sm px-2.5 py-1 text-[9px] font-bold text-white bg-black/20 backdrop-blur-md uppercase tracking-wider">
              {category}
            </span>
            <span className="rounded-sm px-2.5 py-1 text-[9px] font-bold text-white bg-black/20 backdrop-blur-md uppercase tracking-wider">
              Aliquam
            </span>
          </div>

          <div className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/20">
            <div className="w-3 h-3 border border-white/80 rounded-[2px] relative opacity-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col py-5 font-sans">
          <h3 className="mb-3 text-[19px] font-bold text-[#1a1a1a] leading-[1.3] group-hover:text-black transition-colors">
            {title}
          </h3>

          <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 border border-gray-100 shadow-sm">
                <Image src="/images/joanna-blogavatar.jpg" alt="Joanna Wellick" width={40} height={40} className="object-cover" />
              </div>
              <span className="text-[#1a1a1a]">Joanna Wellick</span>
            </div>
            <span className="h-0.5 w-0.5 rounded-full bg-gray-300" />
            <span>June 28, 2018</span>
            <span className="h-0.5 w-0.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1">
              <Share2 size={10} className="text-gray-400" />
              <span>2K shares</span>
            </div>
          </div>

          <p className="mb-5 text-[12px] text-gray-500 leading-[1.6] line-clamp-3">
            Aenean eleifend ante maecenas pulvinar montes lorem et pede
            dis dolor pretium donec dictum. Vivamus egestas justo etiam.
            Venenatis eget adipiscing luctus lorem.
          </p>

          <button className="mt-auto text-left text-[11px] font-bold text-[#1a1a1a] uppercase tracking-widest underline decoration-[1.5px] underline-offset-4 decoration-gray-200 group-hover:decoration-black transition-all">
            View Post
          </button>
        </div>
      </motion.article>
    </Link>
  );
}
