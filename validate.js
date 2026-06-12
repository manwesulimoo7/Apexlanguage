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
  else if (!/_x\d+_/.test(item.id)) errors.push(`${where}: new id must contain a batch marker like "_x1_"/"_x4_"`);
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

// ===========================================================================
// BATCH 2 — Learn modules (articles, listening, grammar, writing)
// ===========================================================================
const LV2 = ['B1', 'B2', 'C1'];
const ACCENTS = ['en-GB', 'en-US'];
const EXAMS = ['GENEL', 'IELTS', 'TOEFL'];

// Items in these modules carry their own ids ("_x2_"). Validate only the
// batch-2 records, identified by the "_x2_" marker in their id, so the
// original example records (ext_*) are left untouched.
const isB2id = (id) => typeof id === 'string' && id.includes('_x2_');

function checkItemOptsAns(item, optsLen, ansMax, where) {
  if (!Array.isArray(item.opts) || item.opts.length !== optsLen) errors.push(`${where}: opts must be array of length ${optsLen} (got ${Array.isArray(item.opts) ? item.opts.length : typeof item.opts})`);
  else if (!item.opts.every(isStr)) errors.push(`${where}: every opt must be a non-empty string`);
  if (!isInt(item.ans) || item.ans < 0 || item.ans > ansMax) errors.push(`${where}: ans must be int in 0..${ansMax} (got ${JSON.stringify(item.ans)})`);
}

// --- articles (opts length 4, items carry tr/en, body needs paragraph break) ---
(content.articles || []).filter((it) => isB2id(it.id)).forEach((it) => {
  const where = `article ${it.id}`;
  if (!it.id.includes('_x2_')) errors.push(`${where}: id must contain "_x2_"`);
  if (!LV2.includes(it.lv)) errors.push(`${where}: lv must be B1/B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!FIELD.includes(it.field)) errors.push(`${where}: field must be fen/saglik/sosyal (got ${JSON.stringify(it.field)})`);
  if (!isStr(it.title)) errors.push(`${where}: title missing`);
  if (!isStr(it.body)) errors.push(`${where}: body missing`);
  else if (!it.body.includes('\n\n')) errors.push(`${where}: body must contain a paragraph break "\\n\\n"`);
  if (!Array.isArray(it.items) || it.items.length < 1) errors.push(`${where}: items missing`);
  else it.items.forEach((q, i) => {
    const w = `${where} item#${i + 1}`;
    if (!isStr(q.q)) errors.push(`${w}: q missing`);
    checkItemOptsAns(q, 4, 3, w);
    if (!isStr(q.tr)) errors.push(`${w}: tr missing`);
    if (!isStr(q.en)) errors.push(`${w}: en missing`);
  });
});

// --- listening (opts length 3, accent constrained, items have no tr/en) ---
(content.listening || []).filter((it) => isB2id(it.id)).forEach((it) => {
  const where = `listening ${it.id}`;
  if (!it.id.includes('_x2_')) errors.push(`${where}: id must contain "_x2_"`);
  if (!LV2.includes(it.lv)) errors.push(`${where}: lv must be B1/B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!FIELD.includes(it.field)) errors.push(`${where}: field must be fen/saglik/sosyal (got ${JSON.stringify(it.field)})`);
  if (!ACCENTS.includes(it.accent)) errors.push(`${where}: accent must be en-GB/en-US (got ${JSON.stringify(it.accent)})`);
  if (!isStr(it.title)) errors.push(`${where}: title missing`);
  if (!isStr(it.script)) errors.push(`${where}: script missing`);
  if (!Array.isArray(it.items) || it.items.length < 1) errors.push(`${where}: items missing`);
  else it.items.forEach((q, i) => {
    const w = `${where} item#${i + 1}`;
    if (!isStr(q.q)) errors.push(`${w}: q missing`);
    checkItemOptsAns(q, 3, 2, w);
  });
});

// --- grammar (opts length 3, items carry tr; no field) ---
(content.grammar || []).filter((it) => isB2id(it.id)).forEach((it) => {
  const where = `grammar ${it.id}`;
  if (!it.id.includes('_x2_')) errors.push(`${where}: id must contain "_x2_"`);
  if (!LV2.includes(it.lv)) errors.push(`${where}: lv must be B1/B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!isStr(it.title)) errors.push(`${where}: title missing`);
  if (!isStr(it.exp)) errors.push(`${where}: exp missing`);
  if (!Array.isArray(it.items) || it.items.length < 1) errors.push(`${where}: items missing`);
  else it.items.forEach((q, i) => {
    const w = `${where} item#${i + 1}`;
    if (!isStr(q.q)) errors.push(`${w}: q missing`);
    checkItemOptsAns(q, 3, 2, w);
    if (!isStr(q.tr)) errors.push(`${w}: tr missing`);
  });
});

