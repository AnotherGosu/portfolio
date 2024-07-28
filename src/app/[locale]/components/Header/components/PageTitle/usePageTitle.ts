import { usePathname } from "next/navigation";

export const usePageTitle = () => {
  const pathname = usePathname();

  const [_, locale, ...routes] = pathname.split("/");

  const title = routes.pop()?.replace("-", " ") || "Portfolio";

  return { title };
};
