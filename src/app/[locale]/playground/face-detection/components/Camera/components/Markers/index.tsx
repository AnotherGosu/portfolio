import { Detection } from "@mediapipe/tasks-vision";
import { Fragment, MutableRefObject } from "react";

import { cn } from "@/utils/cn";

interface MarkersProps {
  cameraRef: MutableRefObject<HTMLVideoElement | null>;
  detections: Detection[];
}

export const Markers = ({ cameraRef, detections }: MarkersProps) => {
  return (
    <>
      {detections.map((detection, idx) => (
        <Fragment key={idx}>
          {detection.keypoints.map((keypoint, idx) => {
            if (!cameraRef.current) return null;

            const { offsetHeight, offsetWidth } = cameraRef.current;

            const top = `${keypoint.y * offsetHeight - 3}px`;
            const left = `${offsetWidth - keypoint.x * offsetWidth - 3}px`;

            return (
              <div
                key={top + left}
                className={cn("absolute size-[5px] rounded-full bg-red-500", {
                  "bg-blue-500": idx === 2,
                  "bg-yellow-500": idx === 3,
                  "bg-green-500": idx === 4 || idx === 5,
                })}
                style={{ top, left }}
              />
            );
          })}
        </Fragment>
      ))}
    </>
  );
};
