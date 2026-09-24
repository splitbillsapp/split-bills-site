// Keeps src/content/legal in step with docs/legal in the app repo, the source of
// truth for the privacy policy and the deletion instructions. `--check` fails
// when the copies have drifted; without the app repo alongside (as in CI) it
// has nothing to compare against and says so.
import { readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.resolve(here, '../src/content/legal');
const source = path.resolve(
  here,
  process.env.LEGAL_SOURCE ?? '../../split-bills/docs/legal',
);
const files = ['privacy-policy.md', 'delete-account.md'];
const check = process.argv.includes('--check');

/** @param {string} file */
async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(source))) {
  const note = `legal-sync: app repo not found at ${source}; skipping ${check ? 'check' : 'sync'}`;
  console.log(note);
  process.exit(0);
}

let drifted = 0;
for (const file of files) {
  const from = path.join(source, file);
  const to = path.join(target, file);
  const wanted = await readFile(from, 'utf8');
  const current = (await exists(to)) ? await readFile(to, 'utf8') : null;
  if (wanted === current) continue;
  if (check) {
    console.error(`legal-sync: ${file} differs from ${from}`);
    drifted += 1;
  } else {
    await writeFile(to, wanted);
    console.log(`legal-sync: updated ${file}`);
  }
}

if (drifted > 0) {
  console.error('legal-sync: run `npm run legal:sync` and commit the result');
  process.exit(1);
}
