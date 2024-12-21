import Link from "next/link";

import { cn } from "@/utils/cn";

import { Heading } from "@/components/common/Heading";
import { Highlighter } from "@/components/common/Highlighter";

export default function NotFound() {
  return (
    <main className="mx-auto flex h-svh max-w-5xl flex-col items-center justify-center px-4 text-center">
      <Heading>404</Heading>

      <p className="mb-8">
        This page does not exist or still under development
      </p>

      <Highlighter>
        <Link
          href="/"
          className={cn(
            "animated relative flex h-10 items-center justify-center gap-1 rounded-md bg-neutral-900 px-4 text-lg font-medium shadow-lg shadow-neutral-900",
            "hover:bg-neutral-50 hover:text-neutral-900",
          )}
        >
          Home
        </Link>
      </Highlighter>
    </main>
  );
}
