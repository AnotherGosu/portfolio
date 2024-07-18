import Image from "next/image";

import expirienceImg from "@/images/experience.svg";

import { Card } from "@/components/common/Card";

export const Experience = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
      <div className="h-max lg:sticky lg:top-5">
        <h2 className="mb-8 w-max rounded-2xl bg-indigo-500 px-3 py-0.5 font-semibold uppercase text-white">
          Professional Experience
        </h2>

        <Image
          src={expirienceImg}
          alt="Professional Experience"
          height={250}
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col gap-6">
        <Card
          title="Full-Stack Web Developer"
          subtitle="Chowis | South Korea, Jan 2023 - Present"
          className="border border-b-[3px] border-r-[3px] border-indigo-400"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>
              Developed and maintained web applications using Next.js and
              TypeScript, ensuring high performance and responsiveness
            </li>

            <li>
              Designed and developed RESTful APIs with Nest.js, ensuring secure
              and efficient communication between front-end and back-end
              services
            </li>

            <li>
              Implemented real-time face tracking features using MediaPipe
            </li>

            <li>Integrated PayPal for payment processing</li>

            <li>Managed deployment and testing CI/CD processes using Vercel</li>
          </ul>
        </Card>

        <Card
          title="Front-End Web Developer"
          subtitle="Emex  | Russia, Nov 2021 - Apr 2022"
          className="border border-b-[3px] border-r-[3px] border-indigo-400"
        >
          <ul className="list-disc pl-4 leading-loose">
            <li>
              Developed e-commerce platform using React and Typescript, handling
              state management in complicated checkout flow with Redux
            </li>

            <li>
              Implemented server-side rendering (SSR) and static site generation
              (SSG) in Next.js for improved SEO and performance
            </li>

            <li>
              Managed deployment and testing processes using Azure DevOps,
              recorded important metrics and issues with PostHog
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};
