"use client";

import { motion } from 'framer-motion';
import { FaArrowRight, FaCircle, FaBuilding, FaUserTie, FaBolt, FaCog } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Engineering() {
  const roles = [
    {
      title: 'Transmission Line Engineers',
      description: 'Professionals who design, analyze, and maintain systems that carry electrical power over long distances.'
    },
    {
      title: 'Relay Settings Engineers',
      description: 'Engineers focused on relay calculations, coordination studies, relay control schemes, and current management.'
    },
    {
      title: 'Protection & Control (P&C) Engineers',
      description: 'Specialists who work with AC/DC schematics, wiring diagrams, and settings for protection systems.'
    },
    {
      title: 'Substation Engineers',
      description: 'Engineers responsible for physical and electrical layout of substations.'
    },
    {
      title: 'Civil Engineers',
      description: 'Professionals supporting structural design, foundations, permitting, and civil code compliance.'
    },
    {
      title: 'Structural Engineers',
      description: 'Experts in structural analysis and design for utility and energy environments.'
    },
    {
      title: 'Distribution Engineers',
      description: 'Engineers focused on electrical distribution systems, feeder design, and reliability.'
    },
    {
      title: 'Electrical Engineers',
      description: 'Technical professionals supporting power systems designs and utility-focused initiatives.'
    }
  ];

  const utilities = [
    { name: 'ADMS', description: 'Advanced Distribution Management System for grid optimization.' },
    { name: 'SCADA', description: 'Supervisory Control and Data Acquisition for real-time monitoring.' },
    { name: 'OMS', description: 'Outage Management System for grid reliability.' },
    { name: 'Monarch OSI', description: 'Integrated operations software for utilities.' },
    { name: 'Oracle NMS', description: 'Network Management System solutions.' },
    { name: 'DERMS', description: 'Distributed Energy Resource Management System.' }
  ];

  const gridAreas = [
    'Utility systems upgrades',
    'Smart infrastructure',
    'Control room technologies',
    'Data and analytics',
    'DER integration',
    'T&D modernization',
    'Digital transformation'
  ];

  const stats = [
    { label: '500+', sublabel: 'Engineers Placed', icon: FaBolt },
    { label: '15+', sublabel: 'Utility Specialties', icon: FaCog },
    { label: '100%', sublabel: 'Fully Vetted', icon: FaBolt },
    { label: '8', sublabel: 'Engineering Disciplines', icon: FaCog }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/industries/engimage.webp)' }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/95 via-[#2d1b4e]/85 to-[#e91e63]/10" />

        {/* Grid Lines Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 pt-24 pb-16 px-8 lg:px-20 w-full"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaCircle className="text-orange-400 text-xs animate-pulse" />
            Engineering & Grid Staffing
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl lg:text-7xl font-black text-white leading-[1.05] max-w-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Power, Utility &{' '}
            <span className="gradient-text">Grid Engineering</span>
            <br />
            Built for What's Next
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-white/70 max-w-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Connecting utilities with specialized engineers who understand the grid. From transmission to distribution, we match top talent with mission-critical infrastructure projects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link
              href="/clients"
              className="btn-brand px-8 py-4 rounded-xl text-white font-bold text-base inline-flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Hire Engineers <FaArrowRight />
            </Link>
            <button
              onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Explore Roles
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* SECTION 2: Stats Row */}
      <section className="py-16 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="py-8 px-6 border-r border-gray-100 last:border-r-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#e91e63] via-[#9c27b0] to-[#00bcd4] mb-2">
                  {stat.label}
                </div>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Roles Grid */}
      <section id="roles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-3">Engineering Roles</p>
            <h2 className="text-4xl font-bold text-gray-900">
              We Recruit For <span className="gradient-text">Every Discipline</span>
            </h2>
          </motion.div>

          {/* Roles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
          >
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-7 card-lift overflow-hidden group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6 }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />

                {/* Role Number */}
                <div className="text-4xl font-black text-gray-100 mb-3 relative z-10">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Role Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{role.title}</h3>

                {/* Role Description */}
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">{role.description}</p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Utility Technology */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137]">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest text-white/60 uppercase mb-3">Utility Platforms</p>
            <h2 className="text-4xl font-bold text-white">
              Utility Technology &{' '}
              <span className="gradient-text">Software Expertise</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              We specialize in placing engineers who work with industry-leading utility platforms and technologies.
            </p>
          </motion.div>

          {/* Platforms Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
          >
            {utilities.map((platform, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 card-lift group hover:bg-white/15 transition overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6 }}
              >
                {/* Acronym Badge */}
                <div className="absolute top-4 right-4 text-6xl font-black text-white/5 pointer-events-none">
                  {platform.name.substring(0, 3)}
                </div>

                {/* Platform Name */}
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{platform.name}</h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed relative z-10">{platform.description}</p>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Grid Modernization */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-3">Future Ready</p>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Hiring for the Future of the{' '}
                <span className="gradient-text">Grid</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Utilities are under unprecedented pressure to modernize infrastructure, integrate renewable energy, and adopt digital transformation initiatives. We connect you with engineers ready to lead this change.
              </p>

              {/* Benefit Rows */}
              <div className="space-y-2">
                {gridAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-gray-100 group cursor-default"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <div className="flex items-center gap-3">
                      <FaCircle className="text-pink-500 text-xs" />
                      <span className="text-gray-700 text-lg">{area}</span>
                    </div>
                    <FaArrowRight className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/clients"
                  className="btn-brand px-8 py-4 rounded-xl text-white font-bold inline-flex items-center gap-2 hover:shadow-lg transition-all"
                >
                  Build Your Engineering Team <FaArrowRight />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative h-[560px] hidden md:block"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/industries/electricity.webp"
                alt="Grid Modernization"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA Banner */}
      <section className="py-24 relative overflow-hidden gradient-brand">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Center Content */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">Build Your Engineering Team.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From initial screening to final placement, we manage the entire recruitment process so you can focus on building great infrastructure.
            </p>
          </motion.div>

          {/* Two Column CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Clients */}
            <motion.div
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 text-white text-2xl mb-4">
                <FaBuilding />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Clients</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                We understand utility engineering. Let's discuss how Quasent can find the right talent for your critical infrastructure projects.
              </p>
              <Link
                href="/clients"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-transparent bg-clip-text font-bold hover:bg-gradient-to-r from-white to-white transition-all"
                style={{
                  background: 'linear-gradient(135deg,#e91e63,#9c27b0,#00bcd4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundColor: '#ffffff'
                }}
              >
                <span style={{
                  background: 'linear-gradient(135deg,#e91e63,#9c27b0,#00bcd4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Talk to Quasent
                </span>
              </Link>
            </motion.div>

            {/* For Candidates */}
            <motion.div
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 text-white text-2xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Candidates</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Advance your career with mission-critical grid infrastructure projects. Explore engineering opportunities that match your expertise.
              </p>
              <Link
                href="/candidates"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white text-white font-bold hover:bg-white/10 transition-all rounded-lg"
              >
                Explore Opportunities
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
