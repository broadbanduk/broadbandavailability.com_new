import { footerLogo, linkedin, website } from "@/static/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-corporate-black py-4 px-3 sm:px-12 xl:px-[120px] lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Image
              src={footerLogo}
              alt="footerLogo"
              className="max-h-8"
              width={353}
              height={32}
            />
            <p className="text-white text-xl pl-11">Connectivity Matters.</p>
          </div>
          <div className="flex items-center justify-start gap-6 mb-0 mt-auto">
            <Link target="_blank" href="https://broadbanduk.com/">
              <Image src={website} alt="website" width={24} height={24} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/showcase/broadbandavailability/"
            >
              <Image src={linkedin} alt="linkedin" width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-end gap-8 lg:gap-16">
          <div className="space-y-5">
            <p className="text-base text-white font-bold">Products</p>
            <div className="flex flex-col items-start gap-2.5">
              <Link
                target="_blank"
                className="text-base text-white"
                href="https://www.broadbandspeedtest.org.uk/"
              >
                Broadband Speed Test
              </Link>
              <Link
                target="_blank"
                className="text-base text-white"
                href="https://www.broadbandproviders.co.uk/"
              >
                Broadband Providers
              </Link>
              <Link
                target="_blank"
                className="text-base text-white"
                href="https://www.broadbandavailability.com/"
              >
                Broadband Availability
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-base text-white font-bold">Company</p>
            <div className="flex flex-col items-start gap-2.5">
              <Link
                className="text-base text-white"
                href="https://broadbanduk.com/about"
              >
                About
              </Link>
              <Link
                className="text-base text-white"
                href="https://broadbanduk.com/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-base text-white font-bold">Policy</p>
            <div className="flex flex-col items-start gap-2.5">
              <Link
                className="text-base text-white"
                href="https://broadbanduk.com/terms-and-conditions"
              >
                Terms and conditions
              </Link>
              <Link
                className="text-base text-white"
                href="https://broadbanduk.com/privacy"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-sm mt-8 lg:mt-12 pt-3 border-t border-light-gray-bg/20">
        Copyright © {new Date().getFullYear()} Broadband (UK) Limited
        (‘BroadbandUK’). All rights reserved.
        <br />
        BroadbandUK is the trading name of Broadband (UK) Limited. Company
        registration number 0619‍6255 VAT registration number GB 2‍8‍2 6‍481
        8‍0.
      </p>
    </footer>
  );
}
