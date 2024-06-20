import { Metadata } from "next";

import { Camera } from "./components/Camera";

export const metadata: Metadata = {
  title: "Face Detection",
  description: "Face detection built with Media Pipe",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-xl font-semibold">Face Detection</h2>

      <Camera />
    </main>
  );
}
