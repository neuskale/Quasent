"use client";

import { motion } from "framer-motion";

export default function JobsBanner() {
    return (
        <section className="relative bg-gray-900 min-h-[420px] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/25 to-cyan-500/25" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold"
                >
                    Job Search – Your Next Career Opportunity Awaits
                </motion.h1>

                <p className="mt-4 text-lg text-gray-200">
                    Explore permanent and contract roles with leading organisations
                </p>
            </div>
        </section>
    );
}
