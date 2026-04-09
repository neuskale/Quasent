"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBolt, FaGlobe, FaComments, FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ClientsPage() {
  const features = [
    {
      title: "Industry-Specific Focus",
      description:
        "We operate within the power, utility, and infrastructure ecosystem while also delivering IT staffing solutions that support modern digital environments.",
      icon: FaBolt,
    },
    {
      title: "The Bigger Picture",
      description:
        "Our work spans traditional engineering disciplines and modern technology solutions, giving us unique insight into your challenges.",
      icon: FaGlobe,
    },
    {
      title: "Clear Communication",
      description:
        "We understand the cost of delays, misalignment, and poor follow-up. Our process is built on transparency and responsiveness.",
      icon: FaComments,
    },
  ];

  const clientTypes = [
    "Utilities and Energy Organizations",
    "EPC (Engineering, Procurement, Construction) Firms",
    "Energy Sector Companies",
    "Grid Modernization Initiatives",
    "Technology Integrators",
    "Transmission & Distribution Firms",
    "All Industries — We Serve Everyone!",
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/contract.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/92 via-[#2d1b4e]/85 to-transparent" />

        <motion.div
          className="relative z-10 max-w-7xl px-6 lg:px-20 flex items-center min-h-[60vh] pt-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex gap-2 items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white text-sm font-medium">For Clients</span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-6xl lg:text-7xl font-bold mb-6">
              Specialized IT & Engineering Talent for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Critical Infrastructure
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-xl mb-8">
              Quasent understands the intersection of engineering and IT hiring needs. We don't just place candidates—we deliver solutions that strengthen your critical infrastructure projects and modernize your digital environments.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="btn-brand px-8 py-3 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Start Building Your Team
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Talk to Quasent
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: Intro Statement */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          {/* Decorative quotation mark */}
          <div className="text-[200px] font-serif leading-none text-purple-100 pointer-events-none absolute top-0 left-0 -mt-20">
            "
          </div>

          <motion.p
            className="text-2xl italic text-gray-700 leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quasent understands the intersection of engineering and IT hiring needs. Whether you're managing a massive grid modernization initiative, supporting traditional engineering disciplines, or building tech solutions for the energy sector, we have the industry expertise and network to connect you with talent that truly fits.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: Why Quasent */}
      <section className="py-24 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Quasent
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-10 shadow-md border border-white card-lift hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mb-6">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Clients We Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative h-[550px] rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/permanent.jpg"
              alt="Organizations We Partner With"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-600 text-sm uppercase tracking-widest font-bold mb-4">
              Partnership Scope
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Organizations We{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Partner With
              </span>
            </h2>

            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {clientTypes.map((clientType, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 py-4 border-b border-gray-100 group"
                  whileHover={{ paddingLeft: "8px" }}
                >
                  <FaArrowRight className="text-pink-500 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                  <p className="text-lg text-gray-700">{clientType}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Engagement Models */}
      <section className="py-20 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Flexible Engagement Models
            </h2>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-400/20 flex items-center justify-center mb-4">
                <FaBolt className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Contract Staffing</h3>
              <p className="text-white/70">
                Flexible teams for temporary projects, seasonal peaks, or specialized skill needs. Scale your workforce without long-term commitments.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-14 h-14 rounded-xl bg-pink-400/20 flex items-center justify-center mb-4">
                <FaBolt className="text-pink-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Direct Hire</h3>
              <p className="text-white/70">
                Permanent placements for key roles. We handle the entire recruitment process and ensure cultural fit for your team.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-20 gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Start Building Your Team With Quasent
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Connect with our team and let's discuss how we can support your critical staffing needs.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white rounded-lg hover:shadow-lg transition-all"
              style={{
                background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Get in Touch →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
