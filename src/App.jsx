import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

const exts = [".js", ".jsx", ".ts", ".tsx"];
const indexExts = exts.map((e) => "/index" + e);

function listFiles(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...listFiles(p));
    else if (exts.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

const importRe =
  /(?:import\s+(?:[^'"]+from\s+)?|import\()\s*['"](\.\/|\.\.\/)[^'"]+['"]|require\(\s*['"](\.\/|\.\.\/)[^'"]+['"]\s*\)/g;

function resolveCandidate(fromFile, rel) {
  const base = path.resolve(path.dirname(fromFile), rel);

  if (fs.existsSync(base) && fs.statSync(base).isFile()) return base;

  for (const e of exts) {
    if (fs.existsSync(base + e)) return base + e;
  }

  for (const ie of indexExts) {
    if (fs.existsSync(base + ie)) return base + ie;
  }

  return null;
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function findRelativeImports(code) {
  const results = [];
  let m;
  while ((m = importRe.exec(code))) {
    const full = m[0];
    const quoteMatch = full.match(/['"]([^'"]+)['"]/);
    if (!quoteMatch) continue;
    const spec = quoteMatch[1];
    if (spec.startsWith("./") || spec.startsWith("../")) results.push(spec);
  }
  return results;
}

let missing = [];

if (!fs.existsSync(SRC)) {
  console.error("❌ src/ not found.");
  process.exit(1);
}

const files = listFiles(SRC);

for (const f of files) {
  const code = read(f);
  const imports = findRelativeImports(code);

  for (const rel of imports) {
    const ok = resolveCandidate(f, rel);
    if (!ok) {
      missing.push({ file: path.relative(ROOT, f), import: rel });
    }
  }
}

if (missing.length) {
  console.error("❌ Missing import targets detected:\n");
  for (const x of missing) {
    console.error(`- ${x.file} -> ${x.import}`);
  }
  console.error("\nFix: create the missing file (even as a stub) OR remove/update the import.\n");
  process.exit(1);
}

console.log("✅ Import check passed. No missing relative import targets.");
