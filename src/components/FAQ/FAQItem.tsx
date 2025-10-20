"use client";

import { chevronRight } from "@/static/images";
import type { FAQItemType } from "@/types";
import { slideDown, slideUp } from "@/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

export type FAQItemProps = {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
  onClick: (index: number) => void;
};

export default function FAQItem({
  item,
  index,
  isOpen,
  onClick,
}: FAQItemProps) {
  const contentRef = useRef(null);
  const questionRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      slideDown(contentRef.current);
      slideUp(questionRef.current);
    } else {
      slideUp(contentRef.current);
      slideDown(questionRef.current);
    }
  }, [isOpen]);
  return (
    <div
      className={`faq-answer-item ${isOpen ? "active" : ""}`}
      onClick={() => onClick(index)}
    >
      <div ref={questionRef} className={`faq-answer-header`}>
        <p className="faq-question">{item.question}</p>
        <button type="button" className="faq-icon">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            src={chevronRight}
            alt="chevron"
          />
        </button>
      </div>
      <div ref={contentRef} className="faq-answer-content">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
