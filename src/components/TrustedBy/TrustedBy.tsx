import TrustedBySwiper from "./TrustedBySwiper";

export default function TrustedBy() {
  return (
    <section
      id="agents"
      className="py-16 px-5 lg:py-16 xl:py-[120px] container mx-auto flex flex-col xl:flex-row items-center justify-center gap-16"
    >
      <div className="space-y-10 lg:space-y-14">
        <h3 className="text-[52px] leading-[1] xl:text-6xl text-center lg:text-left font-national uppercase tracking-wide text-corporate-black font-bold">
          Trusted by leading <br /> estate agents
        </h3>
        <p className="xl:max-w-xs text-xl text-center lg:text-left">
          Who wants compliance made simple, updates made automatic and clients
          kept informed.
        </p>
      </div>
      <TrustedBySwiper />
    </section>
  );
}
