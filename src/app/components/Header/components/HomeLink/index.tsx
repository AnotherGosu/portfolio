import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const HomeLink = () => {
  return (
    <Link
      href="/"
      className="focus-ring rounded-md border p-2 hover:bg-indigo-500 hover:text-white active:bg-indigo-500/80"
    >
      <HomeIcon className="size-5" />
    </Link>
  );
};
