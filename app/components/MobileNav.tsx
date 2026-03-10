"use client";

import { useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 rounded-lg p-2 transition hover:bg-white/5"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-0.5 w-5 bg-neutral-400 transition-all ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-neutral-400 transition-all ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-neutral-400 transition-all ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed right-6 top-20 z-50 flex flex-col gap-2 rounded-xl border border-white/10 bg-neutral-900/95 p-4 shadow-xl backdrop-blur-xl"
            role="navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-neutral-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
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
