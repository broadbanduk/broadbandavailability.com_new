import { coin, globe, house } from "@/static/images";
import BenefitItem from "./BenefitItem";

const benefits = [
  {
    icon: house,
    alt: "house",
    title: "Remote working is now mainstream",
    description:
      "Two in five UK workers (40% or 13 million people) now work from home at least part-time, making reliable broadband a top priority for buyers and tenants.",
  },
  {
    icon: globe,
    alt: "globe",
    title: "Broadband drives property decisions",
    description:
      "Fast and reliable internet is now the second most important factor for homebuyers, after location. Properties with good connectivity can command premiums of £3,500 or more.",
  },
  {
    icon: coin,
    alt: "coin",
    title: "Poor connectivity has real costs",
    description:
      "Weak or unreliable broadband can slash property values by up to 25%, with three-quarters of home workers reporting they couldn’t work due to poor speeds.",
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
