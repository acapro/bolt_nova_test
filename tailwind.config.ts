import type { Config } from "tailwindcss";
import {
  novaTailwindTheme,
  novaTailwindPlugin,
} from "@nova-design-system/nova-base/theme";

export default {
  content: ["./app/**/*.{html,js,ts,tsx,js,jsx}"],
  theme: novaTailwindTheme,
  plugins: [novaTailwindPlugin],
  safelist: ["visually-hidden"],
  darkMode: ["class", '[class="dark"'],
} satisfies Config;
