import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <h1 className="text-2xl font-bold">
        <Link
          href="/"
          className="focus-ring"
        >
          Playground
        </Link>
      </h1>
    </header>
  );
};
