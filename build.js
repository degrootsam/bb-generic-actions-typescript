import fs from "fs";
import esbuild from "esbuild";

const outdir = "dist";

async function build() {
  await esbuild.build({
    entryPoints: ["functions/**/*.ts"],
    outdir,
    platform: "node",
    format: "esm",
    target: "esnext",
    bundle: false,
  });

  fs.cpSync("functions", outdir, {
    recursive: true,
    filter: src => !src.endsWith(".ts"),
  });

  console.log("Build complete! 🚀");
}

build().catch(error => {
  console.error("Build failed:", error);
  process.exit(1);
});
