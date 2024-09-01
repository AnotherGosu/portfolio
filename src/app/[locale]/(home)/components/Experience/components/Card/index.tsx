interface CardProps {
  title: string;
  description: string;
  items: string[];
}

export const Card = ({ title, description, items }: CardProps) => {
  return (
    <article className="rounded-md border border-b-[3px] border-r-[3px] border-indigo-400 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm">{description}</p>

      <div className="my-4 h-[1px] bg-indigo-500" />

      <ul className="flex list-disc flex-col gap-2 pl-4 leading-loose">
        {items.map((item, idx) => (
          <li
            key={idx}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    </article>
  );
};
