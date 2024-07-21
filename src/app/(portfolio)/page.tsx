import { Divider } from "./components/Divider";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Playground } from "./components/Playground";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16">
      <Hero />

      <Divider />

      <Skills />

      <Experience />

      <Divider />

      <Projects />

      <Playground />
    </main>
  );
}
