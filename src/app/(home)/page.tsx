import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pt-20 pb-10 sm:gap-30 sm:pt-40">
      <div className="contents lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10">
        <Hero />
        <Stack />
      </div>

      <Projects />
      <Experience />
    </main>
  );
}
