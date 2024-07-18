import { usePathname } from "next/navigation";

import { NAVIGATION } from "@/constants/navigation";

export const usePageTitle = () => {
  const pathname = usePathname();

  const route = NAVIGATION.find(({ href }) => href === pathname);

  const title = route?.title || "Not Found";

  return { title };
};
