"use client";

import BlogHero from "./BlogHero";
import BlogMain from "./BlogMain";
import BlogShareRow from "./BlogShareRow";
import NewsletterSignup from "./NewsletterSignup";
import RelatedPosts from "./RelatedPosts";
import SingleBlogHeader from "./SingleBlogHeader";

export default function BlogSinglePage() {
  return (
    <main className="bg-white">
      <SingleBlogHeader />
      <BlogHero />
      <BlogMain />
      <RelatedPosts />
    </main>
  );
}
