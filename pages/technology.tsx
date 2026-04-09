"use client";

import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaChartBar, FaDatabase, FaCloud, FaNetworkWired, FaRobot, FaArrowRight, FaCircle, FaBuilding, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Technology() {
  const services = [
    {
      icon: FaCode,
      title: 'Application Development',
      description: 'Full-stack development expertise across modern frameworks and platforms. We match skilled developers with projects spanning web, mobile, and enterprise applications.',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Project Management & QA',
      description: 'Experienced project managers, business analysts, and QA professionals who keep initiatives on track. From agile methodologies to enterprise program management.',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      description: 'Security specialists and engineers protecting critical infrastructure and data. Cloud security, network security, application security, and compliance expertise.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: FaChartBar,
      title: 'Data & Analytics',
      description: 'Data engineers, analysts, and scientists transforming data into actionable insights. Big data platforms, analytics engineering, and business intelligence solutions.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: FaDatabase,
      title: 'ERP Solutions',
      description: 'Specialists in SAP, Oracle, NetSuite, and other enterprise systems. Implementation, optimization, and support for mission-critical business processes.',
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: FaCloud,
      title: 'Cloud Engineering',
      description: 'AWS, Azure, and GCP experts architecting and managing cloud infrastructure. Migration, optimization, and scalable cloud-native solutions.',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      icon: FaNetworkWired,
      title: 'Network & Infrastructure',
      description: 'Network engineers and database administrators maintaining reliable IT infrastructure. Networking, systems administration, and database optimization expertise.',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: FaRobot,
      title: 'AI & Automation',
      description: 'Innovators in artificial intelligence, robotic process automation, and virtual reality. Cutting-edge technology implementation and integration.',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  const benefits = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'cross-platform, scalable solutions'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity First',
      description: 'protecting critical infrastructure'
    },
    {
      icon: FaCloud,
      title: 'Cloud-Native Talent',
      description: 'AWS, Azure, GCP certified'
    },
    {
      icon: FaChartBar,
      title: 'Data-Driven Insights',
      description: 'analytics and ML expertise'
    }
  ];

  const stats = [
    { label: '8+', sublabel: 'IT Disciplines' },
    { label: '300+', sublabel: 'IT Professionals' },
    { label: '100%', sublabel: 'Pre-Screened' },
    { label: '∞', sublabel: 'Industries Served' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/industries/technology.webp)' }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/95 via-[#2d1b4e]/88 to-[#00bcd4]/15" />

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
            <FaCircle className="text-cyan-400 text-xs animate-pulse" />
            IT & Technology Staffing
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl lg:text-7xl font-black text-white leading-[1.05] max-w-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            IT Staffing{' '}
            <span className="gradient-text">Done Right</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-white/70 max-w-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Specialized technology staffing for enterprises that demand excellence. From development to infrastructure, we find the talent that drives innovation.
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
              Hire IT Talent <FaArrowRight />
            </Link>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
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

      {/* SECTION 3: Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-3">Services</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Technology Services &{' '}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our comprehensive range of IT staffing services covers every aspect of modern technology operations and innovation.
            </p>
          </motion.div>

          {/* Services Grid */}
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
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-8 card-lift overflow-hidden group flex flex-col"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ y: -6 }}
                >
                  {/* Large Background Icon */}
                  <div className="absolute bottom-4 right-4 text-8xl text-gray-50 group-hover:text-pink-50 transition-colors duration-300 pointer-events-none opacity-50">
                    <IconComponent />
                  </div>

                  {/* Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white text-xl relative z-10 bg-gradient-to-br ${service.gradient}`}
                  >
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 relative z-10">{service.description}</p>

                  {/* Link */}
                  <Link
                    href="#contact"
                    className="mt-5 text-sm font-semibold text-purple-600 hover:text-pink-600 transition flex items-center gap-1 relative z-10 group"
                  >
                    Ask Us How <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: IT Industries */}
      <section className="py-24 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image with Floating Card */}
            <motion.div
              className="relative h-[520px] hidden md:block"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/industries/technology.webp"
                alt="Technology"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Card */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-purple-100 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Vetted Specialists</p>
                    <p className="text-xs text-gray-500">100% pre-screened</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-3">Built for Modern</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Modern{' '}
                <span className="gradient-text">Digital Environments</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our IT professionals are trained in the latest technologies and methodologies to support your digital transformation, cloud migration, and modernization initiatives.
              </p>

              {/* Benefit Rows */}
              <div className="space-y-0">
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex gap-4 items-start py-4 border-b border-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                      <div className="w-10 h-10 rounded-lg gradient-brand text-white flex items-center justify-center shrink-0 mt-1">
                        <IconComponent className="text-sm" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137]">
        {/* Decorative Blobs */}
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
            <h2 className="text-5xl font-bold text-white mb-4">Build Your IT Team.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From initial screening to final placement, we manage the entire recruitment process so you can focus on building great technology.
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
                We understand IT staffing. Let's discuss how Quasent can find the right talent for your technology initiatives and business goals.
              </p>
              <Link
                href="/clients"
                className="inline-flex items-center justify-center w-full px-6 py-3 font-bold hover:shadow-lg transition-all rounded-lg"
                style={{
                  background: 'linear-gradient(135deg,#e91e63,#9c27b0,#00bcd4)',
                  color: 'white'
                }}
              >
                Talk to Quasent
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
                Advance your technology career with leading enterprises. Explore IT positions that match your skills and ambitions.
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
