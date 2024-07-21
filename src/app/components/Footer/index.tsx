import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const Footer = () => {
  return (
    <footer className="bg-indigo-500 p-4 text-white">
      <div className="mx-auto flex w-full max-w-5xl justify-between gap-4">
        <h3>
          <div className="mb-2 text-lg font-semibold">Maksim Dubinin</div>
          <div>Front-End Web Developer</div>
        </h3>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Social</h3>

          <ul className="text-sm leading-loose">
            <li>
              <a
                href="https://github.com/AnotherGosu"
                className="flex items-center gap-2 hover:underline"
              >
                <GitHubIcon className="size-5 fill-white" />

                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/maksim-dubinin-251a7b205"
                className="flex items-center gap-2 hover:underline"
              >
                <LinkedInIcon className="size-5 fill-white" />

                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Contact</h3>

          <ul className="text-sm">
            <li>
              <a
                href="mailto:anothergosu@gmail.com"
                className="flex items-center gap-2 hover:underline"
              >
                <EnvelopeIcon className="size-5" />
                <span>anothergosu@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
