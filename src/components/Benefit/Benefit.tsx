import { checkCircle, coin, globe, house, shieldSlash } from "@/static/images";
import BenefitItem from "./BenefitItem";

const benefits = [
  {
    icon: house,
    alt: "house",
    title: "Broadband is the fourth utility",
    description:
      "40% of UK workers now work from home at least part-time, making reliable connectivity essential for modern buyers.",
  },
  {
    icon: checkCircle,
    alt: "checkCircle",
    title: "One integration. Zero effort",
    description:
      "Checking broadband manually wastes hours and risks errors. We deliver accurate data seamlessly into your listings.",
  },
  {
    icon: shieldSlash,
    alt: "shieldSlash",
    title: "Transparency builds trust",
    description:
      "Accurate broadband disclosure is now mandatory as of 6 April 2025. Trust closes deals faster.",
  },
];

export default function Benefit() {
  return (
    <section className="py-4 sm:py-6 md:py-12 lg:py-14 xl:py-24 space-y-10 lg:space-y-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase text-center tracking-wide text-corporate-black font-bold">
        Why does it matter?
      </h2>
      <div className="container px-3 mx-auto gap-4 sm:gap-6 md:gap-8 xl:gap-20 items-start grid grid-cols-1 lg:grid-cols-3">
        {benefits.map((item) => (
          <BenefitItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
