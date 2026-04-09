"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaTint,
  FaCogs,
  FaTools,
  FaHardHat,
  FaOilCan,
  FaLaptopCode,
} from "react-icons/fa";

type Industry = {
  name: string;
  imageUrl: string;
  icon: React.ReactNode;
  accent: string;
};

const industries: Industry[] = [
  {
    name: "Electric Utilities",
    imageUrl: "/images/industries/electricity.webp",
    icon: <FaBolt />,
    accent: "from-pink-500 to-rose-600",
  },
  {
    name: "Gas & Water Utilities",
    imageUrl: "/images/industries/gas-water.jpg",
    icon: <FaTint />,
    accent: "from-blue-500 to-cyan-600",
  },
  {
    name: "Engineering Services",
    imageUrl: "/images/industries/engineering-services.webp",
    icon: <FaCogs />,
    accent: "from-purple-500 to-violet-600",
  },
  {
    name: "Field Services",
    imageUrl: "/images/industries/field-services.jpeg",
    icon: <FaTools />,
    accent: "from-amber-500 to-orange-600",
  },
  {
    name: "Construction & Engineering",
    imageUrl: "/images/industries/construction-engineering.webp",
    icon: <FaHardHat />,
    accent: "from-orange-500 to-red-500",
  },
  {
    name: "Oil & Energy Partners",
    imageUrl: "/images/industries/naturalresources.webp",
    icon: <FaOilCan />,
    accent: "from-red-500 to-rose-600",
  },
  {
    name: "General IT",
    imageUrl: "/images/industries/technology.webp",
    icon: <FaLaptopCode />,
    accent: "from-cyan-500 to-teal-600",
  },
];

export default function OurIndustriesSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">
            Where We Operate
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            IT & Engineering Industries{" "}
            <span className="gradient-text">We Serve</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer card-lift"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.imageUrl})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${industry.accent} flex items-center justify-center mb-3 text-white text-sm shadow-lg`}>
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}

          {/* CTA Tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative h-56 rounded-2xl overflow-hidden gradient-brand p-8 text-white flex flex-col justify-between card-lift"
          >
            <div>
              <p className="text-sm font-semibold text-white/70 mb-2">Explore</p>
              <p className="text-xl font-bold leading-tight">
                Want to know more about our industries?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-200 transition"
            >
              Get In Touch &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
