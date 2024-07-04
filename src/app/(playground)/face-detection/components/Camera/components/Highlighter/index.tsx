import { Detection } from "@mediapipe/tasks-vision";
import { MutableRefObject } from "react";

interface HighlighterProps {
  cameraRef: MutableRefObject<HTMLVideoElement | null>;
  detections: Detection[];
}

export const Highlighter = ({ cameraRef, detections }: HighlighterProps) => {
  return (
    <>
      {detections.map((detection, idx) => {
        if (!cameraRef.current || !detection.boundingBox) return null;

        const { offsetWidth } = cameraRef.current;
        const { boundingBox } = detection;

        const width = `${boundingBox.width - 10}px`;
        const height = `${boundingBox.height}px`;

        const left = `${offsetWidth - boundingBox.width - boundingBox.originX}px`;
        const top = `${boundingBox.originY}px`;

        return (
          <div
            key={idx}
            className="absolute border-2 border-green-500 bg-green-100 opacity-25"
            style={{ width, height, left, top }}
          />
        );
      })}
    </>
  );
};
