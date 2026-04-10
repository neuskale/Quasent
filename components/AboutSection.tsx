"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 space-y-24">

                {/* WE ARE QUASENT */}
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/about-img.png"
                            alt="We Are Quasent"
                            width={600}
                            height={450}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-2xl"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            We Are{" "}
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                                Quasent
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            Quasent is a global recruitment and workforce solutions partner dedicated to helping
                            organizations build agile, future-ready teams. We connect ambitious companies with
                            exceptional talent through a powerful blend of industry insight, advanced hiring
                            strategies, and a strong global talent network.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            From permanent staffing and executive leadership hiring to contract staffing and
                            project-based workforce models, we deliver tailored solutions that align with each
                            client’s business goals. Our approach ensures speed, quality, and scalability in an
                            ever-evolving job market.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            What sets Quasent apart is our commitment to innovation, transparency, and personalized
                            partnerships. We don’t just fill roles—we build long-term relationships that drive
                            sustainable growth, operational efficiency, and competitive advantage.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            At the same time, we empower professionals by creating meaningful career opportunities,
                            enabling them to grow, adapt, and thrive in a dynamic global workforce. At Quasent,
                            talent meets opportunity, and businesses move confidently toward the future.
                        </p>

                    </motion.div>
                </div>

                {/* MISSION & VISION */}
                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-purple-700">Our Mission</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To connect exceptional talent with growing organizations, enabling innovation,
                            transformation, and sustained success.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-cyan-700">Our Vision</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To become the most trusted global workforce partner, empowering businesses and
                            individuals to achieve limitless growth.
                        </p>
                    </motion.div>
                </div>

                {/* VALUES */}
                <div className="space-y-10">
                    <h3 className="text-3xl font-bold text-gray-900 text-center">Our Core Values</h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We operate with honesty and transparency in every decision." },
                            { title: "Innovation", desc: "We bring forward-thinking solutions to modern workforce challenges." },
                            { title: "Partnership", desc: "We build long-term relationships based on trust and collaboration." }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center"
                            >
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
