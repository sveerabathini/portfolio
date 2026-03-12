import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="text-center">
        <p className="font-mono text-sm text-teal-700 dark:text-teal-500">$ cd /nonexistent</p>
        <p className="mt-2 font-mono text-neutral-500 dark:text-neutral-400">
          bash: cd: /nonexistent: No such file or directory
        </p>
        <h1 className="mt-12 font-mono text-6xl font-bold text-neutral-900 dark:text-white md:text-8xl">
          404
        </h1>
        <p className="mt-4 max-w-md text-neutral-500 dark:text-neutral-400">
          Command not found. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl border border-teal-600/50 px-6 py-3 font-mono text-sm text-teal-700 transition hover:border-teal-700 hover:bg-teal-50 dark:border-teal-500/30 dark:text-teal-400 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10"
          >
            <span>$</span>
            <span>cd ~</span>
          </Link>
          <Link
            href="/#projects"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:border-white/15 dark:text-neutral-300 dark:hover:bg-white/10"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:border-white/15 dark:text-neutral-300 dark:hover:bg-white/10"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:border-white/15 dark:text-neutral-300 dark:hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
