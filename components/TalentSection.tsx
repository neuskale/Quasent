"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaUserTie } from "react-icons/fa";

export default function TalentSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 gradient-brand-soft">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Your Team. <span className="gradient-text">Advance Your Career.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to hire or looking for your next opportunity,
            Quasent connects the right people with the right roles.
          </p>
        </motion.div>

        {/* Two-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Clients Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group"
          >
            <motion.div
              variants={hoverVariants}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden card-lift"
            >
              <Image
                src="/contract.jpg"
                alt="For Clients"
                width={500}
                height={192}
                className="h-48 object-cover rounded-t-2xl"
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaBuilding className="text-pink-500 text-2xl" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    For Clients
                  </h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Need specialized engineering or utility technology talent? Quasent
                  helps you hire professionals who understand the systems, projects,
                  and challenges unique to your industry.
                </p>

                <Link
                  href="/clients"
                  className="btn-brand inline-flex items-center px-8 py-4 font-semibold rounded-lg"
                >
                  Talk to Quasent →
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* For Candidates Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <motion.div
              variants={hoverVariants}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden card-lift"
            >
              <Image
                src="/candidateservices.jpg"
                alt="For Candidates"
                width={500}
                height={192}
                className="h-48 object-cover rounded-t-2xl"
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserTie className="text-cyan-500 text-2xl" />
                  <h3 className="text-3xl font-bold text-gray-900">
                    For Candidates
                  </h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Looking for your next opportunity in engineering, IT, or grid
                  modernization? Quasent connects talented professionals with
                  opportunities that support long-term career growth.
                </p>

                <Link
                  href="/candidates"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Explore Opportunities →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
