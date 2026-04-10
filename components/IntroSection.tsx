"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaLaptopCode, FaTools, FaSolarPanel } from "react-icons/fa";

const capabilities = [
  {
    icon: FaBolt,
    title: "Engineering",
    desc: "Power delivery, substations, T&D, protection & control",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: FaLaptopCode,
    title: "IT & Digital",
    desc: "Software, cloud, data, cybersecurity, AI & automation",
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: FaTools,
    title: "Field Services",
    desc: "Installation, commissioning, maintenance & inspection",
    gradient: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: FaSolarPanel,
    title: "Grid Modernization",
    desc: "Smart infrastructure, DER, SCADA, ADMS & digital ops",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

export default function IntroSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4">
              Introducing Quasent
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Quasent is Staffing with{" "}
              <span className="gradient-text">Purpose</span>
            </h2>

            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p className="text-justify">
                We support electric, gas, and water utilities, engineering services, field services, construction and engineering firms, and oil and energy service partners with fully vetted engineering, field, and IT professionals
              </p>
              <p className="text-justify">
                Built for regulated, safety-critical environments, Quasent focuses on delivering the right people, not just resumes. With a solution-driven approach and deep industry understanding, we help clients hire with confidence and help professionals find work that fits their skills and goals.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-purple-600 font-semibold hover:text-pink-600 transition"
            >
              Learn more about Quasent
              <span className="text-lg">&rarr;</span>
            </Link>
          </motion.div>

          {/* Right - Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {capabilities.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`p-6 rounded-2xl border ${card.bg} ${card.border} card-lift`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="text-white text-sm" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
