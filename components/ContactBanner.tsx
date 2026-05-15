"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactBanner() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="/contact-us.jpg" // <-- replace if needed
                alt="Contact Banner"
                fill
                priority
                className="object-cover object-center"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* BRAND GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/25 to-cyan-500/25"></div>

            {/* DECORATIVE BLUR SHAPES */}
            <div className="absolute top-14 left-14 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-14 right-14 w-44 h-44 bg-white/10 blur-3xl rounded-full"></div>

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 flex flex-col items-center text-center mt-10">

                {/* BREADCRUMBS */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 mb-4 flex items-center gap-2"
                >
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-white font-medium">Contact Us</span>
                </motion.div>

                {/* HEADING */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-5xl font-extrabold text-white drop-shadow-xl tracking-tight"
                >
                    Contact Us
                </motion.h1>

            </div>
        </section>
    );
}
