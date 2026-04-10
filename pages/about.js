"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaCogs, FaCheckCircle, FaBolt, FaLaptopCode, FaArrowRight, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const values = [
  {
    title: "People, Purpose & Precision",
    description: "Every placement is a deliberate match built on insight and intention — not speed.",
    icon: FaHeart,
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    title: "Deep Industry Knowledge",
    description: "We speak your language across engineering, IT, and critical infrastructure.",
    icon: FaCogs,
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    title: "Solutions, Not Just Fills",
    description: "We solve real problems with talent that creates lasting impact — beyond the transaction.",
    icon: FaCheckCircle,
    gradient: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Placements" },
  { value: "2", label: "Core Industries" },
  { value: "100%", label: "Vetted Talent" },
];

const story = [
  { step: "01", heading: "It Started with People", body: "Quasent started with a simple realization: the best part of any business is people." },
  { step: "02", heading: "A Different Path", body: "After beginning a career in banking, it became clear that building relationships, not paperwork, was what truly mattered. That led to staffing, where success came quickly, but something was missing." },
  { step: "03", heading: "A New Approach", body: "The industry felt rigid, transactional, and too often treated people like numbers instead of individuals. Quasent was created to change that." },
  { step: "04", heading: "Built Differently", body: "Built from small beginnings, the goal was to step outside the traditional staffing model and do it better, more thoughtfully, more intentionally, and with real ownership. By combining a people-first mindset with deep knowledge of engineering and IT, Quasent delivers a more informed, precise, and solutions-driven approach to hiring." },
  { step: "05", heading: "Core Value", body: "At its core, Quasent is about helping people find their niche, and helping businesses in the power and utilities industry find the right people to move forward." },
];

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about-us.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0520]/95 via-[#1a0a2e]/85 to-[#e91e63]/20" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute top-32 right-32 w-48 h-48 rounded-full border border-white/5 hidden lg:block" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex gap-2 items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-white text-sm font-medium">Staffing Done Right</span>
          </div>

          <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 max-w-3xl leading-tight">
            Staffing with{" "}
            <span style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0, #00bcd4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Purpose & Precision
            </span>
          </h1>

          <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
            Building meaningful connections between talent and opportunity — with intention and expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-brand px-7 py-3 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
            >
              Our Story
            </button>
            <Link
              href="/clients"
              className="px-7 py-3 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              Work With Us <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>





      {/* ORIGIN STORY — Timeline */}
      <section id="our-story" className="py-28 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">Our Beginning</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              From Humble <span className="gradient-text">Beginnings</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image — sticky so it stays in view while scrolling timeline */}
            <motion.div
              className="relative lg:sticky lg:top-28"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/about.png" alt="Our Story" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-purple-100 max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center shrink-0">
                    <FaHeart className="text-white text-sm" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">People First</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">We treat every candidate and client with respect and intention.</p>
              </div>
            </motion.div>

            {/* Right: Timeline */}
            <div className="space-y-8">
              {story.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shrink-0 text-white text-xs font-bold shadow-md">
                      {item.step}
                    </div>
                    {i < story.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-purple-200 to-transparent mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.heading}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] text-justify">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT QUASENT */}
      <section className="relative py-28 overflow-hidden bg-white">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-50/50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-50/50 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4 block">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
              About <span className="gradient-text">Quasent</span>
            </h2>

            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p>Quasent was built on a simple belief: staffing should be done differently, and done right.</p>
              <p>We saw an industry where people became resumes and speed replaced quality. So we took a different approach.</p>
              <p>At Quasent, we focus on people, purpose, and precision — supporting utilities, energy, engineering, field services, construction, and IT sectors. We take the time to understand both clients and candidates to deliver real solutions, not just fills.</p>
              <p>With deep industry experience and a commitment to doing things right, we help people find their niche and companies find the talent that truly fits.</p>
              <p className="font-semibold text-gray-800">Quasent isn't traditional staffing — it's staffing done better.</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {["People First", "Purpose Driven", "Precision Staffing", "Solutions, Not Just Fills"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 text-sm font-medium rounded-full border border-purple-200 text-purple-700 bg-purple-50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — image + floating cards */}
          <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
          >
            <div className="relative h-[540px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/about-img.png" alt="About Quasent" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 border border-white flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shrink-0">
                <FaCheckCircle className="text-white text-xs" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">100% Vetted</p>
                <p className="text-[11px] text-gray-500">Every candidate, every time</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-28 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">The Team</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                name: "Joe",
                role: "Co-Founder & CEO",
                photo: null,
                initials: "JO",
                gradient: "from-pink-500 to-purple-600",
                tag: "Relationship Builder",
                bio: "Joe's journey from banking to staffing shaped the vision for Quasent. His passion for building meaningful relationships and doing business the right way drives the company's mission to transform how staffing works in the engineering and utilities space.",
                social: { linkedin: "#", twitter: "#", email: "joe@quasent.com" },
              },
              {
                name: "Karthik",
                role: "Co-Founder & CTO",
                photo: null,
                initials: "KA",
                gradient: "from-cyan-500 to-purple-600",
                tag: "Technical Expert",
                bio: "Karthik brings deep technical expertise and operational excellence. His understanding of engineering and IT markets ensures Quasent delivers precision in every placement and truly solves client needs at scale.",
                social: { linkedin: "#", twitter: "#", email: "karthik@quasent.com" },
              },
            ].map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 card-lift p-8 flex flex-col"
              >
                {/* Top: photo + name + role */}
                <div className="flex items-center gap-5 mb-6">
                  {/* Portrait photo / avatar */}
                  <div className={`relative w-20 h-20 rounded-2xl shrink-0 overflow-hidden bg-gradient-to-br ${founder.gradient} shadow-md flex items-center justify-center`}>
                    {founder.photo ? (
                      <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top" />
                    ) : (
                      <span className="text-white text-2xl font-bold">{founder.initials}</span>
                    )}
                  </div>

                  <div>
                    <span className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-gradient-to-r ${founder.gradient} text-white mb-1.5`}>
                      {founder.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{founder.name}</h3>
                    <p className="text-sm text-purple-600 font-medium">{founder.role}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px w-full bg-gradient-to-r ${founder.gradient} opacity-20 mb-6`} />

                {/* Bio */}
                <p className="text-gray-600 text-[15px] leading-relaxed flex-1">{founder.bio}</p>

                {/* Social — bottom */}
                <div className="flex items-center justify-between mt-7 pt-5 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-medium">Connect</span>
                  <div className="flex gap-2">
                    <a
                      href={founder.social.linkedin}
                      className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
                    >
                      <FaLinkedin className="text-sm" />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
                    >
                      <FaTwitter className="text-sm" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
                    >
                      <FaEnvelope className="text-sm" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
