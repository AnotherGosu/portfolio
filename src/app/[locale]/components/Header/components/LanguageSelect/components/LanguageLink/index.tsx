"use client";

import Link from "next/link";

import { cn } from "@/utils/cn";

import { useLanguageLink } from "./useLanguageLink";

interface LanguageLinkProps {
  title: string;
  locale: string;
}

export const LanguageLink = ({ title, locale }: LanguageLinkProps) => {
  const { currentLocale, path } = useLanguageLink();

  return (
    <Link
      href={`/${locale}/${path}`}
      className={cn("focus-ring font-light", {
        "font-medium": locale === currentLocale,
        "hover:underline": locale !== currentLocale,
      })}
      scroll={false}
    >
      {title}
    </Link>
  );
};
