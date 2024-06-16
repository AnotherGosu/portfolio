import { GitHubIcon } from "./components/GitHubIcon";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-1">
      <GitHubIcon />

      <a
        href="https://github.com/AnotherGosu"
        target="_blank"
        className="focus-ring text-sm hover:underline"
      >
        AnotherGosu
      </a>
    </footer>
  );
};
