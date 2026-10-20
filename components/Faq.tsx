import { ChevronDown } from "lucide-react";

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            QUESTIONS
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
            Common questions.
          </h2>
        </div>

        <div className="divide-y divide-white/5 border-y border-white/5">

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 [&::-webkit-details-marker]:hidden">
              <span>How do you vet creators?</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" strokeWidth={1.5} aria-hidden />
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {"Every creator in our network is manually reviewed for technical accuracy, audience quality, and brand safety before they're matched with any client. We watch their recent videos, check subscriber engagement, and confirm they actually build with the tooling they teach."}
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 [&::-webkit-details-marker]:hidden">
              <span>{"What's the timeline from call to launch?"}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" strokeWidth={1.5} aria-hidden />
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {"Most campaigns move from strategy call to published content in four to six weeks. That window covers creator matching, rate negotiation, briefing, and the creator's own production schedule."}
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 [&::-webkit-details-marker]:hidden">
              <span>Can I review the content before it goes live?</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" strokeWidth={1.5} aria-hidden />
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Yes. Every integration goes through a briefing stage where you approve the creative direction, and a final review pass before publish. You get veto power on anything that misrepresents your product.
            </p>
          </details>

          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 [&::-webkit-details-marker]:hidden">
              <span>What if none of the creators are a fit?</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" strokeWidth={1.5} aria-hidden />
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {"We only propose creators we're confident in. If the shortlist doesn't land, we re-source and re-pitch at no cost. The goal is a match that actually converts, not a transaction."}
            </p>
          </details>

        </div>
      </div>
    </section>
  );
}