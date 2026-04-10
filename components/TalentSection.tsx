"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBriefcase, FaRocket } from "react-icons/fa";

export default function TalentSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Future-Proof{" "}
            <span className="gradient-text">Your Career.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto">
            Whether you're hiring or job searching, Quasent connects the right people with the right roles.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Job Search Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/contract.jpg"
                alt="Job Search"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                  <FaBriefcase className="text-pink-400" />
                  For Job Seekers
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white px-8 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Job Search
              </h3>
              <p className="text-gray-500 leading-relaxed mb-7">
                Need specialized engineering or utility technology talent? Quasent helps you hire professionals who understand the systems, projects, and challenges unique to your industry.
              </p>
              <Link
                href="/clients"
                className="inline-flex items-center gap-2 btn-brand px-6 py-3 rounded-xl font-semibold text-sm group/btn"
              >
                Explore Live Roles
                <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Candidate Services Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/candidateservices.jpg"
                alt="Candidate Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                  <FaRocket className="text-cyan-400" />
                  For Candidates
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white px-8 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Candidate Services
              </h3>
              <p className="text-gray-500 leading-relaxed mb-7">
                Looking for your next opportunity in engineering, IT, or grid modernization? Quasent connects talented professionals with opportunities that support long-term career growth.
              </p>
              <Link
                href="/candidates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors group/btn"
              >
                Candidate Services
                <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
