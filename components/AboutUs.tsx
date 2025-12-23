"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section id="about-us" className="w-full py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                {/* LEFT — IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <Image
                        src="/about.png"
                        alt="About Quasent"
                        width={560}
                        height={500}
                        className="rounded-2xl shadow-lg object-cover"
                    />

                    {/* decorative gradient circle */}
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full
                        bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-2xl" />
                </motion.div>

                {/* RIGHT — CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                        About{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            text-transparent bg-clip-text">
                            Quasent
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Quasent is a specialized staffing partner supporting utilities,
                        engineering-led organizations, and energy service providers operating
                        in regulated, safety-critical environments.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        We focus on delivering fully vetted, deployment-ready professionals
                        across engineering, field services, and technology roles — ensuring
                        compliance, safety, and performance from day one.
                    </p>

                    {/* WHY QUASENT — KEY POINTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium text-[15px] mb-10">
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-600 font-bold">01.</span>
                            Utility-grade expertise in regulated environments
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-600 font-bold">02.</span>
                            Curated shortlists delivered quickly
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-600 font-bold">03.</span>
                            Flexible engagement models — contract, contract-to-hire, direct hire
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-600 font-bold">04.</span>
                            Project teams aligned to delivery and compliance needs
                        </div>
                    </div>

                    {/* CTA BUTTON */}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03 }}
                        className="inline-block px-8 py-4 rounded-full text-white font-semibold text-lg
                            bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 shadow
                            hover:opacity-90 transition-all duration-300"
                    >
                        Learn More →
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
