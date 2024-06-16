import { useStore } from "@/hooks/useStore";

export const useToast = () => {
  const setToast = useStore((state) => state.setToast);

  const onSuccess = (message: string) => {
    setToast({ status: "success", message });
  };

  const onError = (message: string) => {
    setToast({ status: "error", message });
  };

  return { onSuccess, onError };
};
