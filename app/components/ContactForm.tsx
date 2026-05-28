"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeyplyq";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="min-h-[44px] w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground/40 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 invalid:border-red-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="min-h-[44px] w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground/40 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 invalid:border-red-400"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="min-h-[120px] w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder-foreground/40 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 invalid:border-red-400"
          placeholder="What would you like to discuss?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary flex min-h-[48px] min-w-[44px] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <div className="flex animate-[success-in_0.35s_ease-out] items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-400">
          <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm font-medium">Thanks! I&apos;ll get back to you soon.</p>
        </div>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try emailing directly.
        </p>
      )}
    </form>
  );
}
