import { footerLogo } from "@/static/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-corporate-black py-4 px-3 sm:px-12 xl:px-[120px] lg:py-8">
      <div className="flex flex-col lg:flex-row gap-5 items-start justify-between">
        <div>
          <Image src={footerLogo} alt="footerLogo" width={353} height={20} />
          <p className="text-white text-xl pl-12">Connectivity Matters.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 lg:gap-16">
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
                href="https://www.broadbandspeedtest.org.uk/broadband"
              >
                Broadband Deals
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
              <Link
                className="text-base text-white"
                href="https://broadbanduk.com/sitemap"
              >
                Sitemap
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
