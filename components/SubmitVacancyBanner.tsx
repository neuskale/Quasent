"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SubmitVacancyBanner() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/submit-vacancy.jpg"
                alt="Submit a Vacancy Banner"
                fill
                priority
                className="object-cover object-center scale-105"
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-black/65"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/35 via-purple-500/30 to-cyan-500/30"></div>

            {/* BLUR ACCENTS */}
            <div className="absolute -top-10 left-10 w-52 h-52 bg-pink-400/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-10 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6 max-w-3xl">

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 mb-4 flex items-center justify-center gap-2"
                >
                    <Link href="/" className="hover:text-white transition">
                        Home
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-white font-medium">
                        Submit a Vacancy
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
                >
                    Submit a Vacancy
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-6 text-lg md:text-xl text-gray-200"
                >
                    Share your hiring needs and let our experts deliver the right talent—
                    faster, smarter, and built for long-term impact.
                </motion.p>
            </div>
        </section>
    );
}
