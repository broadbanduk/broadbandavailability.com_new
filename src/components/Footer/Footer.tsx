import { footerLogo } from "@/static/images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-corporate-black p-[120px]">
      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <Image src={footerLogo} alt="footerLogo" width={353} height={20} />
          <p className="text-base text-white">© 2010 — 2020</p>
          <div className="text-base text-white">
            <Link className="text-base text-white" href={"#"}>
              Privacy
            </Link>{" "}
            —{" "}
            <Link className="text-base text-white" href={"#"}>
              Terms
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16">
          <div className="space-y-5">
            <p className="text-base text-white font-bold">Products</p>
            <div className="flex flex-col items-start gap-2.5">
              <Link className="text-base text-white" href="#">
                Speedtest
              </Link>
              <Link className="text-base text-white" href="#">
                Deals
              </Link>
              <Link className="text-base text-white" href="#">
                Providers
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-base text-white font-bold">Company</p>
            <div className="flex flex-col items-start gap-2.5">
              <Link className="text-base text-white" href="#">
                About
              </Link>
              <Link className="text-base text-white" href="#">
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-base text-white font-bold">Policy</p>
            <div className="flex flex-col items-start gap-2.5">
              <Link className="text-base text-white" href="#">
                Terms and conditions
              </Link>
              <Link className="text-base text-white" href="#">
                Privacy
              </Link>
              <Link className="text-base text-white" href="#">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
