"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaUserCog,
    FaClipboardCheck,
    FaShieldAlt,
    FaCheckCircle,
    FaHardHat,
} from "react-icons/fa";

const steps = [
    {
        title: "Technical & Domain Screening",
        description: "Deep evaluation of role-specific skills, certifications, and technical competence.",
        icon: FaUserCog,
        color: "from-indigo-500 to-purple-500",
    },
    {
        title: "Industry Experience Validation",
        description: "Hands-on experience verified across utilities, engineering, and field operations.",
        icon: FaClipboardCheck,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Reference & Background Checks",
        description: "Comprehensive reference, background, and employment verification.",
        icon: FaShieldAlt,
        color: "from-emerald-500 to-teal-500",
    },
    {
        title: "Compliance-Ready Onboarding",
        description: "Candidates arrive fully compliant with regulatory and client requirements.",
        icon: FaCheckCircle,
        color: "from-green-500 to-lime-500",
    },
    {
        title: "Safety-First Mindset",
        description: "Proven commitment to safety culture, protocols, and field readiness.",
        icon: FaHardHat,
        color: "from-orange-500 to-amber-500",
    },
];

export default function HowWeVetTalentSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] py-24 text-white">
            {/* Background accents */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                        Our Vetting Approach
                    </p>

                    <h2 className="text-4xl font-extrabold leading-tight text-white">
                        How We Vet Talent
                    </h2>

                    <p className="mt-4 text-lg text-gray-300">
                        Our vetting process ensures every candidate is fully prepared, compliant,
                        and ready to deploy from day one.
                    </p>
                </motion.div>

                {/* Process Path */}
                <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-5">

                    {/* Vertical connector (desktop) */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* Icon */}
                                <div
                                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg`}
                                >
                                    <Icon className="text-2xl text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 text-lg font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 text-center"
                >
                    <Link
                        href="/how-we-vet"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-10 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                    >
                        See Our Vetting Process →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
