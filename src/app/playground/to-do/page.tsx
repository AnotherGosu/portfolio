import { Metadata } from "next";

import { TaskContainer } from "./components/TaskContainer";

export const metadata: Metadata = {
  title: "Playground • To Do",
  description: "To Do app built with Zustand",
};

export default function Page() {
  return (
    <main className="h-full">
      <TaskContainer />
    </main>
  );
}
