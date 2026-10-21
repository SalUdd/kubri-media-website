import { Braces, Target, Workflow } from "lucide-react";

export default function CredibilityStrip() {
  return (
    <section
      aria-label="What we bring to every partnership"
      className="relative border-y border-white/5 bg-slate-950/50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <Braces
              className="mb-3 h-5 w-5 text-indigo-400"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mb-1 text-sm font-semibold tracking-tight text-white">
              Technical Understanding
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              We understand the products and audiences behind developer-focused
              software.
            </p>
          </div>

          <div>
            <Target
              className="mb-3 h-5 w-5 text-indigo-400"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mb-1 text-sm font-semibold tracking-tight text-white">
              Relevant Creator Selection
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Creator recommendations are based on audience fit, technical
              relevance, and content quality.
            </p>
          </div>

          <div>
            <Workflow
              className="mb-3 h-5 w-5 text-indigo-400"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mb-1 text-sm font-semibold tracking-tight text-white">
              End-to-End Coordination
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              From outreach and negotiations to approvals and publication, we
              manage the moving parts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}