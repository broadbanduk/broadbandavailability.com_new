import TrustedBySwiper from "./TrustedBySwiper";

export default function TrustedBy() {
  return (
    <section className="py-[120px] px-40 flex items-center justify-center gap-14">
      <div className="space-y-14">
        <h3 className="text-5xl uppercase tracking-wide text-corporate-black font-bold">
          Trusted by leading <br /> estate agents
        </h3>
        <p className="max-w-xs">
          Who wants compliance made simple, updates made automatic and clients
          kept informed.
        </p>
      </div>
      <TrustedBySwiper />
    </section>
  );
}
