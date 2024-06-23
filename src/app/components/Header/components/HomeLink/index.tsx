import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const HomeLink = () => {
  return (
    <Link
      href="/"
      className="focus-ring rounded-md border p-2 hover:bg-black hover:text-white"
    >
      <HomeIcon className="size-5" />
    </Link>
  );
};
