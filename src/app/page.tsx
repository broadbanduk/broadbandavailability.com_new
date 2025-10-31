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
      <div className="corporate-radial px-3 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 xl:px-0 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16 xl:gap-28">
        <p className="font-bold font-lato text-2xl text-corporate-black">
          Introducing
        </p>
        <div className="space-y-8 max-w-3xl">
          <p className="text-center lg:text-left font-bold font-lato text-xl text-corporate-black">
            True Broadband Availability Service
          </p>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-corporate-black">
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
