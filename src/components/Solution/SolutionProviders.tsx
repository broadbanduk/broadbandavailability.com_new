"use client";

import {
  blueChevronRight,
  img_providers_list,
  providers,
} from "@/static/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SolutionProviders() {
  const [activeTab, setActiveTab] = useState<"providers" | "speeds">(
    "providers",
  );
  return (
    <div className="container bg-white flex items-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-10">
      {/*<Image src={speeds} height={258} alt="internet speed" />*/}
      <div>
        <div className="flex mb-4 bg-light-gray-bg rounded-[28px] w-fit mx-auto items-center justify-center">
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${activeTab === "providers" ? "bg-corporate-blue text-white" : "bg-transparent text-corporate-black"}`}
            onClick={() => setActiveTab("providers")}
          >
            Providers
          </button>
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${activeTab === "speeds" ? "bg-corporate-blue text-white" : "bg-transparent text-corporate-black"}`}
            onClick={() => setActiveTab("speeds")}
          >
            Speeds
          </button>
        </div>
        <p className="text-base mb-4 text-corporate-black text-center">
          {activeTab === "providers"
            ? "This property has access to followings providers:"
            : "This property has access to followings speeds:"}
        </p>
        {activeTab === "providers" ? (
          <div className="flex items-center justify-center">
            <Image src={providers} height={205} alt="internet speed" />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Image src={img_providers_list} height={406} alt="internet speed" />
          </div>
        )}
      </div>
      <div className="max-w-md space-y-3">
        <p className="mb-6 text-4xl uppercase text-corporate-black font-bold">
          2. Available providers
        </p>
        <p className="text-xl text-corporate-black">
          Clients often waste time searching multiple websites to see which ISPs
          are available. Now they don’t have to.
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
    </div>
  );
}
