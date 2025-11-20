import { heroImage } from "@/static/images";
import Image from "next/image";
import GetDemo from "../CTA/GetDemo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-light-gray-bg py-16 px-5 lg:py-[120px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] container gap-10 lg:gap-16 items-center mx-auto">
        <div className="space-y-8 lg:space-y-16 max-w-md">
          <h1 className="text-[52px] md:text-[60px] lg:text-[72px] xl:text-[80px] leading-[1] font-national tracking-[2%] font-bold text-corporate-black uppercase">
            Broadband Intelligence. <br /> for every UK property.
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-corporate-black">
              Showcase accurate broadband availability for 30+ million UK addresses
            </p>
          </div>
          <div className="space-y-2 flex-col items-center hidden lg:flex justify-start">
            <GetDemo
              siteSection="Hero Section"
              size="big"
              buttonAdditionalClassName="w-full md:w-fit"
              text="Start for Free"
            />
            <span className="text-sm text-corporate-black opacity-60">
              No credit card required
            </span>
          </div>
        </div>
        <div className="space-y-10">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-full max-h-[440px] max-w-[700,63px]"
            width={700}
            height={440}
          />
          <div className="space-y-2 flex-col items-center flex lg:hidden justify-start">
            <GetDemo
              siteSection="Hero Section"
              size="big"
              buttonAdditionalClassName="w-full lg:w-fit"
              text="Start for Free"
            />
            <span className="text-sm text-corporate-black opacity-60">
              No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
