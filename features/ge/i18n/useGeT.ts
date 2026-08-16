import { useRouter } from "next/router";
import en from "./en";

/**
 * Growth Engineering translation helper.
 *
 * Mirrors the static site's i18n model: pages are authored in Hungarian and
 * the English dictionary overrides by key, falling back to the inline
 * Hungarian markup when a key has no translation.
 */
export type GeT = (key: string, hu: string) => string;

export const useGeT = (): GeT => {
  const { locale } = useRouter();
  const isEn = locale !== "hu";
  return (key, hu) => (isEn ? en[key] ?? hu : hu);
};