// --- writing (exam labels constrained; no items) ---
(content.writing || []).filter((it) => isB2id(it.id)).forEach((it) => {
  const where = `writing ${it.id}`;
  if (!it.id.includes('_x2_')) errors.push(`${where}: id must contain "_x2_"`);
  if (!LV2.includes(it.lv)) errors.push(`${where}: lv must be B1/B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!Array.isArray(it.exam) || it.exam.length < 1) errors.push(`${where}: exam must be a non-empty array`);
  else if (!it.exam.every((e) => EXAMS.includes(e))) errors.push(`${where}: exam values must be in {GENEL,IELTS,TOEFL} (got ${JSON.stringify(it.exam)})`);
  if (!isStr(it.type)) errors.push(`${where}: type missing`);
  if (!isInt(it.minWords) || it.minWords < 50) errors.push(`${where}: minWords must be a sensible integer (got ${JSON.stringify(it.minWords)})`);
  if (!isStr(it.prompt)) errors.push(`${where}: prompt missing`);
  if (!isStr(it.tips)) errors.push(`${where}: tips missing`);
  if (!isStr(it.structure)) errors.push(`${where}: structure missing`);
});

// ===========================================================================
// BATCH 4b — errorhunt, paraphrase, toeflint (new content types)
// ===========================================================================
// --- errorhunt: paragraph with exactly N embedded grammar errors ---
(content.errorhunt || []).forEach((it) => {
  const where = `errorhunt ${it.id}`;
  if (!isStr(it.id) || !it.id.startsWith('eh_')) errors.push(`${where}: id must start with "eh_"`);
  else if (!/_x\d+_/.test(it.id)) errors.push(`${where}: id must contain a batch marker like "_x4_"`);
  if (!LV2.includes(it.lv)) errors.push(`${where}: lv must be B1/B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!FIELD.includes(it.field)) errors.push(`${where}: field must be fen/saglik/sosyal (got ${JSON.stringify(it.field)})`);
  if (!isStr(it.text)) errors.push(`${where}: text missing`);
  if (!Array.isArray(it.errors) || it.errors.length < 1) { errors.push(`${where}: errors must be a non-empty array`); return; }
  it.errors.forEach((e, i) => {
    const w = `${where} error#${i + 1}`;
    if (!isStr(e.find)) { errors.push(`${w}: find missing`); return; }
    if (!isStr(e.fix)) errors.push(`${w}: fix missing`);
    if (!isStr(e.tr)) errors.push(`${w}: tr missing`);
    if (!isStr(e.en)) errors.push(`${w}: en missing`);
    // each "find" must appear in text exactly once (literal substring)
    if (isStr(it.text)) {
      const occ = it.text.split(e.find).length - 1;
      if (occ !== 1) errors.push(`${w}: find ${JSON.stringify(e.find)} must appear exactly once in text (found ${occ})`);
    }
  });
});

