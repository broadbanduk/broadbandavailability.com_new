import Link from "next/link";

export default function IntegrationCTA() {
  return (
    <section className="px-16 pb-[120px]">
      <div className="py-[120px] bg-light-gray-bg border-[1.5px] border-light-gray-bg rounded-[28px]">
        <h3 className="text-5xl mb-20 uppercase text-center tracking-wide text-corporate-black font-bold">
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
