"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PermanentHireBanner() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/permanent.jpg"
                alt="Permanent Hire Banner"
                fill
                priority
                className="object-cover object-center"
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/25 to-cyan-500/25"></div>

            {/* BLUR SHAPES */}
            <div className="absolute top-12 left-12 w-36 h-36 bg-white/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-12 right-12 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-center px-4">

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 mb-3 flex items-center justify-center gap-2"
                >
                    <Link href="/" className="hover:text-white transition">
                        Home
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-white font-medium">
                        Permanent Hire
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg"
                >
                    Permanent Hire
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto"
                >
                    Building long-term talent partnerships for sustainable growth
                </motion.p>
            </div>
        </section>
    );
}
