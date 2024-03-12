import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      "@layout": "./src/layout",
      "@components": "./src/components",
      "@store": "./src/store",
      "@utils": "./src/utils",
      "@types": "./src/types",
    },
  },
});
