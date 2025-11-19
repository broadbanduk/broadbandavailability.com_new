"use client";

import Image from "next/image";
import {
  estateAgentToday,
  mirror,
  propertyIndustryEye,
  propertySoup,
} from "@/static/images";
import { useState } from "react";
import ReadMore from "../Solution/ReadMore";

const properties = [
  {
    image: estateAgentToday,
    text: "The new service from Nurtur and BroadbandUK integrates into estate agent websites, displaying property specific broadband data alongside standard listing details.",
  },
  {
    image: propertyIndustryEye,
    text: "Fast, reliable broadband can increase a property’s price by £3,500+, while weak connectivity can cut perceived value by a quarter.",
  },
  {
    image: propertySoup,
    text: "Estate agents must provide all material information essential for informed property decisions.",
  },
  {
    image: mirror,
    text: "Broadband is now the fourth essential utility, alongside electricity, gas, and water.",
  },
  {
    image: estateAgentToday,
    text: "The new service from Nurtur and BroadbandUK integrates into estate agent websites, displaying property specific broadband data alongside standard listing details.",
  },
  {
    image: propertyIndustryEye,
    text: "Fast, reliable broadband can increase a property’s price by £3,500+, while weak connectivity can cut perceived value by a quarter.",
  },
  {
    image: propertySoup,
    text: "Estate agents must provide all material information essential for informed property decisions.",
  },
  {
    image: mirror,
    text: "Broadband is now the fourth essential utility, alongside electricity, gas, and water.",
  },
];

export default function PropertiesList() {
  const [isOpen, setIsOpen] = useState(false);

  const INITIAL_COUNT = 4;

  const visibleProperties = isOpen
    ? properties
    : properties.slice(0, INITIAL_COUNT);

  return (
    <div className="space-y-10">
      <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
        {visibleProperties.map((property, index) => (
          <div
            className="rounded-[28px] p-10 bg-light-gray-bg space-y-3"
            key={index}
          >
            <Image
              height={40}
              className="max-h-10"
              src={property.image}
              alt={`Property ${index + 1}`}
            />
            <ReadMore text={property.text} />
          </div>
        ))}
      </div>
      {properties.length > INITIAL_COUNT && (
        <button
          className="rounded-full mx-auto flex items-center justify-center py-3.5 px-14 text-xl text-corporate-dark-grey border border-corporate-dark-grey cursor-pointer duration-300 transition-all hover:border-corporate-blue hover:text-corporate-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
