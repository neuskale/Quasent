"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaBuilding } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

                {/* LEFT — DETAILS + TWO OFFICES */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
                            Touch
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our team is here to support your hiring needs, talent strategy, or general inquiries.
                        Reach out to us anytime.
                    </p>

                    {/* CONTACT DETAILS */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-2xl text-blue-600" />
                            <p className="text-gray-700 text-lg">+1 (508) 302 3020</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl text-red-500" />
                            <p className="text-gray-700 text-lg">contact@quasent.com</p>
                        </div>
                    </div>

                    {/* OFFICES */}
                    <div className="space-y-10">
                        {/* HQ */}
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-2xl text-green-600 mt-1" />
                            <div>
                                <p className="text-xl font-semibold text-gray-900">Global Headquarters</p>
                                <p className="text-gray-700 text-lg leading-relaxed mt-1">
                                    176 East Main Street, Suite 5, Westborough, MA 01581, USA
                                </p>
                            </div>
                        </div>

                        {/* SECOND BRANCH */}
                        {/*<div className="flex items-start gap-4">*/}
                        {/*    <FaBuilding className="text-2xl text-purple-600 mt-1" />*/}
                        {/*    <div>*/}
                        {/*        <p className="text-xl font-semibold text-gray-900">Middle East Office</p>*/}
                        {/*        <p className="text-gray-700 text-lg leading-relaxed mt-1">*/}
                        {/*            S2V Plaza, 2-2-104/1, Naim Nagar, Hanumakonda,*/}
                        {/*            Telangana 506001*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </motion.div>

                {/* RIGHT — CONTACT FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200"
                >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label className="text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 rounded-lg border border-gray-300
                                focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-3 mt-1 rounded-lg border border-gray-300
                                focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Phone Number</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 rounded-lg border border-gray-300
                                focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                placeholder="Optional"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">Message</label>
                            <textarea
                                className="w-full p-3 mt-1 rounded-lg border border-gray-300
                                focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition h-32"
                                placeholder="Tell us how we can help"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 py-4 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
                            shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
                        >
                            Send Message <FaArrowRight />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
