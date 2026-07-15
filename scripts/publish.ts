import { spawn } from "child_process";
import { rmdir } from "fs/promises";
import path from "path";

export async function publish() {
  await new Promise<void>((resolve, reject) => {
    const child = spawn("bb", ["functions", "publish"], {
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`bb functions publish exited with code ${code}`));
      }
    });
  });

  const functionsDir = path.join(process.cwd(), "functions");
  await rmdir(functionsDir);
}

publish().catch((err) => {
  console.error(err);
  process.exit(1);
});
