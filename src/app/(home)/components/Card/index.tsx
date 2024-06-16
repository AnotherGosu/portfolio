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
      className="focus-ring w-full rounded-md p-4 shadow-lg hover:shadow-xl"
    >
      <h2 className="text-lg font-semibold">{title}</h2>

      <p className="text-slate-500">{description}</p>
    </Link>
  );
};
