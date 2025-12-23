"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    FaBolt,
    FaTint,
    FaCogs,
    FaTools,
    FaHardHat,
    FaOilCan,
} from "react-icons/fa";

type Industry = {
    name: string;
    colorClass: string;
    imageUrl: string;
    sublinks: string[];
    icon: React.ReactNode;
};

const industries: Industry[] = [
    {
        name: "Electric Utilities",
        colorClass: "text-cyan-400",
        imageUrl: "/images/industries/electricity.webp",
        sublinks: ["Transmission", "Distribution", "Substations", "Grid Modernization"],
        icon: <FaBolt />,
    },
    {
        name: "Gas & Water Utilities",
        colorClass: "text-blue-400",
        imageUrl: "/images/industries/gas-water.jpg",
        sublinks: ["Pipeline Operations", "Water Treatment", "Metering & Compliance", "Utility Maintenance"],
        icon: <FaTint />,
    },
    {
        name: "Engineering Services",
        colorClass: "text-purple-400",
        imageUrl: "/images/industries/engineering-services.webp",
        sublinks: ["Design & Engineering", "EPC Services", "Project Engineering", "Technical Consulting"],
        icon: <FaCogs />,
    },
    {
        name: "Field Services",
        colorClass: "text-green-400",
        imageUrl: "/images/industries/field-services.jpeg",
        sublinks: ["Installation & Commissioning", "Maintenance & Repair", "Inspection Services", "Emergency Response"],
        icon: <FaTools />,
    },
    {
        name: "Construction & Engineering",
        colorClass: "text-yellow-400",
        imageUrl: "/images/industries/construction-engineering.webp",
        sublinks: ["Civil & Structural", "Infrastructure Projects", "Industrial Construction", "Site Supervision"],
        icon: <FaHardHat />,
    },
    {
        name: "Oil & Energy Service Partners",
        colorClass: "text-orange-400",
        imageUrl: "/images/industries/oil-gas-energy.cms",
        sublinks: ["Upstream & Midstream", "Energy Services", "Asset Integrity", "Operations Support"],
        icon: <FaOilCan />,
    },
];

export default function OurIndustriesSection() {
    const { scrollYProgress } = useScroll();
    const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section className="relative w-full overflow-hidden pt-16 pb-10">

            {/* 1️⃣ Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 opacity-15"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "400% 400%" }}
            />

            {/* 2️⃣ Scroll-based Parallax Glow */}
            <motion.div
                style={{ y: glowY }}
                className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[160px]"
            />

            {/* CONTENT */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-14 text-center text-4xl font-extrabold tracking-tight text-gray-900"
            >
                Our Industries
            </motion.h2>

            <div className="relative grid w-full gap-0 md:grid-cols-2 lg:grid-cols-4">
                {industries.map((industry, index) => (
                    <motion.div
                        key={industry.name}
                        tabIndex={0}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative h-64 cursor-pointer overflow-hidden border border-white/20 bg-black"
                    >
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${industry.imageUrl})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />

                        {/* 4️⃣ Industry Icon Overlay */}
                        <div className="absolute right-5 top-5 text-4xl text-white/15">
                            {industry.icon}
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                            <ul
                                className="
                  mb-2 space-y-1 text-sm text-gray-200
                  opacity-0 max-h-0 overflow-hidden
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:max-h-40
                "
                            >
                                {industry.sublinks.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="text-xs font-medium">›</span>
                                        <span className="text-xs font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className={`text-xl font-semibold tracking-tight ${industry.colorClass}`}>
                                {industry.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}

                {/* CTA TILE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative col-span-1 h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 p-10 text-white md:col-span-2 lg:col-span-2"
                >
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <p className="text-lg font-semibold">Explore Industries</p>
                            <p className="text-3xl font-bold leading-tight">
                                Want to know more about the industries we serve
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200"
                        >
                            Get In Touch →
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* 3️⃣ Section Divider Animation */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mt-12 h-px w-full origin-left bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
            />
        </section>
    );
}
