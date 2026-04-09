"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  const keyPoints = [
    {
      number: "01",
      text: "Utility-grade expertise in regulated environments",
    },
    {
      number: "02",
      text: "Curated shortlists delivered quickly",
    },
    {
      number: "03",
      text: "Flexible engagement models",
    },
    {
      number: "04",
      text: "Project teams aligned to delivery needs",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/about.png"
            alt="About Quasent"
            width={560}
            height={500}
            className="rounded-2xl shadow object-cover w-full"
          />

          {/* Decorative pink blur blob */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-pink-300/20 blur-3xl pointer-events-none" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Quasent</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Quasent was built on a simple belief: staffing should be done differently, and done right. We saw an industry where people became resumes and speed replaced quality. So we took a different approach. At Quasent, we focus on people, purpose, and precision.
          </p>

          {/* Key Points Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {keyPoints.map((point) => (
              <motion.div
                key={point.number}
                variants={itemVariants}
                className="flex gap-3"
              >
                <span className="text-pink-500 font-bold text-xl flex-shrink-0">
                  {point.number}
                </span>
                <p className="text-gray-700 font-medium text-sm leading-tight">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="btn-brand inline-flex items-center px-8 py-4 font-semibold rounded-xl"
            >
              Learn More →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
