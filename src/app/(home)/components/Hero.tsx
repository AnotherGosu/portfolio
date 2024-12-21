import { cn } from "@/utils/cn";

import { DownloadIcon } from "@/components/icons/Download";
import { GitHubIcon } from "@/components/icons/GitHub";
import { LinkedInIcon } from "@/components/icons/LinkedIn";

import { Link } from "@/components/common/Link";

export const Hero = () => {
  return (
    <section className="flex h-svh items-center justify-center">
      <div>
        <div className="mb-10">
          <Title />
          <div className="text-center text-2xl font-medium">Web Developer</div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            aria-label="Link to GitHub page"
            href="https://github.com/AnotherGosu"
            target="_blank"
            className="group size-10"
          >
            <GitHubIcon />
          </Link>

          <Link
            aria-label="Link to LinkedIn page"
            href="https://www.linkedin.com/in/maksim-dubinin-251a7b205"
            target="_blank"
            className="group size-10"
          >
            <LinkedInIcon />
          </Link>

          <Link
            href="/cv.pdf"
            download
            className="h-10 px-4"
          >
            Get CV
            <DownloadIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Title = () => {
  return (
    <h1
      className={cn(
        "relative mb-4 text-6xl font-black uppercase tracking-wide",
        "sm:text-7xl",
      )}
    >
      <span
        aria-hidden="true"
        className="animated absolute inset-0 animate-pulse text-neutral-50 opacity-70 blur-lg"
      >
        Maksim
      </span>

      <span
        aria-hidden="true"
        className="animated absolute inset-0 animate-pulse text-neutral-950 opacity-80 blur-sm"
      >
        Maksim
      </span>

      <span className="relative text-neutral-50">Maksim</span>
    </h1>
  );
};
