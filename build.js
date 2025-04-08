await esbuild.build({
  entryPoints: ["src/**/*.ts"],
  outdir: functionsOutputDir,
  platform: "node",
  format: "esm",
  target: "es2022",
  minify: !debug,
});

fs.cpSync("functions", functionsOutputDir, {
  recursive: true,
  filter: src => !src.endsWith(".ts"),
});
