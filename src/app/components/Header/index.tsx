import { HomeLink } from "./components/HomeLink";
import { PageTitle } from "./components/PageTitle";

export const Header = () => {
  return (
    <header className="flex items-center gap-2 p-4">
      <HomeLink />
      <PageTitle />
    </header>
  );
};
