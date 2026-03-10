import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="text-center">
        <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400">$ cd /nonexistent</p>
        <p className="mt-2 font-mono text-neutral-500 dark:text-neutral-400">
          bash: cd: /nonexistent: No such file or directory
        </p>
        <h1 className="mt-12 font-mono text-6xl font-bold text-neutral-900 dark:text-white md:text-8xl">
          404
        </h1>
        <p className="mt-4 max-w-md text-neutral-500 dark:text-neutral-400">
          Command not found. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-500/50 px-6 py-3 font-mono text-sm text-cyan-600 transition hover:border-cyan-600 hover:bg-cyan-50 dark:border-cyan-400/30 dark:text-cyan-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10"
        >
          <span>$</span>
          <span>cd ~</span>
        </Link>
      </div>
    </main>
  );
}
