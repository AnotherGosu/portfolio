"use client";

import { Loader } from "@/components/common/Loader";

import { Markers } from "./components/Markers";

import { useCamera } from "./hooks/useCamera";
import { useDetections } from "./hooks/useDetections";
import { useFaceDetector } from "./hooks/useFaceDetector";

export const Camera = () => {
  const { cameraRef } = useCamera();

  const { faceDetectorRef } = useFaceDetector();

  const { detections } = useDetections({ cameraRef, faceDetectorRef });

  return (
    <div className="relative overflow-hidden">
      {!cameraRef.current && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Loader />
        </div>
      )}

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
