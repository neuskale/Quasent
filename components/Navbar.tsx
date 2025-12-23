"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ICONS
import {
    FaBuilding,
    FaBriefcase,
    FaUserShield,
    FaHandshake,
    FaUserTie,
    FaLightbulb,
    FaPhone,
    FaChevronDown,
    FaUserCog,
    FaUser,
    FaStar,
    FaPlusCircle,
    FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header className="w-full bg-white border-b sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto h-[75px] px-6 md:px-8 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/">
                    <img src="/quasent_logo.png" alt="Quasent Logo" className="h-12" />
                </Link>

                {/* RIGHT */}
                <div className="flex items-center gap-8">

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">

                        <li className="flex items-center gap-2">
                            <FaBuilding className="text-blue-500" />
                            Industries
                        </li>

                        {/* ROLES WE STAFF */}
                        <li
                            className="relative"
                            onMouseEnter={() => setOpenDropdown("roles")}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-2">
                                <FaBriefcase className="text-purple-500" />
                                Roles We Staff
                                <FaChevronDown className="text-xs text-gray-500" />
                            </button>

                            {/* DROPDOWN */}
                            <div
                                ref={dropdownRef}
                                className={`
                  absolute left-0 top-full mt-2 w-72 bg-white rounded-md shadow-lg border p-4
                  transition-all
                  ${openDropdown === "roles" ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
                            >
                                <ul className="space-y-3 text-sm">

                                    <li className="flex items-center gap-3">
                                        <FaUserCog className="text-indigo-500" />
                                        Engineers & Technical Roles
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <FaUser className="text-green-500" />
                                        Field Technicians
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <FaStar className="text-yellow-500" />
                                        Project Managers
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <FaPlusCircle className="text-pink-500" />
                                        More Specialized Roles
                                    </li>

                                </ul>
                            </div>
                        </li>

                        <li className="flex items-center gap-2">
                            <FaUserShield className="text-emerald-500" />
                            How We Vet
                        </li>

                        <li className="flex items-center gap-2">
                            <FaHandshake className="text-orange-500" />
                            Engagement Models
                        </li>

                        <li className="flex items-center gap-2">
                            <FaUserTie className="text-sky-500" />
                            About
                        </li>

                        <li className="flex items-center gap-2">
                            <FaLightbulb className="text-yellow-400" />
                            Insights
                        </li>

                        <li className="flex items-center gap-2">
                            <FaPhone className="text-red-500" />
                            Contact Us
                        </li>
                    </ul>
                    {/* ✅ USER ICON WITH DROPDOWN */}
                    <div
                        className="relative hidden md:block"
                        onMouseEnter={() => setOpenDropdown("user")}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button className="flex items-center gap-2">
                            <FaUserCircle className="text-[28px] text-indigo-600" />
                            <FaChevronDown className="text-xs text-gray-500" />
                        </button>

                        {/* USER DROPDOWN */}
                        <div
                            className={`
                                absolute right-0 top-full mt-2 w-56 bg-white rounded-md shadow-lg border p-3
                                transition-all
                                ${openDropdown === "user" ? "opacity-100 visible" : "opacity-0 invisible"}
                              `}
                        >
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
                                    >
                                        <FaUserTie className="text-blue-500" />
                                        Request Candidates
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
                                    >
                                        <FaHandshake className="text-green-500" />
                                        Talk to Recruiting
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden p-2 border rounded"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/40 z-[9999] md:hidden">
                    <div className="absolute right-0 top-0 h-full w-[85%] bg-white p-6">

                        <div className="flex justify-between items-center border-b pb-4 mb-4">
                            <img src="/quasent_logo.png" className="h-10" />
                            <button onClick={() => setMobileMenuOpen(false)}>✕</button>
                        </div>

                        <nav className="space-y-4 text-sm">

                            <div className="flex items-center gap-3">
                                <FaBuilding className="text-blue-500" /> Industries
                            </div>

                            <div className="flex items-center gap-3">
                                <FaBriefcase className="text-purple-500" /> Roles We Staff
                            </div>

                            <div className="flex items-center gap-3">
                                <FaUserShield className="text-green-500" /> How We Vet
                            </div>

                            <div className="flex items-center gap-3">
                                <FaHandshake className="text-orange-500" /> Engagement Models
                            </div>

                            <div className="flex items-center gap-3">
                                <FaUserTie className="text-sky-500" /> About
                            </div>

                            <div className="flex items-center gap-3">
                                <FaLightbulb className="text-yellow-400" /> Insights
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-red-500" /> Contact Us
                            </div>

                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
