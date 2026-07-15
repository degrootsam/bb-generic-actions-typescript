import { spawn } from "child_process";

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
}

publish().catch((err) => {
  console.error(err);
  process.exit(1);
});
