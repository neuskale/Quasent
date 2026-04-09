"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaCog, FaLaptopCode } from "react-icons/fa";

const engineeringRoles = [
  "Transmission Line Engineers",
  "Relay Settings Engineers",
  "Protection & Control (P&C) Engineers",
  "Substation Engineers",
  "Civil Engineers",
  "Structural Engineers",
  "Distribution Engineers",
  "Electrical Engineers",
  "& More!",
];

const itRoles = [
  "Software & Application Developers",
  "Project Management & Business Analysis Professionals",
  "Cybersecurity & Information Security Specialists",
  "Data & Analytics Professionals",
  "ERP & Enterprise Systems Experts",
  "Cloud & DevOps Professionals",
  "Network, Infrastructure & Database Specialists",
  "AI, Automation & Emerging Technology Talent",
  "& More!",
];

export default function RolesWeStaffSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 gradient-brand-soft" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Roles <span className="gradient-text">We Staff</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From mission-critical utilities to cutting-edge digital platforms,
            we deliver vetted professionals ready to perform.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="px-8 py-6 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-pink-100/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <FaCog className="text-white text-sm" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Engineering Roles</h3>
              </div>
            </div>

            <div className="px-8 py-6 space-y-3.5">
              {engineeringRoles.map((role) => (
                <div key={role} className="flex items-center gap-3">
                  <FaCheckCircle className="text-pink-500 shrink-0 text-sm" />
                  <span className="text-[15px] text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="px-8 py-6 bg-gradient-to-r from-cyan-50 to-purple-50 border-b border-cyan-100/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <FaLaptopCode className="text-white text-sm" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">IT Roles</h3>
              </div>
            </div>

            <div className="px-8 py-6 space-y-3.5">
              {itRoles.map((role) => (
                <div key={role} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-500 shrink-0 text-sm" />
                  <span className="text-[15px] text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
