import { LanguageSelect } from "./components/LanguageSelect";
import { Social } from "./components/Social";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex justify-between gap-2 bg-white px-4 py-2">
      <Social />
      <LanguageSelect />
    </header>
  );
};
