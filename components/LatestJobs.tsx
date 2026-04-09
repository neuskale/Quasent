"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";

const JOBS = [
    {
        title: "Senior Engineer - Substation",
        location: "Raleigh, North Carolina",
        type: "Permanent",
        desc: "As a Senior Substation Engineer. Substation Design Engineers are responsible for designing substations utilizing applicable codes and client standards (if available). Typical design to include general arrangement, equipment and electrical layout, elevation views, cable trench, grounding, conduit drawings, details, bills of material, and AC and DC power systems.",
    },
    {
        title: "Lead Engineer - Substation",
        location: "Chattanooga, Tennessee",
        type: "Permanent",
        desc: "Engineering department as a Lead Substation Engineer. Substation Design Engineers are responsible for designing substations utilizing applicable codes and client standards. Typical design to include general arrangement, equipment and electrical layout, elevation views, cable trench, grounding, conduit drawings, details, bills of material, and AC and DC power systems.",
    },
    {
        title: "Construction Manager",
        salary: "$55.00 - $70.00/ per hour",
        location: "New York, United States",
        type: "Permanent",
        desc: "our Program Management department as a Construction Manager. The Construction Manager is responsible for ensuring that constructability meets Qualus and our clients' expectations of the quality of each assigned project, to ensure compliance within required construction codes, local jurisdictional requirements. budgetary, scheduling, and safety goals. Employees in this role must have natural gas distribution and transmission pipeline experience, meter/regulator construction experience, and they must have experience coordinating and managing construction work performed by contractors at the project site. ",
    },
];

export default function LatestJobs() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                        Latest <span className="gradient-text">Roles</span>
                    </h2>

                    <Link
                        href="/jobs"
                        className="px-6 py-3 mt-6 md:mt-0 rounded-lg btn-brand text-white text-sm font-semibold transition-all"
                    >
                        Start Your Job Search
                    </Link>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={1}
                    spaceBetween={28}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16"
                >
                    {JOBS.map((job, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="
                  relative h-[430px] rounded-2xl p-8 flex flex-col justify-between
                  border border-gray-100 bg-white shadow-sm
                  hover:shadow-md
                  hover:-translate-y-[4px]
                  transition-all duration-300 overflow-hidden
                  before:absolute before:inset-x-0 before:top-0 before:h-1 before:gradient-brand before:rounded-t
                "
                            >
                                <div className="relative z-10">
                                    {/* Title */}
                                    <h3 className="text-[20px] font-semibold text-gray-900 mb-5 leading-snug">
                                        {job.title}
                                    </h3>

                                    {/* Meta */}
                                    <div className="space-y-2 text-gray-600 text-sm mb-6">
                                        <p className="flex items-center gap-2">
                                            <IoLocationOutline className="text-gray-500" /> {job.location}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FaRegClock className="text-gray-500" /> {job.type}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                        {job.desc}
                                    </p>
                                </div>

                                {/* CTA bottom */}
                                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
                                    <Link
                                        href="#"
                                        className="relative font-semibold text-purple-600 hover:text-purple-700 transition"
                                    >
                                        View Job
                                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 bg-purple-600 transition-transform origin-left hover:scale-x-100"></span>
                                    </Link>

                                    <span className="text-2xl font-light text-purple-600">→</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
