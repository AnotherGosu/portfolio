import { Card } from "./components/Card";

export const Playground = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold uppercase">Playground</h2>

      <div className="grid gap-4 rounded-md border border-slate-200 p-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          href="/to-do"
          title="To Do"
          description="To Do app built with Zustand"
        />

        <Card
          href="/email-template"
          title="Email Template"
          description="Email template built with React Email"
        />

        <Card
          href="/face-detection"
          title="Face Detection"
          description="Face detection built with Media Pipe"
        />
      </div>
    </div>
  );
};
