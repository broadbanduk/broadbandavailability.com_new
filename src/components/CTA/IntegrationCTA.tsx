import IntegrationCTAForm from "./IntegrationCTAForm";

export default function IntegrationCTA() {
  return (
    <section
      id="integration"
      className="px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-4 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-[120px]"
    >
      <div className="px-3 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-[120px] bg-light-gray-bg border-[1.5px] border-light-gray-bg rounded-[28px]">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national mb-10 lg:mb-20 uppercase text-center tracking-wide text-corporate-black font-bold">
          Simple, Fast integration
        </h3>
        <div className="flex flex-col items-center">
          <p className="mb-11 max-w-2xl text-center text-corporate-black text-sm md:text-base lg:text-lg xl:text-xl">
            Integrate the true Broadband Availability service into your website
            and give your clients reliable internet information for every
            property. Or take it further and plugin with our API for instant,
            real-time updates.
          </p>
          <p className="mb-11 max-w-2xl text-center text-corporate-black text-sm md:text-base lg:text-lg xl:text-xl">
            Or take it further and plug in with our API for instant, real-time
            updates.
          </p>
          <IntegrationCTAForm />
        </div>
      </div>
    </section>
  );
}
