import { useEffect } from "react";

import { useStore } from "@/hooks";

export const useToast = () => {
  const { status, message } = useStore((state) => state.toast);
  const setToast = useStore((state) => state.setToast);

  const isToast = status === "success" || status === "error";

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({ status: null, message: "" });
    }, 2000);

    return () => clearTimeout(timer);
  }, [status, setToast]);

  return { status, message, isToast };
};
