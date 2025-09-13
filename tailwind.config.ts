import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.{css}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: { brand: { blue: "#2563EB", black: "#0B0F1A" } },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
      boxShadow: { glass: "0 10px 40px rgba(0,0,0,0.12)" }
    }
  },
  plugins: []
} satisfies Config;