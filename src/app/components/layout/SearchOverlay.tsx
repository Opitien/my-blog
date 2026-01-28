"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X, TrendingUp } from "lucide-react";
import { useEffect } from "react";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center pt-[15vh] px-6"
                >
                    <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition"
                    >
                        <X size={32} />
                    </motion.button>

                    <div className="w-full max-w-3xl">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative group"
                        >
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition" size={24} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search stories, places, inspiration..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-6 pl-16 pr-8 text-2xl text-white outline-none focus:bg-white/10 focus:border-white/20 transition-all font-light"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-16"
                        >
                            <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-6 px-4">
                                <TrendingUp size={14} />
                                <span>Popular Collections</span>
                            </div>
                            <div className="flex flex-wrap gap-3 px-4">
                                {["Europe 2024", "Solo Travel", "Budget Hidden Gems", "Luxury Stays", "Food Guides", "Photography"].map((tag) => (
                                    <button
                                        key={tag}
                                        className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
