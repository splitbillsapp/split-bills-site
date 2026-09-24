import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import { defaultLocale, locales } from './src/i18n/locales';

const fontDir = './src/assets/fonts';

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
  ],
});
