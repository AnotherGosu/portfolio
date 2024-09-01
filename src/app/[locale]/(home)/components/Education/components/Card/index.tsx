interface CardProps {
  title: string;
  description: string;
  content: string;
}

export const Card = ({ title, description, content }: CardProps) => {
  return (
    <article className="rounded-md p-6 shadow-lg shadow-indigo-200">
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
        <h3 className="text-lg font-semibold">{title}</h3>

        <span className="text-sm">{description}</span>
      </div>

      <p className="mt-4">{content}</p>
    </article>
  );
};
