import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex h-[calc(100vh-52px-124px)] flex-col items-center justify-center gap-3 text-center">
      <h2 className="text-2xl font-semibold">404</h2>

      <p>This page does not exist or still under development</p>

      <Link
        href="/"
        className="focus-ring rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400"
      >
        Home
      </Link>
    </main>
  );
}
