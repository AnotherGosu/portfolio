"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";

import { useDialog } from "@/hooks";

const InfoDialog = dynamic(() => import("./components/InfoDialog"));

export const InfoButton = () => {
  const { isOpen, onOpen, onClose } = useDialog();

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="focus-ring absolute right-0 top-0 rounded-full hover:text-blue-500"
      >
        <InformationCircleIcon className="size-7" />
      </button>

      <InfoDialog
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
