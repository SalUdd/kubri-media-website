import { Shield } from "lucide-react";

export default function Guardrails() {
  return (
    <section id="trust" className="relative scroll-mt-20 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-indigo-400">
          <Shield className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </div>

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          TRUST & SAFETY
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
          Strict Brand Safety & Vetted Audiences.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Every creator in our network is manually vetted for technical accuracy, real engagement, and strict brand safety. No controversial drama, no fake view farms. Just pure, developer-focused education.
        </p>
      </div>
    </section>
  );
}