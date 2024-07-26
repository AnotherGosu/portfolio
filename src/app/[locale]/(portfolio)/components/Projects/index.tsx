import koreanCourseImg from "@/images/korean-course.png";

import { Dict } from "@/utils/localization";

import { Heading } from "@/components/common/Heading";

import { Card } from "./components/Card";

interface ProjectsProps {
  dict: Dict;
}

export const Projects = ({ dict }: ProjectsProps) => {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <Heading className="mb-0">{dict.portfolio.projects.heading}</Heading>

        <p className="text-slate-500">{dict.portfolio.projects.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card
          title={dict.portfolio.projects.card_1.title}
          description={dict.portfolio.projects.card_1.description}
          image={koreanCourseImg}
        />
      </div>
    </section>
  );
};
