import { render } from "@react-email/render";
import { Metadata } from "next";

import { CopyButton } from "./components/CopyButton";
import { InfoButton } from "./components/InfoButton";
import { Preview } from "./components/Preview";
import { Template } from "./components/Template";

export const metadata: Metadata = {
  title: "Email Template",
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
      <div className="mb-2 flex w-full items-center justify-end gap-2">
        <CopyButton html={html} />

        <InfoButton />
      </div>

      <Preview />
    </main>
  );
}
