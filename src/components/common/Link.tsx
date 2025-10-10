import { cn } from "@/utils/cn";

export const Link = ({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={cn(
        "animated flex items-center justify-center gap-1 rounded-md p-1.5 font-semibold",
        "hocus:bg-neutral-50 hocus:text-neutral-950 hocus:[&>svg]:fill-neutral-950",
        className,
      )}
      {...props}
    />
  );
};
