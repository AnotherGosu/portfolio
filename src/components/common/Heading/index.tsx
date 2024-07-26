import { cn } from "@/utils/cn";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "mb-8 w-max rounded-2xl bg-indigo-500 px-3 py-0.5 font-semibold uppercase text-white",
        className,
      )}
    >
      {children}
    </h2>
  );
};
