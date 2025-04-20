import type { BunextPlugin } from "bunext-js/plugins/types.ts";

const cwd = process.cwd();

export default {
  serverStart: {
    async dev() {
      const pathToTailwindCss = `${cwd}/static/input-tailwind.css`;
      const TailwindCssFile = Bun.file(pathToTailwindCss);
      if ((await TailwindCssFile.exists()) == false) {
        await TailwindCssFile.write('@import "tailwindcss";');
      }
    },
  },
  before_build_main: () =>
    Bun.$`bunx @tailwindcss/cli -i ./static/input-tailwind.css -o ./static/style.css`
      .cwd(cwd)
      .quiet(),
} as BunextPlugin;
