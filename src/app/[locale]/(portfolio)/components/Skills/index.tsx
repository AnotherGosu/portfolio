import {
  AcademicCapIcon,
  ServerStackIcon,
  TvIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Dict } from "@/utils/localization";

import { Card } from "@/components/common/Card";
import { Heading } from "@/components/common/Heading";

interface SkillsProps {
  dict: Dict;
}

export const Skills = ({ dict }: SkillsProps) => {
  return (
    <section>
      <Heading>{dict.portfolio.skills.heading}</Heading>

      <div className="grid-rows-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card
          title={dict.portfolio.skills.card_1.title}
          icon={<TvIcon className="size-7" />}
          className="bg-indigo-50 shadow-md"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js, TypeScript</li>
            <li>Tailwind, styled-components, SCSS, Material UI</li>
            <li>Redux, Zustand, SWR, Axios, React Hook Form</li>
          </ul>
        </Card>

        <Card
          title={dict.portfolio.skills.card_2.title}
          icon={<ServerStackIcon className="size-7" />}
          className="bg-indigo-50 shadow-md"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>Node.js, Nest.js</li>
            <li>REST API</li>
            <li>PostgreSQL, TypeORM</li>
          </ul>
        </Card>

        <Card
          title={dict.portfolio.skills.card_3.title}
          icon={<WrenchScrewdriverIcon className="size-7" />}
          className="bg-indigo-50 shadow-md"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>Git, GitHub</li>
            <li>Vercel, Netlify</li>
            <li>Figma, Kanban</li>
          </ul>
        </Card>

        <Card
          title={dict.portfolio.skills.card_4.title}
          icon={<AcademicCapIcon className="size-7" />}
          className="bg-indigo-50 shadow-md"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>{dict.portfolio.skills.card_4.item_1}</li>
            <li>{dict.portfolio.skills.card_4.item_2}</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};
