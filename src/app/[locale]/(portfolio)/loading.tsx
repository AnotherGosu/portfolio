export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16">
      {/* Hero */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <div className="loader mb-[5px] h-[35px] w-[277px]" />
            <div className="loader h-[28px] w-[246px]" />
          </div>

          <div className="flex gap-4">
            <div className="loader h-[32px] w-[98px]" />
            <div className="loader h-[32px] w-[108px]" />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="loader h-[256px] grow lg:h-[148px]" />
          <div className="loader mx-auto h-[200px] w-[275px] lg:h-[300px] lg:w-[412px]" />
        </div>
      </div>
      {/* Hero */}

      <div className="h-[1px] bg-slate-200" />

      {/* Projects */}
      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="loader mb-0 h-[28px] w-[108px] rounded-2xl" />
          <div className="loader h-[24px] w-[179px]" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="loader h-[413px]" />
        </div>
      </div>
      {/* Projects */}

      {/* Playground */}
      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="loader mb-0 h-[28px] w-[134px] rounded-2xl" />
          <div className="loader h-[24px] w-[216px]" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="loader h-[82px]" />
          <div className="loader h-[82px]" />
          <div className="loader h-[82px]" />
        </div>
      </div>
      {/* Playground */}

      <div className="h-[1px] bg-slate-200" />

      {/* Skills */}
      <div>
        <div className="loader mb-8 h-[28px] w-[78px] rounded-2xl" />

        <div className="grid grid-cols-1 grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2">
          <div className="loader h-[237px]" />
          <div className="loader h-[237px]" />
          <div className="loader h-[237px]" />
          <div className="loader h-[237px]" />
        </div>
      </div>
      {/* Skills */}

      {/* Experience */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
        <div className="h-max lg:sticky lg:top-5">
          <div className="loader mb-8 h-[28px] w-[243px] rounded-2xl" />
          <div className="loader hidden h-[250px] w-[265px] lg:block" />
        </div>

        <div className="flex flex-col gap-6">
          <div className="loader h-[485px]" />
          <div className="loader h-[421px]" />
        </div>
      </div>
      {/* Experience */}
    </div>
  );
}
