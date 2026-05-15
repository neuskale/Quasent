"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContractorsBanner() {
    return (
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">

            <Image
                src="/job-contractors.jpg"
                alt="Contractors at Quasent"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/25 to-cyan-500/25"></div>

            <div className="relative z-10 text-center px-6 max-w-3xl">

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-200 mb-3 flex items-center justify-center gap-2"
                >
                    <Link href="/" className="hover:text-white transition">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-white font-medium">Contractors</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl font-extrabold text-white tracking-tight"
                >
                    Contractors
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-4 text-lg text-gray-200"
                >
                    Flexible opportunities. Meaningful projects. Professional growth.
                </motion.p>
            </div>
        </section>
    );
}
