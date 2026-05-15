"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function JoinUsBanner() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            <Image
                src="/join-us.jpg"
                alt="Join Quasent"
                fill
                priority
                className="object-cover object-center scale-105"
            />

            <div className="absolute inset-0 bg-black/65"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/35 via-purple-500/30 to-cyan-500/30"></div>

            <div className="absolute top-0 left-10 w-56 h-56 bg-pink-400/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-10 w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 text-center px-6 max-w-3xl">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 mb-4 flex items-center justify-center gap-2"
                >
                    <Link href="/" className="hover:text-white transition">
                        Home
                    </Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-white font-medium">
                        Join Us
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-extrabold text-white tracking-tight"
                >
                    Join Quasent
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-6 text-lg md:text-xl text-gray-200"
                >
                    Build meaningful careers. Create real impact. Grow with us.
                </motion.p>
            </div>
        </section>
    );
}
