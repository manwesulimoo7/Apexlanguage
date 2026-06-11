// Validates the YDS/YOKDIL question banks in content.json. Exit 0 if no errors.
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'content.json');

const errors = [];
let raw;
try {
  raw = fs.readFileSync(file, 'utf8');
} catch (e) {
  console.error('Cannot read content.json:', e.message);
  process.exit(1);
}

let content;
try {
  content = JSON.parse(raw);
} catch (e) {
  console.error('INVALID JSON:', e.message);
  process.exit(1);
}

const LV = ['B2', 'C1'];
const FIELD = ['fen', 'saglik', 'sosyal'];

const isStr = (v) => typeof v === 'string' && v.length > 0;
const isInt = (v) => Number.isInteger(v);

// Collect every id across the whole document for uniqueness.
const allIds = [];
for (const key of Object.keys(content)) {
  if (Array.isArray(content[key])) {
    for (const item of content[key]) {
      if (item && typeof item.id === 'string') allIds.push(item.id);
    }
  }
}
const seen = new Map();
for (const id of allIds) seen.set(id, (seen.get(id) || 0) + 1);
for (const [id, n] of seen) if (n > 1) errors.push(`Duplicate id across document: "${id}" appears ${n} times`);

function checkCommon(item, type) {
  const where = `${type} ${item && item.id ? item.id : '(no id)'}`;
  if (!isStr(item.id)) errors.push(`${where}: id missing/empty`);
  else if (!item.id.includes('_x1_')) errors.push(`${where}: new id must contain "_x1_"`);
  if (!LV.includes(item.lv)) errors.push(`${where}: lv must be B2/C1 (got ${JSON.stringify(item.lv)})`);
  if (!FIELD.includes(item.field)) errors.push(`${where}: field must be fen/saglik/sosyal (got ${JSON.stringify(item.field)})`);
}

function checkOptsAns(item, opts, ans, where) {
  if (!Array.isArray(opts) || opts.length !== 4) errors.push(`${where}: opts must be array of length 4 (got ${Array.isArray(opts) ? opts.length : typeof opts})`);
  else if (!opts.every(isStr)) errors.push(`${where}: every opt must be a non-empty string`);
  if (!isInt(ans) || ans < 0 || ans > 3) errors.push(`${where}: ans must be int in 0..3 (got ${JSON.stringify(ans)})`);
}

// --- cloze ---
(content.cloze || []).forEach((it) => {
  const where = `cloze ${it.id}`;
  checkCommon(it, 'cloze');
  if (!isStr(it.title)) errors.push(`${where}: title missing`);
  if (!isStr(it.text)) errors.push(`${where}: text missing`);
  if (!Array.isArray(it.blanks)) { errors.push(`${where}: blanks missing`); return; }
  it.blanks.forEach((b, i) => {
    const w = `${where} blank#${i + 1}`;
    if (b.n !== i + 1) errors.push(`${w}: n should be ${i + 1} (got ${JSON.stringify(b.n)})`);
    checkOptsAns(b, b.opts, b.ans, w);
    if (!isStr(b.tr)) errors.push(`${w}: tr missing`);
    if (!isStr(b.en)) errors.push(`${w}: en missing`);
  });
  // count "(n) ____" markers
  const markers = (it.text.match(/\(\d+\)\s____/g) || []).length;
  if (markers !== it.blanks.length) errors.push(`${where}: marker count ${markers} != blanks length ${it.blanks.length}`);
  // each marker number present
  it.blanks.forEach((b, i) => {
    if (!new RegExp(`\\(${i + 1}\\)\\s____`).test(it.text)) errors.push(`${where}: missing marker "(${i + 1}) ____" in text`);
  });
});

// --- restate ---
(content.restate || []).forEach((it) => {
  const where = `restate ${it.id}`;
  checkCommon(it, 'restate');
  if (!isStr(it.stem)) errors.push(`${where}: stem missing`);
  checkOptsAns(it, it.opts, it.ans, where);
  if (!isStr(it.tr)) errors.push(`${where}: tr missing`);
  if (!isStr(it.en)) errors.push(`${where}: en missing`);
});

