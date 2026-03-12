"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-lg p-2 transition hover:bg-neutral-100 dark:hover:bg-white/5"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span
          className={`block h-0.5 w-5 bg-neutral-600 transition-all dark:bg-neutral-400 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-neutral-600 transition-all dark:bg-neutral-400 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-neutral-600 transition-all dark:bg-neutral-400 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm dark:bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed right-6 top-20 z-50 flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/95"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] min-w-full items-center rounded-lg px-4 py-3 text-sm text-neutral-700 transition hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/30 dark:text-neutral-300 dark:hover:bg-teal-500/10 dark:hover:text-teal-400 dark:focus:ring-teal-500/30"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
