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
    <div className="bg-light-gray-bg px-[72px] py-[120px] space-y-20">
      <h3 className="text-5xl uppercase text-center tracking-wide text-corporate-black font-bold">
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
  );
}
