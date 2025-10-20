import { coin, globe, house } from "@/static/images";
import Image from "next/image";

export default function Benefit() {
  return (
    <section className="py-4 lg:py-24 space-y-10 lg:space-y-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase text-center tracking-wide text-corporate-black font-bold">
        Why does it matter?
      </h2>
      <div className="container mx-auto gap-10 md:gap-20 items-start grid grid-cols-1 lg:grid-cols-3">
        <div className="space-y-5 flex flex-col items-center sm:max-w-xs">
          <Image src={house} width={42} height={44} alt="house" />
          <p className="text-xl font-bold text-center text-corporate-black">
            Remote working is now mainstream
          </p>
          <p className="text-xl text-center text-corporate-black">
            Two in five UK workers (40% or 13 million people) now work from home
            at least part-time, making reliable broadband a top priority for
            buyers and tenants.
          </p>
        </div>
        <div className="space-y-5 flex flex-col items-center sm:max-w-xs">
          <Image src={globe} width={42} height={44} alt="globe" />
          <p className="text-xl font-bold text-center text-corporate-black">
            Broadband drives property decisions
          </p>
          <p className="text-xl text-center text-corporate-black">
            Fast and reliable internet is now the second most important factor
            for homebuyers, after location. Properties with good connectivity
            can command premiums of £3,500 or more.
          </p>
        </div>
        <div className="space-y-5 flex flex-col items-center sm:max-w-xs">
          <Image src={coin} width={42} height={44} alt="coin" />
          <p className="text-xl font-bold text-center text-corporate-black">
            Poor connectivity has real costs
          </p>
          <p className="text-xl text-center text-corporate-black">
            Weak or unreliable broadband can slash property values by up to 25%,
            with three-quarters of home workers reporting they couldn’t work due
            to poor speeds.
          </p>
        </div>
      </div>
    </section>
  );
}
