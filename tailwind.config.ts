import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  important: true,
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    // extend: {
    //   fontFamily: {
    //     // funky: ["Workbench", "sans-serif"],
    //     // mono: ["Xanh Mono", "monospace"],
    //     // mono: ["Kode Mono", "monospace"],
    //   },
    // },
  },
} satisfies Config;
