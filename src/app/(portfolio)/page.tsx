import { Divider } from "./components/Divider";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Playground } from "./components/Playground";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <Hero />

      <Profile />

      <Skills />

      <Experience />

      <Education />

      <Divider />

      <Playground />
    </main>
  );
}
