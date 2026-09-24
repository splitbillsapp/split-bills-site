import type { APIRoute, GetStaticPaths } from 'astro';

import { defaultLocale, liveLocales, type LocaleCode } from '../../i18n/locales';
import { renderOgImage } from '../../og/render';

export const getStaticPaths = (() =>
  liveLocales()
    .filter((locale) => locale.code !== defaultLocale)
    .map((locale) => ({
      params: { locale: locale.path },
      props: { code: locale.code },
    }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ code: LocaleCode }> = async ({ props }) =>
  new Response(await renderOgImage(props.code), {
    headers: { 'Content-Type': 'image/png' },
  });
