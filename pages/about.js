"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUser, FaHeart, FaCogs, FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
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

  const values = [
    {
      title: "People, Purpose & Precision",
      description: "We believe staffing starts with understanding the human element. Every placement is a deliberate match built on insight and intention.",
      icon: FaHeart,
      color: "bg-pink-500",
    },
    {
      title: "Deep Industry Knowledge",
      description: "Our expertise spans engineering, IT, and critical infrastructure. We speak your language and understand your challenges intimately.",
      icon: FaCogs,
      color: "bg-purple-500",
    },
    {
      title: "Solutions, Not Just Fills",
      description: "We go beyond transactional placements. Our goal is to solve your real problems with talent that creates lasting impact.",
      icon: FaCheckCircle,
      color: "bg-cyan-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about-us.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/90 via-[#2d1b4e]/80 to-[#e91e63]/30" />

        <motion.div
          className="relative z-10 pt-24 pb-16 px-8 lg:px-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Pulsing Badge */}
          <div className="inline-flex gap-2 items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-white text-sm font-medium">Staffing Done Right</span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-6xl lg:text-7xl font-bold mb-4 max-w-4xl">
            Staffing with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Purpose & Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-xl max-w-2xl mb-8">
            Building meaningful connections between talent and opportunity, with intention and expertise.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brand px-8 py-3 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Our Story
            </button>
            <Link
              href="/clients"
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Work With Us →
            </Link>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: Stats Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <p
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                10+
              </p>
              <p className="text-gray-500 text-sm font-medium">Years Experience</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                500+
              </p>
              <p className="text-gray-500 text-sm font-medium">Placements</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                2
              </p>
              <p className="text-gray-500 text-sm font-medium">Industries</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p
                className="text-5xl font-black mb-2"
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                100%
              </p>
              <p className="text-gray-500 text-sm font-medium">Vetted</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Origin Story */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with floating card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[520px] rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Our Beginning"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-purple-100 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center">
                  <FaHeart className="text-white text-lg" />
                </div>
                <h3 className="font-bold text-gray-900">People First</h3>
              </div>
              <p className="text-sm text-gray-600">
                We treat every candidate and client with respect and intention.
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-600 text-sm uppercase tracking-widest font-bold mb-4">
              Our Beginning
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Humble <span className="gradient-text">Beginnings</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Quasent started with a simple realization: the best part of any business is people. After beginning a career in banking, it became clear that building relationships, not paperwork, was what truly mattered. That led to staffing, where success came quickly, but something was missing.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The industry felt rigid, transactional, and too often treated people like numbers. Quasent was created to change that. Built from small beginnings, the goal was to step outside the traditional staffing model and do it better, more thoughtfully, more intentionally.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              By combining a people-first mindset with deep knowledge of engineering and IT, Quasent delivers a more informed, precise, and solutions-driven approach.
            </p>

            <Link
              href="/candidates"
              className="text-lg font-semibold"
              style={{
                background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Meet Our Founders →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Mission / About */}
      <section className="py-24 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-600 text-sm uppercase tracking-widest font-bold mb-4">
              Our Mission
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Staffing Done{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Better
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4 mt-6">
              Quasent was built on a simple belief: staffing should be done differently, and done right. We saw an industry where people became resumes and speed replaced quality. So we took a different approach.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              At Quasent, we focus on people, purpose, and precision, supporting utilities, energy, engineering, field services, construction, and IT sectors. We take the time to understand both clients and candidates to deliver real solutions, not just fills.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With deep industry experience and a commitment to doing things right, we help people find their niche and companies find the talent that truly fits. Quasent isn't traditional staffing, it's staffing done better.
            </p>
          </motion.div>

          {/* Right: Value Cards */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 card-lift flex gap-4 items-start"
                >
                  <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Founders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Meet Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Founders
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Joe Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-100 shadow-md card-lift text-center"
            >
              <div className="w-28 h-28 mx-auto rounded-full gradient-brand flex items-center justify-center mb-6">
                <FaUser className="text-white text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Joe</h3>
              <p className="text-purple-600 text-sm font-semibold mb-4">Co-Founder</p>
              <p className="text-gray-700 leading-relaxed">
                Joe's journey from banking to staffing shaped the vision for Quasent. His passion for building meaningful relationships and doing business the right way drives the company's mission to transform how staffing works.
              </p>
            </motion.div>

            {/* Karthik Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-100 shadow-md card-lift text-center"
            >
              <div className="w-28 h-28 mx-auto rounded-full gradient-brand flex items-center justify-center mb-6">
                <FaUser className="text-white text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Karthik</h3>
              <p className="text-purple-600 text-sm font-semibold mb-4">Co-Founder</p>
              <p className="text-gray-700 leading-relaxed">
                Karthik brings deep technical expertise and operational excellence. His understanding of engineering and IT markets ensures Quasent delivers precision in every placement and truly solves client needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CTA Banner */}
      <section className="py-20 gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Work with a Staffing Partner
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              That understands your challenges and delivers real solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clients"
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:shadow-lg transition-all"
              >
                For Clients
              </Link>
              <Link
                href="/candidates"
                className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                For Candidates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
