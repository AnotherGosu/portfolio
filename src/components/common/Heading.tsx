import { cn } from "@/utils/cn";

export const Heading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-8 text-center text-3xl font-bold uppercase tracking-wide",
        "sm:text-4xl",
        className,
      )}
      {...props}
    />
  );
};
