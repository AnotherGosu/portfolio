import { GitHubLink } from "./components/GitHubLink";
import { HomeLink } from "./components/HomeLink";
import { PageTitle } from "./components/PageTitle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <HomeLink />
        <PageTitle />
      </div>

      <GitHubLink />
    </header>
  );
};
