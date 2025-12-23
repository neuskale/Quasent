"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaBolt,
    FaTools,
    FaLaptopCode,
    FaArrowRight,
} from "react-icons/fa";

const roles = [
    {
        title: "Utilities & Grid",
        icon: FaBolt,
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
        glow: "shadow-cyan-500/40",
        items: [
            "Protection & Control Engineers",
            "Substation Engineers & Designers",
            "Transmission & Distribution Engineers",
            "SCADA / EMS / ADMS Engineers",
            "OT Cybersecurity Specialists",
        ],
    },
    {
        title: "Field & Construction",
        icon: FaTools,
        gradient: "from-emerald-400 via-green-500 to-lime-600",
        glow: "shadow-emerald-500/40",
        items: [
            "Commissioning & Testing Engineers",
            "Field Technicians",
            "Construction Supervisors",
            "QA / QC Inspectors",
        ],
    },
    {
        title: "IT & Digital",
        icon: FaLaptopCode,
        gradient: "from-purple-500 via-fuchsia-500 to-pink-600",
        glow: "shadow-fuchsia-500/40",
        items: [
            "Cloud Engineers",
            "Data Engineers",
            "Platform Engineers",
            "Application Engineers",
        ],
    },
];

export default function RolesWeStaffSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eef2ff] to-[#fdf2f8] py-28">

            {/* Ambient background accents */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(236,72,153,0.15),transparent_45%)]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                        Our Capabilities
                    </p>

                    <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
                        Roles We Staff
                    </h2>

                    <p className="mt-6 text-lg text-gray-700">
                        From mission-critical utilities to cutting-edge digital platforms,
                        we deliver vetted professionals ready to perform.
                    </p>
                </motion.div>

                {/* ROLE BLOCKS */}
                <div className="grid gap-10 lg:grid-cols-3">
                    {roles.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className={`group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 p-8 shadow-xl ${group.glow}`}
                            >
                                {/* Glow ring */}
                                <div
                                    className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${group.gradient} opacity-25 blur-3xl`}
                                />

                                {/* Icon */}
                                <div
                                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${group.gradient} shadow-lg`}
                                >
                                    <Icon className="text-2xl text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    {group.title}
                                </h3>

                                {/* Role list */}
                                <ul className="space-y-3 text-sm text-gray-800">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-24 text-center"
                >
                    <Link
                        href="/roles"
                        className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 px-12 py-5 text-sm font-semibold text-white shadow-2xl transition hover:scale-105"
                    >
                        View All Roles
                        <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
