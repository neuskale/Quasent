"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 gradient-brand-light" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-pink-200/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-cyan-200/30 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-purple-200/50 backdrop-blur-sm mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />
              <span className="text-sm font-semibold text-purple-700">
                Staffing with Purpose
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-gray-900"
            >
              Powering Utilities & Energy with{" "}
              <span className="gradient-text">Fully Vetted</span>{" "}
              Engineering, Field & IT Talent
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              We support electric, gas, and water utilities, engineering services,
              field services, construction firms, and energy partners with
              professionals built for regulated, safety-critical environments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/clients"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold btn-brand shadow-lg"
              >
                Hire Talent
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/candidates"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-purple-700 font-semibold bg-white border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              >
                Find Your Next Role
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {[
                { icon: FaBolt, text: "Utility-Grade Expertise", color: "text-pink-500" },
                { icon: FaShieldAlt, text: "Compliance-Ready", color: "text-purple-500" },
                { icon: FaUsers, text: "People-First", color: "text-cyan-500" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <item.icon className={item.color} />
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/40">
              <Image
                src="/about-us.jpg"
                alt="Engineering and IT professionals"
                width={640}
                height={500}
                className="w-full h-[500px] object-cover"
                priority
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-purple-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <FaBolt className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-xs text-gray-500">Vetted Professionals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
