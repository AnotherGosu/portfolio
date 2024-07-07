import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useStore } from "@/hooks/useStore";

interface UseEditStateArgs {
  id: string;
  initialTitle: string;
  initialTextAreaHeight: number;
  onEditClose: () => void;
}

export const useEditState = ({
  id,
  initialTitle,
  initialTextAreaHeight,
  onEditClose,
}: UseEditStateArgs) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleOutsideClickRef = useRef<(event: MouseEvent) => void>();

  const [title, setTitle] = useState(initialTitle);
  const [textAreaHeight, setTextAreaHeight] = useState(initialTextAreaHeight);

  const { editTask, removeTask } = useStore((state) => state);

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onConfirm = useCallback(() => {
    if (title) {
      editTask(id, title);
      onEditClose();
    } else {
      removeTask(id);
    }
  }, [id, title, editTask, onEditClose, removeTask]);

  const onCancel = () => {
    initialTitle ? onEditClose() : removeTask(id);
  };

  // Save changes when user presses Enter key
  const onEnterKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onConfirm();
    }
  };

  // Handle container outside click
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        onConfirm();
      }
    },
    [onConfirm],
  );

  // Update the handler ref when dependencies change
  useEffect(() => {
    handleOutsideClickRef.current = handleOutsideClick;
  }, [handleOutsideClick]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;

      // Automatically focus on textarea
      textArea.focus();

      // Position cursor at the end of inputted text
      const length = textArea.value.length;
      textArea.setSelectionRange(length, length);
    }

    // Register outside click event
    const eventListener = (event: MouseEvent) =>
      handleOutsideClickRef.current && handleOutsideClickRef.current(event);

    document.addEventListener("mousedown", eventListener);

    return () => {
      document.removeEventListener("mousedown", eventListener);
    };
  }, []);

  // Adjust textarea height every time title changes
  useLayoutEffect(() => {
    if (textAreaRef.current) {
      setTextAreaHeight(textAreaRef.current.scrollHeight);
    }
  }, [title]);

  return {
    containerRef,
    textAreaRef,
    title,
    textAreaHeight,
    onTitleChange,
    onConfirm,
    onCancel,
    onEnterKeyDown,
  };
};
