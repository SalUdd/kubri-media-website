export default function Bridge() {
  return (
    <section aria-label="The bridge between SaaS and technical creators" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            THE BRIDGE
          </p>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
            Your product on one side. The developers who actually use it on the other.
          </p>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center md:gap-2">

          {/* LEFT - product card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 md:w-56">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Your Product
            </p>
            <p className="text-sm font-semibold tracking-tight text-white">
              Your SaaS
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              API, dashboard, or dev tool.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="rounded border border-white/10 bg-slate-950/60 px-2 py-0.5 font-mono text-[10px] text-slate-400">#SaaS</span>
              <span className="rounded border border-white/10 bg-slate-950/60 px-2 py-0.5 font-mono text-[10px] text-slate-400">#DevTool</span>
              <span className="rounded border border-white/10 bg-slate-950/60 px-2 py-0.5 font-mono text-[10px] text-slate-400">#API</span>
            </div>
          </div>

          {/* LEFT CONNECTOR */}
          <div aria-hidden className="hidden h-px w-12 border-t border-dashed border-indigo-500/40 md:block md:w-16" />
          <div aria-hidden className="mx-auto h-6 w-px border-l border-dashed border-indigo-500/40 md:hidden" />

          {/* CENTER - Kubri pill */}
          <div className="self-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]">
            <span className="font-mono text-sm font-medium text-white">Kubri</span>
          </div>

          {/* RIGHT CONNECTOR */}
          <div aria-hidden className="hidden h-px w-12 border-t border-dashed border-indigo-500/40 md:block md:w-16" />
          <div aria-hidden className="mx-auto h-6 w-px border-l border-dashed border-indigo-500/40 md:hidden" />

          {/* RIGHT - 3 creator cards stacked */}
          <div className="flex flex-col gap-2 md:w-64">

            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-indigo-400">01</span>
                <span className="font-mono text-[10px] text-slate-500">84k views · 12k subs</span>
              </div>
              <p className="mt-1 text-xs font-medium text-white">Rust / Postgres educator</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                <span className="font-mono text-[10px] text-slate-500">#rust</span>
                <span className="font-mono text-[10px] text-slate-500">#postgres</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-indigo-400">02</span>
                <span className="font-mono text-[10px] text-slate-500">62k views · 8k subs</span>
              </div>
              <p className="mt-1 text-xs font-medium text-white">Kubernetes / Go builder</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                <span className="font-mono text-[10px] text-slate-500">#k8s</span>
                <span className="font-mono text-[10px] text-slate-500">#go</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-indigo-400">03</span>
                <span className="font-mono text-[10px] text-slate-500">41k views · 5k subs</span>
              </div>
              <p className="mt-1 text-xs font-medium text-white">Python / ML practitioner</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                <span className="font-mono text-[10px] text-slate-500">#python</span>
                <span className="font-mono text-[10px] text-slate-500">#ml</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}