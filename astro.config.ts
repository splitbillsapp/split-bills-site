import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import { defaultLocale, locales } from './src/i18n/locales';

const fontDir = './src/assets/fonts';

// Chinese glyphs for the display face: Noto subsets limited to CJK code points, so Latin
// text and figures still come from Bricolage when both are in the stack.
function cjkDisplay(id: 'hk' | 'tc') {
  const variant = {
    src: [`${fontDir}/noto-sans-${id}-display.woff2`] as [string],
    weight: 800,
    style: 'normal' as const,
    display: 'swap' as const,
    unicodeRange: ['U+3000-303F', 'U+3400-4DBF', 'U+4E00-9FFF', 'U+F900-FAFF', 'U+FF00-FFEF'] as [
      string,
      ...string[],
    ],
  };
  return {
    provider: fontProviders.local(),
    name: `Noto Sans ${id.toUpperCase()} Display`,
    cssVariable: `--font-display-${id}`,
    fallbacks: [],
    options: { variants: [variant] as [typeof variant] },
  };
}

function figtree(weight: 400 | 500 | 700) {
  return {
    src: [`${fontDir}/figtree-latin-${weight}-normal.woff2`] as [string],
    weight,
    style: 'normal' as const,
    display: 'swap' as const,
  };
}

export default defineConfig({
  site: 'https://splitbillsapp.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // The legal text must render verbatim; typographic quote substitution would alter it.
  markdown: { smartypants: false },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((locale) => [locale.path, locale.code])),
      },
    }),
  ],
  i18n: {
    defaultLocale,
    locales: locales.map((locale) => ({ codes: [locale.code], path: locale.path })),
    routing: { prefixDefaultLocale: false },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: [`${fontDir}/bricolage-grotesque-latin-800-normal.woff2`],
            weight: 800,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Figtree',
      cssVariable: '--font-body',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          figtree(400),
          figtree(500),
          figtree(700),
        ],
      },
    },
    cjkDisplay('hk'),
    cjkDisplay('tc'),
  ],
});
