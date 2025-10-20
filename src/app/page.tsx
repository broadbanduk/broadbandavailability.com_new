import Benefit from "@/components/Benefit/Benefit";
import MainBenefit from "@/components/Benefit/MainBenefit";
import FinalCTA from "@/components/CTA/FinalCTA";
import IntegrationCTA from "@/components/CTA/IntegrationCTA";
import FAQSection from "@/components/FAQ/FAQSection";
import Hero from "@/components/Hero/Hero";
import Solution from "@/components/Solution/Solution";
import HeroTicker from "@/components/Ticker/HeroTicker";
import ISPTicker from "@/components/Ticker/ISPTicker";
import TrustedBy from "@/components/TrustedBy/TrustedBy";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroTicker />
      <div className="corporate-radial py-20 flex items-center justify-center gap-28">
        <p className="font-bold text-2xl text-corporate-black">Introdusing</p>
        <div className="space-y-8 max-w-3xl">
          <p className="font-bold text-xl text-corporate-black">
            True Broadband Availability Service
          </p>
          <p className="text-xl text-corporate-black">
            Our game-changing true broadband availability service marks a new
            era for estate agencies that give a simple, instant way to display
            real internet speeds, provider options, and connection technology
            for each address.
          </p>
        </div>
      </div>
      <Benefit />
      <Solution />
      <MainBenefit />
      <IntegrationCTA />
      <ISPTicker />
      <TrustedBy />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
