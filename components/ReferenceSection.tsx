"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function CareerSection() {
    return (
        <section className="w-full py-20 relative overflow-hidden overflow-x-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7ECFF] via-[#FFE8F3] to-[#E9FBFF]" />
            <div className="absolute inset-0 backdrop-blur-[10px] bg-white/55 shadow-[0_0_40px_rgba(0,0,0,0.05)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-16
                    bg-gradient-to-r from-[#FF007C] via-[#B400FF] to-[#00E5FF] bg-clip-text text-transparent"
                >
                    Future-Proof Your Career
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            img: "/job_search.png",
                            title: "Job Search",
                            btn: "Explore Live Roles",
                            hoverTxt: "Find jobs that match your future — not just your past.",
                            link: "/jobs",
                        },
                        {
                            img: "/candidateservices.png",
                            title: "Candidate Services",
                            btn: "Explore Services",
                            hoverTxt: "Unlock career growth with guidance tailored to you.",
                            link: "#",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative rounded-xl overflow-hidden group cursor-pointer
                            transition-all duration-500 hover:scale-[1.02] hover:-rotate-[0.3deg]
                            border border-transparent hover:border-[#FF007C]/60
                            hover:shadow-[0_0_20px_#FF007C40,0_0_25px_#00E5FF40]"
                        >
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={900}
                                height={520}
                                className="w-full h-[430px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] duration-[1200ms]" />
                            </div>

                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />

                            {/* Default Content */}
                            <div className="absolute bottom-10 left-8 text-white transition-all duration-500 group-hover:translate-y-[-25px]">
                                <h3 className="text-4xl font-bold mb-5 drop-shadow-lg">
                                    {card.title}
                                </h3>

                                <Link href={card.link}>
                                    <button
                                        className="px-7 py-3 rounded-lg font-semibold text-white
                                        bg-gradient-to-r from-[#FF007C] via-[#B400FF] to-[#00E5FF]
                                        shadow-xl transition duration-300 hover:opacity-90"
                                    >
                                        {card.btn}
                                    </button>
                                </Link>
                            </div>

                            {/* Hover Content */}
                            <p
                                className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500
                                left-8 bottom-5 text-white text-lg drop-shadow-md"
                            >
                                {card.hoverTxt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
