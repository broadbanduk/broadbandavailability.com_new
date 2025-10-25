"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useDialogStore } from "@/store/useDialogStore";
import { X } from "lucide-react";
import type { DialogStoreActionType } from "@/types";
import { PropsWithChildren, useRef } from "react";

export type DialogBaseProps = {
  dialogName: DialogStoreActionType;
  size?: number;
};

export default function DialogBase({
  children,
  dialogName,
  size = 576,
}: PropsWithChildren<DialogBaseProps>) {
  const { closeDialog } = useDialogStore();
  const dialogRef = useRef<HTMLDivElement>(null);

  useClickOutside(dialogRef, () => closeDialog(dialogName));

  return (
    <div className="fixed inset-0 z-[1000] w-screen h-screen flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div
        ref={dialogRef}
        style={{ maxWidth: `${size}px` }}
        className="w-full bg-white rounded-xl flex flex-col overflow-hidden"
      >
        <div className="px-9 py-4 flex-shrink-0">
          <button
            onClick={() => closeDialog(dialogName)}
            className={`cursor-pointer flex items-center justify-center mr-0 ml-auto border-none bg-transparent`}
          >
            <X size={20} />
          </button>
        </div>
        <div
          className="px-9 pb-4 overflow-y-auto flex-1 space-y-6 dialog-scrollable"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#CBD5E0 #F7FAFC",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
