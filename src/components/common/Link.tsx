import { cn } from "@/utils/cn";

import { Highlighter } from "./Highlighter";

export const Link = ({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Highlighter>
      <a
        className={cn(
          "animated relative flex items-center justify-center gap-1 rounded-md bg-neutral-900 text-lg font-medium shadow-lg shadow-neutral-900",
          "hover:bg-neutral-50 hover:text-neutral-900 active:bg-neutral-300",
          className,
        )}
        {...props}
      />
    </Highlighter>
  );
};
