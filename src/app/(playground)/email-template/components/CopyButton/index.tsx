"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { useCopyButton } from "./useCopyButton";

interface CopyButtonProps {
  html: string;
}

export const CopyButton = ({ html }: CopyButtonProps) => {
  const { onCopy } = useCopyButton({ html });

  return (
    <button
      type="button"
      onClick={onCopy}
      className="focus-ring flex items-center justify-center gap-1 rounded-md border border-black bg-black px-2 py-1 text-sm text-white hover:bg-white hover:text-black"
    >
      <DocumentDuplicateIcon className="size-4" />
      Copy HTML
    </button>
  );
};
