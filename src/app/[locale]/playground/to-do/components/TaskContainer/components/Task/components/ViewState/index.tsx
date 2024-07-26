import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";

import { Button } from "@/components/common/Button";

import { useViewState } from "./useViewState";

interface ViewStateProps {
  id: string;
  title: string;
  onEditOpen: () => void;
  textRef: React.MutableRefObject<HTMLParagraphElement | null>;
}

export const ViewState = ({
  id,
  title,
  onEditOpen,
  textRef,
}: ViewStateProps) => {
  const { onRemove } = useViewState({ id });

  return (
    <div className="flex items-center justify-between gap-2">
      <p
        ref={textRef}
        className="break-all px-2 py-1"
      >
        {title}
      </p>

      <div className="flex gap-2">
        <Button
          onClick={onEditOpen}
          variant="secondary"
        >
          <PencilSquareIcon className="size-5 text-blue-500" />
        </Button>

        <Button
          onClick={onRemove}
          variant="secondary"
        >
          <TrashIcon className="size-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
};
