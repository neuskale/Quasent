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
  FaArrowRight,
  FaCircle,
  FaCheckCircle,
} from "react-icons/fa";

const expectations = [
  {
    title: "Straightforward Communication",
    description:
      "You should never feel left in the dark. We believe candidates deserve updates, preparation, and transparency throughout the hiring process.",
    icon: FaComments,
    gradient: "from-pink-500 to-rose-600",
    border: "border-pink-100",
  },
  {
    title: "A Better Recruiting Experience",
    description:
      "Too many professionals have experienced poor follow-up or complete silence from recruiters. Quasent is committed to a more responsive, respectful, and professional experience.",
    icon: FaHandshake,
    gradient: "from-purple-500 to-violet-600",
    border: "border-purple-100",
  },
  {
    title: "Preparation That Helps You Compete",
    description:
      "We help you understand each opportunity, prepare for interviews, and present your experience in the strongest possible way.",
    icon: FaAward,
    gradient: "from-cyan-500 to-teal-600",
    border: "border-cyan-100",
  },
  {
    title: "Opportunities Aligned With Your Expertise",
    description:
      "From experienced engineers to IT professionals in software, data, cloud, and cybersecurity, we connect talent with roles that match real technical demands and project needs.",
    icon: FaBullseye,
    gradient: "from-pink-500 to-purple-600",
    border: "border-pink-100",
  },
  {
    title: "A Long-Term Career Partner",
    description:
      "We care about the opportunities we bring to you because your career matters. Whether you are actively searching or planning your next move, Quasent is here to support your growth.",
    icon: FaUserTie,
    gradient: "from-violet-500 to-cyan-600",
    border: "border-violet-100",
  },
];

export default function CandidatesPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[42vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/candidateservices.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0520]/97 via-[#1a0a2e]/90 to-[#00bcd4]/15" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
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
            <FaCircle className="text-cyan-400 text-xs animate-pulse" />
            For Candidates
          </motion.div>

          <motion.h1
            className="text-4xl lg:text-6xl font-black text-white leading-[1.08] max-w-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Your IT or Engineering Career Deserves{" "}
            <span className="gradient-text">More Than a Transaction</span>
          </motion.h1>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link
              href="/contact"
              className="btn-brand px-8 py-4 rounded-xl text-white font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all"
            >
              Explore Opportunities <FaArrowRight />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* CONTENT BELOW HERO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4 block">Who We Are For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Your IT or Engineering Career Deserves{" "}
              <span className="gradient-text">More Than a Transaction</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p className="text-justify">
                At Quasent, candidates are not treated like names in a database. We work with professionals whose skills support critical infrastructure, complex engineering programs, and modern technology environments. From engineering and utility systems to IT, software development, data, and cybersecurity, we understand the value of your background, the importance of the right fit, and the need for clear communication at every stage.
              </p>
              <p className="text-justify">
                Our goal is not just to help you land a job. It is to help you move your career forward with opportunities that align with your experience, your goals, and your long-term growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/candidateservices.jpg" alt="Candidates" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 py-4 border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white">
                  <FaUserTie className="text-sm" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Career First</p>
                  <p className="text-xs text-gray-500">More than a placement</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="py-28 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">Our Commitment</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What You Can Expect{" "}
              <span className="gradient-text">From Quasent</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {expectations.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm border ${item.border} card-lift flex gap-0`}
                >
                  {/* Color strip */}
                  <div className={`w-1.5 shrink-0 bg-gradient-to-b ${item.gradient}`} />

                  {/* Content */}
                  <div className="p-7 flex flex-col justify-center">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}>
                        <Icon className="text-white text-sm" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-[16px] leading-snug pt-1">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed pl-12">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Last card — CTA prompt spanning full width if odd */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: expectations.length * 0.08 }}
              className="bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137] rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <FaCheckCircle className="text-cyan-400 text-2xl mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Ready to Take the Next Step?</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Connect with Quasent and explore opportunities that match your skills, experience, and career goals.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 btn-brand px-6 py-3 rounded-xl text-white font-bold text-sm hover:shadow-lg transition-all"
              >
                Get in Touch <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/job_search.png" alt="Who We Work With" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Content — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4 block">Career Levels</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Who We <span className="gradient-text">Work With</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p className="text-justify">
                We support junior, mid-level and senior professionals across engineering, utility operations, and IT environments, including software development, infrastructure, data, and emerging technologies.
              </p>
              <p className="text-justify">
                We also recognize the value of emerging talent with strong technical foundations and relevant experience, helping connect the next generation of professionals with meaningful opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Junior', 'Mid-Level', 'Senior'].map((level, i) => (
                <span
                  key={level}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                    i === 0 ? 'bg-pink-100 text-pink-700' :
                    i === 1 ? 'bg-purple-100 text-purple-700' :
                    'bg-cyan-100 text-cyan-700'
                  }`}
                >
                  {level}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden gradient-brand">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to Start Your Next Chapter?
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Connect with our team and explore opportunities that align with your expertise and career goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              className="bg-white/12 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white text-xl flex items-center justify-center mb-5">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Explore Opportunities</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Looking for your next opportunity in engineering, IT, or grid modernization? Quasent connects talented professionals with roles that support long-term career growth.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 bg-white rounded-xl font-bold transition-all hover:shadow-lg">
                <span className="gradient-text">Find My Next Role</span>
              </Link>
            </motion.div>

            <motion.div
              className="bg-white/12 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white text-xl flex items-center justify-center mb-5">
                <FaComments />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Connect With Our Team</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Have questions about our process or want to discuss your career goals? Reach out and we'll respond promptly.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white/60 text-white font-bold hover:bg-white/15 transition-all rounded-xl">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
