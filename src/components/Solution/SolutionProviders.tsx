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
    <div className="container appearBlock bg-white flex flex-col lg:flex-row items-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-5 lg:px-10">
      <div className="w-full lg:w-1/2">
        {/* Tabs */}
        <div className="flex mb-4 bg-light-gray-bg rounded-[28px] w-fit mx-auto items-center justify-center">
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${
              activeTab === "providers"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("providers")}
          >
            Providers
          </button>
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${
              activeTab === "speeds"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("speeds")}
          >
            Speeds
          </button>
        </div>

        {/* Description text */}
        <p className="text-base mb-4 text-corporate-black text-center">
          {activeTab === "providers"
            ? "This property has access to the following providers:"
            : "This property has access to the following speeds:"}
        </p>

        {/* Responsive Image Container */}
        <div className="relative w-full max-w-[500px] mx-auto h-52 sm:h-64 md:h-72 lg:h-80">
          <Image
            src={activeTab === "providers" ? providers : img_providers_list}
            alt="internet speed"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
            priority
          />
        </div>
      </div>

      {/* Right content */}
      <div className="max-w-md space-y-3 text-center lg:text-left">
        <p className="mb-6 text-3xl md:text-4xl uppercase text-corporate-black font-bold">
          2. Available providers
        </p>
        <p className="text-lg md:text-xl text-corporate-black">
          Clients often waste time searching multiple websites to see which ISPs
          are available. Now they don’t have to.
        </p>
        <Link
          className="flex items-center justify-center lg:justify-start gap-2 text-xl text-corporate-blue"
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
