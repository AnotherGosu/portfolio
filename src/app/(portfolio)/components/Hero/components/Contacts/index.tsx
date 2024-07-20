import { GitHubIcon } from "./components/GitHubIcon";
import { LinkedInIcon } from "./components/LinkedInIcon";

export const Contacts = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/AnotherGosu"
        className="focus-ring flex items-center gap-1 rounded-md px-2 py-0.5 font-medium hover:bg-indigo-200"
      >
        <GitHubIcon />

        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/maksim-dubinin-251a7b205"
        className="focus-ring flex items-center rounded-md px-2 py-0.5 font-medium hover:bg-indigo-200"
      >
        <LinkedInIcon />

        <span>LinkedIn</span>
      </a>
    </div>
  );
};
