import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const Social = () => {
  return (
    <div className="flex gap-2">
      <a
        href="https://github.com/AnotherGosu"
        target="_blank"
        className="focus-ring rounded-md p-1.5 hover:bg-indigo-200"
      >
        <GitHubIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/maksim-dubinin-251a7b205"
        target="_blank"
        className="focus-ring rounded-md p-1.5 hover:bg-indigo-200"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};
