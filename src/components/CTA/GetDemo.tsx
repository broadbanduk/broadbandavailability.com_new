"use client";

import { useDialogStore } from "@/store/useDialogStore";

export default function GetDemo() {
  const { openDialog } = useDialogStore();
  return (
    <button
      onClick={() => openDialog("contact")}
      className="py-2.5 px-12 cursor-pointer bg-corporate-blue text-white transition-all duration-300 ease-in-out rounded-full hover:opacity-80"
    >
      Get Demo
    </button>
  );
}
