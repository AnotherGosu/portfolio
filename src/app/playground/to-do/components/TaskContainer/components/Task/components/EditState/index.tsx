import { CheckIcon, NoSymbolIcon } from "@heroicons/react/16/solid";

import { Button } from "@/components/common/Button";

import { useEditState } from "./useEditState";

interface EditStateProps {
  id: string;
  initialTitle: string;
  initialTextAreaHeight: number;
  onEditClose: () => void;
}

export const EditState = ({
  id,
  initialTitle,
  initialTextAreaHeight,
  onEditClose,
}: EditStateProps) => {
  const {
    containerRef,
    textAreaRef,
    title,
    textAreaHeight,
    onTitleChange,
    onConfirm,
    onCancel,
    onEnterKeyDown,
  } = useEditState({
    id,
    initialTitle,
    initialTextAreaHeight,
    onEditClose,
  });

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-between gap-2"
      onKeyDown={onEnterKeyDown}
    >
      <textarea
        ref={textAreaRef}
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="focus-ring w-full resize-none break-all rounded-sm border-none bg-slate-100 px-2 py-1 [&::-webkit-scrollbar]:hidden"
        style={{ height: `${textAreaHeight}px` }}
      />

      <div className="flex gap-2">
        <Button
          onClick={onConfirm}
          variant="secondary"
        >
          <CheckIcon className="size-5 text-green-500" />
        </Button>

        <Button
          onClick={onCancel}
          variant="secondary"
        >
          <NoSymbolIcon className="size-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
};
