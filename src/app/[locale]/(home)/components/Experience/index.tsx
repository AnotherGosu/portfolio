import Image from "next/image";

import expirienceImg from "@/images/experience.svg";

import { Dict } from "@/utils/localization";

import { Card } from "@/components/common/Card";
import { Heading } from "@/components/common/Heading";

interface ExperienceProps {
  dict: Dict;
}

export const Experience = ({ dict }: ExperienceProps) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
      <div>
        <Heading>{dict.experience.heading}</Heading>

        <Image
          src={expirienceImg}
          alt={dict.experience.heading}
          height={250}
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col gap-6">
        <Card
          title={dict.experience.card_1.title}
          subtitle={dict.experience.card_1.description}
          className="border border-b-[3px] border-r-[3px] border-indigo-400"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>{dict.experience.card_1.item_1}</li>
            <li>{dict.experience.card_1.item_2}</li>
            <li>{dict.experience.card_1.item_3}</li>
            <li>{dict.experience.card_1.item_4}</li>
            <li>{dict.experience.card_1.item_5}</li>
          </ul>
        </Card>

        <Card
          title={dict.experience.card_2.title}
          subtitle={dict.experience.card_2.description}
          className="border border-b-[3px] border-r-[3px] border-indigo-400"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>{dict.experience.card_2.item_1}</li>
            <li>{dict.experience.card_2.item_2}</li>
            <li>{dict.experience.card_2.item_3}</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};
