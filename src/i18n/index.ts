import type { Dictionary } from './dictionary';
import { en } from './en';
import { defaultLocale, localeFromCode, type Locale, type LocaleCode } from './locales';

const dictionaries: Partial<Record<LocaleCode, Dictionary>> = { en };

export function dictionary(code: LocaleCode): Dictionary {
  return dictionaries[code] ?? dictionaries[defaultLocale] ?? en;
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** Root-relative URL for `pathname` in `locale`, always with a trailing slash. */
export function localizedPath(locale: Locale, pathname = ''): string {
  const prefix = locale.code === defaultLocale ? '' : `/${locale.path}`;
  const path = pathname.replace(/^\/+|\/+$/g, '');
  return `${prefix}/${path}${path ? '/' : ''}`;
}

/** The current locale of an Astro page, resolved to the default when unknown. */
export function currentLocale(code: string | undefined): Locale {
  return localeFromCode(code);
}
