export default function Bridge() {
  return (
    <section aria-label="The bridge between SaaS and technical creators" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          THE BRIDGE
        </p>

        <p className="mx-auto mb-12 max-w-md text-sm leading-relaxed text-slate-400">
          Your product on one side. The developers who actually use it on the other.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-4">

          <div className="flex flex-col gap-2">
            <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-slate-300">SaaS</div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-slate-300">DevTool</div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-slate-300">API</div>
          </div>

          <div aria-hidden className="hidden h-px w-12 border-t border-dashed border-indigo-500/40 md:block md:w-16" />
          <div aria-hidden className="h-6 w-px border-l border-dashed border-indigo-500/40 md:hidden" />

          <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]">
            <span className="font-mono text-sm font-medium text-white">Kubri</span>
          </div>

          <div aria-hidden className="hidden h-px w-12 border-t border-dashed border-indigo-500/40 md:block md:w-16" />
          <div aria-hidden className="h-6 w-px border-l border-dashed border-indigo-500/40 md:hidden" />

          <div className="flex flex-col gap-2">
            <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 font-mono text-xs text-slate-300">#rust</div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 font-mono text-xs text-slate-300">#k8s</div>
            <div className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 font-mono text-xs text-slate-300">#postgres</div>
          </div>

        </div>
      </div>
    </section>
  );
}