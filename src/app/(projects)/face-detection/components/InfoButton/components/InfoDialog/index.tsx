import { Dialog } from "@/components/common/Dialog";

interface InfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InfoDialog({ isOpen, onClose }: InfoDialogProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Face Detection"
    >
      <p>Face detection solution built with Google&#39;s Media Pipe.</p>

      <p>
        Check out official examples{" "}
        <a
          href="https://codepen.io/mediapipe-preview/pen/OJByWQr"
          target="_blank"
          className="text-blue-500"
        >
          here
        </a>{" "}
        and{" "}
        <a
          href="https://codepen.io/mediapipe/pen/dyOzvZM"
          target="_blank"
          className="text-blue-500"
        >
          here
        </a>
        .
      </p>
    </Dialog>
  );
}
