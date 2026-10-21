import { ArrowDown } from "lucide-react";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center md:pt-32 md:pb-20">
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
          {
            "We connect B2B SaaS and DevTool brands with credible technical creators who reach the developers you're trying to reach. From finding the right creators to managing the entire campaign, we handle the work behind the partnership."
          }
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={config.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {config.booking.label}
          </a>

          <a
            href="#how-it-works"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 px-6 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See How It Works
            <ArrowDown className="ml-1.5 h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 shadow-[0_0_60px_-15px_rgba(99,102,241,0.35)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-950/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">
                kubri evaluate
              </span>
            </div>
            <div className="p-5 text-left font-mono text-xs leading-relaxed text-slate-400">
              <p>
                <span className="text-indigo-400">$</span> kubri evaluate{" "}
                <span className="text-slate-500">--category=devtools</span>
              </p>
              <p className="mt-3">
                <span className="text-emerald-400/80">ok</span> identify product
                category
              </p>
              <p>
                <span className="text-emerald-400/80">ok</span> research relevant
                creator niches
              </p>
              <p>
                <span className="text-emerald-400/80">ok</span> review audience
                engagement
              </p>
              <p>
                <span className="text-emerald-400/80">ok</span> evaluate technical
                content quality
              </p>
              <p>
                <span className="text-emerald-400/80">ok</span> prepare creator
                shortlist
              </p>
              <p className="mt-3">
                <span className="text-indigo-400">→</span> 3 archetypes ready
                <span className="kubri-cursor ml-1 text-indigo-400">▊</span>
              </p>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[10px] text-slate-600">
            Illustrative workflow - not live data.
          </p>
        </div>
      </div>
    </section>
  );
}