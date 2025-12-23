"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HiUser } from "react-icons/hi";

// TOP MENU + DROPDOWN ICONS
import {
    FaInfoCircle,
    FaBriefcase,
    FaNewspaper,
    FaUsers,
    FaPhone,
    FaChevronDown,
    FaBuilding,
    FaHandshake,
    FaUserTie,
    FaUserCog,
    FaStar,
    FaPlusCircle,
    FaLightbulb,
    FaUserShield,
    FaFileUpload
} from "react-icons/fa";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [showSearchBar, setShowSearchBar] = useState(false);

    // ✅ MOBILE MENU STATE (ADDED)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto h-[75px] px-6 md:px-8 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/">
                    <img
                        src="/quasent_logo.png"
                        alt="Quasent Logo"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-8">

                    {/* MAIN MENU */}
                    <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">

                        {/* ABOUT US */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown("about")}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaInfoCircle className="text-[17px] text-[#3B82F6]" />
                                Industries
                                {/*<FaChevronDown className="text-[14px] text-gray-500" />*/}
                            </button>
                        </li>

                        {/* CLIENTS WITH NESTED DROPDOWN */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown("clients")}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaBriefcase className="text-[17px] text-[#A855F7]" />
                                Roles We Staff
                                {/*<FaChevronDown className="text-[14px] text-gray-500" />*/}
                            </button>

                            <div
                                className={`
                                    absolute left-0 top-full w-64 mt-2 bg-white rounded-md shadow-lg
                                    border border-gray-100 p-4 z-50 transition-all duration-150
                                    ${openDropdown === "clients" ? "opacity-100 visible" : "opacity-0 invisible"}
                                `}
                                ref={dropdownRef}
                            >
                            </div>
                        </li>

                        {/* CANDIDATES */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown("candidates")}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaUsers className="text-[17px] text-[#10B981]" />
                                How We Vet
                                {/*<FaChevronDown className="text-[14px] text-gray-500" />*/}
                            </button>
                        </li>

                        <li>
                            <Link href="#" className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaUsers className="text-[17px] text-[#EC4899]" />
                                Engagement Models
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaUsers className="text-[17px] text-[#EC4899]" />
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaUsers className="text-[17px] text-[#EC4899]" />
                                Insights
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className="flex items-center gap-2 hover:text-gray-900 transition">
                                <FaPhone className="text-[17px] text-[#F97316]" />
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* BUTTONS + USER */}
                    {/*<div className="hidden md:flex items-center gap-4">*/}
                    {/*    <button*/}
                    {/*        onClick={(e) => {*/}
                    {/*            e.preventDefault();*/}
                    {/*            setShowSearchBar(true);*/}
                    {/*            setOpenDropdown(null);*/}
                    {/*        }}*/}
                    {/*        className="px-4 py-2 rounded-full border border-gray-700 text-gray-700 font-semibold text-sm hover:bg-gray-100"*/}
                    {/*    >*/}
                    {/*        Search Job*/}
                    {/*    </button>*/}

                    {/*    <Link*/}
                    {/*        href="#"*/}
                    {/*        className="px-4 py-2 rounded-full text-white font-semibold text-sm*/}
                    {/*            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"*/}
                    {/*    >*/}
                    {/*        Find Talent*/}
                    {/*    </Link>*/}

                    {/*    <div className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">*/}
                    {/*        <HiUser className="text-[20px]" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* ✅ MOBILE HAMBURGER (ONLY ADDITION HERE) */}
                    <button
                        className="md:hidden p-2 rounded-md border border-gray-300"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* ================= MOBILE MENU (SEPARATE STRUCTURE) ================= */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/40 md:hidden">
                    <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl p-6
                        transform transition-transform duration-300 ease-out translate-x-0">

                        {/* HEADER */}
                        <div className="flex items-center justify-between border-b pb-4 mb-4">
                            <img src="/quasent_logo.png" className="h-10" />
                            <button onClick={() => setMobileMenuOpen(false)} className="text-2xl">✕</button>
                        </div>

                        <nav className="text-gray-800 font-medium">

                            <Link href="/about" onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-3 border-b">
                                <FaBuilding className="text-blue-500" />
                                About Us
                            </Link>

                            <details className="border-b">
                                <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
                                    <span className="flex items-center gap-3">
                                        <FaBriefcase className="text-purple-500" />
                                        Clients
                                    </span>
                                    <FaChevronDown className="text-sm" />
                                </summary>
                                <div className="pl-9 pb-2 space-y-2 text-sm">
                                    <Link href="/permanent-hire" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                                        Permanent Work Hires
                                    </Link>
                                    <Link href="/contractors-workforce" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                                        Contractor Work Force
                                    </Link>
                                    <Link href="/submit-vacancy" onClick={() => setMobileMenuOpen(false)} className="block py-2">
                                        Submit a Vacancy
                                    </Link>
                                </div>
                            </details>

                            <details className="border-b">
                                <summary className="flex items-center justify-between py-3 cursor-pointer list-none">
                                <span className="flex items-center gap-3">
                                    <FaUsers className="text-green-500" />
                                    Candidates
                                </span>
                                    <FaChevronDown className="text-sm" />
                                </summary>

                                <div className="pl-9 pb-2 space-y-2 text-sm">

                                    <Link
                                        href="/contractors"
                                        className="flex gap-2 items-center py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <FaUserShield />
                                        Contractors
                                    </Link>

                                    <Link
                                        href="/submit-cv"
                                        className="flex gap-2 items-center py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <FaFileUpload />
                                        Submit Your CV
                                    </Link>

                                </div>
                            </details>


                            <Link href="/join-us" onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-3 border-b">
                                <FaUsers className="text-pink-500" />
                                Join Us
                            </Link>

                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 py-3">
                                <FaPhone className="text-orange-500" />
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            {/* SEARCH OVERLAY (UNCHANGED) */}
            {showSearchBar && (
                <div className="fixed top-0 left-0 w-full bg-white shadow-lg border-b border-gray-200 z-[9999] px-6 py-4 h-[75px] flex items-center">
                    <div className="max-w-7xl mx-auto w-full flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search job title, skills or keywords..."
                            className="border w-full p-3 rounded-lg text-sm"
                            autoFocus
                        />
                        <span
                            onClick={() => setShowSearchBar(false)}
                            className="text-[22px] cursor-pointer"
                        >
                            ✕
                        </span>
                    </div>
                </div>
            )}
        </header>
    );
}
