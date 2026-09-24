import { readFile } from 'node:fs/promises';

import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

import { dictionary } from '../i18n';
import { localeFromCode, type LocaleCode } from '../i18n/locales';

export const ogSize = { width: 1200, height: 630 } as const;

// Satori reads TTF, OTF and WOFF, not WOFF2, so the image uses the Fontsource WOFF files directly.
const fontFiles = {
  display: 'node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff',
  body: 'node_modules/@fontsource/figtree/files/figtree-latin-400-normal.woff',
};

const ink = '#1b120b';
const cream = '#f7f0d9';

function pill(text: string, fill: string, rotate: string) {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        padding: '10px 18px',
        border: `3px solid ${ink}`,
        borderRadius: 14,
        boxShadow: `5px 5px 0 ${ink}`,
        background: fill,
        fontFamily: 'Bricolage Grotesque',
        fontWeight: 800,
        fontSize: 22,
        lineHeight: 1.2,
        transform: `rotate(${rotate})`,
      },
      children: text,
    },
  };
}

export async function renderOgImage(locale: LocaleCode): Promise<Uint8Array<ArrayBuffer>> {
  const t = dictionary(locale);
  const cjk = localeFromCode(locale).cjk;
  const [display, body, icon, cjkDisplay, cjkBody] = await Promise.all([
    readFile(fontFiles.display),
    readFile(fontFiles.body),
    readFile('src/assets/icon-512.png'),
    cjk ? readFile(`src/assets/fonts/og/noto-sans-${cjk}-800.ttf`) : null,
    cjk ? readFile(`src/assets/fonts/og/noto-sans-${cjk}-400.ttf`) : null,
  ]);
  const records = t.home.hero.records;
  const owed = records.find((record) => record.direction === 'owedToYou');
  const owe = records.find((record) => record.direction === 'youOwe');

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: ogSize.width,
          height: ogSize.height,
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          padding: '0 72px 0 56px',
          background: cream,
          color: ink,
          fontFamily: 'Figtree',
        },
        children: [
          {
            type: 'img',
            props: {
              src: `data:image/png;base64,${icon.toString('base64')}`,
              width: 400,
              height: 400,
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: 28, width: 632 },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { fontFamily: 'Bricolage Grotesque', fontWeight: 800, fontSize: 26 },
                    children: t.site.name,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontFamily: 'Bricolage Grotesque',
                      fontWeight: 800,
                      fontSize: cjk ? 76 : 84,
                      lineHeight: cjk ? 1.15 : 0.94,
                      letterSpacing: cjk ? 0 : -3.2,
                    },
                    children: t.site.tagline,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', gap: 18, flexWrap: 'wrap' },
                    children: [
                      owed && pill(owed.outcome, '#9ee8b8', '-2.5deg'),
                      owe && pill(owe.outcome, '#ffb8ac', '2deg'),
                    ].filter(Boolean),
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: 22, lineHeight: 1.4, color: '#564b42' },
                    children: t.site.description,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      ...ogSize,
      // Satori falls back per glyph through this list, so the Noto subsets only draw the CJK.
      fonts: [
        { name: 'Bricolage Grotesque', data: display, weight: 800, style: 'normal' },
        { name: 'Figtree', data: body, weight: 400, style: 'normal' },
        ...(cjkDisplay ? [{ name: 'Noto Sans CJK', data: cjkDisplay, weight: 800 as const, style: 'normal' as const }] : []),
        ...(cjkBody ? [{ name: 'Noto Sans CJK', data: cjkBody, weight: 400 as const, style: 'normal' as const }] : []),
      ],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: ogSize.width } }).render().asPng();
  return Uint8Array.from(png);
}
