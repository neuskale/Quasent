"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Role = {
  name: string;
  imageUrl: string;
  icon: React.ReactNode;
  accent: string;
};

const engineeringRoles: Role[] = [
  {
    name: "Transmission Line Engineers",
    imageUrl: "/images/industries/transmission.jpg",
    icon: <img src="/images/Engineering%20Icons/transmission.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-purple-600 to-purple-800",
  },
  {
    name: "Relay Settings Engineers",
    imageUrl: "/images/industries/relay-set.jpg",
    icon: <img src="/images/Engineering%20Icons/relay-set.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-green-400 to-green-600",
  },
  {
    name: "Protection & Control (P&C) Engineers",
    imageUrl: "/images/industries/protection.jpg",
    icon: <img src="/images/Engineering%20Icons/protection.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-pink-500 to-pink-700",
  },
  {
    name: "Substation Engineers",
    imageUrl: "/images/industries/substation.jpg",
    icon: <img src="/images/Engineering%20Icons/substation.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Civil Engineers",
    imageUrl: "/images/industries/civil.jpg",
    icon: <img src="/images/Engineering%20Icons/civil.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-orange-400 to-orange-600",
  },
  {
    name: "Structural Engineers",
    imageUrl: "/images/industries/structural.jpg",
    icon: <img src="/images/Engineering%20Icons/structural.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-violet-400 to-violet-600",
  },
  {
    name: "Distribution Engineers",
    imageUrl: "/images/industries/distribution.jpg",
    icon: <img src="/images/Engineering%20Icons/distribution.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-blue-500 to-blue-700",
  },
  {
    name: "Electrical Engineers",
    imageUrl: "/images/industries/electrical.jpg",
    icon: <img src="/images/Engineering%20Icons/electrical.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-teal-400 to-teal-600",
  },
];

const itRoles: Role[] = [
  {
    name: "Software & Application Developers",
    imageUrl: "/images/industries/software-application.jpg",
    icon: <img src="/images/IT%20Icons/software.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-cyan-400 to-sky-500",
  },
  {
    name: "Project Management & Business Analysis",
    imageUrl: "/images/industries/project-management.jpg",
    icon: <img src="/images/IT%20Icons/project.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-pink-500 to-pink-700",
  },
  {
    name: "Cybersecurity & Information Security",
    imageUrl: "/images/industries/cyber-security.jpg",
    icon: <img src="/images/IT%20Icons/cyber.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-purple-600 to-purple-800",
  },
  {
    name: "Data & Analytics Professionals",
    imageUrl: "/images/industries/data-analytics.png",
    icon: <img src="/images/IT%20Icons/data.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-teal-400 to-teal-600",
  },
  {
    name: "ERP & Enterprise Systems Experts",
    imageUrl: "/images/industries/erp.jpg",
    icon: <img src="/images/IT%20Icons/erp.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-green-400 to-green-600",
  },
  {
    name: "Cloud & DevOps Professionals",
    imageUrl: "/images/industries/cloud.jpg",
    icon: <img src="/images/IT%20Icons/cloud.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-orange-400 to-orange-600",
  },
  {
    name: "Network, Infrastructure & Database",
    imageUrl: "/images/industries/network.jpg",
    icon: <img src="/images/IT%20Icons/network.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-fuchsia-400 to-pink-500",
  },
  {
    name: "AI, Automation & Emerging Technology",
    imageUrl: "/images/industries/ai.jpg",
    icon: <img src="/images/IT%20Icons/AI.png" alt="" className="w-full h-full object-cover rounded-xl" />,
    accent: "from-blue-500 to-blue-700",
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
            className="mt-16 overflow-hidden rounded-[24px]"
        >
          <div className="relative flex min-h-[320px] overflow-hidden bg-white">

            {/* RIGHT IMAGE — rendered first so it sits behind the gradient */}
            <div className="absolute right-0 top-0 bottom-0 hidden w-[40%] lg:block">
              <img
                  src="/images/industries/team.png"
                  alt="Team professionals"
                  className="h-full w-full object-cover"
              />
            </div>

            {/* LEFT GRADIENT SECTION */}
            <div
                className="relative z-10 flex w-full items-center overflow-hidden lg:w-[78%]"
                style={{
                  background:
                      "linear-gradient(90deg, #C400D9 0%, #7C3AED 35%, #0EA5E9 100%)",
                  // borderTopRightRadius: "220px",
                  borderBottomRightRadius: "220px",
                }}
            >
              {/* CONTENT */}
              <div className="relative z-10 px-10 py-14 lg:px-14">
                <h2 className="mb-5 max-w-[760px] text-5xl font-extrabold leading-[1.05] tracking-[-2px] text-white">
                  Ready to Build Your Team?
                </h2>

                <p className="mb-8 max-w-[620px] text-xl leading-relaxed text-white/90">
                  Connect with Quasent to source top-tier engineering and IT
                  professionals for your next project.
                </p>

                <Link
                    href="/clients"
                    className="inline-flex items-center justify-center rounded-[16px] bg-white px-8 py-5 text-xl font-semibold text-purple-700 shadow-lg transition-all duration-300 hover:bg-white/95"
                >
                  Find Engineering and IT Talent →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
