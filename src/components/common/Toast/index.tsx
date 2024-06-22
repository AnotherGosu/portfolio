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
          "fixed bottom-4 left-1/2 z-50 w-full max-w-max -translate-x-1/2 transform rounded-lg p-2 text-center font-medium shadow-md",
          {
            "hidden": !status,
            "bg-green-200": status === "success",
            "bg-red-200": status === "error",
          },
        )}
      >
        {message}
      </div>
    </Transition>
  );
};
