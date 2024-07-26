"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { Dict } from "@/utils/localization";

import { Button } from "@/components/common/Button";

import { useCopyButton } from "./useCopyButton";

interface CopyButtonProps {
  html: string;
  dict: Dict;
}

export const CopyButton = ({ html, dict }: CopyButtonProps) => {
  const { onCopy } = useCopyButton({ html });

  return (
    <Button
      onClick={onCopy}
      className="mb-4 px-2"
    >
      <DocumentDuplicateIcon className="size-4" />
      {dict.playground.email_template.button_copy_html}
    </Button>
  );
};
