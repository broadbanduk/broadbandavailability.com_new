"use client";

import { chevronRight, plus } from "@/static/images";
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

  useEffect(() => {
    if (isOpen) {
      slideDown(contentRef.current);
    } else {
      slideUp(contentRef.current);
    }
  }, [isOpen]);
  return (
    <div
      className={`faq-answer-item ${isOpen ? "active" : ""}`}
      onClick={() => onClick(index)}
    >
      <div className={`faq-answer-header`}>
        <p className="faq-question">{item.question}</p>
        <button
          type="button"
          className="faq-icon bg-corporate-black/30 rounded-full p-1"
        >
          <Image width={18} height={18} src={plus} alt="chevron" />
        </button>
      </div>
      <div ref={contentRef} className="faq-answer-content">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
