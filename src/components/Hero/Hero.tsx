import { heroImage } from "@/static/images";
import Image from "next/image";
import GetDemo from "../CTA/GetDemo";

export default function Hero() {
  return (
    <div className="bg-light-gray-bg py-4 px-3 lg:px-0 lg:py-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 container gap-16 items-center mx-auto">
        <div className="space-y-5 lg:space-y-11">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national tracking-wide font-bold text-corporate-black uppercase">
            Empower Estate <br /> Agency Listings
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-corporate-black">
              A simple way to build client trust and showcase professionalism.
            </p>
            <p className="text-xl text-corporate-black">
              The free service for estate agencies that automatically displays
              real internet speeds, provider availability and connection
              technology for every address across the UK.
            </p>
          </div>
          <GetDemo />
        </div>
        <div className="">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-full"
            width={500}
            height={280}
          />
        </div>
      </div>
    </div>
  );
}
