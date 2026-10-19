import { Shield } from "lucide-react";

export default function Guardrails() {
  return (
    <section id="trust" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          TRUST & SAFETY
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
          Strict Brand Safety & Vetted Audiences.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Every creator in our network is manually vetted for technical accuracy,
          real engagement, and strict brand safety. No controversial drama, no fake
          view farms. Just pure, developer-focused education.
        </p>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/10 bg-indigo-500/[0.04] p-8 sm:p-10 text-center">
          <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-indigo-400">
            <Shield className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
            Ready to reach a real technical audience?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            {"Book a 30-minute call. We'll show you which creators fit your product — before you commit to anything."}
          </p>
          <a
            href="https://calendly.com/kubri/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}