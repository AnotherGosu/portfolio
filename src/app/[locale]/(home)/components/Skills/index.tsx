import { Dict } from "@/utils/localization";

import { Heading } from "@/components/common/Heading";

interface SkillsProps {
  dict: Dict;
}

export const Skills = ({ dict }: SkillsProps) => {
  return (
    <section>
      <Heading>{dict.skills.heading}</Heading>

      <article className="bg-indigo-50 p-6 shadow-md">
        <ul className="flex list-disc flex-col gap-4 pl-4 leading-loose">
          <li dangerouslySetInnerHTML={{ __html: dict.skills.item_1 }} />
          <li dangerouslySetInnerHTML={{ __html: dict.skills.item_2 }} />
          <li dangerouslySetInnerHTML={{ __html: dict.skills.item_3 }} />
          <li dangerouslySetInnerHTML={{ __html: dict.skills.item_4 }} />
          <li dangerouslySetInnerHTML={{ __html: dict.skills.item_5 }} />
        </ul>
      </article>
    </section>
  );
};
