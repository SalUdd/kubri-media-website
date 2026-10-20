import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 text-center md:pt-36 md:pb-40">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          YOUR BRIDGE TO TECHNICAL AUDIENCES
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Your SaaS deserves a real technical audience.{" "}
          <span className="mt-2 block text-3xl font-semibold tracking-tight text-balance text-slate-400 sm:text-4xl md:text-5xl lg:text-6xl">
            Not generic influencers.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          We connect B2B SaaS and DevTool brands with vetted technical creators
          who actually build with your software. High-intent views, zero fluff.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://calendly.com/kubri/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Book a Strategy Call
          </a>

          <a
            href="#process"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-6 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See how it works
            <ArrowDown className="ml-1.5 h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <div className="rounded-xl border border-white/10 bg-slate-900/60 shadow-[0_0_60px_-15px_rgba(99,102,241,0.35)] overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-950/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">kubri-match</span>
            </div>
            <div className="p-5 text-left font-mono text-xs leading-relaxed text-slate-400">
              <p><span className="text-indigo-400">$</span> kubri match <span className="text-slate-500">--saas=acme</span></p>
              <p className="mt-3"><span className="text-emerald-400/80">ok</span> scanning technical network<span className="text-slate-600">...</span></p>
              <p><span className="text-emerald-400/80">ok</span> 3 creators matched</p>
              <p><span className="text-emerald-400/80">ok</span> <span className="text-slate-500">avg subscribers:</span> 84k <span className="text-slate-600">·</span> <span className="text-slate-500">stack overlap:</span> 92%</p>
              <p><span className="text-emerald-400/80">ok</span> brand safety <span className="text-slate-500">:</span> 0 flags</p>
              <p className="mt-3"><span className="text-indigo-400">→</span> ready for strategy call<span className="kubri-cursor ml-1 text-indigo-400">▊</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}