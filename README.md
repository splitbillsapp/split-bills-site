# splitbillsapp.com

The public site for [Split Bills](https://github.com/splitbillsapp/split-bills): a promotional
home page, the privacy policy and the account-deletion instructions that the Google Play listing
and the app link to. Built with Astro to static files and served by GitHub Pages at the custom
domain `splitbillsapp.com`.

## Run

```sh
npm ci
npm run dev        # http://localhost:4321
npm run build      # checks the legal text, then writes the site to dist/
npm run preview    # serves dist/
npm run check      # astro check + tsc on scripts
npm run lint       # eslint, including the astro a11y rules
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which checks, lints, builds and publishes
`dist/` to GitHub Pages. The first run switches the Pages source from the branch root to Actions
(`configure-pages` with `enablement: true`). `public/CNAME` and `public/.nojekyll` are copied into
`dist/` as-is; do not remove them.

## The legal text

`/privacy` and `/delete-account` render `src/content/legal/privacy-policy.md` and
`src/content/legal/delete-account.md`. Those are verbatim copies of `docs/legal/` in the app repo,
which is the source of truth. Edit there, then:

```sh
npm run legal:sync    # copies from ../split-bills/docs/legal (or $LEGAL_SOURCE)
```

`npm run build` runs `legal:check` first and fails if the copies have drifted from the source.
Without the app repo alongside, as in CI, the check has nothing to compare against and skips.
Both URLs must keep working, with and without a trailing slash: they are printed in the Play
listing.

The markdown is rendered without typographic quote substitution so the text stays byte-for-byte
the same as the source.

## Design

The brand is the app's sticker book, documented in `docs/DESIGN.md` of the app repo.
`src/styles/tokens.css` mirrors `src/ui/theme.ts` there token for token; change a colour in the
app first. Fonts are self-hosted from the Fontsource packages (`src/assets/fonts`) through Astro's
fonts API, which also generates the size-adjusted fallbacks. The site makes no third-party
requests and sets no cookies.

Screenshots in `src/assets/screens` are copies of `docs/screenshots` in the app repo. The header
mark and favicons are rasterised from `assets/icon-source/icon.svg` there:

```sh
rsvg-convert -w 512 -h 512 -o src/assets/icon-512.png ../split-bills/assets/icon-source/icon.svg
```

The social image at `/og.png` is generated at build time by `src/og/render.ts`.

## Languages

`src/i18n/locales.ts` lists the locales with a URL path and a `live` flag. `src/i18n/en.ts` is
the English dictionary and `src/i18n/dictionary.ts` is the shape every locale must fill.
`src/i18n/pages.ts` lists the pages and which locales each exists in; every link goes through
`pageHref`, which falls back to a locale that has the page, so a Chinese page links to the
English legal text rather than a missing translation.

Three locales are live: English at the root, 繁體中文（香港） under `/zh-hk/` and 繁體中文（台灣）
under `/zh-tw/`. The two Chinese dictionaries were written separately, not converted from one
another, and are marked as drafts pending native review. To add a locale: write its dictionary,
register it in `src/i18n/index.ts`, set `live: true`. Its home page and social image are then
built under its path, the language switcher appears in the header and footer, every page carries
`hreflang` alternates, and the sitemap lists them. The build ends with `scripts/check-links.mjs`,
which fails on any internal link with no file behind it. The legal pages stay English until
translated sources exist in the app repo; Chinese pages link to them.

### Chinese display type

Bricolage Grotesque has no Chinese glyphs and the system faces have no black weight, so Chinese
headings, figures and pills draw their CJK glyphs from Noto Sans HK / TC subsets that hold only
the characters the dictionaries use (about 16 KB each), limited to CJK code points so Latin and
figures still come from Bricolage. The subsets in `src/assets/fonts` and `src/assets/fonts/og`
are committed. Regenerate them after changing Chinese copy:

```sh
# Source fonts: NotoSansHK[wght].ttf and NotoSansTC[wght].ttf from github.com/google/fonts (ofl/)
CJK_SOURCE=~/Downloads/noto npm run fonts:cjk
```

## Store badge

`src/site.ts` holds `playStoreUrl`. While it is undefined the badge reads "Coming to Google
Play", dashed and shadowless. Set it and the badge becomes a link.

## Contact

Andrew Sze-To · support@splitbillsapp.com
