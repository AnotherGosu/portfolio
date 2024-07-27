export default function Loading() {
  return (
    <div className="h-full">
      <div className="mx-auto grid h-full max-w-sm grid-rows-[1fr_max-content] gap-2 rounded-md border-2 border-slate-300 p-2">
        <div />
        <div className="loader h-[40px]" />
      </div>
    </div>
  );
}