// --- paraphrase: source + transformation instruction + model answer (no field) ---
(content.paraphrase || []).forEach((it) => {
  const where = `paraphrase ${it.id}`;
  if (!isStr(it.id) || !it.id.startsWith('pp_')) errors.push(`${where}: id must start with "pp_"`);
  else if (!/_x\d+_/.test(it.id)) errors.push(`${where}: id must contain a batch marker like "_x4_"`);
  if (!LV2.includes(it.lv)) errors.push(`${where}: lv must be B1/B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!isStr(it.source)) errors.push(`${where}: source missing`);
  if (!isStr(it.instruction)) errors.push(`${where}: instruction missing`);
  if (!isStr(it.instruction_en)) errors.push(`${where}: instruction_en missing`);
  if (!isStr(it.sample)) errors.push(`${where}: sample missing`);
});

// --- toeflint: integrated writing (reading vs. lecture) ---
(content.toeflint || []).forEach((it) => {
  const where = `toeflint ${it.id}`;
  if (!isStr(it.id) || !it.id.startsWith('ti_')) errors.push(`${where}: id must start with "ti_"`);
  else if (!/_x\d+_/.test(it.id)) errors.push(`${where}: id must contain a batch marker like "_x4_"`);
  if (it.type !== 'writing') errors.push(`${where}: type must be "writing" (got ${JSON.stringify(it.type)})`);
  if (!LV.includes(it.lv)) errors.push(`${where}: lv must be B2/C1 (got ${JSON.stringify(it.lv)})`);
  if (!isStr(it.topic)) errors.push(`${where}: topic missing`);
  if (!isInt(it.minWords) || it.minWords < 50) errors.push(`${where}: minWords must be a sensible integer (got ${JSON.stringify(it.minWords)})`);
  if (!it.reading || !isStr(it.reading.title)) errors.push(`${where}: reading.title missing`);
  if (!it.reading || !isStr(it.reading.body)) errors.push(`${where}: reading.body missing`);
  else if (!it.reading.body.includes('\n\n')) errors.push(`${where}: reading.body must contain a paragraph break "\\n\\n"`);
  if (!it.lecture || !isStr(it.lecture.body)) errors.push(`${where}: lecture.body missing`);
  if (!isStr(it.prompt)) errors.push(`${where}: prompt missing`);
  if (!Array.isArray(it.keyPoints) || it.keyPoints.length !== 3) errors.push(`${where}: keyPoints must be an array of length 3`);
  else if (!it.keyPoints.every(isStr)) errors.push(`${where}: every keyPoint must be a non-empty string`);
});

// ===========================================================================
// VOCAB (all entries: ox5_/ext_ prefix, unique w, full fields, lv A1-C1)
// ===========================================================================
{
  const LV_VOCAB = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const wSeen = new Map();
  (content.vocab || []).forEach((v, i) => {
    const where = `vocab[${i}] ${v.id || '(no id)'}`;
    if (!isStr(v.id)) errors.push(`${where}: id missing`);
    else if (!/^(ox5|ext)_/.test(v.id)) errors.push(`${where}: id must start with "ox5_" or "ext_"`);
    if (!LV_VOCAB.includes(v.lv)) errors.push(`${where}: lv must be A1/A2/B1/B2/C1 (got ${JSON.stringify(v.lv)})`);
    if (!isStr(v.w)) errors.push(`${where}: w missing`);
    else {
      const k = v.w.toLowerCase();
      if (wSeen.has(k)) errors.push(`${where}: duplicate w "${v.w}" (also at index ${wSeen.get(k)})`);
      else wSeen.set(k, i);
    }
    if (!isStr(v.pos)) errors.push(`${where}: pos missing`);
    if (!isStr(v.tr)) errors.push(`${where}: tr missing`);
    if (!isStr(v.ex)) errors.push(`${where}: ex missing`);
  });
}

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

// --- batch 2 summary ---
const b2types = ['articles', 'listening', 'grammar', 'writing'];
const b2lv = { B1: 0, B2: 0, C1: 0 };
const b2field = { fen: 0, saglik: 0, sosyal: 0 };
const b2counts = {};
let b2total = 0;
const accentCount = {};
const examCount = {};
const itemAns = { articles: {}, listening: {}, grammar: {} };
for (const t of b2types) {
  const arr = (content[t] || []).filter((it) => isB2id(it.id));
  b2counts[t] = arr.length;
  b2total += arr.length;
  for (const it of arr) {
    if (b2lv[it.lv] !== undefined) b2lv[it.lv]++;
    if (it.field && b2field[it.field] !== undefined) b2field[it.field]++;
    if (it.accent) accentCount[it.accent] = (accentCount[it.accent] || 0) + 1;
    if (Array.isArray(it.exam)) for (const e of it.exam) examCount[e] = (examCount[e] || 0) + 1;
    if (itemAns[t] && Array.isArray(it.items)) for (const q of it.items) itemAns[t][q.ans] = (itemAns[t][q.ans] || 0) + 1;
  }
}
console.log('\n--- BATCH 2 ---');
console.log('counts:', b2counts, 'total', b2total);
console.log('lv:', b2lv, '=> B1', (100 * b2lv.B1 / b2total).toFixed(0) + '% B2', (100 * b2lv.B2 / b2total).toFixed(0) + '% C1', (100 * b2lv.C1 / b2total).toFixed(0) + '%');
console.log('field (articles+listening):', b2field);
console.log('listening accents:', accentCount);
console.log('writing exam labels:', examCount);
console.log('item ans positions:', itemAns);

if (errors.length) {
  console.error('\nVALIDATION FAILED with ' + errors.length + ' error(s):');
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}
console.log('\nVALIDATION PASSED: 0 errors.');
process.exit(0);
