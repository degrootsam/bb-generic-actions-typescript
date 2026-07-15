import { build } from "./build";
import { publish } from "./publish";
import { stat } from "fs/promises";
import path from "path";

async function main() {
  try {
    const configPath = path.join(process.cwd(), "config.json");
    await stat(configPath);
  } catch (err) {
    console.error(
      "Unable to publish functions: config.json is missing. Please create a config.json with:\n\t- 'applicationId'\n\t- 'host'.\n See: https://github.com/bettyblocks/cli/wiki/Functions:Advanced",
    );
    process.exit(1);
  }

  await build();
  await publish();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
