import type { Dictionary } from './dictionary';
import { en } from './en';
import { defaultLocale, localeFromCode, type Locale, type LocaleCode } from './locales';
import { zhHantHK } from './zh-Hant-HK';
import { zhHantTW } from './zh-Hant-TW';

const dictionaries: Record<LocaleCode, Dictionary> = {
  en,
  'zh-Hant-HK': zhHantHK,
  'zh-Hant-TW': zhHantTW,
};

export function dictionary(code: LocaleCode): Dictionary {
  return dictionaries[code] ?? dictionaries[defaultLocale];
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** The current locale of an Astro page, resolved to the default when unknown. */
export function currentLocale(code: string | undefined): Locale {
  return localeFromCode(code);
}

export { pageHref, pages, localesFor, pageExistsIn, type PageId } from './pages';