// --- oddout ---
(content.oddout || []).forEach((it) => {
  const where = `oddout ${it.id}`;
  checkCommon(it, 'oddout');
  if (!Array.isArray(it.sentences) || it.sentences.length !== 5) errors.push(`${where}: sentences must be array of length 5`);
  else if (!it.sentences.every(isStr)) errors.push(`${where}: every sentence must be a non-empty string`);
  if (!isInt(it.ans) || it.ans < 0 || it.ans > 4) errors.push(`${where}: ans must be int in 0..4 (got ${JSON.stringify(it.ans)})`);
  if (!isStr(it.tr)) errors.push(`${where}: tr missing`);
  if (!isStr(it.en)) errors.push(`${where}: en missing`);
});

// --- dialogue ---
(content.dialogue || []).forEach((it) => {
  const where = `dialogue ${it.id}`;
  checkCommon(it, 'dialogue');
  if (!Array.isArray(it.lines) || it.lines.length < 2) errors.push(`${where}: lines must be array (>=2)`);
  else {
    it.lines.forEach((l, i) => {
      if (l.sp !== 'A' && l.sp !== 'B') errors.push(`${where} line#${i}: sp must be "A" or "B"`);
      if (!isStr(l.t)) errors.push(`${where} line#${i}: t missing`);
    });
  }
  if (!isInt(it.blankIndex) || it.blankIndex < 0 || it.blankIndex >= (it.lines || []).length) errors.push(`${where}: blankIndex out of range`);
  else if (it.lines[it.blankIndex].t !== '____') errors.push(`${where}: lines[blankIndex].t must be exactly "____" (got ${JSON.stringify(it.lines[it.blankIndex].t)})`);
  checkOptsAns(it, it.opts, it.ans, where);
  if (!isStr(it.tr)) errors.push(`${where}: tr missing`);
  if (!isStr(it.en)) errors.push(`${where}: en missing`);
});

// --- paracomp ---
(content.paracomp || []).forEach((it) => {
  const where = `paracomp ${it.id}`;
  checkCommon(it, 'paracomp');
  if (!isStr(it.text)) errors.push(`${where}: text missing`);
  else if (!it.text.includes('----')) errors.push(`${where}: text must contain "----" marker`);
  checkOptsAns(it, it.opts, it.ans, where);
  if (!isStr(it.tr)) errors.push(`${where}: tr missing`);
  if (!isStr(it.en)) errors.push(`${where}: en missing`);
});

// --- translate ---
(content.translate || []).forEach((it) => {
  const where = `translate ${it.id}`;
  checkCommon(it, 'translate');
  if (!isStr(it.source)) errors.push(`${where}: source missing`);
  if (it.dir !== 'en2tr' && it.dir !== 'tr2en') errors.push(`${where}: dir must be en2tr/tr2en (got ${JSON.stringify(it.dir)})`);
  checkOptsAns(it, it.opts, it.ans, where);
  if (!isStr(it.tr)) errors.push(`${where}: tr missing`);
  if (!isStr(it.en)) errors.push(`${where}: en missing`);
});

// --- summary / distribution ---
const banks = ['cloze', 'restate', 'oddout', 'dialogue', 'paracomp', 'translate'];
const counts = {};
let total = 0;
const lvCount = { B2: 0, C1: 0 };
const fieldCount = { fen: 0, saglik: 0, sosyal: 0 };
const ansDist = {};
for (const b of banks) {
  const arr = content[b] || [];
  counts[b] = arr.length;
  total += arr.length;
  for (const it of arr) {
    if (lvCount[it.lv] !== undefined) lvCount[it.lv]++;
    if (fieldCount[it.field] !== undefined) fieldCount[it.field]++;
    if (b === 'cloze') {
      for (const bl of (it.blanks || [])) ansDist[bl.ans] = (ansDist[bl.ans] || 0) + 1;
    } else {
      ansDist[it.ans] = (ansDist[it.ans] || 0) + 1;
    }
  }
}

console.log('Counts:', counts, 'total', total);
console.log('lv:', lvCount, '=> B2', (100 * lvCount.B2 / total).toFixed(0) + '%', 'C1', (100 * lvCount.C1 / total).toFixed(0) + '%');
console.log('field:', fieldCount);
console.log('ans distribution (incl. cloze blanks):', ansDist);
const dirs = (content.translate || []).reduce((a, it) => { a[it.dir] = (a[it.dir] || 0) + 1; return a; }, {});
console.log('translate dirs:', dirs);

if (errors.length) {
  console.error('\nVALIDATION FAILED with ' + errors.length + ' error(s):');
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}
console.log('\nVALIDATION PASSED: 0 errors.');
process.exit(0);
