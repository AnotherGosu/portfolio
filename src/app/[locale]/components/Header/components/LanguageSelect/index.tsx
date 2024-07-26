import { LanguageLink } from "./components/LanguageLink";

export const LanguageSelect = () => {
  return (
    <div className="flex items-center gap-2">
      <LanguageLink
        title="ENG"
        locale="en"
      />

      <span>|</span>

      <LanguageLink
        title="KOR"
        locale="ko"
      />
    </div>
  );
};
