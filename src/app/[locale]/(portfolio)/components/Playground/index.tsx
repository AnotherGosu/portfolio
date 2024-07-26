import { Dict, Locale } from "@/utils/localization";

import { Heading } from "@/components/common/Heading";

import { Card } from "./components/Card";

interface PlaygroundProps {
  locale: Locale;
  dict: Dict;
}

export const Playground = ({ locale, dict }: PlaygroundProps) => {
  return (
    <section>
      <div className="mb-8 flex items-center gap-4">
        <Heading className="mb-0">{dict.portfolio.playground.heading}</Heading>

        <p className="text-slate-500">
          {dict.portfolio.playground.description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          href={`/${locale}/playground/to-do`}
          title={dict.portfolio.playground.card_1.title}
          description={dict.portfolio.playground.card_1.description}
        />

        <Card
          href={`/${locale}/playground/email-template`}
          title={dict.portfolio.playground.card_2.title}
          description={dict.portfolio.playground.card_2.description}
        />

        <Card
          href={`/${locale}/playground/face-detection`}
          title={dict.portfolio.playground.card_3.title}
          description={dict.portfolio.playground.card_3.description}
        />
      </div>
    </section>
  );
};
