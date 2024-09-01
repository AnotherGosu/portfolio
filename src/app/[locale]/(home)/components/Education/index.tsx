import { Dict } from "@/utils/localization";

import { Heading } from "@/components/common/Heading";

import { Card } from "./components/Card";

interface EducationProps {
  dict: Dict;
}

export const Education = ({ dict }: EducationProps) => {
  return (
    <section>
      <Heading>{dict.education.heading}</Heading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card
          title={dict.education.card_1.title}
          description={dict.education.card_1.description}
          content={dict.education.card_1.content}
        />

        <Card
          title={dict.education.card_2.title}
          description={dict.education.card_2.description}
          content={dict.education.card_2.content}
        />
      </div>
    </section>
  );
};
