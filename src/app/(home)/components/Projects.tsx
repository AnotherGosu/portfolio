import Image, { StaticImageData } from "next/image";

import emoniqueImg from "@/images/emonique.png";
import framImg from "@/images/fram.png";
import hyeinImg from "@/images/hyein.png";

import { cn } from "@/utils/cn";

import { ExternalIcon } from "@/components/icons/External";

import { Article } from "@/components/common/Article";
import { Heading } from "@/components/common/Heading";
import { Highlighter } from "@/components/common/Highlighter";
import { SubHeading } from "@/components/common/SubHeading";

export const Projects = () => {
  return (
    <section>
      <Heading>Side Projects</Heading>

      <div className="flex flex-col gap-10 sm:gap-20">
        <Card
          title="Hyein Lee"
          description="Personal website"
          image={hyeinImg}
          href="https://www.hyeinnovate.com"
        />

        <Card
          title="Emonique"
          description="Art platform"
          image={emoniqueImg}
          href="https://emonique.com"
        />

        <Card
          title="Fram"
          description="Booking service"
          image={framImg}
          href="https://fram-teamgosu.vercel.app"
        />
      </div>
    </section>
  );
};

const Card = ({
  href,
  title,
  description,
  image,
}: {
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
}) => {
  return (
    <Highlighter>
      <a
        href={href}
        target="_blank"
        className="group"
      >
        <Article
          className={cn(
            "animated bg-neutral-900 p-4",
            "group-active:bg-neutral-800 sm:p-6",
          )}
        >
          <Image
            src={image}
            alt={title}
            className={cn(
              "mb-8 h-[12rem] rounded-md object-cover",
              "sm:h-[30rem]",
            )}
          />

          <SubHeading>
            {title} <ExternalIcon />
          </SubHeading>

          <p className={cn("text-sm", "sm:text-base")}>{description}</p>
        </Article>
      </a>
    </Highlighter>
  );
};
