export const Skills = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold uppercase">Technical Skills</h2>

      <div className="flex flex-col gap-8 md:gap-4">
        <article className="grid md:grid-cols-2">
          <h3 className="mb-2 font-medium md:mb-0">Front-end</h3>

          <ul className="list-disc pl-4 md:pl-0">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js, TypeScript</li>
            <li>Tailwind, styled-components, SCSS, Material UI</li>
            <li>Redux, Zustand, SWR, Axios, React Hook Form</li>
          </ul>
        </article>

        <article className="grid md:grid-cols-2">
          <h3 className="mb-2 font-medium md:mb-0">Back-end</h3>

          <ul className="list-disc pl-4 md:pl-0">
            <li>Node.js, Nest.js</li>
            <li>REST API</li>
            <li>PostgreSQL, TypeORM</li>
          </ul>
        </article>

        <article className="grid md:grid-cols-2">
          <h3 className="mb-2 font-medium md:mb-0">Tools & Platforms</h3>

          <ul className="list-disc pl-4 md:pl-0">
            <li>Git, GitHub</li>
            <li>Vercel, Netlify</li>
            <li>Figma, Kanban</li>
          </ul>
        </article>
      </div>
    </section>
  );
};
