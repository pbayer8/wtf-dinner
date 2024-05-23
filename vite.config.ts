import { sveltekit } from "@sveltejs/kit/vite";
import { searchForWorkspaceRoot, type UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
  optimizeDeps: {
    include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
  },
};

export default config;
