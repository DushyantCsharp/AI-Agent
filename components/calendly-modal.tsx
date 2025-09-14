// components/calendly-modal.tsx
"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  ButtonHTMLAttributes,
} from "react";
import { createPortal } from "react-dom";

const DEFAULT_URL = "https://calendly.com/automate-hq/30min";
const ENV_URL = (process.env.NEXT_PUBLIC_CALENDLY_URL ?? "").trim() || DEFAULT_URL;

type BaseProps = {
  /** Calendly event URL. Defaults to NEXT_PUBLIC_CALENDLY_URL or a safe fallback. */
  url?: string;
  /** Back-compat for old call sites: <CalendlyButton label="..."/> */
  label?: string;
  /** Heading shown in the modal header */
  title?: string;
  /** Called whenever the modal open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Custom class for the trigger button */
  className?: string;
};

type PopupBtnProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick"> & {
    /** Set to 'tab' to open Calendly in a new tab instead of a modal */
    mode?: "modal" | "tab";
    /** Optional children override the label text inside the button */
    children?: React.ReactNode;
  };

/** Utility: ensure URL looks safe and append hide_gdpr_banner=1 */
function buildCalendlySrc(raw: string) {
  const href = (raw || "").trim();
  if (!/^https?:\/\//i.test(href)) return null;
  return href.includes("?") ? `${href}&hide_gdpr_banner=1` : `${href}?hide_gdpr_banner=1`;
}

function lockBodyScroll(lock: boolean) {
  if (typeof document === "undefined") return;
  document.body.style.overflow = lock ? "hidden" : "";
}

/** Accessible focus trap (very lightweight) */
function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement>) {
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    lastFocused.current = (document.activeElement as HTMLElement) || null;

    // focus the first focusable element in container
    const container = containerRef.current;
    if (!container) return;

    const focusables = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusables[0] || container).focus();

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = Array.from(focusables).filter((n) => !n.hasAttribute("disabled"));
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      // restore focus
      lastFocused.current?.focus();
    };
  }, [active, containerRef]);
}

/** Primary popup button. Opens an in-app modal (default) or a new tab. */
export const CalendlyPopupButton = forwardRef<HTMLButtonElement, PopupBtnProps>(
  (
    {
      url,
      label,
      children,
      mode = "modal",
      title = "Schedule a 30-minute call",
      onOpenChange,
      className,
      ...btnProps
    },
    ref
  ) => {
    const href = (url ?? ENV_URL).trim();
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const setOpenSafe = useCallback(
      (next: boolean) => {
        setOpen(next);
        onOpenChange?.(next);
        lockBodyScroll(next);
      },
      [onOpenChange]
    );

    const onTrigger = useCallback(() => {
      if (!/^https?:\/\//i.test(href)) return;
      if (mode === "tab") {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }
      setOpenSafe(true);
    }, [href, mode, setOpenSafe]);

    // Close on ESC
    useEffect(() => {
      if (!open) return;
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpenSafe(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [open, setOpenSafe]);

    // Focus trap when open
    useFocusTrap(open, cardRef);

    // Close when clicking backdrop (but not the card)
    const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === dialogRef.current) setOpenSafe(false);
    };

    const iframeSrc = buildCalendlySrc(href);

    return (
      <>
        <button
          type="button"
          ref={ref}
          onClick={onTrigger}
          className={
            className ??
            "inline-flex items-center rounded-xl px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          }
          {...btnProps}
        >
          {children ?? label ?? "Book a 30-min demo"}
        </button>

        {open && typeof document !== "undefined" && createPortal(
          <div
            ref={dialogRef}
            className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onMouseDown={onBackdropClick}
          >
            <div
              ref={cardRef}
              className="w-full max-w-3xl max-h-[90dvh] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden outline-none"
              tabIndex={-1}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                <button
                  onClick={() => setOpenSafe(false)}
                  className="inline-flex items-center rounded-lg px-2 py-1 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="p-0">
                {iframeSrc ? (
                  <iframe
                    src={iframeSrc}
                    title="Calendly booking"
                    className="w-full h-[70vh] sm:h-[80vh]"
                    // Uncomment if your CSP explicitly allows these features:
                    // allow="clipboard-write *; geolocation *; microphone *; camera *"
                  />
                ) : (
                  <div className="p-6 text-sm text-red-600">
                    Invalid Calendly URL. Please set <code>NEXT_PUBLIC_CALENDLY_URL</code> to a valid event page.
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }
);
CalendlyPopupButton.displayName = "CalendlyPopupButton";

/** Back-compat alias so existing imports keep working */
export const CalendlyButton = CalendlyPopupButton;

/** Simple link that always opens a new tab to Calendly */
export function CalendlyLink({ url, label, children, className }: BaseProps & { children?: React.ReactNode }) {
  const href = (url ?? ENV_URL).trim();
  if (!/^https?:\/\//i.test(href)) return null;
  return (
    <a
      href={buildCalendlySrc(href) ?? href}
      target="_blank"
      rel="noreferrer"
      className={
        className ??
        "inline-flex items-center rounded-xl px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      }
    >
      {children ?? label ?? "Schedule a 30-minute call"}
    </a>
  );
}

/** Inline embed you can drop directly into a page section (no modal/trigger). */
export function CalendlyEmbed({
  url,
  title = "Schedule a 30-minute call",
  className,
  height = 820,
}: {
  url?: string;
  title?: string;
  className?: string;
  height?: number;
}) {
  const href = (url ?? ENV_URL).trim();
  const src = buildCalendlySrc(href);
  if (!src) return null;

  return (
    <iframe
      src={src}
      title={title}
      className={className ?? "w-full rounded-2xl border border-slate-200 dark:border-slate-800"}
      style={{ height }}
    />
  );
}
