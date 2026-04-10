"use client";

import { motion } from 'framer-motion';
import { FaArrowRight, FaCircle, FaBuilding, FaUserTie, FaBolt, FaCog, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const roles = [
  {
    title: 'Transmission Line Engineers',
    description: 'Professionals who design, analyze, and maintain systems that carry electrical power over long distances. These roles are essential to system reliability, expansion planning, and high-voltage infrastructure projects.',
    image: '/images/industries/electricity.webp',
  },
  {
    title: 'Relay Settings Engineers',
    description: 'Engineers focused on relay calculations, coordination studies, relay control schemes, and current management. Their work is critical to maintaining system protection and operational accuracy.',
    image: '/images/industries/engimage.webp',
  },
  {
    title: 'Protection & Control (P&C) Engineers',
    description: 'Specialists who work with AC/DC schematics, wiring diagrams, and settings associated with the protection of lines, buses, transformers, breakers, and voltage systems.',
    image: '/images/industries/engineering-services.webp',
  },
  {
    title: 'Substation Engineers',
    description: 'Engineers responsible for the physical and electrical layout of substations, including bus design, switch arrangements, equipment configuration, and supporting infrastructure.',
    image: '/images/insights/construction.jpeg',
  },
  {
    title: 'Civil Engineers',
    description: 'Professionals supporting structural design, foundations, permitting, grading, and civil code compliance for utility and infrastructure projects.',
    image: '/images/industries/highway.webp',
  },
  {
    title: 'Structural Engineers',
    description: 'Experts in structural analysis and design for utility and energy environments, including supports, platforms, foundations, and other critical infrastructure components.',
    image: '/images/industries/construction-engineering.webp',
  },
  {
    title: 'Distribution Engineers',
    description: 'Engineers focused on electrical distribution systems, feeder design, upgrades, reliability improvements, and service expansion.',
    image: '/images/industries/field-services.jpeg',
  },
  {
    title: 'Electrical Engineers',
    description: "Technical professionals supporting a broad range of power systems, designs, analysis', and utility-focused electrical engineering initiatives.",
    image: '/images/industries/naturalresources.webp',
  },
];

const utilities = [
  { name: 'ADMS', description: 'Advanced Distribution Management System professionals who support the monitoring, control, optimization, and reliability of electrical distribution networks.' },
  { name: 'SCADA', description: 'Supervisory Control and Data Acquisition specialists who work on real-time monitoring and control systems used across utility operations.' },
  { name: 'OMS', description: 'Outage Management Systems talent supporting technologies that improve outage response, coordinate emergency and mutual-aid crews, and help utilities provide accurate restoration information to customers.' },
  { name: 'Monarch OSI', description: 'Professionals with experience in Monarch OSI, a SCADA platform used for real-time utility monitoring and control.' },
  { name: 'Oracle NMS', description: 'Talent with expertise in Oracle Network Management System, including environments tied to DERMS, OMS, SCADA integration, ADMS, and grid-edge visibility.' },
  { name: 'DERMS', description: 'Distributed Energy Resource Management System professionals who help utilities manage distributed generation, storage, and other decentralized energy assets.' },
  { name: 'GIS', description: 'Geographic Information Systems talent supporting mapping, spatial analysis, network visibility, asset tracking, and utility planning workflows.' },

];

const gridAreas = [
  'Utility systems upgrades',
  'Smart infrastructure initiatives',
  'Control room technologies',
  'Data and analytics programs',
  'DER integration efforts',
  'T&D modernization projects',
  'Digital transformation across operations and engineering teams',
];

const stats = [
  { label: '500+', sublabel: 'Engineers Placed' },
  { label: '15+', sublabel: 'Utility Specialties' },
  { label: '100%', sublabel: 'Fully Vetted' },
  { label: '8', sublabel: 'Engineering Disciplines' },
];

export default function Engineering() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/industries/engimage.webp)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0520]/97 via-[#1a0a2e]/90 to-[#e91e63]/15" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

        {/* Decorative rings */}
        <div className="absolute top-24 right-24 w-80 h-80 rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute top-36 right-36 w-56 h-56 rounded-full border border-white/5 hidden lg:block" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-white/90 mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaCircle className="text-orange-400 text-xs animate-pulse" />
            Engineering & Grid Staffing
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-black text-white leading-[1.05] max-w-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Power, Utility &{' '}
            <span className="gradient-text">Grid Engineering</span>
            <br />Built for What's Next
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Connecting utilities with specialized engineers who understand the grid. From transmission to distribution, we match top talent with mission-critical infrastructure projects.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link href="/clients" className="btn-brand px-8 py-4 rounded-xl text-white font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all">
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

        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* ABOUT ENGINEERING */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4 block">Who We Serve</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Power, Utility, and Grid Engineering{' '}
              <span className="gradient-text">Built for What's Next</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p className="text-justify">Quasent connects utilities, engineering firms, and infrastructure organizations with highly specialized engineers across power delivery, substation design, protection and control, civil engineering, and grid modernization technology.</p>
              <p className="text-justify">From transmission and distribution engineering to advanced utility software environments, we help clients secure the people who keep critical systems operating, expanding, and evolving.</p>
              <p className="text-justify">Whether you are building your team or building your career, Quasent brings focused industry knowledge, honest communication, and a deep understanding of the engineering and technology roles shaping the future of energy.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/images/industries/engineering-services.webp" alt="Engineering" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ROLES — full descriptions */}
      <section id="roles" className="py-28 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">Engineering Roles</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Engineering and Utility Roles{' '}
              <span className="gradient-text">We Recruit For</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Quasent supports hiring across a wide range of technical disciplines in the power, utility, and energy infrastructure space.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-lift flex gap-0"
              >
                {/* Image strip */}
                <div className="relative w-32 shrink-0 overflow-hidden">
                  <Image src={role.image} alt={role.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-start gap-3 mb-2">
                    <FaCheckCircle className="text-pink-500 shrink-0 mt-1 text-sm" />
                    <h3 className="font-bold text-gray-900 text-[15px] leading-snug">{role.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-6">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UTILITY TECH — dark section */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137]">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-3 block">Utility Platforms</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Utility Technology &{' '}
              <span className="gradient-text">Software Expertise</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4 text-lg">
              As the utility sector evolves, hiring demands increasingly extend beyond traditional engineering roles. Quasent also supports technology and software professionals working on implementation, integration, upgrade, and modernization projects across utility environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {utilities.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-7 border border-white/10 group hover:bg-white/12 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-5xl font-black text-white/4 pointer-events-none select-none">
                  {platform.name.substring(0, 3)}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center mb-4">
                  <FaBolt className="text-pink-400 text-sm" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{platform.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-pink-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </motion.div>
            ))}
          </div>

          {/* Technology and Software Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* Left: heading + intro */}
              <div className="px-10 py-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 mb-5">
                  <FaCog className="text-pink-400 text-xs" />
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">Software Roles</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Technology and Software Roles
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  We recruit for professionals supporting:
                </p>
              </div>

              {/* Right: bullet list */}
              <div className="px-10 py-10">
                <ul className="space-y-3.5">
                  {[
                    'System implementation projects',
                    'Platform upgrades and migrations',
                    'Utility operations technology',
                    'Data and analytics environments',
                    'Network and control system integrations',
                    'Digital transformation initiatives within utility organizations',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 shrink-0" />
                      <span className="text-white/65 text-[15px] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID MODERNIZATION */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">Future Ready</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hiring for the Future of the{' '}
              <span className="gradient-text">Grid</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-[17px] text-justify">
              Utilities are under growing pressure to modernize aging infrastructure, improve reliability, integrate distributed energy resources, and adopt smarter digital systems. Quasent helps clients hire the engineering and technology talent required to move those initiatives forward.
            </p>

            <div className="space-y-1 mb-10">
              {gridAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center justify-between py-3.5 border-b border-gray-100 group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <FaCircle className="text-pink-500 text-[8px]" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                  <FaArrowRight className="text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all text-sm" />
                </motion.div>
              ))}
            </div>

            <p>This combination of engineering and utility technology knowledge allows Quasent to support organizations that need talent capable of bridging infrastructure, operations, and innovation.</p>
          </motion.div>

          <motion.div
            className="relative h-[580px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image src="/images/industries/electricity.webp" alt="Grid Modernization" fill className="object-cover rounded-3xl shadow-2xl" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden gradient-brand">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Build Your Engineering Team. Advance Your Engineering Career. </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              From initial screening to final placement, we manage the entire recruitment process so you can focus on building great infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              className="bg-white/12 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white text-xl flex items-center justify-center mb-5">
                <FaBuilding />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Looking for Engineering Talent? </h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Need specialized engineering or utility technology talent? Quasent helps you hire professionals who understand the systems, projects, and challenges unique to the power and utility industry.
              </p>
              <Link href="/clients" className="inline-flex items-center justify-center w-full px-6 py-3 bg-white rounded-xl font-bold transition-all hover:shadow-lg">
                <span className="gradient-text">Talk to Quasent</span>
              </Link>
            </motion.div>

            <motion.div
              className="bg-white/12 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white text-xl flex items-center justify-center mb-5">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Looking for Engineers? </h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Looking for your next opportunity in power engineering, utility technology, or grid modernization? Quasent connects talented professionals with opportunities that support long-term career growth.
              </p>
              <Link href="/candidates" className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white/60 text-white font-bold hover:bg-white/15 transition-all rounded-xl">
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
