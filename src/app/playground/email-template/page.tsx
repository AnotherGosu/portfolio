import { render } from "@react-email/render";
import { Metadata } from "next";

import { CopyButton } from "./components/CopyButton";
import { Preview } from "./components/Preview";
import { Template } from "./components/Template";

export const metadata: Metadata = {
  title: "Playground • Email Template",
  description: "Email template built with React Email",
};

export default function Page() {
  const html = render(
    <Template>
      <Preview />
    </Template>,
    { pretty: true },
  );

  return (
    <main className="flex flex-col items-center justify-center">
      <CopyButton html={html} />

      <Preview />
    </main>
  );
}
