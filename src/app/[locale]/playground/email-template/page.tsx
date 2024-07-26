import { render } from "@react-email/render";
import { Metadata } from "next";

import { getDictionary, Locale } from "@/utils/localization";

import { CopyButton } from "./components/CopyButton";
import { Preview } from "./components/Preview";
import { Template } from "./components/Template";

export const metadata: Metadata = {
  title: "Playground • Email Template",
  description: "Email template built with React Email",
};

interface PageProps {
  params: { locale: Locale };
}

export default async function Page({ params: { locale } }: PageProps) {
  const dict = await getDictionary(locale);

  const html = render(
    <Template>
      <Preview />
    </Template>,
    { pretty: true },
  );

  return (
    <main className="flex flex-col items-center justify-center">
      <CopyButton
        html={html}
        dict={dict}
      />

      <Preview />
    </main>
  );
}
