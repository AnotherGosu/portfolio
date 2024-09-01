import { Dict } from "@/utils/localization";

import { Heading } from "@/components/common/Heading";

import { Card } from "./components/Card";

interface ExperienceProps {
  dict: Dict;
}

export const Experience = ({ dict }: ExperienceProps) => {
  return (
    <section>
      <Heading>{dict.experience.heading}</Heading>

      <div className="flex flex-col gap-6">
        <Card
          title={dict.experience.card_1.title}
          description={dict.experience.card_1.description}
          items={[
            dict.experience.card_1.item_1,
            dict.experience.card_1.item_2,
            dict.experience.card_1.item_3,
            dict.experience.card_1.item_4,
          ]}
        />

        <Card
          title={dict.experience.card_2.title}
          description={dict.experience.card_2.description}
          items={[
            dict.experience.card_2.item_1,
            dict.experience.card_2.item_2,
            dict.experience.card_2.item_3,
            dict.experience.card_2.item_4,
          ]}
        />
      </div>
    </section>
  );
};
