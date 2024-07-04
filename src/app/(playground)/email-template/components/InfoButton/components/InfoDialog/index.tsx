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
      title="Email Template"
    >
      <p>
        Email template built with{" "}
        <a
          href="https://react.email/"
          target="_blank"
          className="text-blue-500"
        >
          React Email
        </a>
        .
      </p>
    </Dialog>
  );
}
