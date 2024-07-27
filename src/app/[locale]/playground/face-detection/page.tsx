import { Metadata } from "next";

import { Camera } from "./components/Camera";

export const metadata: Metadata = {
  title: "Playground • Face Detection",
  description: "Face detection built with Media Pipe",
};

export default function Page() {
  return (
    <main className="flex h-full items-center justify-center">
      <Camera />
    </main>
  );
}
