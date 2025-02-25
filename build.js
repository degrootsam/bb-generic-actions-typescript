import esbuild from "esbuild";
import fs from "fs";

async function build() {
  await esbuild.build({
    entryPoints: ["src/**/*.ts"],
    outdir: "functions",
    bundle: true,
    platform: "node",
    format: "cjs",
    target: "esnext",

    plugins: [
      {
        name: "copy-static-files",
        setup(build) {
          build.onEnd(() => {
            fs.cpSync("src", "functions", {
              recursive: true,
              filter: (src) => !src.endsWith(".ts"),
            });
          });
        },
      },
    ],
  });

  console.log("Build complete! 🚀");
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
