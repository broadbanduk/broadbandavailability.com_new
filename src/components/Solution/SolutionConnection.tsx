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
    switch (activeTab) {
      case "copper":
        return (
          <Image
            src={copperFrame}
            height={305}
            className="max-w-xl"
            alt="Copper connection diagram"
          />
        );
      case "part-fibre":
        return (
          <Image
            src={partFibreFrame}
            height={305}
            className="max-w-xl"
            alt="Part-fibre connection diagram"
          />
        );
      case "full-fibre":
        return (
          <Image
            src={fullFibreFrame}
            height={305}
            className="max-w-xl"
            alt="Full-fibre connection diagram"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container bg-white flex items-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-10">
      <div className="max-w-md space-y-3">
        <p className="mb-6 text-4xl uppercase text-corporate-black font-bold">
          3. Connection technology
        </p>
        <p className="text-xl text-corporate-black">
          ADSL, FTTC, FTTP — these acronyms confuse most clients. We remove the
          guesswork.
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

      <div>
        <div className="flex mb-4 bg-light-gray-bg rounded-[28px] w-fit mx-auto items-center justify-center">
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${
              activeTab === "copper"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("copper")}
          >
            Copper
          </button>
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${
              activeTab === "part-fibre"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("part-fibre")}
          >
            Part-Fibre
          </button>
          <button
            className={`rounded-[28px] px-4 cursor-pointer py-2 text-corporate-black transition-all duration-300 ${
              activeTab === "full-fibre"
                ? "bg-corporate-blue text-white"
                : "bg-transparent text-corporate-black"
            }`}
            onClick={() => setActiveTab("full-fibre")}
          >
            Full-Fibre
          </button>
        </div>

        <div className="flex items-center justify-center">{renderImage()}</div>
      </div>
    </div>
  );
}
