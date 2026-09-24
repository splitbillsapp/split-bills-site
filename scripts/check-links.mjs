// Walks every HTML file in dist/ and fails on an internal link, image or
// stylesheet with no file behind it. Locale prefixes make it easy to link to
// a page that exists in one language and not another; this catches it.
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');

/** @param {string} dir @returns {Promise<string[]>} */
async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? htmlFiles(full) : entry.name.endsWith('.html') ? [full] : [];
    }),
  );
  return nested.flat();
}

/** @param {string} target */
async function exists(target) {
  try {
    const info = await stat(target);
    return info.isFile();
  } catch {
    return false;
  }
}

/** @param {string} url */
async function resolves(url) {
  const clean = url.split(/[?#]/)[0] ?? '';
  const local = path.join(dist, clean);
  if (clean.endsWith('/')) return exists(path.join(local, 'index.html'));
  return (await exists(local)) || exists(path.join(local, 'index.html'));
}

const attribute = /\s(?:href|src|srcset)="([^"]*)"/g;
let broken = 0;

for (const file of await htmlFiles(dist)) {
  const html = await readFile(file, 'utf8');
  const urls = new Set();
  for (const match of html.matchAll(attribute)) {
    for (const candidate of (match[1] ?? '').split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      if (url?.startsWith('/')) urls.add(url);
    }
  }
  for (const url of urls) {
    if (!(await resolves(url))) {
      broken += 1;
      console.error(`check-links: ${path.relative(dist, file)} -> ${url} has no file`);
    }
  }
}

if (broken > 0) {
  console.error(`check-links: ${broken} broken internal link${broken === 1 ? '' : 's'}`);
  process.exit(1);
}
console.log('check-links: every internal link resolves');
