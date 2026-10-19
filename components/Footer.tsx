import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="rounded inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
            >
              <span className="text-lg font-semibold tracking-tight text-white">
                Kubri
              </span>
              <span className="text-indigo-400">.</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400">
              Kubri — Your bridge to technical audiences.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-3">
              Contact
            </p>
            <a
              href="mailto:salah@kubrimedia.com"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
            >
              salah@kubrimedia.com
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 mb-3">
              Connect
            </p>
            <a
              href="https://www.linkedin.com/company/kubrimedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
            >
              LinkedIn{" "}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-xs text-slate-500">
            © 2024 Kubri Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}