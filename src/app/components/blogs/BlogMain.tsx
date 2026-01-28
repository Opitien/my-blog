"use client";

import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";

export default function BlogMain() {
  return (
    <section className="max-w-6xl mx-auto px-10 py-20">
      <div className="grid grid-cols-[1fr_320px] gap-16">
        <BlogContent />
        <BlogSidebar />
      </div>
    </section>
  );
}
