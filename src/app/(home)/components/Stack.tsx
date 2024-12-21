import { cn } from "@/utils/cn";

import { CypressIcon } from "@/components/icons/Cypress";
import { FigmaIcon } from "@/components/icons/Figma";
import { NestIcon } from "@/components/icons/Nest";
import { NextIcon } from "@/components/icons/Next";
import { PostgreIcon } from "@/components/icons/Postgre";
import { TailwindIcon } from "@/components/icons/Tailwind";
import { TypeORMIcon } from "@/components/icons/TypeORM";
import { TypeScriptIcon } from "@/components/icons/TypeScript";
import { VercelIcon } from "@/components/icons/Vercel";

import { Article } from "@/components/common/Article";
import { Heading } from "@/components/common/Heading";
import { Highlighter } from "@/components/common/Highlighter";
import { SubHeading } from "@/components/common/SubHeading";

export const Stack = () => {
  return (
    <section>
      <Heading>Technical Stack</Heading>

      <div className="flex flex-wrap items-center justify-center gap-10">
        <Card
          heading="Front-End"
          items={[
            { icon: <NextIcon />, title: "Next.js" },
            { icon: <TypeScriptIcon />, title: "TypeScript" },
            { icon: <TailwindIcon />, title: "Tailwind CSS" },
          ]}
        />

        <Card
          heading="Back-End"
          items={[
            { icon: <NestIcon />, title: "NestJS" },
            { icon: <TypeORMIcon />, title: "TypeORM" },
            { icon: <PostgreIcon />, title: "PostgreSQL" },
          ]}
        />

        <Card
          heading="Tools"
          items={[
            { icon: <CypressIcon />, title: "Cypress" },
            { icon: <VercelIcon />, title: "Vercel" },
            { icon: <FigmaIcon />, title: "Figma" },
          ]}
        ></Card>
      </div>
    </section>
  );
};

const Card = ({
  heading,
  items,
}: {
  heading: string;
  items: Array<{ icon: React.ReactNode; title: string }>;
}) => {
  return (
    <Highlighter className="basis-72">
      <Article className="overflow-hidden">
        <div className="grid grid-cols-3">
          {items.map(({ icon, title }) => (
            <div
              key={title}
              className={cn(
                "animated group relative flex justify-center py-12 text-white",
                "hover:bg-neutral-900",
              )}
            >
              {icon}

              <span
                className={cn(
                  "animated absolute bottom-2 left-1/2 w-full -translate-x-1/2 transform text-center text-sm opacity-0",
                  "group-hover:opacity-100",
                )}
              >
                {title}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 p-2">
          <SubHeading className="text-center">{heading}</SubHeading>
        </div>
      </Article>
    </Highlighter>
  );
};
