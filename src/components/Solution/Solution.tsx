import { blueChevronRight, speeds } from "@/static/images";
import Image from "next/image";
import Link from "next/link";
import SolutionProviders from "./SolutionProviders";
import SolutionConnection from "./SolutionConnection";

export default function Solution() {
  return (
    <div className="bg-light-gray-bg py-24 px-20">
      <h3 className="text-5xl mb-10 uppercase text-center tracking-wide text-corporate-black font-bold">
        Solution
      </h3>
      <p className="mb-[120px] mx-auto container px-24 text-center text-corporate-black text-xl">
        When a client browses your property listings, they shouldn’t have to
        leave your site to find out about broadband.
      </p>
      <div className="space-y-16">
        <div className="container bg-white flex items-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-10">
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
          <Image src={speeds} height={258} alt="internet speed" />
        </div>
        <SolutionProviders />
        <SolutionConnection />
      </div>
      <h3 className="text-5xl mb-10 mt-20 uppercase text-center tracking-wide text-corporate-black font-bold">
        The result?
      </h3>
      <p className="container mx-auto px-24 text-center text-corporate-black text-xl">
        Clients stay on your site longer, get the information they need
        instantly, and move closer to a decision — while your agency looks
        smarter, faster and one step ahead.
      </p>
    </div>
  );
}
