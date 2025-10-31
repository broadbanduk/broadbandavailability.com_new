import { chartBar, shieldCheck, warning } from "@/static/images";
import MainBenefitItem from "./MainBenefitItem";

const benefits = [
  {
    icon: shieldCheck,
    alt: "shieldCheck",
    title: "Mandatory Broadband Disclosure",
    description:
      "Ensure your agency complies with DMCC and CMA rules. All listings must show accurate broadband information.",
    width: 42,
    height: 44,
  },
  {
    icon: chartBar,
    alt: "chartBar",
    title: "Accurate Property Data",
    description:
      "Display real broadband speeds, availability, and technology on every listing — essential for informed client decisions.",
    width: 50,
    height: 44,
  },
  {
    icon: warning,
    alt: "warning",
    title: "Regulatory Compliance",
    description:
      "Meet the 6 April 2025 requirements to avoid fines up to £300,000 or 10% of global turnover.",
    width: 44,
    height: 44,
  },
];

export default function MainBenefit() {
  return (
    <section className="py-4 sm:py-6 md:py-12 lg:py-14 xl:py-24 space-y-10 lg:space-y-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase text-center tracking-wide text-corporate-black font-bold">
        Stay Compliant, Stay Trusted
      </h2>
      <div className="container px-3 mx-auto gap-4 sm:gap-6 md:gap-8 xl:gap-20 items-start grid grid-cols-1 lg:grid-cols-3">
        {benefits.map((item) => (
          <MainBenefitItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
