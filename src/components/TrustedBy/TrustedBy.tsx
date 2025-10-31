import TrustedBySwiper from "./TrustedBySwiper";

export default function TrustedBy() {
  return (
    <section
      id="agents"
      className="px-3 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-[120px] container mx-auto flex flex-col xl:flex-row items-center justify-center gap-7 lg:gap-14"
    >
      <div className="space-y-7 lg:space-y-14">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase tracking-wide text-corporate-black font-bold">
          Trusted by leading <br /> estate agents
        </h3>
        <p className="xl:max-w-xs">
          Who wants compliance made simple, updates made automatic and clients
          kept informed.
        </p>
      </div>
      <TrustedBySwiper />
    </section>
  );
}
