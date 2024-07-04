export const Education = () => {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold uppercase">Education</h2>

      <div className="flex flex-col gap-8 md:gap-4">
        <article className="grid md:grid-cols-2">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium">Pacific National University</h3>
            <p className="text-sm font-light">2016 - 2022</p>
          </div>

          <p>Bachelor`s degree with honors in Computer Security</p>
        </article>

        <article className="grid md:grid-cols-2">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium">Kyungbok University language school</h3>
            <p className="text-sm font-light">2022</p>
          </div>

          <p>TOPIK 4</p>
        </article>
      </div>
    </section>
  );
};
