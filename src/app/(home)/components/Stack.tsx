import { cn } from "@/utils/cn";

import { ICONS } from "@/constants/common";

import { AnimatedIcon } from "@/components/common/AnimatedIcon";

export const Stack = () => {
  return (
    <section className="grid grid-cols-4 place-items-center gap-4">
      {ICONS.map((icon) => (
        <div
          key={icon.title}
          tabIndex={0}
          className={cn(
            "animated group",
            "flex size-20 flex-col items-center justify-center gap-2 rounded-md",
            "hocus:bg-neutral-50",
          )}
        >
          <AnimatedIcon {...icon} />

          <span
            className={cn(
              "animated text-xs text-neutral-950 opacity-0 select-none",
              "group-hocus:opacity-100",
            )}
          >
            {icon.title}
          </span>
        </div>
      ))}
    </section>
  );
};
