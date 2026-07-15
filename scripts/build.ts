import { Glob } from "bun";
import fs from "fs";
import path from "path";

const sourceDir = path.resolve(process.cwd(), "src");
const outputDir = path.resolve(process.cwd(), "functions");

export async function build() {
  const glob = new Glob("**/*.ts");
  const files = glob.scanSync(sourceDir);
  const entrypoints = [];

  while (true) {
    const file = files.next();
    if (file.done) {
      break;
    }
    if (!file.value.includes("__tests__")) {
      entrypoints.push(path.join(sourceDir, file.value));
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
}

if (import.meta.main) {
  build().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
