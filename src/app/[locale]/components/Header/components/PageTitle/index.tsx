"use client";

import { usePageTitle } from "./usePageTitle";

export const PageTitle = () => {
  const { title } = usePageTitle();

  return <h1 className="font-medium capitalize text-slate-500">{title}</h1>;
};
