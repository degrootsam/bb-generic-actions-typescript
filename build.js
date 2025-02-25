import fs from "fs";
import esbuild from "esbuild";

// ✅ Copy non-TS files after build
async function build() {
  await esbuild.build({
    entryPoints: ["src/**/*.ts"], // ✅ Compile all TS files, keeping structure
    outdir: "functions",
    platform: "node",
    format: "cjs",
    target: "esnext",
    bundle: false, // ✅ Disable bundling to keep individual files
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
