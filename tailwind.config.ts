// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css", // ✅ fixed glob
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: { brand: { blue: "#2563EB", purple: "#7C3AED" } },
    },
  },
  plugins: [],
} satisfies Config;
