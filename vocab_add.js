// Appends vocab entries to content.json from a data module.
// Usage: node vocab_add.js <datafile.js>
// Data format: module.exports = [ [w, lv, pos, tr, ex], ... ]
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'content.json');
const content = JSON.parse(fs.readFileSync(file, 'utf8'));

const dataFile = process.argv[2];
if (!dataFile) { console.error('Usage: node vocab_add.js <datafile.js>'); process.exit(1); }
const rows = require(path.resolve(dataFile));

const have = new Set(content.vocab.map(v => v.w.toLowerCase()));
let added = 0, skipped = 0;
for (const [w, lv, pos, tr, ex] of rows) {
  if (have.has(w.toLowerCase())) { skipped++; continue; }
  content.vocab.push({ id: 'ext_' + w.toLowerCase().replace(/[^a-z0-9]+/g, '_'), lv, w, pos, tr, ex });
  have.add(w.toLowerCase());
  added++;
}
fs.writeFileSync(file, JSON.stringify(content, null, 2));
console.log('vocab added:', added, 'skipped (already present):', skipped, 'total:', content.vocab.length);
