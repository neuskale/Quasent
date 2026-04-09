"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaComments,
  FaHandshake,
  FaAward,
  FaBullseye,
  FaUserTie,
  FaBolt,
  FaLaptopCode,
  FaIndustry,
  FaSolarPanel,
  FaChartBar,
  FaCloud,
} from "react-icons/fa";

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

interface Expectation {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const expectations: Expectation[] = [
  {
    title: "Communication",
    description:
      "No games, no delays. We communicate clearly at every step and keep you informed throughout the entire process.",
    icon: FaComments,
  },
  {
    title: "Better Experience",
    description:
      "Recruiting should feel like a partnership, not a transaction. We listen, we adapt, and we genuinely care about your fit.",
    icon: FaHandshake,
  },
  {
    title: "Preparation",
    description:
      "We prepare you for success. You'll understand the role, the team, and what it takes to excel from day one.",
    icon: FaAward,
  },
  {
    title: "Aligned Opportunities",
    description:
      "We understand your skills and career goals. Every opportunity we present is a genuine match, not just a checkbox.",
    icon: FaBullseye,
  },
  {
    title: "Long-term Partner",
    description:
      "Your career doesn't end at placement. We're here to support your growth and success for the long term.",
    icon: FaUserTie,
  },
];

const disciplines = [
  { name: "Engineering", icon: FaBolt, color: "text-pink-500" },
  { name: "IT & Software", icon: FaLaptopCode, color: "text-purple-500" },
  { name: "Utilities", icon: FaIndustry, color: "text-cyan-500" },
  { name: "Grid Modernization", icon: FaSolarPanel, color: "text-pink-500" },
  { name: "Data & Analytics", icon: FaChartBar, color: "text-purple-500" },
  { name: "Cloud & DevOps", icon: FaCloud, color: "text-cyan-500" },
];

export default function CandidatesPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/candidateservices.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/90 via-[#2d1b4e]/80 to-[#00bcd4]/20" />

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
              <span className="text-white text-sm font-medium">For Candidates</span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-6xl lg:text-7xl font-bold mb-6">
              Your IT or Engineering Career Deserves{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                More Than a Transaction
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-xl mb-8">
              Experience staffing done right. We partner with you, not just place you.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('disciplines')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-brand px-8 py-3 text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Explore Opportunities
              </button>
              <Link
                href="/about"
                className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: Promise Statement */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          {/* Decorative Q */}
          <div className="text-[200px] font-serif leading-none text-purple-100 pointer-events-none absolute top-0 left-0 -mt-20">
            Q
          </div>

          <motion.p
            className="text-2xl italic text-gray-700 leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            At Quasent, candidates are not treated like names in a database. We take time to understand who you are, what you want from your career, and what kind of environment brings out your best work. We're here to help you find not just a job, but a role where you can truly thrive.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: What You Can Expect */}
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
              What You Can{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Expect From Quasent
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expectations.map((expectation, index) => {
              const Icon = expectation.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-md border border-white/80 card-lift relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Numbered badge */}
                  <div className="absolute top-5 right-5 text-6xl font-black text-gray-100 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl gradient-brand text-white flex items-center justify-center mb-5">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {expectation.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {expectation.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Who We Work With */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-600 text-sm uppercase tracking-widest font-bold mb-4">
              Career Levels
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Work With
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're a junior professional taking your first steps in IT or engineering, a mid-career expert looking for your next challenge, or a senior leader ready to mentor and drive impact, Quasent has opportunities for you.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We work with professionals at every stage of their careers. From first-time roles to leadership positions, from specialized technical experts to generalists, we understand the diverse needs and goals of the engineering and IT landscape.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              What matters most is your commitment to excellence and your willingness to grow. We're looking for professionals who care about doing great work and who want a staffing partner that treats them as more than just a placement.
            </p>

            {/* Level badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold">
                Junior
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                Mid-Level
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
                Senior
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-[500px] rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/job_search.png"
              alt="Who We Work With"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Career Types */}
      <section id="disciplines" className="py-20 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Opportunities Across{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Every Discipline
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {disciplines.map((discipline, index) => {
              const Icon = discipline.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-lift group hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <Icon className={`text-2xl flex-shrink-0 ${discipline.color}`} />
                  <span className="font-semibold text-gray-900">{discipline.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="py-24 gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Start Your Next Chapter?
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Connect with our team and explore opportunities that align with your expertise and career goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Connect With Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
