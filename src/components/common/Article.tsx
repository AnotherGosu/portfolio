import { cn } from "@/utils/cn";

export const Article = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <article
      className={cn(
        "relative rounded-md bg-neutral-800 shadow-lg shadow-neutral-900",
        className,
      )}
      {...props}
    />
  );
};
