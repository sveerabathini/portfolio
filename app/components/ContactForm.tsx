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
          className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500"
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
          className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500"
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
          className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500"
          placeholder="How can I help?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-50 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          Thanks! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try emailing directly.
        </p>
      )}
    </form>
  );
}
