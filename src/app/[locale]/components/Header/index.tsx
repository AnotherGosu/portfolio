import { HomeLink } from "./components/HomeLink";
import { LanguageSelect } from "./components/LanguageSelect";
import { PageTitle } from "./components/PageTitle";

export const Header = () => {
  return (
    <header className="flex justify-between gap-2 p-4">
      <div className="flex items-center gap-2">
        <HomeLink />
        <PageTitle />
      </div>

      <LanguageSelect />
    </header>
  );
};
