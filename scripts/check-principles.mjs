import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const markdown = await fs.readFile(new URL('PRINCIPLES.md', root), 'utf8');
const version = markdown.match(/Principles version: \*\*([^*]+)\*\*/)?.[1];
assert(version, 'Missing accepted principles version');
const questions = [...markdown.matchAll(/^\d+\. \*\*([^*]+)\*\* — (.+)$/gm)]
  .map(match => ({ name: match[1], question: match[2][0].toUpperCase() + match[2].slice(1) }));
assert(questions.length > 0, 'Missing structural questions');
const expected = { schemaVersion: 1, version,
  identity: [...markdown.matchAll(/^> (.+)$/gm)].map(match => match[1]), principles: questions };
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 1 && args[0] === '--write'), 'Usage: node scripts/check-principles.mjs [--write]');
if (args.includes('--write')) await fs.writeFile(new URL('principles.json', root), JSON.stringify(expected, null, 2) + '\n');
else assert.deepEqual(JSON.parse(await fs.readFile(new URL('principles.json', root), 'utf8')), expected);
console.log('Core JSON export matches the accepted principles, identity and version.');
