// components/theme-provider.tsx (safe placeholder)
export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}) {
  // If you use next-themes, swap this with ThemeProvider from 'next-themes'
  return <>{children}</>;
}
