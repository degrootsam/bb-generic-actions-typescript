import { build } from "esbuild";
import fs from "fs";
import path from "path";

const sourceDir = path.resolve(process.cwd(), "src");
const outputDir = path.resolve(process.cwd(), "functions");

await build({
  entryPoints: [`${sourceDir}/**/*.ts`],
  outdir: outputDir,
  platform: "node",
  format: "esm",
  target: "es2022",
});

fs.cpSync(sourceDir, outputDir, {
  recursive: true,
  filter: src => !src.endsWith(".ts"),
});
