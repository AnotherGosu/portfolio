import { useEffect, useRef, useState } from "react";

interface UseTaskArgs {
  title: string;
  isInitialEditing: boolean;
}

export const useTask = ({ title, isInitialEditing }: UseTaskArgs) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const [textHeight, setTextHeight] = useState(28);
  const [isEditing, setIsEditing] = useState(isInitialEditing);

  const onEditOpen = () => {
    setIsEditing(true);
  };

  const onEditClose = () => {
    setIsEditing(false);
  };

  // Dalculate height of text to adjust textarea height when entering edit state
  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight);
    }
  }, [title]);

  return {
    textRef,
    textHeight,
    isEditing,
    onEditOpen,
    onEditClose,
  };
};
