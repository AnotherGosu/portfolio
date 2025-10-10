import Link from "next/link";

import { cn } from "@/utils/cn";

import { Heading } from "@/components/common/Heading";

export default function NotFound() {
  return (
    <main
      className={cn(
        "flex flex-col items-center justify-center",
        "mx-auto h-svh max-w-6xl px-4 text-center",
      )}
    >
      <Heading>404</Heading>

      <p className="mb-8">
        This page does not exist or still under development
      </p>

      <Link
        href="/"
        className={cn(
          "animated flex items-center justify-center gap-1 rounded-md p-1.5 font-semibold",
          "hocus:bg-neutral-50 hocus:text-neutral-950",
        )}
      >
        Home
      </Link>
    </main>
  );
}
