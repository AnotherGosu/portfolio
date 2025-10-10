import { cn } from "@/utils/cn";

export const Heading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-4 text-center text-3xl font-bold tracking-wide uppercase",
        "sm:mb-8 sm:text-4xl",
        className,
      )}
      {...props}
    />
  );
};
