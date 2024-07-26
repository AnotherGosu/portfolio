import { usePathname } from "next/navigation";

export const useLanguageLink = () => {
  const pathname = usePathname();

  const [_, currentLocale, ...routes] = pathname.split("/");

  const path = routes.join("/");

  return { currentLocale, path };
};
