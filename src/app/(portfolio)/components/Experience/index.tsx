export const Experience = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold uppercase">
        Professional Experience
      </h2>

      <div className="flex flex-col gap-8 md:gap-4">
        <article className="grid md:grid-cols-2">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium">Full-Stack Web Developer</h3>
            <p className="text-sm font-light">
              <i>Chowis</i> | South Korea, Jan 2023 - Present
            </p>
          </div>

          <ul className="list-disc pl-4 leading-relaxed md:pl-0">
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
        </article>

        <article className="grid md:grid-cols-2">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium">Front-End Web Developer</h3>
            <p className="text-sm font-light">
              <i>Emex</i> | Russia, Nov 2021 - Apr 2022
            </p>
          </div>

          <ul className="list-disc pl-4 leading-relaxed md:pl-0">
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
        </article>
      </div>
    </section>
  );
};
