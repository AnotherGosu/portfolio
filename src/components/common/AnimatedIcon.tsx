"use client";

import { motion } from "motion/react";

import { cn } from "@/utils/cn";

import { Icon } from "@/types/common";

export const AnimatedIcon = ({ title, d }: Icon) => {
  return (
    <motion.svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <title>{title}</title>

      <motion.path
        d={d}
        className={cn(
          "animated fill-neutral-50 stroke-neutral-50",
          "group-hocus:fill-neutral-950 group-hocus:stroke-neutral-950",
        )}
        strokeWidth={0.5}
        variants={{
          hidden: { pathLength: 0, fillOpacity: 0 },
          visible: {
            pathLength: 1,
            fillOpacity: 1,
            transition: {
              pathLength: { duration: 2, ease: "easeInOut" },
              fillOpacity: { delay: 1.8, duration: 0.5, ease: "easeInOut" },
            },
          },
        }}
      />
    </motion.svg>
  );
};
