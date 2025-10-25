"use client";

import {
  copperFrame,
  partFibreFrame,
  fullFibreFrame,
  lessThan,
} from "@/static/images";
import Image from "next/image";
import { useState } from "react";
import ReadMore from "./ReadMore";

export default function SolutionConnection() {
  const [activeTab, setActiveTab] = useState<
    "copper" | "part-fibre" | "full-fibre"
  >("copper");

  const tabs: ("copper" | "part-fibre" | "full-fibre")[] = [
    "copper",
    "part-fibre",
    "full-fibre",
  ];

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

  // Helpers for tab navigation
  const goPrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
  };

  const goNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
  };

  return (
    <div className="container appearBlock bg-white flex flex-col lg:flex-row items-center justify-between gap-5 mx-auto rounded-[28px] py-8 px-5 lg:px-10">
      {/* Left content */}
      <div className="max-w-md space-y-3 text-center lg:text-left">
        <p className="mb-6 text-3xl md:text-4xl font-national uppercase text-corporate-black font-bold">
          3. Connection technology
        </p>
        <ReadMore text="ADSL, FTTC, FTTP — these acronyms confuse most clients. We remove the guesswork. The tool shows the real connection type available at the property, making it simple to understand whether the home has basic broadband or full fibre." />
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2">
        {/* Tabs */}
        <div className="flex p-1.5 mb-4 bg-light-gray-bg rounded-[28px] w-fit mx-auto items-center justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`rounded-[28px] px-4 py-2 cursor-pointer capitalize text-corporate-black transition-all duration-300 ${
                activeTab === tab
                  ? "bg-corporate-blue text-white"
                  : "bg-transparent text-corporate-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image + Arrows */}
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow (only visible if not first tab) */}
          {activeTab !== "copper" && (
            <button onClick={goPrev} className="cursor-pointer">
              <Image
                src={lessThan}
                alt="previous"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          )}

          {renderImage()}

          {/* Right Arrow (only visible if not last tab) */}
          {activeTab !== "full-fibre" && (
            <button onClick={goNext} className="cursor-pointer">
              <Image src={lessThan} alt="next" width={24} height={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
