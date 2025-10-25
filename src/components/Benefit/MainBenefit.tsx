import { chartBar, shieldCheck, warning } from "@/static/images";
import Image from "next/image";

export default function MainBenefit() {
  return (
    <section className="py-4 lg:py-24 space-y-10 lg:space-y-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase text-center tracking-wide text-corporate-black font-bold">
        Stay Compliant, Stay Trusted
      </h2>
      <div className="container mx-auto gap-10 md:gap-20 items-start grid grid-cols-1 lg:grid-cols-3">
        <div className="space-y-5 flex flex-col items-center sm:max-w-xs">
          <Image src={shieldCheck} width={42} height={44} alt="shieldCheck" />
          <p className="text-xl font-bold text-center text-corporate-black">
            Mandatory Broadband Disclosure
          </p>
          <p className="text-xl text-center text-corporate-black">
            Ensure your agency complies with DMCC and CMA rules. All listings
            must show accurate broadband information.
          </p>
        </div>
        <div className="space-y-5 flex flex-col items-center sm:max-w-xs">
          <Image src={chartBar} width={50} height={44} alt="chartBar" />
          <p className="text-xl font-bold text-center text-corporate-black">
            Accurate Property Data
          </p>
          <p className="text-xl text-center text-corporate-black">
            Display real broadband speeds, availability and technology on every
            listing are essential for informed client decisions.
          </p>
        </div>
        <div className="space-y-5 flex flex-col items-center sm:max-w-xs">
          <Image src={warning} width={44} height={44} alt="warning" />
          <p className="text-xl font-bold text-center text-corporate-black">
            Regulatory Compliance
          </p>
          <p className="text-xl text-center text-corporate-black">
            Meet the 6 April 2025 requirements to avoid fines up to £300,000 or
            10% of global turnover.
          </p>
        </div>
      </div>
    </section>
  );
}
