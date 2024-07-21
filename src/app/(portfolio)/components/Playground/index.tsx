import { Heading } from "@/components/common/Heading";

import { Card } from "./components/Card";

export const Playground = () => {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <Heading className="mb-0">Playground</Heading>

        <p className="text-slate-500">Hand-crafted tech examples</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          href="/playground/to-do"
          title="To Do"
          description="To Do app built with Zustand"
        />

        <Card
          href="/playground/email-template"
          title="Email Template"
          description="Email template built with React Email"
        />

        <Card
          href="/playground/face-detection"
          title="Face Detection"
          description="Face detection built with Media Pipe"
        />
      </div>
    </section>
  );
};
