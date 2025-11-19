"use client";

import Image from "next/image";
import {
  blueChevronRight,
  estateAgentToday,
  mirror,
  propertyIndustryEye,
  propertySoup,
} from "@/static/images";
import { useState } from "react";
import Link from "next/link";

const properties = [
  {
    image: estateAgentToday,
    text: "The new service from Nurtur and BroadbandUK integrates into estate agent websites, displaying property specific broadband data alongside standard listing details.",
    link: "https://www.estateagenttoday.co.uk/breaking-news/2025/10/nurtur-and-broadbanduk-launch-true-internet-speed-service-for-property-listings/",
  },
  {
    image: propertyIndustryEye,
    text: "Fast, reliable broadband can increase a property’s price by £3,500+, while weak connectivity can cut perceived value by a quarter.",
    link: "https://propertyindustryeye.com/nurtur-and-broadbanduk-launch-new-broadband-service-for-estate-agents/",
  },
  {
    image: propertySoup,
    text: "Estate agents must provide all material information essential for informed property decisions.",
    link: "https://propertysoup.co.uk/nurtur-and-broadbanduk-launch-service-for-property-listings/",
  },
  {
    image: mirror,
    text: "Broadband is now the fourth essential utility, alongside electricity, gas, and water.",
    link: "https://www.mirror.co.uk/money/millions-should-check-broadband-speed-35932159",
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
            className="rounded-[28px] p-5 lg:p-10 bg-light-gray-bg space-y-3"
            key={index}
          >
            <Image
              height={40}
              className="max-h-10"
              src={property.image}
              alt={`Property ${index + 1}`}
            />
            <p className="text-xl text-corporate-black">{property.text}</p>
            <Link
              target="_blank"
              href={property.link}
              className="flex items-center cursor-pointer justify-start gap-2 text-xl text-corporate-blue"
            >
              Read more
              <Image
                width={24}
                height={24}
                src={blueChevronRight}
                className={`transition-transform`}
                alt="blue chevron"
              />
            </Link>
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
