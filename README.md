# tailwind-bunext-plugin

```ts
// config/server.ts

import type { ServerConfig } from "bunext-js/internal/types.ts";
import TailwindPlugin from "tailwind-bunext-plugin";

const Config: ServerConfig = {
  HTTPServer: {
    port: 3010,
    threads: 1,
  },
  Dev: {
    hotServerPort: 3005,
  },
  build: {
    plugins: [],
  },
  session: {
    timeout: 3600,
    type: "database:hard",
  },
  router: {
    dynamicPaths: [],
  },
  bunext_plugins: [
    TailwindPlugin
  ],
};

export default Config;
```