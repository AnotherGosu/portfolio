import { cn } from "@/utils/cn";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring flex items-center justify-center gap-1 rounded-md bg-slate-100 p-1 hover:bg-slate-200",
        className,
      )}
    >
      {children}
    </button>
  );
};
