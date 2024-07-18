import { cn } from "@/utils/cn";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  title,
  icon,
  subtitle,
  children,
  className,
}: CardProps) => {
  return (
    <article className={cn("rounded-md p-6", className)}>
      <div className="flex justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>

        {icon}
      </div>

      {subtitle && <p className="text-sm">{subtitle}</p>}

      <div className="my-4 h-[1px] bg-indigo-500" />

      {children}
    </article>
  );
};
