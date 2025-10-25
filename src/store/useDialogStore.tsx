import type { DialogStoreActionType } from "@/types";
import { create } from "zustand";

export type DialogStoreType = {
  openDialogByType: Record<DialogStoreActionType, boolean>;
  isOpen: boolean;
  openDialog: (type: DialogStoreActionType) => void;
  closeDialog: (type: DialogStoreActionType) => void;
  toggleDialog: (type: DialogStoreActionType) => void;
};

export const useDialogStore = create<DialogStoreType>((set) => ({
  isOpen: false,
  queryKey: [],
  openDialogByType: {
    contact: false,
  },
  openDialog: (type) =>
    set((s) => {
      const htmlDoc = document.documentElement;
      htmlDoc.classList.add("_lock");
      return {
        openDialogByType: { ...s.openDialogByType, [type]: true },
      };
    }),
  closeDialog: (type) =>
    set((s) => {
      const htmlDoc = document.documentElement;
      htmlDoc.classList.remove("_lock");
      return {
        openDialogByType: { ...s.openDialogByType, [type]: false },
      };
    }),
  toggleDialog: (type) =>
    set((s) => {
      const htmlDoc = document.documentElement;
      htmlDoc.classList.toggle("_lock");
      return {
        openDialogByType: {
          ...s.openDialogByType,
          [type]: !s.openDialogByType[type],
        },
      };
    }),
}));
