"use client";

import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";

export default function BlogMain() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
        <BlogContent />
        <BlogSidebar />
      </div>
    </section>
  );
}
