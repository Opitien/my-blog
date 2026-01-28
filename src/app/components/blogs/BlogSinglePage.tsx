"use client";

import Footer from "../layout/Footer";
import BlogHero from "./BlogHero";
import BlogMain from "./BlogMain";
import RelatedPosts from "./RelatedPosts";
import SingleBlogHeader from "./SingleBlogHeader";

export default function BlogSinglePage() {
  return (
    <main className="bg-white">
      <SingleBlogHeader />
      <BlogHero />
      <BlogMain />
      <RelatedPosts />
      <Footer />
    </main>
  );
}
