import { Metadata } from "next";

import { Camera } from "./components/Camera";

export const metadata: Metadata = {
  title: "Playground • Face Detection",
  description: "Face detection built with Media Pipe",
};

export default function Page() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center">
      <Camera />
    </main>
  );
}
