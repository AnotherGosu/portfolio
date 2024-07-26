import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export const Card = ({ title, description, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="focus-ring w-full rounded-md border border-slate-200 p-4 hover:bg-indigo-100"
    >
      <h4 className="text-lg font-medium">{title}</h4>

      <p className="text-sm text-slate-500">{description}</p>
    </Link>
  );
};
