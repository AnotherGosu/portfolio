import { useEffect, useRef, useState } from "react";

export const useCamera = () => {
  const cameraRef = useRef<HTMLVideoElement | null>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const activateCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (cameraRef.current) {
        cameraRef.current.srcObject = stream;
      }

      setStream(stream);
    };

    if (!stream) {
      activateCamera();
    }

    return () => {
      const tracks = stream?.getTracks();

      tracks?.forEach((track) => track.stop());
    };
  }, [stream]);

  return { cameraRef };
};
