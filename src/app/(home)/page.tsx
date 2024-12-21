import { cn } from "@/utils/cn";

import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

export default function Page() {
  return (
    <main
      className={cn(
        "mx-auto flex max-w-5xl flex-col gap-28 px-4 pb-16",
        "sm:gap-40",
      )}
    >
      <Hero />
      <Stack />
      <Projects />
      <Experience />
    </main>
  );
}
