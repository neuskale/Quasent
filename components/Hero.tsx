"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[620px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse" />
            <span className="text-sm font-semibold text-white/90">
              Staffing with Purpose
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Powering Utilities & Energy with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ec4899 0%, #a855f7 50%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fully Vetted
            </span>{" "}
            Engineering, Field & IT Talent
          </motion.h1>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            {[
              { icon: FaBolt,     text: "Utility-Grade Expertise", color: "text-amber-400" },
              { icon: FaShieldAlt, text: "Compliance-Ready",       color: "text-violet-400" },
              { icon: FaUsers,    text: "People-First",            color: "text-cyan-400" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <item.icon className={item.color} />
                {item.text}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/clients"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold btn-brand shadow-lg"
            >
              Hire Talent
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold bg-white/10 border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Look for Talent
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
