import Link from "next/link";
import GetDemo from "./GetDemo";

export default function FinalCTA() {
  return (
    <section className="container mx-auto space-y-6 px-3 sm:space-y-8 md:space-y-10 lg:space-y-20 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-[120px]">
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase text-center tracking-wide text-corporate-black font-bold">
        Get started today — stay compliant, build trust and accelerate sales.
      </h3>
      <div className="flex flex-col items-center">
        <p className="mb-11 max-w-2xl text-center text-corporate-black text-xl">
          Integrate the True Broadband Availability Service into your website
          and give your clients reliable internet information for every
          property.
        </p>
        <GetDemo />
        <p className="text-corporate-black opacity-60 text-base">
          No credit card required
        </p>
      </div>
    </section>
  );
}
