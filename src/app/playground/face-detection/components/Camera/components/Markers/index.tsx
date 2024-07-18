import { Detection } from "@mediapipe/tasks-vision";
import { Fragment, MutableRefObject } from "react";

interface MarkersProps {
  cameraRef: MutableRefObject<HTMLVideoElement | null>;
  detections: Detection[];
}

export const Markers = ({ cameraRef, detections }: MarkersProps) => {
  return (
    <>
      {detections.map((detection, idx) => (
        <Fragment key={idx}>
          {detection.keypoints.map((keypoint) => {
            if (!cameraRef.current) return null;

            const { offsetHeight, offsetWidth } = cameraRef.current;

            const top = `${keypoint.y * offsetHeight - 3}px`;
            const left = `${offsetWidth - keypoint.x * offsetWidth - 3}px`;

            return (
              <div
                key={top + left}
                className="absolute size-1 rounded-full bg-red-500"
                style={{ top, left }}
              />
            );
          })}
        </Fragment>
      ))}
    </>
  );
};
