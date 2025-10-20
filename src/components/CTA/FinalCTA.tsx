import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="container mx-auto space-y-10 lg:space-y-20 py-4 lg:py-24">
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase text-center tracking-wide text-corporate-black font-bold">
        Get started today — stay compliant, build trust and accelerate sales.
      </h3>
      <div className="flex flex-col items-center">
        <p className="mb-11 max-w-2xl text-center text-corporate-black text-xl">
          Integrate the True Broadband Availability Service into your website
          and give your clients reliable internet information for every
          property.
        </p>
        <Link href="#contact">
          <button className="py-2.5 mb-6 px-12 cursor-pointer bg-corporate-blue text-white transition-all duration-300 ease-in-out rounded-full hover:opacity-80">
            Get Demo
          </button>
        </Link>
        <p className="text-corporate-black opacity-60 text-base">
          No credit card required
        </p>
      </div>
    </section>
  );
}
