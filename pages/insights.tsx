"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRight, FaCircle, FaClock } from "react-icons/fa";
import { useState } from "react";

const featured = {
  title: "Grid Modernization: Why Utilities Are Racing to Hire Specialized Engineers",
  excerpt:
    "As aging infrastructure faces growing pressure from distributed energy resources and digital transformation, utilities are investing heavily in specialized engineering talent. Here's what's driving demand and what it means for hiring.",
  category: "Engineering",
  readTime: "5 min read",
  image: "/images/industries/electricity.webp",
};

const articles = [
  {
    title: "The Growing Demand for SCADA and ADMS Professionals in the Utility Sector",
    excerpt:
      "Modern utility operations depend on real-time monitoring and control. We explore why SCADA, ADMS, and OMS talent is among the most sought-after in the industry today.",
    category: "IT & Technology",
    readTime: "4 min read",
    image: "/images/insights/Technology-SaaS.jpeg",
  },
  {
    title: "Contract vs. Direct Hire: What's the Right Staffing Strategy for Your Team?",
    excerpt:
      "Whether you're scaling quickly or filling a permanent gap, the right engagement model matters. We break down the pros, cons, and use cases for each approach.",
    category: "Staffing",
    readTime: "3 min read",
    image: "/images/insights/market-bg.jpeg",
  },
  {
    title: "Protection & Control Engineering: One of the Most Specialized Roles in Power",
    excerpt:
      "P&C engineers work at the intersection of safety, reliability, and infrastructure. Understanding this discipline is key to hiring — and retaining — the right talent.",
    category: "Engineering",
    readTime: "5 min read",
    image: "/images/insights/construction.jpeg",
  },
  {
    title: "Cybersecurity in Critical Infrastructure: The Talent Gap You Can't Ignore",
    excerpt:
      "As utilities digitize operations, the attack surface grows. The demand for cybersecurity professionals in energy and infrastructure is outpacing supply — here's what employers can do.",
    category: "IT & Technology",
    readTime: "4 min read",
    image: "/images/insights/robotic-industry.jpeg",
  },
  {
    title: "What Candidates Want: How Staffing Firms Can Earn Long-Term Trust",
    excerpt:
      "Transparency, follow-through, and genuine fit matter more than speed. We share what engineering and IT professionals consistently tell us about what makes a great recruiting experience.",
    category: "Candidates",
    readTime: "3 min read",
    image: "/images/insights/natural.jpeg",
  },
  {
    title: "Cloud Engineering in the Energy Sector: Emerging Roles and Growing Demand",
    excerpt:
      "Energy organizations are moving critical systems to cloud environments. We look at the cloud engineering roles gaining traction and what skills employers are prioritizing.",
    category: "IT & Technology",
    readTime: "4 min read",
    image: "/images/insights/health-science.jpeg",
  },
];

const categories = ["All", "Engineering", "IT & Technology", "Staffing", "Candidates"];

const categoryColors: Record<string, string> = {
  "Engineering": "bg-pink-100 text-pink-700",
  "IT & Technology": "bg-purple-100 text-purple-700",
  "Staffing": "bg-cyan-100 text-cyan-700",
  "Candidates": "bg-amber-100 text-amber-700",
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[42vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/insights/market-bg.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0520]/97 via-[#1a0a2e]/90 to-[#9c27b0]/20" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaCircle className="text-purple-400 text-xs animate-pulse" />
            Insights & Industry Perspectives
          </motion.div>

          <motion.h1
            className="text-4xl lg:text-6xl font-black text-white leading-[1.08] max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Insights from <span className="gradient-text">Quasent</span>
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Perspectives on engineering, IT, and staffing in the utility and energy sector.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 card-lift"
          >
            {/* Image */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="bg-white p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <FaClock className="text-[10px]" /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">{featured.excerpt}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 font-semibold text-purple-600 hover:text-pink-600 transition group/btn"
              >
                Read Article <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALL ARTICLES */}
      <section className="py-16 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between mb-12 flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Latest <span className="gradient-text">Articles</span>
            </h2>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all ${
                    activeCategory === cat
                      ? "gradient-brand text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredArticles.length === 0 && (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-3 text-center text-gray-400 py-16 text-lg"
              >
                No articles in this category yet.
              </motion.p>
            )}
          </AnimatePresence>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-lift flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <FaClock className="text-[10px]" /> {article.readTime}
                  </div>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-3 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-pink-600 transition group/btn"
                  >
                    Read More <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden gradient-brand">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Stay Ahead in Engineering & IT
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto mb-10">
              Whether you're hiring or exploring your next opportunity, Quasent keeps you informed on the trends shaping the industry.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/clients"
                className="px-8 py-4 bg-white rounded-xl font-bold transition-all hover:shadow-lg inline-flex items-center gap-2"
              >
                <span className="gradient-text">For Clients</span>
              </Link>
              <Link
                href="/candidates"
                className="px-8 py-4 border-2 border-white/60 text-white font-bold rounded-xl hover:bg-white/15 transition-all"
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
