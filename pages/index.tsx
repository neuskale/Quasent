import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import RolesWeStaff from "../components/RolesWeStaff";
import TalentSection from "../components/TalentSection";
import About from "../components/AboutUs";
import LatestJobs from "../components/LatestJobs";
import MarketInsights from "../components/MarketInsights";

import dynamic from "next/dynamic";
const OurIndustries = dynamic(() => import("@/components/OurIndustries"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-900">
            <Navbar />
            <Hero />
            <IntroSection />
            <OurIndustries />
            {/*<RolesWeStaff />*/}
            <TalentSection />
            {/*<About />*/}
            {/*<LatestJobs />*/}
            {/*<MarketInsights />*/}
            {/*<ContactSection />*/}
            <Footer />
        </div>
    );
}
