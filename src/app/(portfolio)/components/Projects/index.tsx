import koreanCourseImg from "@/images/korean-course.png";

import { Heading } from "@/components/common/Heading";

import { Card } from "./components/Card";

export const Projects = () => {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <Heading className="mb-0">Projects</Heading>

        <p className="text-slate-500">Self-made side projects</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card
          title="Korean Course"
          description="Landing page promoting course for Korean language"
          image={koreanCourseImg}
        />
      </div>
    </section>
  );
};
