import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { Dict } from "@/utils/localization";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

import { FooterLink } from "./components/FooterLink";

interface FooterProps {
  dict: Dict;
}

export const Footer = ({ dict }: FooterProps) => {
  return (
    <footer className="bg-indigo-500 p-4 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-between gap-x-8">
        <h3 className="grow">
          <div className="mb-2 text-lg font-semibold">Maksim Dubinin</div>
          <div>{dict.portfolio.footer.sub_heading}</div>
        </h3>

        <div className="grow">
          <h3 className="mb-2 text-lg font-semibold">
            {dict.portfolio.footer.social}
          </h3>

          <ul className="text-sm leading-loose">
            <li>
              <FooterLink href="https://github.com/AnotherGosu">
                <GitHubIcon className="size-5 fill-white" />
                GitHub
              </FooterLink>
            </li>

            <li>
              <FooterLink href="https://www.linkedin.com/in/maksim-dubinin-251a7b205">
                <LinkedInIcon className="size-5 fill-white" />
                LinkedIn
              </FooterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">
            {dict.portfolio.footer.contact}
          </h3>

          <ul className="text-sm">
            <li>
              <FooterLink href="mailto:anothergosu@gmail.com">
                <EnvelopeIcon className="size-5" />
                anothergosu@gmail.com
              </FooterLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
