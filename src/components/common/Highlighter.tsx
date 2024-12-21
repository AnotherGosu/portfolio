import { cn } from "@/utils/cn";

interface HighlighterProps extends React.PropsWithChildren {
  className?: string;
}

export const Highlighter = ({ className, children }: HighlighterProps) => {
  return (
    <div className={cn("group/highlighter relative", className)}>
      <div
        className={cn(
          "animated absolute -inset-0.5 max-h-full rounded-md bg-neutral-50 opacity-0 blur-md",
          "md:group-hover/highlighter:opacity-70",
        )}
      />

      {children}
    </div>
  );
};
