import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import tsConfigPaths from "vite-tsconfig-paths";

const plugins = {
  plugins: [RubyPlugin(), tsConfigPaths()],
};

export default defineConfig({
  ...plugins,
});
