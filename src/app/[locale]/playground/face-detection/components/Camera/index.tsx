"use client";

import { Markers } from "./components/Markers";

import { useCamera } from "./hooks/useCamera";
import { useDetections } from "./hooks/useDetections";
import { useFaceDetector } from "./hooks/useFaceDetector";

export const Camera = () => {
  const { cameraRef } = useCamera();

  const { faceDetectorRef } = useFaceDetector();

  const { detections } = useDetections({ cameraRef, faceDetectorRef });

  return (
    <div className="relative h-[240px] w-[320px] overflow-hidden rounded-md border-4 border-indigo-500 sm:h-[320px] sm:w-[425px] md:h-[480px] md:w-[640px]">
      <div className="loader absolute h-full w-full" />

      <video
        ref={cameraRef}
        autoPlay
        playsInline
        className="scale-x-[-1]"
      />

      <Markers
        cameraRef={cameraRef}
        detections={detections}
      />
    </div>
  );
};
