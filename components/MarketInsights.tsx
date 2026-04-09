"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
    {
        title: "Renewable Energy Hiring Trends 2025",
        category: "Natural Resources",
        image: "/images/insights/natural.jpeg",
        link: "#",
    },
    {
        title: "AI Adoption in Health Sciences",
        category: "Health Sciences",
        image: "/images/insights/health-science.jpeg",
        link: "#",
    },
    {
        title: "Infrastructure Boom in APAC Market",
        category: "Building Infrastructure",
        image: "/images/insights/construction.jpeg",
        link: "#",
    },
    {
        title: "Industrial Automation Skills Shortage",
        category: "Industrial & Engineering",
        image: "/images/insights/robotic-industry.jpeg",
        link: "#",
    },
    {
        title: "Technology & SaaS Expansion 2025",
        category: "Technology",
        image: "/images/insights/Technology-SaaS.jpeg",
        link: "#",
    },
];

export default function MarketInsights() {
    return (
        <section
            id="insights"
            className="
                        relative w-full overflow-hidden overflow-x-hidden
                        bg-white
                        py-20
                      "
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900"
                >
                    Market <span className="gradient-text">Insights</span>
                </motion.h2>

                <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
                    Latest trends shaping global industries
                </p>

                {/* GRID */}
                <div className="relative grid w-full gap-6 md:grid-cols-2">
                    {/* FEATURED */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="relative h-[480px] rounded-2xl overflow-hidden shadow"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${insights[0].image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <span className="inline-flex px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold w-fit">
                                {insights[0].category}
                            </span>
                            <h3 className="mt-3 text-3xl font-bold text-white">
                                {insights[0].title}
                            </h3>
                            <Link
                                href={insights[0].link}
                                className="mt-4 inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
                            >
                                Read More →
                            </Link>
                        </div>
                    </motion.div>

                    {/* SMALL INSIGHTS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {insights.slice(1).map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.07 }}
                                className="relative h-60 cursor-pointer overflow-hidden rounded-2xl shadow"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

                                <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <span className="inline-flex px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold w-fit">
                                        {item.category}
                                    </span>
                                    <h4 className="mt-2 text-lg font-semibold text-white">
                                        {item.title}
                                    </h4>
                                    <Link
                                        href={item.link}
                                        className="mt-2 inline-block text-xs font-semibold text-pink-600 hover:text-pink-700 transition-colors"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
