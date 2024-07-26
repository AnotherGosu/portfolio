import { Task as TaskType } from "@/types/common";

import { EditState } from "./components/EditState";
import { ViewState } from "./components/ViewState";

import { useTask } from "./useTask";

export const Task = ({ id, title, isEditing: isInitialEditing }: TaskType) => {
  const { textRef, textHeight, isEditing, onEditOpen, onEditClose } = useTask({
    title,
    isInitialEditing,
  });

  return (
    <div className="rounded-md border border-slate-100 p-2 text-sm shadow-sm">
      {isEditing ? (
        <EditState
          id={id}
          initialTitle={title}
          onEditClose={onEditClose}
          initialTextAreaHeight={textHeight}
        />
      ) : (
        <ViewState
          id={id}
          title={title}
          onEditOpen={onEditOpen}
          textRef={textRef}
        />
      )}
    </div>
  );
};
