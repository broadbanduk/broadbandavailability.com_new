"use client";

import { blueChevronRight } from "@/static/images";
import Image from "next/image";
import { useState } from "react";

export default function ReadMore({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p
        className={`text-xl text-corporate-black transition-all duration-300 ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}
      >
        {text}
      </p>
      <button
        onClick={toggleReadMore}
        className="flex items-center cursor-pointer justify-start gap-2 text-xl text-corporate-blue"
      >
        Read {isExpanded ? "less" : "more"}{" "}
        <Image
          width={24}
          height={24}
          src={blueChevronRight}
          className={`transition-transform duration-300 ${isExpanded ? "-rotate-180" : ""}`}
          alt="blue chevron"
        />
      </button>
    </>
  );
}
