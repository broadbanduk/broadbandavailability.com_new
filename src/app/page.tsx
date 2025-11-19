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
import TrustedByAgents from "@/components/TrustedBy/TrustedByAgents";
import TrustedByProperty from "@/components/TrustedBy/TrustedByProperty";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroTicker />
      <div className="corporate-radial py-16 px-5 sm:py-10 md:py-20 md:px-6 lg:py-32 lg:px-8 xl:py-[162.5] xl:px-16 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 xl:gap-28">
        <p className="font-bold font-national uppercase leading-[2%] text-[52px] text-corporate-black">
          Introducing
        </p>
        <div className="space-y-8 max-w-3xl">
          <p className="text-center lg:text-left font-bold font-lato text-xl text-corporate-black">
            True Broadband Availability Service
          </p>
          <p className="text-center lg:text-left text-xl text-corporate-black">
            Our game-changing true broadband availability service marks a new
            era for estate agencies that give a simple, instant way to display
            real internet speeds, provider options, and connection technology
            for each address.
          </p>
        </div>
      </div>
      <Benefit />
      <Solution />
      <TrustedByAgents />
      <MainBenefit />
      <IntegrationCTA />
      <ISPTicker />
      <TrustedBy />
      <TrustedByProperty />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
