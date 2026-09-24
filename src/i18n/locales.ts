/**
 * `path` is the URL prefix ('' for the default locale). `live` gates whether a
 * locale's pages are built and offered in the switcher; a dictionary can be
 * drafted before its locale goes live. `cjk` names the Noto subset that draws
 * the display face's Chinese glyphs (see scripts/subset-cjk.mjs).
 */
export const locales = [
  { code: 'en', path: 'en', label: 'English', ogLocale: 'en_US', cjk: null, live: true },
  {
    code: 'zh-Hant-HK',
    path: 'zh-hk',
    label: '繁體中文（香港）',
    ogLocale: 'zh_HK',
    cjk: 'hk',
    live: true,
  },
  {
    code: 'zh-Hant-TW',
    path: 'zh-tw',
    label: '繁體中文（台灣）',
    ogLocale: 'zh_TW',
    cjk: 'tc',
    live: true,
  },
] as const;

export type Locale = (typeof locales)[number];
export type LocaleCode = Locale['code'];

export const defaultLocale: LocaleCode = 'en';

export function localeFromCode(code: string | undefined): Locale {
  return locales.find((locale) => locale.code === code) ?? locales[0];
}

export function liveLocales(): Locale[] {
  return locales.filter((locale) => locale.live);
}
