"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BannerSlider() {
    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=2000&q=80",
            title: "Specialized staffing for utilities, energy, engineering, and field services.",
            text: "Quasent provides fully vetted engineering, field, and IT professionals for electric, gas, and water utilities—plus construction & engineering and oil & gas service partners.",
            button1: "Request Candidates",
            button2: "Roles We Staff",
        },
        // {
        //     image:
        //         "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=2000&q=80",
        //     title: "Building Future-Ready Enterprises",
        //     text: "Delivering high-impact digital solutions for clients across industries globally.",
        //     button1: "Our Services",
        //     button2: "Contact Us",
        // },
        // {
        //     image:
        //         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
        //     title: "Engineering Excellence at Scale",
        //     text: "From strategy to implementation, we help companies innovate and win.",
        //     button1: "Explore Solutions",
        //     button2: "Find Talent",
        // },
    ];

    const [current, setCurrent] = useState(0);

    // autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // 5s autoplay

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">

            {/* SLIDES */}
            <div
                className="flex h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.7,0,0.3,1)]"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="min-w-full h-full relative"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Text + Buttons */}
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-20 lg:px-32">
                            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight drop-shadow-lg">
                                {slide.title}
                            </h1>

                            <p className="mt-4 text-white/90 max-w-2xl text-lg drop-shadow-lg">
                                {slide.text}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="#"
                                    className="
                    px-6 py-3 rounded-md text-white font-semibold
                    bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-lg
                  "
                                >
                                    {slide.button1}
                                </Link>

                                <Link
                                    href="#"
                                    className="
                    px-6 py-3 rounded-md border border-white/70 text-white font-semibold
                    hover:bg-white/10 backdrop-blur-lg
                  "
                                >
                                    {slide.button2}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* DOT INDICATORS */}
            <div className="absolute bottom-6 w-full flex justify-center gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-3 w-3 rounded-full transition-all ${
                            current === idx
                                ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                                : "bg-white/60"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
