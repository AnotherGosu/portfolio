import {
  AcademicCapIcon,
  ServerStackIcon,
  TvIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Card } from "@/components/common/Card";

export const Skills = () => {
  return (
    <section>
      <h2 className="mb-8 w-max rounded-2xl bg-indigo-500 px-3 py-0.5 font-semibold uppercase text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2">
        <Card
          title="Front-end"
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
          title="Back-end"
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
          title="Tools & Platforms"
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
          title="Education"
          icon={<AcademicCapIcon className="size-7" />}
          className="bg-indigo-50 shadow-md"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>
              Bachelor`s degree with honors in Computer Security (Pacific
              National University)
            </li>
            <li>TOPIK 4 (Kyungbok University language school)</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};
