import type { BunextPlugin } from "bunext-js/plugins/types.ts";
import { cpSync } from "fs";

const cwd = process.cwd();

export default {
  serverStart: {
    async dev() {
      const pathToTailwindCss = `${cwd}/static/input-tailwind.css`;
      const TailwindCssFile = Bun.file(pathToTailwindCss);
      if ((await TailwindCssFile.exists()) == false) {
        await TailwindCssFile.write('@import "tailwindcss";');
      }
      const pathToTailwindConfig = `${cwd}/tailwind.config.ts`;
      const TailwindConfigFile = Bun.file(pathToTailwindConfig);
      if ((await TailwindConfigFile.exists()) == false) {
        cpSync(
          `${cwd}/node_modules/tailwind-bunext-plugin/tailwind.config.ts`,
          pathToTailwindConfig
        );
      }
    },
  },
  before_build_main: () =>
    Bun.$`bunx @tailwindcss/cli -i ./static/input-tailwind.css -o ./static/style.css`
      .cwd(cwd)
      .quiet(),
} as BunextPlugin;
