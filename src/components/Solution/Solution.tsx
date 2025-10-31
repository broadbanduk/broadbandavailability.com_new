import { speeds } from "@/static/images";
import Image from "next/image";
import SolutionProviders from "./SolutionProviders";
import SolutionConnection from "./SolutionConnection";
import ReadMore from "./ReadMore";

export default function Solution() {
  return (
    <section
      id="software-company"
      className="bg-light-gray-bg py-4 sm:py-8 md:py-10 lg:py-12 xl:py-24 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-20"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national mb-4 md:mb-6 xl:mb-10 uppercase text-center tracking-wide text-corporate-black font-bold">
        Solution
      </h3>
      <p className="mb-14 sm:mb-16 md:mb-18 xl:mb-[120px] mx-auto container px-3 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center text-corporate-black text-sm md:text-base lg:text-lg xl:text-xl">
        When a client browses your property listings, they shouldn’t have to
        leave your site to find out about broadband.
      </p>
      <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-16 mb-10 lg:mb-20">
        <div className="container appearBlock bg-white flex flex-col lg:grid grid-cols-2 items-start lg:justify-center justify-between gap-5 mx-auto rounded-[28px] py-4 lg:py-8 px-5 lg:px-10">
          <div className="max-w-md px-5 space-y-3">
            <p className="mb-6 text-lg sm:text-xl lg:text-2xl xl:text-4xl font-lato text-corporate-black font-bold">
              1. Real internet speeds
            </p>
            <ReadMore
              text="Your clients don’t want vague “up to” numbers from adverts. They want
            reality. Our service shows the actual broadband speeds available at that
            address. So buyers know if the property will support working from home,
            streaming or gaming without frustration."
            />
          </div>
          <div className="relative w-full max-w-[700px] max-h-64 lg:h-96">
            <Image
              src={speeds}
              alt="internet speed"
              className="w-full"
              priority
            />
          </div>
        </div>
        <SolutionProviders />
        <SolutionConnection />
      </div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national mb-4 md:mb-6 xl:mb-10 uppercase text-center tracking-wide text-corporate-black font-bold">
        The result?
      </h3>
      <p className="mx-auto container px-3 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center text-corporate-black text-sm md:text-base lg:text-lg xl:text-xl">
        Clients stay on your site longer, get the information they need
        instantly, and move closer to a decision — while your agency looks
        smarter, faster and one step ahead.
      </p>
    </section>
  );
}
