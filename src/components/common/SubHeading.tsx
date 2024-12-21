import { cn } from "@/utils/cn";

export const SubHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn("text-xl font-semibold", "sm:text-2xl", className)}
      {...props}
    />
  );
};
