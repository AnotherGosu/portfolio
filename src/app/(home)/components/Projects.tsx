import Image from "next/image";

import { cn } from "@/utils/cn";

import { PROJECTS } from "@/constants/common";

import { ExternalIcon } from "@/components/icons/External";

import { Heading } from "@/components/common/Heading";

import { Project } from "@/types/common";

export const Projects = () => {
  return (
    <section>
      <Heading>Projects</Heading>

      <div className="flex flex-col gap-10 sm:gap-20">
        {PROJECTS.map((project) => (
          <Card
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, stack, href, image, theme }: Project) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group"
    >
      <article className="relative flex h-100 items-end overflow-hidden rounded-md sm:h-150">
        <Image
          src={image}
          alt=""
          fill
          className="-z-10 object-cover"
          priority
        />

        <div
          className={cn(
            "animated relative rounded-tr-full bg-transparent p-4 sm:p-8",
            {
              [cn(
                "bg-neutral-50 text-neutral-950",
                "sm:bg-transparent sm:text-neutral-50",
                "group-hover:bg-neutral-50 group-hover:text-neutral-950",
              )]: theme === "white",
              [cn(
                "bg-neutral-950 text-neutral-50",
                "sm:bg-transparent sm:text-neutral-950",
                "group-hover:bg-neutral-950 group-hover:text-neutral-50",
              )]: theme === "black",
            },
          )}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>

            <div className="animated text-inherit group-hover:text-inherit sm:text-transparent">
              <ExternalIcon />
            </div>
          </div>

          <p className="mb-4 text-xs sm:text-sm">{subtitle}</p>

          <div className="flex flex-wrap gap-2 text-xs">
            {stack.map((item) => (
              <span
                key={item}
                className={cn("animated rounded-full border px-2 py-0.5", {
                  "border-neutral-950 group-hover:border-neutral-950 sm:border-neutral-50":
                    theme === "white",
                  "border-neutral-50 group-hover:border-neutral-50 sm:border-neutral-950":
                    theme === "black",
                })}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};
