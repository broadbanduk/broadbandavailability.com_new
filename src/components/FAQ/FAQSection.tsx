"use client";

import { FAQItemType } from "@/types";
import FAQItem from "./FAQItem";
import { useState } from "react";

const items: FAQItemType[] = [
  {
    question: "What is the Broadband Availability service?",
    answer:
      "Broadband Availability provides accurate, address-level broadband data for property listings. It shows the real speeds, available ISPs, and connection types (such as full fibre or FTTC) for each individual property, replacing unreliable postcode-level estimates.",
  },
  {
    question: "Who is the service for?",
    answer:
      "The service is designed for anyone in the property sector who needs accurate broadband information at the address level. This includes estate agents, proptech platforms, developers, and other property professionals who want to provide buyers and renters with reliable data on speeds, connection types, and available ISPs.",
  },
  {
    question: "Where is the data sourced from?",
    answer:
      "We source our broadband data directly from Openreach’s engineering database, which covers around 30 million residential properties, and from regular feeds from major ISPs and alternative networks. This combination gives a complete and current view of UK broadband coverage.",
  },
  {
    question:
      "How is this different from other broadband checkers or Ofcom data?",
    answer:
      "Unlike Ofcom’s postcode-based checker, we use live data directly from Openreach, other major networks, and ISPs to deliver precise, property-specific information. Our data updates far more frequently, ensuring buyers and renters see the most accurate picture of connectivity available.",
  },
  {
    question: "How do I add the widget to my website?",
    answer:
      "The widget is free and simple to install with a short code snippet. You can drop it into your existing website or listings platform in minutes. No technical expertise required. It automatically matches your website layout and updates data in real time.",
  },
  {
    question: "Is the widget really free?",
    answer:
      "Yes. The basic widget is completely free to use for estate agents and property professionals. We also offer a paid API for businesses and proptech platforms that want to integrate broadband data directly into their systems or reports.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click the button “Book Demo” for free access and we’ll send you your unique code snippet. You can install the widget immediately and start showing accurate broadband data on your listings within minutes.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-light-gray-bg py-16 px-5 sm:px-6 md:px-12 lg:px-16 xl:px-[72px] xl:py-[120px] space-y-10 lg:space-y-20"
    >
      <div className="grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-[1fr_auto] container mx-auto">
        <h3 className="text-[52px] leading-[1] xl:text-6xl text-center lg:text-left font-national uppercase tracking-wide text-corporate-black font-bold">
          Frequently Asked Questions
        </h3>
        <div className="faq-tabs-answers max-w-3xl mx-auto">
          <div className="faq-answers-container grid grid-cols-1 gap-6">
            {items.map((item, index) => (
              <FAQItem
                isOpen={openIndex === index}
                onClick={handleClick}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
