import { heroImage } from "@/static/images";
import GetDemo from "./GetDemo";
import Image from "next/image";
import EmailCTAInput from "./EmailCTAInput";

export default function EmailCTA() {
  return (
    <section className="bg-light-gray-bg py-4 px-3 lg:px-0 lg:py-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 container gap-16 items-center mx-auto">
        <div className="space-y-5 lg:space-y-11">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national tracking-wide font-bold text-corporate-black uppercase">
            Build employee training in 30 minutes, not weeks
          </h3>
          <div className="space-y-4">
            <p className="text-xl text-corporate-black">
              Address-level broadband intelligence for estate agents and
              proptech platforms.
            </p>
          </div>

          <EmailCTAInput />
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
    </section>
  );
}
