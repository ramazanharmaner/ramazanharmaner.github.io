import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="inline-flex items-center gap-1.5">
          Built with <Heart className="size-3.5 text-rose-400" aria-hidden /> Next.js & Tailwind
        </p>
        <p className="font-mono text-xs text-zinc-600">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
