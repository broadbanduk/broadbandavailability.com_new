import { blueChevronRight, speeds } from "@/static/images";
import Image from "next/image";
import Link from "next/link";
import SolutionProviders from "./SolutionProviders";
import SolutionConnection from "./SolutionConnection";

export default function Solution() {
  return (
    <div className="bg-light-gray-bg py-4 lg:py-24 px-3 lg:px-20">
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-10 uppercase text-center tracking-wide text-corporate-black font-bold">
        Solution
      </h3>
      <p className="mb-14 lg:mb-[120px] mx-auto container px-3 lg:px-24 text-center text-corporate-black text-xl">
        When a client browses your property listings, they shouldn’t have to
        leave your site to find out about broadband.
      </p>
      <div className="space-y-16 mb-10 lg:mb-20">
        <div className="container appearBlock bg-white flex flex-col lg:flex-row items-center justify-between gap-5 mx-auto rounded-[28px] py-4 lg:py-8 px-5 lg:px-10">
          <div className="max-w-md space-y-3">
            <p className="mb-6 text-4xl uppercase text-corporate-black font-bold">
              1. Real internet speeds
            </p>
            <p className="text-xl text-corporate-black">
              Your clients don’t want vague “up to” numbers from adverts. They
              want reality. Our service shows the actual broadband speeds
              available at that address. So buyers know if the property will
              support working from home, streaming or gaming without
              frustration.
            </p>
            <Link
              className="flex items-center justify-start gap-2 text-xl text-corporate-blue"
              href="#"
            >
              Read more{" "}
              <Image
                width={24}
                height={24}
                src={blueChevronRight}
                alt="blue chevron"
              />
            </Link>
          </div>
          <div className="relative w-full max-w-[700px] h-64 lg:h-96">
            <Image
              src={speeds}
              alt="internet speed"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              priority
            />
          </div>
        </div>
        <SolutionProviders />
        <SolutionConnection />
      </div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-10 uppercase text-center tracking-wide text-corporate-black font-bold">
        The result?
      </h3>
      <p className=" mx-auto container px-3 lg:px-24 text-center text-corporate-black text-xl">
        Clients stay on your site longer, get the information they need
        instantly, and move closer to a decision — while your agency looks
        smarter, faster and one step ahead.
      </p>
    </div>
  );
}
