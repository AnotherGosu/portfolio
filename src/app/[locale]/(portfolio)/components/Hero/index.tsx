import Image from "next/image";

import programmingImg from "@/images/programming.svg";

import { Dict } from "@/utils/localization";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

import { ContactLink } from "./components/ContactLink";

interface HeroProps {
  dict: Dict;
}

export const Hero = ({ dict }: HeroProps) => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>
          <div className="text-4xl font-semibold">Maksim Dubinin</div>

          <div className="text-xl font-medium">
            {dict.portfolio.hero.sub_heading}
          </div>
        </h1>

        <div className="flex gap-4">
          <ContactLink href="https://github.com/AnotherGosu">
            <GitHubIcon />
            GitHub
          </ContactLink>

          <ContactLink href="https://www.linkedin.com/in/maksim-dubinin-251a7b205">
            <LinkedInIcon />
            LinkedIn
          </ContactLink>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <p className="h-[300px] leading-loose">
          {dict.portfolio.hero.description}
        </p>

        <Image
          src={programmingImg}
          alt="Programming"
          priority
          className="h-[200px] lg:h-[300px]"
        />
      </div>
    </section>
  );
};
