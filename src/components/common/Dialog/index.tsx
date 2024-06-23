"use client";

import {
  Dialog as HeadlessDialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

import { cn } from "@/utils/cn";

interface DialogProps {
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

export const Dialog = ({
  children,
  title,
  isOpen,
  onClose,
  className,
}: DialogProps) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      appear
    >
      <HeadlessDialog
        onClose={onClose || (() => {})}
        className="relative z-50"
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative w-full max-w-max rounded-lg bg-white p-6 text-black">
              {title && (
                <DialogTitle className="mb-6 text-center text-lg font-semibold">
                  {title}
                </DialogTitle>
              )}

              {onClose && (
                <button
                  onClick={onClose}
                  className="absolute right-2 top-2 rounded-lg text-black transition hover:bg-slate-100"
                >
                  <XMarkIcon className="size-6" />
                </button>
              )}

              <div
                className={cn(
                  "max-h-[80vh] overflow-y-auto p-2 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
                  className,
                )}
              >
                {children}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};
