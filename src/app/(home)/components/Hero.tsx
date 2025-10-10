import { DownloadIcon } from "@/components/icons/Download";
import { GitHubIcon } from "@/components/icons/GitHub";
import { LinkedInIcon } from "@/components/icons/LinkedIn";

import { Link } from "@/components/common/Link";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-4 lg:items-start">
      <h1 className="w-max border-b border-neutral-50 pb-4 text-center lg:text-left">
        <div className="mb-4 text-4xl font-medium sm:text-7xl">
          Maksim Dubinin
        </div>

        <div className="text-xl font-light sm:text-2xl">Web Developer</div>
      </h1>

      <div className="flex items-center gap-3">
        <Link
          aria-label="Link to GitHub page"
          href="https://github.com/AnotherGosu"
          target="_blank"
        >
          <GitHubIcon />
        </Link>

        <Link
          aria-label="Link to LinkedIn page"
          href="https://www.linkedin.com/in/maksim-dubinin-251a7b205"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>

        <Link
          href="/cv.pdf"
          download
        >
          Get CV
          <DownloadIcon />
        </Link>
      </div>
    </section>
  );
};
