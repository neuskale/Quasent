"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBolt,
  FaGlobe,
  FaComments,
  FaArrowRight,
  FaCircle,
  FaCheckCircle,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

const features = [
  {
    title: "Industry-Specific Focus",
    description:
      "We operate within the power, utility, and infrastructure ecosystem while also delivering IT staffing solutions that support modern digital environments, giving clients access to talent with real, relevant experience.",
    icon: FaBolt,
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    title: "The Bigger Picture",
    description:
      "Our work spans traditional engineering disciplines and modern technology solutions, helping clients hire across infrastructure, operations, and digital transformation initiatives.",
    icon: FaGlobe,
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    title: "Clear Communication",
    description:
      "We understand the cost of delays, misalignment, and poor follow-up. Our process is built on transparency, responsiveness, and keeping your hiring process moving forward.",
    icon: FaComments,
    gradient: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
];

const clientTypes = [
  "Utilities and electric cooperatives ",
  "EPC and engineering consulting firms ",
  "Energy and infrastructure organizations ",
  "Grid modernization and smart utility programs ",
  "Technology integrators and implementation partners",
  "Firms supporting transmission & distribution (T&D), substations, and control systems",
  "Everyone! While we bring deep expertise in the utility and energy sector, Quasent is not limited to these industries. ",
];

const stats = [
  { label: "500+", sublabel: "Placements Made" },
  { label: "100%", sublabel: "Fully Vetted" },
  { label: "15+", sublabel: "Industries Served" },
  { label: "10+", sublabel: "Years of Experience" },
];

export default function ClientsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[42vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contract.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0520]/97 via-[#1a0a2e]/90 to-[#e91e63]/15" />
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
          <motion.h1
            className="text-4xl lg:text-6xl font-black text-white leading-[1.08] max-w-4xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Specialized IT & Engineering Talent for{" "}
            <span className="gradient-text">Power, Utility, and Critical Infrastructure</span>
          </motion.h1>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="btn-brand px-8 py-4 rounded-xl text-white font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all"
            >
              Start Building Your Team <FaArrowRight />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Talk to Quasent
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* CONTENT BELOW HERO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Specialized IT & Engineering Talent for{" "}
              <span className="gradient-text">Power, Utility, and Critical Infrastructure</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-gray-600 text-[17px] leading-relaxed"
            >
              <p className="text-justify">
                Hiring in the utility, energy, and technology space takes more than access to resumes. It requires a partner who understands both the engineering behind the infrastructure and the technology driving modern operations.
              </p>
              <p className="text-justify">
                Quasent focuses on highly specialized engineering and IT professionals who support power generation, transmission, distribution, substations, protection systems, and grid modernization initiatives, alongside the technology environments that power them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-gray-600 text-[17px] leading-relaxed"
            >
              <p className="text-justify">
                From SCADA, ADMS, OMS, and DERMS to enterprise platforms, cloud systems, and data analytics, we understand the tools, systems, and project demands utilities rely on every day. We know the difference between a relay settings engineer and a protection and control engineer. We also understand what it takes to hire the right application developer, data engineer, or cybersecurity specialist to support those environments.
              </p>
              <p className="text-justify">
                That level of specialization allows us to identify stronger candidates, ask better technical questions, and deliver talent aligned with your systems, your projects, and your long-term goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY QUASENT */}
      <section className="py-28 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">Our Advantage</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="gradient-text">Quasent</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We bring a unique combination of industry focus, broad expertise, and honest communication to every search.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-white rounded-3xl p-10 shadow-sm border ${feature.border} card-lift`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS WE PARTNER WITH */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/contract.jpg" alt="Organizations We Partner With" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4 block">Partnership Scope</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              The Clients {" "}
              <span className="gradient-text">We Support</span>
            </h2>

            <div className="space-y-1">
              {clientTypes.map((clientType, i) => (
                <motion.div
                  key={clientType}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center justify-between py-4 border-b border-gray-100 group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-pink-500 text-sm shrink-0" />
                    <span className="text-gray-700 font-medium">{clientType}</span>
                  </div>
                  <FaArrowRight className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all text-sm" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137]">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-3 block">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Flexible{" "}
              <span className="gradient-text">Engagement Models</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-4 text-lg">
              We adapt to your hiring needs — whether you need short-term support or permanent talent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-white/[0.05] backdrop-blur-sm rounded-2xl p-10 border border-white/10 group hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] pointer-events-none select-none">CTR</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center mb-6">
                <FaBolt className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Contract Staffing</h3>
              <p className="text-white/60 leading-relaxed">
                Flexible teams for temporary projects, seasonal peaks, or specialized skill needs. Scale your workforce without long-term commitments.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white/[0.05] backdrop-blur-sm rounded-2xl p-10 border border-white/10 group hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-white/[0.03] pointer-events-none select-none">DH</div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/30 to-rose-500/30 border border-white/10 flex items-center justify-center mb-6">
                <FaUserTie className="text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Direct Hire</h3>
              <p className="text-white/60 leading-relaxed">
                Permanent placements for key roles. We handle the entire recruitment process and ensure cultural fit for your team.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          </div>
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
              Start Building Your Team With Quasent
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Connect with our team and let's discuss how we can support your critical staffing needs.
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
                <FaBuilding />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hire Engineering Talent</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Need specialized engineering or utility technology talent? Quasent helps you hire professionals who understand the systems, projects, and challenges unique to your industry.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white rounded-xl font-bold transition-all hover:shadow-lg"
              >
                <span className="gradient-text">Talk to Quasent</span>
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
              <h3 className="text-xl font-bold text-white mb-3">Get in Touch</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Have questions about our process, capabilities, or how we can support your team? Reach out and we'll respond promptly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white/60 text-white font-bold hover:bg-white/15 transition-all rounded-xl"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
