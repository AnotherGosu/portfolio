import { FaceDetector, Detection } from "@mediapipe/tasks-vision";
import { MutableRefObject } from "react";
import { useState, useEffect } from "react";

interface UseDetectionsArgs {
  cameraRef: MutableRefObject<HTMLVideoElement | null>;
  faceDetectorRef: MutableRefObject<FaceDetector | null>;
}

export const useDetections = ({
  cameraRef,
  faceDetectorRef,
}: UseDetectionsArgs) => {
  const [detections, setDetections] = useState<Detection[]>([]);

  useEffect(() => {
    const predictWebcam = () => {
      const startTimeMs = performance.now();

      if (cameraRef.current && faceDetectorRef.current) {
        const faceDetections = faceDetectorRef.current.detectForVideo(
          cameraRef.current,
          startTimeMs,
        ).detections;

        setDetections(faceDetections);
      }

      window.requestAnimationFrame(predictWebcam);
    };

    cameraRef.current?.addEventListener("loadeddata", predictWebcam);
  }, [cameraRef, faceDetectorRef]);

  return { detections };
};
