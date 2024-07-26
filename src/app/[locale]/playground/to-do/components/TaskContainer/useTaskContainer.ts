import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useStore } from "@/hooks/useStore";

export const useTaskContainer = () => {
  const [parent] = useAutoAnimate();

  const { tasks, addTask } = useStore((state) => state);

  return { parent, tasks, addTask };
};
