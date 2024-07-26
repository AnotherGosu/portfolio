import "server-only";

export const i18n = { defaultLocale: "en", locales: ["en", "ko"] } as const;

export type Locale = (typeof i18n)["locales"][number];

const dictionaries = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  ko: () => import("@/locales/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dict = Awaited<ReturnType<typeof getDictionary>>;
