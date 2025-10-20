import Link from "next/link";

export default function IntegrationCTA() {
  return (
    <section className="px-3 lg:px-16 py-4 lg:pb-[120px]">
      <div className="py-4 px-3 lg:py-[120px] bg-light-gray-bg border-[1.5px] border-light-gray-bg rounded-[28px]">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-10 lg:mb-20 uppercase text-center tracking-wide text-corporate-black font-bold">
          Simple, Fast, Free integration
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
        </div>
      </div>
    </section>
  );
}
