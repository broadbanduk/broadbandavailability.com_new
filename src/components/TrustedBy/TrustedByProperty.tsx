import PropertiesList from "./PropertiesList";

export default function TrustedByProperty() {
  return (
    <section className="pb-16 px-5 xl:pb-[120px] container mx-auto flex flex-col xl:flex-row items-center justify-center gap-7 lg:gap-14">
      <div className="space-y-7 lg:space-y-14">
        <h3 className="text-[52px] leading-[1] xl:text-6xl font-national uppercase tracking-wide text-center text-corporate-black font-bold">
          Broadband in The Property Buying Process
        </h3>
        <PropertiesList />
      </div>
    </section>
  );
}
