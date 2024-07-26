import { Metadata } from "next";

import { getDictionary, Locale } from "@/utils/localization";

import { TaskContainer } from "./components/TaskContainer";

export const metadata: Metadata = {
  title: "Playground • To Do",
  description: "To Do app built with Zustand",
};

interface PageProps {
  params: { locale: Locale };
}

export default async function Page({ params: { locale } }: PageProps) {
  const dict = await getDictionary(locale);

  return (
    <main className="h-full">
      <TaskContainer dict={dict} />
    </main>
  );
}
