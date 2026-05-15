"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutBanner() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/about-banner.png"  // <- replace with your image
                alt="About Quasent Banner"
                fill
                priority
                className="object-cover object-center"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* BRAND COLOR OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/25 to-cyan-500/25"></div>

            {/* BLUR SHAPES */}
            <div className="absolute top-12 left-12 w-36 h-36 bg-white/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-12 right-12 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-center">

                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 mb-3 flex items-center justify-center gap-2"
                >
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-white font-medium">About Us</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg"
                >
                    About Us
                </motion.h1>
            </div>
        </section>
    );
}
