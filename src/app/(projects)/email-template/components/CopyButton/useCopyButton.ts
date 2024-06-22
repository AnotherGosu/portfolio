import { useToast } from "@/hooks/useToast";

interface UseCopyButtonProps {
  html: string;
}

export const useCopyButton = ({ html }: UseCopyButtonProps) => {
  const { onSuccess } = useToast();

  const onCopy = () => {
    navigator.clipboard.writeText(html);

    onSuccess("Successfully copied");
  };

  return { onCopy };
};
