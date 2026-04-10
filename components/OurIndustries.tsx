"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaBolt,
  FaTint,
  FaCogs,
  FaTools,
  FaHardHat,
  FaOilCan,
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaProjectDiagram,
  FaServer,
  FaRobot,
} from "react-icons/fa";

type Role = {
  name: string;
  imageUrl: string;
  icon: React.ReactNode;
  accent: string;
};

const engineeringRoles: Role[] = [
  {
    name: "Transmission Line Engineers",
    imageUrl: "/images/industries/electricity.webp",
    icon: <FaBolt />,
    accent: "from-pink-500 to-rose-600",
  },
  {
    name: "Relay Settings Engineers",
    imageUrl: "/images/industries/engimage.webp",
    icon: <FaTint />,
    accent: "from-blue-500 to-cyan-600",
  },
  {
    name: "Protection & Control (P&C) Engineers",
    imageUrl: "/images/industries/engineering-services.webp",
    icon: <FaCogs />,
    accent: "from-purple-500 to-violet-600",
  },
  {
    name: "Substation Engineers",
    imageUrl: "/images/insights/construction.jpeg",
    icon: <FaTools />,
    accent: "from-amber-500 to-orange-600",
  },
  {
    name: "Civil Engineers",
    imageUrl: "/images/industries/highway.webp",
    icon: <FaHardHat />,
    accent: "from-orange-500 to-red-500",
  },
  {
    name: "Structural Engineers",
    imageUrl: "/images/industries/construction-engineering.webp",
    icon: <FaOilCan />,
    accent: "from-red-500 to-rose-600",
  },
  {
    name: "Distribution Engineers",
    imageUrl: "/images/industries/field-services.jpeg",
    icon: <FaBolt />,
    accent: "from-pink-500 to-purple-600",
  },
  {
    name: "Electrical Engineers",
    imageUrl: "/images/industries/naturalresources.webp",
    icon: <FaCogs />,
    accent: "from-violet-500 to-purple-600",
  },
];

const itRoles: Role[] = [
  {
    name: "Software & Application Developers",
    imageUrl: "/images/industries/technology.webp",
    icon: <FaLaptopCode />,
    accent: "from-cyan-500 to-teal-600",
  },
  {
    name: "Project Management & Business Analysis",
    imageUrl: "/images/industries/consumer.webp",
    icon: <FaProjectDiagram />,
    accent: "from-sky-500 to-blue-600",
  },
  {
    name: "Cybersecurity & Information Security",
    imageUrl: "/images/insights/Technology-SaaS.jpeg",
    icon: <FaShieldAlt />,
    accent: "from-purple-500 to-violet-600",
  },
  {
    name: "Data & Analytics Professionals",
    imageUrl: "/images/insights/market-bg.jpeg",
    icon: <FaDatabase />,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    name: "ERP & Enterprise Systems Experts",
    imageUrl: "/images/industries/healthscience.webp",
    icon: <FaCogs />,
    accent: "from-amber-500 to-orange-600",
  },
  {
    name: "Cloud & DevOps Professionals",
    imageUrl: "/images/insights/natural.jpeg",
    icon: <FaCloud />,
    accent: "from-blue-500 to-cyan-600",
  },
  {
    name: "Network, Infrastructure & Database",
    imageUrl: "/images/industries/gas-water.jpg",
    icon: <FaServer />,
    accent: "from-slate-500 to-gray-600",
  },
  {
    name: "AI, Automation & Emerging Technology",
    imageUrl: "/images/insights/robotic-industry.jpeg",
    icon: <FaRobot />,
    accent: "from-violet-500 to-purple-600",
  },
];

const tabs = [
  {
    id: "engineering",
    label: "Engineering Industries",
    roles: engineeringRoles,
    activeGradient: "from-pink-500 to-purple-600",
  },
  {
    id: "it",
    label: "IT Industries",
    roles: itRoles,
    activeGradient: "from-cyan-500 to-purple-600",
  },
];

export default function OurIndustriesSection() {
  const [activeTab, setActiveTab] = useState("engineering");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">
            Where We Operate
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            IT & Engineering Industries{" "}
            <span className="gradient-text">We Serve</span>
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-10"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${tab.activeGradient} text-white shadow-md`
                    : "bg-white text-gray-600 border border-gray-200 hover:border-purple-200 hover:text-purple-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Role Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {active.roles.map((role, index) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer card-lift"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${role.imageUrl})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role.accent} flex items-center justify-center mb-3 text-white text-sm shadow-lg`}>
                    {role.icon}
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {role.name}
                  </h3>
                </div>
              </motion.div>
            ))}

            {/* CTA Tile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: active.roles.length * 0.05 }}
              className="relative h-56 rounded-2xl overflow-hidden gradient-brand p-8 text-white flex flex-col justify-between card-lift"
            >
              <div>
                <p className="text-sm font-semibold text-white/70 mb-2">& More!</p>
                <p className="text-xl font-bold leading-tight">
                  Want to know more about roles we staff?
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200 transition"
              >
                Get In Touch &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl gradient-brand px-10 py-14 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Build Your Team?
          </h3>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
            Connect with Quasent to source top-tier engineering and IT professionals for your next project.
          </p>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-purple-50 transition shadow-md"
          >
            Find Engineering and IT Talent
            <span className="text-lg">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
