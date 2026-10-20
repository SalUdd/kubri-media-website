const steps = [
  {
    number: "01",
    title: "Strategy call",
    body: "We audit your product, ICP, and current channels, and tell you exactly which creators fit. No pitch deck theater.",
  },
  {
    number: "02",
    title: "Creator match",
    body: "We hand-pick creators from our vetted network, negotiate rates, and share the shortlist for your approval.",
  },
  {
    number: "03",
    title: "Launch & measure",
    body: "We brief, review, and manage the integration end-to-end. You get the content and the conversion data.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-500/[0.05] blur-[100px]" />
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          THE PROCESS
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
          How it works.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-[background-color,border-color,transform] duration-200 hover:border-white/20 hover:bg-slate-900/60 hover:-translate-y-0.5"
            >
              <div className="mb-3 font-mono text-2xl tracking-widest text-indigo-500/60">
                {step.number}
              </div>

              <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}