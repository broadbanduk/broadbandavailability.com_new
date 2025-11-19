import PropertiesList from "./PropertiesList";

export default function TrustedByProperty() {
  return (
    <section className="px-3 pb-4 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-[120px] container mx-auto flex flex-col xl:flex-row items-center justify-center gap-7 lg:gap-14">
      <div className="space-y-7 lg:space-y-14">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase tracking-wide text-center text-corporate-black font-bold">
          Broadband in The Property Buying Process
        </h3>
        <PropertiesList />
      </div>
    </section>
  );
}
