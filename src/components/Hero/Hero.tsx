import { heroImage } from "@/static/images";
import Image from "next/image";
import GetDemo from "../CTA/GetDemo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-light-gray-bg py-4 px-3 lg:px-0 lg:py-[120px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] container gap-16 items-center mx-auto">
        <div className="space-y-8 lg:space-y-16 max-w-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national tracking-wide font-bold text-corporate-black uppercase">
            Broadband Intelligence. <br /> for every UK property.
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-corporate-black">
              Show homemovers accurate broadband availability for every UK
              address
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center w-fit justify-start">
            <GetDemo size="big" text="Start for Free" />
            <span className="text-sm text-corporate-black opacity-60">
              No credit card required
            </span>
          </div>
        </div>
        <div className="">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-full"
            width={700}
            height={440}
          />
        </div>
      </div>
    </section>
  );
}
