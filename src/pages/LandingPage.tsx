import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyCadnaMart from "@/components/landing/WhyCadnaMart";
import Pricing from "@/components/landing/Pricing";
import BeforeYouStart from "@/components/landing/BeforeYouStart";
import Faqs from "@/components/landing/Faqs";
import ReadyToStart from "@/components/landing/ReadyToStart";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyCadnaMart />
        <Pricing />
        <BeforeYouStart />
        <Faqs />
        <ReadyToStart />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
