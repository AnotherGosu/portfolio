"use client";

import { Highlighter } from "./components/Highlighter";
import { Markers } from "./components/Markers";

import { useCamera } from "./hooks/useCamera";
import { useDetections } from "./hooks/useDetections";
import { useFaceDetector } from "./hooks/useFaceDetector";

export const Camera = () => {
  const { cameraRef } = useCamera();

  const { faceDetectorRef } = useFaceDetector();

  const { detections } = useDetections({ cameraRef, faceDetectorRef });

  return (
    <div className="relative">
      <video
        ref={cameraRef}
        autoPlay
        playsInline
        className="scale-x-[-1]"
      />

      <Highlighter
        cameraRef={cameraRef}
        detections={detections}
      />

      <Markers
        cameraRef={cameraRef}
        detections={detections}
      />
    </div>
  );
};
