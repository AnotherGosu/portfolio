import { useStore } from "@/hooks/useStore";

interface UseViewStateArgs {
  id: string;
}

export const useViewState = ({ id }: UseViewStateArgs) => {
  const removeTask = useStore((state) => state.removeTask);

  const onRemove = () => {
    removeTask(id);
  };

  return { onRemove };
};
