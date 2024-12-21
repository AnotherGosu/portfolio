import { cn } from "@/utils/cn";

import { Article } from "@/components/common/Article";
import { Heading } from "@/components/common/Heading";
import { Highlighter } from "@/components/common/Highlighter";
import { SubHeading } from "@/components/common/SubHeading";

export const Experience = () => {
  return (
    <section>
      <Heading>Experience</Heading>

      <div className={cn("flex flex-col gap-10", "sm:gap-20")}>
        <Record
          title="Full-Stack Web Developer"
          subtitle="Chowis | South Korea, 2023 - Present"
        >
          <>
            <li>
              Developed a back-office web application using <b>Next.js</b> and{" "}
              <b>Typescript</b>, providing inventory control, customer
              management, statistics overview and other functionalities for the
              internal team
            </li>

            <li>
              Designed and developed RESTful APIs with <b>Nest.js</b>,{" "}
              <b>TypeORM</b> and <b>PostgreSQL</b>
            </li>

            <li>
              Ensured application stability by writing end-to-end and
              integration tests with <b>Cypress</b>
            </li>

            <li>
              Maintained the code base and managed CI/CD processes using{" "}
              <b>GitHub</b> and <b>Vercel</b>
            </li>
          </>
        </Record>

        <Record
          title="Front-End Web Developer"
          subtitle="Emex | Russia, 2021 - 2022"
        >
          <>
            <li>
              Developed an e-commerce platform using <b>Next.js</b> and{" "}
              <b>Typescript</b>, providing convenient browsing, searching and
              checkout processes to customers
            </li>

            <li>
              Implemented a smooth payment flow with <b>PayPal</b>, managing
              complex checkout state with <b>Redux</b>
            </li>

            <li>
              Ensured application stability by writing component unit tests with{" "}
              <b>Jest</b> and <b>React Testing Library</b>
            </li>

            <li>
              Managed deployment and testing workflows using <b>Azure DevOps</b>
              , and tracked important metrics and issues with <b>PostHog</b>
            </li>
          </>
        </Record>
      </div>
    </section>
  );
};

const Record = ({
  title,
  subtitle,
  children,
}: React.PropsWithChildren & {
  title: string;
  subtitle: string;
}) => {
  return (
    <Highlighter>
      <Article className={cn("p-6", "sm:p-8")}>
        <div className="mb-8 border-b border-neutral-50 pb-2">
          <SubHeading>{title}</SubHeading>
          <p className={cn("text-sm", "md:text-base")}>{subtitle}</p>
        </div>

        <ul
          className={cn(
            "list-disc pl-4 text-sm !leading-loose",
            "md:text-base",
          )}
        >
          {children}
        </ul>
      </Article>
    </Highlighter>
  );
};
