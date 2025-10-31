"use client";

import { FAQItemType } from "@/types";
import FAQItem from "./FAQItem";
import { useState } from "react";

const items: FAQItemType[] = [
  {
    question: "How difficult is it to integrate the service?",
    answer:
      "Yes. The service is fully compliant with CMA guidance and the DMCC Act.",
  },
  {
    question: "Does it comply with the new legal requirements?",
    answer:
      "Yes. The service is fully compliant with CMA guidance and the DMCC Act.",
  },
  {
    question: "Which providers are covered?",
    answer:
      "Yes. The service is fully compliant with CMA guidance and the DMCC Act.",
  },
  {
    question: "Which providers are covered?",
    answer:
      "Yes. The service is fully compliant with CMA guidance and the DMCC Act.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Yes. The service is fully compliant with CMA guidance and the DMCC Act.",
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
      className="bg-light-gray-bg px-3 sm:px-6 md:px-12 lg:px-16 xl:px-[72px] py-4 sm:py-8 md:py-12 lg:py-16 xl:py-[120px] space-y-10 lg:space-y-20"
    >
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-national uppercase text-center tracking-wide text-corporate-black font-bold">
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
    </section>
  );
}
