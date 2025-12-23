import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import ReferenceSection from "../components/ReferenceSection";
import LatestJobs from "../components/LatestJobs";
import Marketinsights from "../components/MarketInsights";
import About from "../components/AboutUs";
import TalentSection from "../components/TalentSection";
import RolesWeStaff from "../components/RolesWeStaff";

import dynamic from "next/dynamic";
const OurIndustries = dynamic(() => import("@/components/OurIndustries"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-900">
            <Navbar />
            <BannerSlider />
            <OurIndustries />
            <RolesWeStaff />
            <TalentSection />
            <About />
            <ReferenceSection />
            <LatestJobs />
            <Marketinsights />
            <ContactSection />
            <Footer />
        </div>
    );
}
