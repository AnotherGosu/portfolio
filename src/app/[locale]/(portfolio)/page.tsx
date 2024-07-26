import { getDictionary, Locale } from "@/utils/localization";

import { Divider } from "./components/Divider";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Playground } from "./components/Playground";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

interface PageProps {
  params: { locale: Locale };
}

export default async function Page({ params: { locale } }: PageProps) {
  const dict = await getDictionary(locale);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16">
      <Hero dict={dict} />

      <Divider />

      <Projects dict={dict} />

      <Playground
        locale={locale}
        dict={dict}
      />

      <Divider />

      <Skills dict={dict} />

      <Experience dict={dict} />
    </main>
  );
}
