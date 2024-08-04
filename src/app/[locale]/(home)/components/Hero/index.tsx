import Image from "next/image";

import heroImg from "@/images/hero.svg";

import { Dict } from "@/utils/localization";

interface HeroProps {
  dict: Dict;
}

export const Hero = ({ dict }: HeroProps) => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>
          <div className="text-4xl font-semibold">Maksim Dubinin</div>

          <div className="text-xl font-medium">{dict.hero.sub_heading}</div>
        </h1>
      </div>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <p className="leading-loose">{dict.hero.description}</p>

        <Image
          src={heroImg}
          alt="Hero"
          priority
          className="h-[200px] lg:h-[300px]"
        />
      </div>
    </section>
  );
};
