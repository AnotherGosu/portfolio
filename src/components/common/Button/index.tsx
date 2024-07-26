import { cn } from "@/utils/cn";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  onClick,
  children,
  variant = "primary",
  className,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring flex select-none items-center justify-center gap-1 rounded-md p-1",
        {
          "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-600/80":
            variant === "primary",
          "bg-slate-200 hover:bg-slate-300 active:bg-slate-300/80":
            variant === "secondary",
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
