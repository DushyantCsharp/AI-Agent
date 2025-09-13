import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-xl transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue disabled:opacity-50 disabled:cursor-not-allowed select-none";
    const variants = {
      primary: "relative bg-brand-blue text-white shadow-glass hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0",
      outline: "border border-black/10 dark:border-white/15 text-gray-900 dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.06]",
      ghost: "text-gray-900 dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
    };
    const sizes = { sm: "h-9 px-4 text-sm", md: "h-11 px-6 text-base", lg: "h-12 px-7 text-base" };

    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";