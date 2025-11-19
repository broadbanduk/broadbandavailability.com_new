"use client";

import { useDialogStore } from "@/store/useDialogStore";

export default function GetDemo({
  text = "Get Demo",
  size = "base",
  siteSection,
  buttonAdditionalClassName,
}: {
  text?: string;
  size?: "small" | "base" | "big";
  siteSection?: string;
  buttonAdditionalClassName?: string;
}) {
  const { openDialog } = useDialogStore();

  const buttonClassName = () => {
    switch (size) {
      case "small":
        return "py-2.5 px-6 text-sm";
      case "big":
        return "py-3.5 px-[52px] text-xl";
      default:
        return "py-2.5 px-12 text-base";
    }
  };

  return (
    <button
      onClick={() => openDialog("contact", siteSection)}
      className={`${buttonClassName()} cursor-pointer bg-corporate-blue text-white transition-all duration-300 ease-in-out rounded-full hover:opacity-80 ${buttonAdditionalClassName}`}
    >
      {text}
    </button>
  );
}
