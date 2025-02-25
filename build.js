import fs from "fs";
import esbuild from "esbuild";

// ✅ Copy non-TS files after build
async function build() {
  await esbuild.build({
    entryPoints: ["src/**/*.ts"],
    outdir: "functions",
    platform: "node",
    format: "esm",
    target: "esnext",
    bundle: false,
  });

  // ✅ Copy static files
  fs.cpSync("src", "functions", {
    recursive: true,
    filter: (src) => !src.endsWith(".ts"),
  });

  console.log("Build complete! 🚀");
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
