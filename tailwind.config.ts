import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",              // ✅ fixed glob
    // If you use pages/ too:
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { blue: "#2563EB", purple: "#7C3AED" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
