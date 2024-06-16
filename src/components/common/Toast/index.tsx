"use client";

import { Transition } from "@headlessui/react";
import { Fragment } from "react";

import { cn } from "@/utils/cn";

import { useToast } from "./useToast";

export const Toast = () => {
  const { status, message, isToast } = useToast();

  return (
    <Transition
      appear
      show={isToast}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as={Fragment}
    >
      <div
        className={cn(
          "absolute bottom-4 left-1/2 z-50 w-full max-w-xs -translate-x-1/2 transform rounded-lg p-2 text-center shadow-md",
          {
            "hidden": !status,
            "bg-green-300": status === "success",
            "bg-red-300": status === "error",
          },
        )}
      >
        {message}
      </div>
    </Transition>
  );
};
