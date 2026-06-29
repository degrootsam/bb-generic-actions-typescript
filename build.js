import { Glob } from "bun";
import fs from "fs";
import path from "path";

const sourceDir = path.resolve(process.cwd(), "src");
const outputDir = path.resolve(process.cwd(), "functions");

const glob = new Glob("**/*.ts");
const entrypoints = [];
for (const file of glob.scanSync(sourceDir)) {
  if (!file.includes("__tests__")) {
    entrypoints.push(path.join(sourceDir, file));
  }
}

await Bun.build({
  entrypoints,
  outdir: outputDir,
  target: "node",
  format: "esm",
});

fs.cpSync(sourceDir, outputDir, {
  recursive: true,
  filter: (src) => !src.endsWith(".ts"),
});
