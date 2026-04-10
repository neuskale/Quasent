"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCircle,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 508-343-0367",
    href: "tel:+15083430367",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@quasent.com",
    href: "mailto:contact@quasent.com",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Headquarters",
    value: "176 East Main Street, Suite 5, Westborough, MA 01581, USA",
    href: "#map",
    gradient: "from-cyan-500 to-teal-600",
  },
];

const inquiryOptions = [
  { value: "", label: "Select inquiry type" },
  { value: "client", label: "I'm looking to hire talent" },
  { value: "candidate", label: "I'm looking for a job" },
  { value: "general", label: "General inquiry" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.inquiryType) errors.inquiryType = "Please select an inquiry type.";
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, inquiryType: true, message: true };
    setTouched(allTouched);
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1800));
    setStatus("success");
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 placeholder-gray-400 text-sm transition-all duration-200 outline-none focus:ring-2";
  const inputNormal = `${inputBase} border-gray-200 focus:border-purple-400 focus:ring-purple-100`;
  const inputError = `${inputBase} border-red-400 focus:border-red-400 focus:ring-red-100 bg-red-50`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[42vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact-us.jpg')" }}
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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaCircle className="text-pink-400 text-xs animate-pulse" />
            Get in Touch
          </motion.div>

          <motion.h1
            className="text-4xl lg:text-6xl font-black text-white leading-[1.08] max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Let's Build Something <span className="gradient-text">Together</span>
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Whether you're hiring, job searching, or just have a question — we'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4 block">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-10">
              Our team is here to support your hiring needs, talent strategy, or general inquiries. Reach out to us anytime.
            </p>

            <div className="space-y-5 mb-12">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-purple-100 transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}>
                      <Icon className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-gray-800 font-medium text-[15px] group-hover:text-purple-700 transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick links */}
            <div className="rounded-2xl bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa] p-7 border border-purple-100">
              <p className="font-bold text-gray-900 mb-4">Quick Links</p>
              <div className="space-y-3">
                {[
                  { label: "Looking to hire talent?", href: "/clients" },
                  { label: "Exploring opportunities?", href: "/candidates" },
                  { label: "Learn about Quasent", href: "/about" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between py-2 border-b border-purple-100 last:border-0 group"
                  >
                    <span className="text-gray-600 text-sm font-medium group-hover:text-purple-700 transition-colors">{link.label}</span>
                    <FaArrowRight className="text-gray-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all text-xs" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mb-6 shadow-lg">
                      <FaCheckCircle className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-500 max-w-xs leading-relaxed mb-8">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" });
                        setTouched({});
                        setErrors({});
                      }}
                      className="px-6 py-3 rounded-xl border-2 border-purple-200 text-purple-600 font-semibold hover:bg-purple-50 transition-all text-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                      <p className="text-gray-400 text-sm">We'll respond within 1 business day.</p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Full Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        className={errors.name && touched.name ? inputError : inputNormal}
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                          Email Address <span className="text-pink-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          className={errors.email && touched.email ? inputError : inputNormal}
                        />
                        {errors.email && touched.email && (
                          <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                          Phone <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+1 (000) 000-0000"
                          className={inputNormal}
                        />
                      </div>
                    </div>

                    {/* Inquiry type */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Inquiry Type <span className="text-pink-500">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${errors.inquiryType && touched.inquiryType ? inputError : inputNormal} cursor-pointer`}
                      >
                        {inquiryOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.inquiryType && touched.inquiryType && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.inquiryType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Message <span className="text-pink-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className={`resize-none ${errors.message && touched.message ? inputError : inputNormal}`}
                      />
                      {errors.message && touched.message && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-xl font-bold text-white btn-brand hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <FaSpinner className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <FaArrowRight />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="h-[420px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.8609128174217!2d-71.62262122394124!3d42.26859263893756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f6b4bf7c2c1b%3A0x5a1c6b2c3d4e5f6a!2s176%20E%20Main%20St%20Suite%205%2C%20Westborough%2C%20MA%2001581!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </div>
  );
}
