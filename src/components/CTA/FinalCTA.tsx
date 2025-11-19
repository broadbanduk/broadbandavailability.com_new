import GetDemo from "./GetDemo";

export default function FinalCTA() {
  return (
    <section className="container mx-auto space-y-6 py-16 px-5 sm:space-y-8 md:space-y-10 lg:space-y-20 xl:py-[120px]">
      <h3 className="text-[52px] leading-[1] xl:text-6xl font-national uppercase text-center tracking-wide text-corporate-black font-bold">
        Get started today — stay compliant, build trust and accelerate sales.
      </h3>
      <div className="flex flex-col items-center">
        <p className="mb-10 max-w-2xl text-center text-corporate-black text-xl">
          Integrate the True Broadband Availability Service into your website
          and give your clients reliable internet information for every
          property.
        </p>
        <GetDemo text="Start Free" siteSection="Final CTA Section" />
      </div>
    </section>
  );
}
