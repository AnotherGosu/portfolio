import { Metadata } from "next";

import { Camera } from "./components/Camera";
import { InfoButton } from "./components/InfoButton";

export const metadata: Metadata = {
  title: "Playground • Face Detection",
  description: "Face detection built with Media Pipe",
};

export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <InfoButton />

      <Camera />
    </main>
  );
}
