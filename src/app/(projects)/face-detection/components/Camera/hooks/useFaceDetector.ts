import { FilesetResolver, FaceDetector } from "@mediapipe/tasks-vision";
import { useRef, useEffect } from "react";

export const useFaceDetector = () => {
  const faceDetectorRef = useRef<FaceDetector | null>(null);

  useEffect(() => {
    const initializefaceDetector = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm",
      );

      const faceDetector = await FaceDetector.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
          delegate: "GPU",
        },
        runningMode: "VIDEO",
      });

      faceDetectorRef.current = faceDetector;
    };

    initializefaceDetector();
  }, []);

  return { faceDetectorRef };
};
