import Image from "next/image";

import heroImg from "@/images/hero.svg";

import { Dict } from "@/utils/localization";

interface HeroProps {
  dict: Dict;
}

export const Hero = ({ dict }: HeroProps) => {
  return (
    <section className="flex flex-col gap-8 md:flex-row">
      <div>
        <h1 className="mb-4">
          <div className="text-4xl font-semibold">Maksim Dubinin</div>
          <div className="text-xl font-medium">{dict.hero.sub_heading}</div>
        </h1>

        <p className="leading-loose">{dict.hero.description}</p>
      </div>

      <Image
        src={heroImg}
        alt="Hero"
        priority
        height={225}
      />
    </section>
  );
};
