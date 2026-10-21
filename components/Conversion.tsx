import { MessageSquare } from "lucide-react";
import { config } from "@/lib/config";

export default function Conversion() {
  return (
    <section id="conversion" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-indigo-500/[0.04] p-8 text-center shadow-[0_0_80px_-20px_rgba(99,102,241,0.4)] ring-1 ring-inset ring-indigo-500/20 sm:p-10">
          <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-indigo-400">
            <MessageSquare className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
            Your next creator partnership starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Tell us about your product, the developers you&apos;re trying to reach, and what you want to achieve. We&apos;ll discuss how a technical creator campaign could fit your goals.
          </p>

          <a
            href={config.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {config.booking.label}
          </a>

          <p className="mt-4 text-xs text-slate-500">
            A conversation about your product, audience, and potential campaign approach.
          </p>
        </div>
      </div>
    </section>
  );
}