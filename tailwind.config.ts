import type { Config } from "tailwindcss";
import { novaTailwindTheme } from "@nova-design-system/nova-base/theme";

export default {
  theme: novaTailwindTheme,
  safelist: ["visually-hidden"],
  darkMode: ['class', '[class="dark"'],
} satisfies Config;
