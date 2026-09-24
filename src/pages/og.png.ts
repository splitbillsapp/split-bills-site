import type { APIRoute } from 'astro';

import { defaultLocale } from '../i18n/locales';
import { renderOgImage } from '../og/render';

export const GET: APIRoute = async () =>
  new Response(await renderOgImage(defaultLocale), {
    headers: { 'Content-Type': 'image/png' },
  });
