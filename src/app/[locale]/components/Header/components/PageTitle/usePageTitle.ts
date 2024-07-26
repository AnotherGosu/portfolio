import { usePathname } from "next/navigation";

export const usePageTitle = () => {
  const pathname = usePathname();

  const [_, locale, ...routes] = pathname.split("/");

  const crumbs = routes.map((route) => route.replace("-", " "));

  const title = crumbs.join(" / ") || "Portfolio";

  return { title };
};
