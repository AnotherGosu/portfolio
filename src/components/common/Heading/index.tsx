interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h2 className="mb-8 w-max rounded-2xl bg-indigo-500 px-3 py-0.5 font-semibold uppercase text-white">
      {children}
    </h2>
  );
};
