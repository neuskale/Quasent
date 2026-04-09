"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Get in <span className="gradient-text">Touch</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 text-lg leading-relaxed mb-10 max-w-md"
            >
              Have questions about our staffing services? Need to discuss your
              hiring needs or explore career opportunities? Our team is ready to help.
            </motion.p>

            {/* Contact Details Card */}
            <motion.div
              variants={itemVariants}
              className="bg-purple-50 rounded-xl p-8"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-pink-500 text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Address
                    </p>
                    <p className="text-gray-800 text-base font-medium">
                      176 East Main St<br />
                      Suite 5<br />
                      Westborough, MA 01581
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="text-pink-500 text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:contact@quasent.com"
                      className="text-purple-600 text-base font-medium hover:text-purple-700 transition-colors"
                    >
                      contact@quasent.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhone className="text-pink-500 text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+15083430367"
                      className="text-purple-600 text-base font-medium hover:text-purple-700 transition-colors"
                    >
                      +1 508-343-0367
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="you@company.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell us about your staffing needs or career interests..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-brand w-full py-4 font-bold rounded-lg transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
