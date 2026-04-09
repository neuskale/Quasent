"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const footerLinks = {
  Services: [
    { label: "Engineering Staffing", href: "/engineering" },
    { label: "IT Staffing", href: "/technology" },
    { label: "Grid Modernization", href: "/engineering" },
    { label: "Contract & Direct Hire", href: "/clients" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "For Clients", href: "/clients" },
    { label: "For Candidates", href: "/candidates" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "Electric Utilities", href: "/engineering" },
    { label: "Gas & Water Utilities", href: "/engineering" },
    { label: "Construction & Engineering", href: "/engineering" },
    { label: "Oil & Energy", href: "/engineering" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0d2137]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/quasent_logo.png" alt="Quasent" className="h-10 mb-5" />
            <p className="text-purple-200/60 text-sm leading-relaxed max-w-sm mb-6">
              Quasent is staffing with purpose. We deliver fully vetted
              engineering, field, and IT professionals for regulated,
              safety-critical environments.
            </p>

            <div className="space-y-3 text-sm text-purple-200/60">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-400 mt-0.5 shrink-0" />
                <span>176 East Main Street, Suite 5, Westborough, MA 01581, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-400 shrink-0" />
                <a href="mailto:contact@quasent.com" className="hover:text-white transition">
                  contact@quasent.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-pink-400 shrink-0" />
                <a href="tel:+15083430367" className="hover:text-white transition">
                  +1 508-343-0367
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-purple-200/50 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-purple-300/40 text-sm">
            &copy; {new Date().getFullYear()} Quasent. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-purple-300/40 hover:text-pink-400 transition" aria-label="LinkedIn">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="#" className="text-purple-300/40 hover:text-cyan-400 transition" aria-label="Twitter">
              <FaTwitter className="text-lg" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-purple-300/40">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
