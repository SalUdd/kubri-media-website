export default function Solution() {
  return (
    <section id="standard" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.05] blur-[120px]" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-0 w-16 border-t border-dashed border-white/20" aria-hidden />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">THE STANDARD</p>
          <div className="h-0 w-16 border-t border-dashed border-white/20" aria-hidden />
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
          The Kubri Standard.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          We take the risk out of creator marketing. We source the exact
          technical channels your buyers watch, negotiate the rates, manage the
          creative briefs, and ensure the content actually converts.
        </p>
      </div>
    </section>
  );
}