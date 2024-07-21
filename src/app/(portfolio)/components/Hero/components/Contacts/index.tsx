import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const Contacts = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/AnotherGosu"
        className="focus-ring group flex items-center gap-1 rounded-md px-2 py-1 font-medium hover:bg-indigo-500 hover:fill-white hover:text-white"
      >
        <GitHubIcon />

        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/maksim-dubinin-251a7b205"
        className="focus-ring group flex items-center gap-1 rounded-md px-2 py-1 font-medium hover:bg-indigo-500 hover:fill-white hover:text-white"
      >
        <LinkedInIcon />

        <span>LinkedIn</span>
      </a>
    </div>
  );
};
