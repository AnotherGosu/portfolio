"use client";

import { PlusCircleIcon } from "@heroicons/react/16/solid";

import { Button } from "@/components/common/Button";

import { Task } from "./components/Task";

import { useTaskContainer } from "./useTaskContainer";

export const TaskContainer = () => {
  const { parent, tasks, addTask } = useTaskContainer();

  return (
    <div className="mx-auto grid h-full max-w-sm grid-rows-[1fr_max-content] gap-2 rounded-md border-2 border-slate-300 p-2">
      <div
        ref={parent}
        className="scrollbar flex max-h-full flex-col gap-2 overflow-y-auto overflow-x-hidden"
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
          />
        ))}
      </div>

      <Button
        onClick={addTask}
        className="p-2"
      >
        <PlusCircleIcon className="size-5" />
        Task
      </Button>
    </div>
  );
};
