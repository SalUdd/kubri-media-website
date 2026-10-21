import { Check } from "lucide-react";

const workflow = [
  "Creator Research",
  "Audience Evaluation",
  "Outreach & Negotiations",
  "Briefs & Content Coordination",
  "Client Approvals",
  "Publication & Reporting",
];

export default function WhyKubri() {
  return (
    <section id="why-kubri" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              WHY KUBRI
            </p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
              Technical understanding meets marketing execution.
            </h2>

            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              Effective creator partnerships require more than finding someone with a large audience. With backgrounds in both marketing and software development, we understand the importance of communicating technical products accurately, reaching relevant audiences, and coordinating campaigns professionally.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Kubri handles the research, communication, negotiations, and campaign coordination so your team doesn&apos;t have to manage every moving part.
            </p>

            <p className="mt-8 border-l-2 border-indigo-500/40 pl-5 text-sm leading-relaxed text-slate-500 italic">
              We started Kubri Media after years in marketing, watching technical products get marketed like consumer goods. Generic strategies. No product understanding. No clear reason why any specific creator should care. We built the agency we wished existed - one that starts with the product, not the follower count.
            </p>
          </div>

          <div className="md:self-center">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                What we manage
              </p>

              <ol className="relative">
                {workflow.map((item, index) => {
                  const isLast = index === workflow.length - 1;
                  return (
                    <li key={item} className="relative flex gap-4 pb-6 last:pb-0">
                      {!isLast && (
                        <div
                          aria-hidden
                          className="absolute left-3 top-6 h-full border-l border-dashed border-white/10"
                        />
                      )}
                      <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-slate-950 text-indigo-400">
                        <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p className="font-mono text-[10px] text-slate-600">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="text-sm font-medium text-white">
                          {item}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}