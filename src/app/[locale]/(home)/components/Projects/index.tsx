import koreanCourseImg from "@/images/korean-course.png";
import playgroundImg from "@/images/playground.png";

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
        <Heading className="mb-0">{dict.projects.heading}</Heading>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card
          title={dict.projects.card_1.title}
          description={dict.projects.card_1.description}
          image={koreanCourseImg}
          href="https://korean-course.vercel.app"
        />

        <Card
          title={dict.projects.card_2.title}
          description={dict.projects.card_2.description}
          image={playgroundImg}
          href="https://playground-teamgosu.vercel.app"
        />
      </div>
    </section>
  );
};
