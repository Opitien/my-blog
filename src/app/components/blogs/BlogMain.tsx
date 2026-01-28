"use client";

import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import BlogLeftShare from "./BlogLeftShare";

export default function BlogMain() {
  return (
    <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[40px_1fr_300px] xl:grid-cols-[60px_1fr_320px] gap-8 lg:gap-12 xl:gap-16 items-start">
        <BlogLeftShare />
        <BlogContent />
        <BlogSidebar />
      </div>
    </section>
  );
}
