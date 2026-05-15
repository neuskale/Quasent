"use client";

import { motion } from 'framer-motion';
import { FaArrowRight, FaCircle, FaBuilding, FaUserTie, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Application Development',
    description: 'Building modern applications requires the right developers. Quasent provides application development staffing for front-end, back-end, and full-stack engineers who create scalable, secure, and user-focused solutions. Our network includes professionals experienced in modern frameworks, system architecture, and quality assurance, ensuring your applications are built to perform from day one.',
    image: '/images/industries/software-application.jpg',
    icon: '/images/IT Icons/software.png',
    color: '#971ae1',
  },
  {
    title: 'Project Management Office (PM / BA / QA)',
    description: 'Successful technology initiatives require strong leadership and structure. Quasent delivers IT project management staffing, including project managers, business analysts, and QA professionals who drive projects from planning through delivery. Our talent helps reduce risk, improve efficiency, and ensure projects are completed on time and within scope.',
    image: '/images/industries/project-management.jpg',
    icon: '/images/IT Icons/project.png',
    color: '#ff7200',
  },
  {
    title: 'Cybersecurity & Information Security',
    description: 'Protecting your systems and data is critical. Quasent provides cybersecurity staffing solutions with professionals skilled in threat detection, risk management, compliance, and incident response. We help organizations strengthen defenses, prevent data breaches, and maintain secure operations in an evolving threat landscape.',
    image: '/images/industries/cyber-security.jpg',
    icon: '/images/IT Icons/cyber.png',
    color: '#971ae1',
  },
  {
    title: 'Data & Analytics Professionals',
    description: 'Data-driven decision-making starts with the right talent. Quasent connects organizations with data and analytics professionals who transform raw data into actionable insights. From data engineering to business intelligence and visualization, our candidates help organizations improve performance, forecasting, and strategic planning.',
    image: '/images/industries/data-analytics.png',
    icon: '/images/IT Icons/data.png',
    color: '#02bdde',
  },
  {
    title: 'ERP Staffing Solutions',
    description: 'Enterprise systems are the backbone of your operations. Quasent delivers ERP staffing services for professionals experienced in leading platforms such as Oracle, SAP, Workday, Microsoft Dynamics, and Infor. Whether you need support for implementation, upgrades, or system optimization, we provide the talent to keep your ERP running efficiently.',
    image: '/images/industries/erp.jpg',
    icon: '/images/IT Icons/erp.png',
    color: '#ff7200',
  },
  {
    title: 'Cloud Engineering & Cloud Staffing',
    description: 'Cloud technology drives scalability and innovation. Quasent provides cloud staffing solutions for engineers and architects who design, migrate, and optimize cloud environments. Our talent supports organizations in improving security, reducing costs, and building flexible, high-performing systems.',
    image: '/images/industries/cloud.jpg',
    icon: '/images/IT Icons/cloud.png',
    color: '#1aacac',
  },
  {
    title: 'Network, Infrastructure & Database Talent',
    description: 'Reliable infrastructure is essential for business continuity. Quasent connects organizations with professionals in network engineering, infrastructure support, and database management. Our candidates ensure systems remain secure, connected, and optimized for performance and growth.',
    image: '/images/industries/network.jpg',
    icon: '/images/IT Icons/network.png',
    color: '#ff56a8',
  },
  {
    title: 'AI, Automation & VR Talent',
    description: 'Emerging technologies are transforming how businesses operate. Quasent provides AI staffing and automation talent, including machine learning engineers, data scientists, and virtual reality (VR) developers. From predictive analytics to immersive training environments, we help organizations hire professionals driving innovation and next-generation solutions.',
    image: '/images/industries/ai.jpg',
    icon: '/images/IT Icons/AI.png',
    color: '#02bdde',
  },
];

export default function Technology() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/it-banner.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f2e]/97 via-[#0d2137]/90 to-[#00bcd4]/15" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Decorative rings */}
        <div className="absolute top-24 right-24 w-80 h-80 rounded-full border border-white/5 hidden lg:block" />
        <div className="absolute top-36 right-36 w-56 h-56 rounded-full border border-white/5 hidden lg:block" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full"
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
            <FaCircle className="text-cyan-400 text-xs animate-pulse" />
            IT & Technology Staffing
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-black text-white leading-[1.05] max-w-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            IT Staffing{' '}
            <br/><span style={{ background: 'linear-gradient(90deg, #ec4899, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Done Right</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Specialized technology staffing for enterprises that demand excellence. From development to infrastructure, we find the talent that drives innovation.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link href="/clients" className="px-8 py-4 rounded-xl text-white font-bold inline-flex items-center gap-2 hover:shadow-xl transition-all" style={{ background: 'linear-gradient(135deg, #1ebcf4, #4994f8, #9753ff)' }}>
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

        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ABOUT IT */}
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
              Specialized <br/> Technology{' '}
              <span className="gradient-text">Talent</span>
            </h2>
            <div className="space-y-5 text-gray-600 text-[17px] leading-relaxed">
              <p className="text-justify">
                Quasent is a specialized technology staffing firm connecting organizations with high-impact IT professionals across application development, cybersecurity, cloud, data, and enterprise systems.
              </p>
              <p className="text-justify">
                Whether you are scaling a team, supporting a digital transformation initiative, or modernizing infrastructure, we deliver IT staffing solutions built around your business goals and technical requirements.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold hover:shadow-xl transition-all" style={{ background: 'linear-gradient(135deg, #f30b8c, #8160f9, #13abe0)' }}>
                Ask Us? <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[460px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/it-about.jpg" alt="IT Technology" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating badge */}
            <motion.div
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-5 py-4 border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white">
                  <FaLaptopCode className="text-sm" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Vetted Specialists</p>
                  <p className="text-xs text-gray-500">100% pre-screened</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IT SERVICES */}
      <section id="services" className="py-28 bg-gradient-to-br from-[#fdf2f8] via-[#f5f0ff] to-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-3 block">IT Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Technology Services &{' '}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our comprehensive range of IT staffing services covers every aspect of modern technology operations and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 card-lift flex gap-0 relative"
              >
                {/* Image strip — image clipped inside, icon allowed to overflow */}
                <div className="relative w-32 shrink-0">
                  <div className="absolute inset-0 overflow-hidden rounded-l-2xl">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                  </div>
                  <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 drop-shadow-lg">
                    <Image src={service.icon} alt="" width={40} height={40} className="object-contain" unoptimized />
                  </div>
                </div>

                {/* Content — left padding accounts for the half-icon */}
                <div className="py-5 pr-5 pl-8 flex flex-col justify-center">
                  <h3 className="font-bold text-gray-900 text-[15px] leading-snug mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 text-justify">{service.description}</p>
                  {/*<Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition group/btn" style={{ color: service.color }}>*/}
                  {/*  Ask Us <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />*/}
                  {/*</Link>*/}
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Build Your IT Team. <br/> Advance Your Technology Career.</h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Whether you are hiring critical talent or exploring your next opportunity, Quasent delivers the expertise and network to move you forward.
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
              <h3 className="text-xl font-bold text-white mb-3">For Clients</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Find the IT and engineering professionals who can drive your projects, strengthen your infrastructure, and support long-term growth.
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
              <h3 className="text-xl font-bold text-white mb-3">For Candidates</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm text-justify">
                Explore opportunities that align with your skills, experience, and career goals across technology and engineering.
              </p>
              <Link href="/candidates" className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white/60 text-white font-bold hover:bg-white/15 transition-all rounded-xl">
                Career Opportunities
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
