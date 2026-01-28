"use client";

import { useParams } from "next/navigation";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PostCard from "../components/post/PostCard";
import ScrollReveal from "../components/layout/ScrollReveal";
import { motion } from "framer-motion";

export default function CategoryPage() {
    const params = useParams();
    const category = params.category as string;

    // Format the category name for display
    const title = category.replace("-", " ").toUpperCase();

    // Mock data for the category
    const posts = [
        { title: "Integer Maecenas Eget Viverra", img: "/images/wave-beach.jpg" },
        { title: "Aenean eleifend ante maecenas", img: "/images/mountain-lake.jpg" },
        { title: "Integer Maecenas Eget Viverra", img: "/images/night-rocks.jpg" },
        { title: "The Best Spots to Visit This Year", img: "/images/yellow-jacket-mountain.jpg" },
        { title: "Hidden Gems You Can't Miss", img: "/images/city-photographer.jpg" },
        { title: "Travel Like a Local Guide", img: "/images/city-lady.jpg" },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Category Hero */}
            <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 block">
                            Browsing Collection
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black flex items-center justify-center gap-4">
                            {title}
                        </h1>
                        <div className="w-12 h-1 bg-black mx-auto mt-8" />
                    </motion.div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {posts.map((post, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <PostCard
                                title={post.title}
                                imageSrc={post.img}
                                category={title}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Pagination placeholder */}
                <div className="mt-20 pt-12 border-t border-gray-100 flex justify-center">
                    <button className="text-[11px] font-bold uppercase tracking-widest border border-black px-12 py-4 hover:bg-black hover:text-white transition-all">
                        Load More Articles
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
