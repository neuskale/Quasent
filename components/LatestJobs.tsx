"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { IoLocationOutline } from "react-icons/io5";
import { FaMoneyBillWave, FaRegClock } from "react-icons/fa";

const JOBS = [
    {
        title: "Senior Engineer - Substation",
        // salary: "Up To £160000 Per Annum + $320,000 OTE",
        location: "Raleigh, North Carolina",
        type: "Permanent",
        desc: "As a Senior Substation Engineer. Substation Design Engineers are responsible for designing substations utilizing applicable codes and client standards (if available). Typical design to include general arrangement, equipment and electrical layout, elevation views, cable trench, grounding, conduit drawings, details, bills of material, and AC and DC power systems.",
    },
    {
        title: "Lead Engineer - Substation",
        // salary: "Up To US$160000 Per Annum + $320,000 OTE",
        location: "Chattanooga, Tennessee",
        type: "Permanent",
        desc: "Engineering department as a Lead Substation Engineer. Substation Design Engineers are responsible for designing substations utilizing applicable codes and client standards. Typical design to include general arrangement, equipment and electrical layout, elevation views, cable trench, grounding, conduit drawings, details, bills of material, and AC and DC power systems.",
    },
    {
        title: "Construction Manager",
        salary: "$55.00 - $70.00/ per hour",
        location: "New York, United States",
        type: "Permanent",
        desc: "our Program Management department as a Construction Manager. The Construction Manager is responsible for ensuring that constructability meets Qualus and our clients’ expectations of the quality of each assigned project, to ensure compliance within required construction codes, local jurisdictional requirements. budgetary, scheduling, and safety goals. Employees in this role must have natural gas distribution and transmission pipeline experience, meter/regulator construction experience, and they must have experience coordinating and managing construction work performed by contractors at the project site. ",
    },
];

export default function LatestRoles() {
    return (
        <section className="w-full py-20 bg-[#F7F8FA]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                        Latest Roles
                    </h2>

                    <button className="px-6 py-3 mt-6 md:mt-0 rounded-lg bg-[#2563EB] text-white text-sm font-semibold
            hover:bg-[#1E4FCF] transition-all shadow-[0_4px_18px_rgba(37,99,235,0.25)]">
                        Start Your Job Search
                    </button>
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
                  border border-gray-200 backdrop-blur-sm
                  bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_16px_38px_rgba(0,0,0,0.08)]
                  hover:-translate-y-[4px]
                  transition-all duration-300 overflow-hidden
                "
                            >
                                {/* LIGHT LOGO GRADIENT OVERLAY */}
                                <div
                                    className="
                    absolute inset-0 pointer-events-none
                    bg-[linear-gradient(135deg,rgba(255,0,122,0.12),rgba(193,45,255,0.12),rgba(0,224,255,0.12))]
                  "
                                />

                                <div className="relative z-10">
                                    {/* Title */}
                                    <h3 className="text-[20px] font-semibold text-gray-900 mb-5 leading-snug">
                                        {job.title}
                                    </h3>

                                    {/* Meta */}
                                    <div className="space-y-2 text-gray-600 text-sm mb-6">
                                        {/*<p className="flex items-center gap-2">*/}
                                        {/*    <FaMoneyBillWave className="text-gray-500" /> {job.salary}*/}
                                        {/*</p>*/}
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
                                    <button className="relative font-semibold text-[#2563EB] hover:text-[#1E4FCF] transition">
                                        View Job
                                        <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 bg-[#2563EB]
                      transition-transform origin-left hover:scale-x-100"></span>
                                    </button>

                                    <span className="text-2xl font-light text-[#2563EB]">→</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
