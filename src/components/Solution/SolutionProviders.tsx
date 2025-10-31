"use client";

import { img_providers_list, lessThan, providers } from "@/static/images";
import Image from "next/image";
import { useState } from "react";
import ReadMore from "./ReadMore";

export default function SolutionProviders() {
  const [activeTab, setActiveTab] = useState<"providers" | "speeds">(
    "providers",
  );

  return (
    <div className="container appearBlock bg-white flex flex-col-reverse lg:grid grid-cols-2 items-start lg:justify-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-5 lg:px-10">
      <div className="w-full">
        {/* Tabs */}
        <div className="flex mb-4 p-1.5 bg-light-gray-bg rounded-[28px] w-fit mx-auto items-center justify-center">
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
        <p className="text-xs sm:text-sm md:text-md last:text-base mb-4 text-corporate-black text-center">
          {activeTab === "providers"
            ? "This property has access to the following providers:"
            : "This property has access to the following speeds:"}
        </p>

        {/* Responsive Image Container */}
        <div
          className={`flex items-center justify-between ${activeTab === "speeds" ? "flex-row-reverse" : ""} gap-5`}
        >
          <div className="relative w-full max-w-[500px] mx-auto max-h-52 sm:max-h-64 md:max-h-72 lg:max-h-80">
            <Image
              src={activeTab === "providers" ? providers : img_providers_list}
              alt="internet speed"
              className="w-full"
              priority
            />
          </div>
          <button
            onClick={() =>
              setActiveTab(activeTab === "providers" ? "speeds" : "providers")
            }
            className="flex items-center justify-center h-full cursor-pointer"
          >
            <Image
              className={activeTab === "speeds" ? "rotate-180" : ""}
              src={lessThan}
              alt="chevron right"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Right content */}
      <div className="max-w-md space-y-3 px-5 text-left order-1">
        <p className="mb-6 text-lg sm:text-xl lg:text-2xl xl:text-4xl font-lato text-corporate-black font-bold">
          2. Available providers
        </p>
        <ReadMore text="Clients often waste time searching multiple websites to see which ISPs are available. Now they don’t have to. All providers are shown in one place, directly on your listing and saving time, removing uncertainty and giving you the credibility of being fully transparent." />
      </div>
    </div>
  );
}
