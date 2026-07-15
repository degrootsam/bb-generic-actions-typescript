import { build } from "./build";
import { publish } from "./publish";

async function main() {
  await build();
  await publish();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
