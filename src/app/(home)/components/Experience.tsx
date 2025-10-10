import { EXPERIENCE } from "@/constants/common";

import { ExternalIcon } from "@/components/icons/External";

import { Heading } from "@/components/common/Heading";
import { Link } from "@/components/common/Link";

import { Experience as ExperienceRecord } from "@/types/common";

export const Experience = () => {
  return (
    <section>
      <Heading>Experience</Heading>

      <div className="flex flex-col gap-5 sm:gap-10">
        {EXPERIENCE.map((record) => (
          <Record
            key={record.title}
            {...record}
          />
        ))}
      </div>
    </section>
  );
};

const Record = ({ title, subtitle, link, list }: ExperienceRecord) => {
  return (
    <article className="p-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-50 pb-4">
        <div>
          <h3 className="mb-2 text-2xl">{title}</h3>

          <p className="text-sm">{subtitle}</p>
        </div>

        <Link
          href={link}
          target="_blank"
        >
          Website <ExternalIcon />
        </Link>
      </div>

      <ul className="flex list-disc flex-col gap-4 pl-4 text-sm sm:text-base">
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
