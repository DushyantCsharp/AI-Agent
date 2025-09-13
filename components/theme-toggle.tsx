"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <button aria-label="Toggle theme" className="h-9 w-9 rounded-lg border border-white/20" disabled />;
  }
  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 rounded-lg border border-white/20 hover:bg-white/10 flex items-center justify-center"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}