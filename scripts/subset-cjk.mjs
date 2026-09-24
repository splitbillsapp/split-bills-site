// Bricolage Grotesque has no Chinese glyphs and the system faces have no black
// weight, so the display face's Chinese characters come from Noto Sans HK / TC
// subsets containing only the glyphs the dictionaries actually use. The source
// fonts are the variable TTFs from google/fonts (ofl/notosanshk, ofl/notosanstc);
// pass their folder as CJK_SOURCE. Outputs are committed, so this runs only when
// the Chinese copy changes.
//
//   CJK_SOURCE=~/Downloads/noto node scripts/subset-cjk.mjs
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import subsetFont from 'subset-font';

/** @typedef {import('../src/i18n/dictionary.ts').Dictionary} Dictionary */

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../src/assets/fonts');
const source = process.env.CJK_SOURCE;
if (!source) {
  console.error('subset-cjk: set CJK_SOURCE to the folder holding NotoSansHK[wght].ttf and NotoSansTC[wght].ttf');
  process.exit(1);
}

const { zhHantHK } = await import('../src/i18n/zh-Hant-HK.ts');
const { zhHantTW } = await import('../src/i18n/zh-Hant-TW.ts');

/**
 * Strings set in the display face on the site.
 * @param {Dictionary} t
 */
function displayStrings(t) {
  return [
    t.site.name,
    t.site.tagline,
    t.store.comingSoon,
    t.store.getIt,
    t.notFound.heading,
    t.home.ways.heading,
    t.home.features.heading,
    ...t.home.features.items.map((item) => item.title),
    ...t.home.hero.records.flatMap((record) => [record.title, record.amount, record.outcome]),
    t.home.privacy.heading,
    t.home.cta.heading,
  ];
}

/**
 * Strings drawn on the social image, in either face.
 * @param {Dictionary} t
 */
function ogStrings(t) {
  return [
    t.site.name,
    t.site.tagline,
    t.site.description,
    ...t.home.hero.records.map((record) => record.outcome),
  ];
}

const cjk = /[　-〿㐀-䶿一-鿿豈-﫿＀-￯]/gu;

/** @param {string[]} strings */
function cjkCharacters(strings) {
  return [...new Set(strings.join('').match(cjk) ?? [])].sort().join('');
}

const jobs = [
  { id: 'hk', file: 'NotoSansHK[wght].ttf', t: zhHantHK },
  { id: 'tc', file: 'NotoSansTC[wght].ttf', t: zhHantTW },
];

await mkdir(path.join(out, 'og'), { recursive: true });

for (const { id, file, t } of jobs) {
  const font = await readFile(path.join(source, file));
  const display = cjkCharacters(displayStrings(t));
  const og = cjkCharacters(ogStrings(t));

  const web = await subsetFont(font, display, {
    targetFormat: 'woff2',
    variationAxes: { wght: 800 },
  });
  await writeFile(path.join(out, `noto-sans-${id}-display.woff2`), web);

  for (const weight of [400, 800]) {
    const ttf = await subsetFont(font, og, { targetFormat: 'truetype', variationAxes: { wght: weight } });
    await writeFile(path.join(out, 'og', `noto-sans-${id}-${weight}.ttf`), ttf);
  }

  console.log(
    `subset-cjk: ${id} display ${display.length} glyphs ${(web.length / 1024).toFixed(1)} KB; og ${og.length} glyphs`,
  );
}
