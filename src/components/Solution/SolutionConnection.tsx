"use client";

import {
  blueChevronRight,
  copperFrame,
  partFibreFrame,
  fullFibreFrame,
} from "@/static/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SolutionConnection() {
  const [activeTab, setActiveTab] = useState<
    "copper" | "part-fibre" | "full-fibre"
  >("copper");

  const renderImage = () => {
    const imageSrc =
      activeTab === "copper"
        ? copperFrame
        : activeTab === "part-fibre"
          ? partFibreFrame
          : fullFibreFrame;

    return (
      <div className="relative w-full max-w-[600px] mx-auto h-52 sm:h-64 md:h-80 lg:h-[350px]">
        <Image
          src={imageSrc}
          alt={`${activeTab} connection diagram`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority
        />
      </div>
    );
  };

  return (
    <div className="container appearBlock bg-white flex flex-col lg:flex-row items-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-5 lg:px-10">
      {/* Left content */}
      <div className="max-w-md space-y-3 text-center lg:text-left">
        <p className="mb-6 text-3xl md:text-4xl uppercase text-corporate-black font-bold">
          3. Connection technology
        </p>
        <p className="text-lg md:text-xl text-corporate-black">
          ADSL, FTTC, FTTP — these acronyms confuse most clients. We remove the
          guesswork.
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

      {/* Right content */}
      <div className="w-full lg:w-1/2">
        {/* Tabs */}
        <div className="flex mb-4 bg-light-gray-bg rounded-[28px] w-fit mx-auto items-center justify-center">
          <button
            className={`rounded-[28px] px-4 py-2 cursor-pointer text-corporate-black transition-all duration-300 ${
              activeTab === "copper"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("copper")}
          >
            Copper
          </button>
          <button
            className={`rounded-[28px] px-4 py-2 cursor-pointer text-corporate-black transition-all duration-300 ${
              activeTab === "part-fibre"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("part-fibre")}
          >
            Part-Fibre
          </button>
          <button
            className={`rounded-[28px] px-4 py-2 cursor-pointer text-corporate-black transition-all duration-300 ${
              activeTab === "full-fibre"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("full-fibre")}
          >
            Full-Fibre
          </button>
        </div>

        {/* Responsive image */}
        <div className="flex items-center justify-center">{renderImage()}</div>
      </div>
    </div>
  );
}
