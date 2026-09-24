import { defaultLocale, liveLocales, type Locale, type LocaleCode } from './locales';

/**
 * Every page the site has, and which locales it exists in. `'all'` means every
 * live locale; a list pins a page to the locales that have its content, so a
 * link to it from another locale resolves to one that exists.
 */
export const pages = {
  home: { path: '', locales: 'all' },
  privacy: { path: 'privacy', locales: [defaultLocale] },
  deleteAccount: { path: 'delete-account', locales: [defaultLocale] },
} as const satisfies Record<string, { path: string; locales: 'all' | readonly LocaleCode[] }>;

export type PageId = keyof typeof pages;

export function localesFor(page: PageId): Locale[] {
  const wanted = pages[page].locales;
  return liveLocales().filter((locale) => wanted === 'all' || wanted.includes(locale.code));
}

export function pageExistsIn(page: PageId, locale: Locale): boolean {
  return localesFor(page).some((candidate) => candidate.code === locale.code);
}

/** Root-relative URL for `page` in `locale`, or in the default locale when it has no copy there. */
export function pageHref(page: PageId, locale: Locale): string {
  const target = pageExistsIn(page, locale) ? locale : localesFor(page)[0];
  const prefix = !target || target.code === defaultLocale ? '' : `/${target.path}`;
  const path = pages[page].path;
  return `${prefix}/${path}${path ? '/' : ''}`;
}
