import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const read = (name) => fs.readFileSync(path.join(root, name), "utf8");
const checks = [];
const assert = (condition, label) => {
  if (!condition) throw new Error(label);
  checks.push(label);
};

const html = read("index.html");
const deckMatch = html.match(/<script id="deckData" type="application\/json">([\s\S]*?)<\/script>/);
assert(deckMatch, "deckData exists");
const slides = JSON.parse(deckMatch[1]);
const talk = read("talk-script.md");
const headings = [...talk.matchAll(/^## (\d+)\. (.+)$/gm)].map((match) => ({
  number: Number(match[1]),
  title: match[2],
}));
const bodies = talk.split(/^## \d+\. .+$/gm).slice(1).map((body) => body.trim());

assert(slides.length === 28, "slide count is 28");
assert(headings.length === 28, "talk script has 28 sections");
assert(headings.every((heading, index) => heading.number === index + 1 && heading.title === slides[index].title), "slide and talk titles match");
assert(bodies.every((body, index) => body === slides[index].notes.trim()), "speaker notes and talk script match");

let talkMinutes = 0;
for (const slide of slides.slice(0, 25)) {
  const timing = slide.notes.match(/進行目安：(?:(\d+)分)?(?:(\d+)秒)?/);
  assert(timing, `timing exists: ${slide.title}`);
  talkMinutes += Number(timing[1] || 0) + Number(timing[2] || 0) / 60;
}
assert(talkMinutes === 60, "talk timings total 60 minutes");

const joined = slides.map((slide) => `${slide.title}\n${slide.html}\n${slide.notes}`).join("\n");
for (const token of ["Gemini", "AI Slides", "AI Docs", "AI Sheets", "画像生成", "Skill", "Workflow", "LLM", "TOOLS", "CONTEXT", "PERMISSION"]) {
  assert(joined.includes(token), `required topic exists: ${token}`);
}

for (const token of ["INPUT", "LOGIC", "QUALITY", "OUTPUT", "Owner", "Version"]) {
  assert(slides[19].html.includes(token), `Skill Card element exists: ${token}`);
}
for (const token of ["TRIGGER", "ACTION", "TEST RUN", "CONFIRM", "HISTORY", "TURN ON"]) {
  assert(slides[20].html.includes(token), `official Workflow element exists: ${token}`);
}
assert(!slides[20].html.includes("BRANCH") && !slides[20].html.includes("APPROVAL"), "unofficial Workflow nodes are not presented as official UI");

for (const token of ["13件", "858,640円", "差額0円", "INV-3112", "INV-3104-再送", "Test Record"]) {
  assert(slides[26].html.includes(token) || slides[26].notes.includes(token), `exercise value exists: ${token}`);
}

for (const src of [...joined.matchAll(/src=['"]([^'"]+)['"]/g)].map((match) => match[1]).filter((src) => src.startsWith("./"))) {
  assert(fs.existsSync(path.join(root, src)), `asset exists: ${src}`);
}

const instructor = read("instructor-guide.md");
const demo = read("demo-guide.md");
const exercise = read("exercise-sheet.md");
for (const document of [instructor, demo, exercise]) {
  for (const token of ["Skill Card", "Workflow Card", "Test Record", "Turn On"]) {
    assert(document.includes(token), `support document contains ${token}`);
  }
  assert(document.includes("Genspark研修_Workflowテスト証拠.xlsx"), "support document references the three-case evidence workbook");
}
assert(demo.indexOf("## 2〜11分｜AI Sheets") < demo.indexOf("## 11〜18分｜主要成果物"), "demo runs Sheets before other outputs");
assert(demo.indexOf("## 18〜23分｜成功した一件をSkill") < demo.indexOf("## 23〜30分｜Workflow"), "demo runs Skill before Workflow");

const handout = read("participant/handout.html");
assert((handout.match(/class="step"/g) || []).length === 6, "handout has six timing steps");
for (const token of ["0–4", "4–9", "9–16", "16–23", "23–27", "27–30"]) {
  assert(handout.includes(token), `handout timing exists: ${token}`);
}
assert((handout.match(/class="blank"/g) || []).length === 6, "handout asks participants to complete six key fields");
for (const token of ["Skill Card", "Workflow Card", "Test Record", "正常系", "例外系", "Hard Stop", "手動復旧", "Owner / Version"]) {
  assert(handout.includes(token), `handout contains ${token}`);
}
for (const token of ["13件、入力858,640円、出力858,640円、差額0円", "INV-3112", "INV-3104-再送"]) {
  assert(handout.includes(token), `handout exact value exists: ${token}`);
}

const hash = (name) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, name))).digest("hex");
assert(hash("demo-data/Genspark研修_飲食店週次支出照合デモ.xlsx") === hash("participant/Genspark研修_飲食店週次支出照合デモ.xlsx"), "demo and participant Excel files match");
assert(fs.existsSync(path.join(root, "demo-data/Genspark研修_Workflowテスト証拠.xlsx")), "demo evidence workbook exists");
assert(fs.existsSync(path.join(root, "participant/Genspark研修_Workflowテスト証拠.xlsx")), "participant evidence workbook exists");
assert(hash("demo-data/Genspark研修_Workflowテスト証拠.xlsx") === hash("participant/Genspark研修_Workflowテスト証拠.xlsx"), "demo and participant evidence workbooks match");
assert(handout.includes("Genspark Run Historyの実ログではなく"), "handout distinguishes tabletop evidence from Genspark Run History");
for (const token of ["3件・600,000円", "差額1,000円", "必須ID欠落"]) {
  assert(exercise.includes(token) && handout.includes(token), `three-case evidence value is synchronized: ${token}`);
}

console.log(JSON.stringify({
  ok: true,
  checks: checks.length,
  slides: slides.length,
  talkSections: headings.length,
  talkMinutes,
}, null, 2));
