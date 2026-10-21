import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Your Product",
    body: "We discuss your software, target audience, goals, and budget to establish what a successful campaign should aim to achieve.",
  },
  {
    number: "02",
    title: "Find & Secure Creators",
    body: "We research and shortlist relevant technical creators, evaluate their suitability, and coordinate outreach and negotiations.",
  },
  {
    number: "03",
    title: "Coordinate & Approve",
    body: "We manage campaign briefs, deliverables, and content reviews while keeping your team involved in important decisions.",
  },
  {
    number: "04",
    title: "Launch & Review",
    body: "We coordinate publication and provide a summary of available performance metrics so you can evaluate the campaign.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          THE PROCESS
        </p>

        <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
          From first conversation to published campaign.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, body }) => (
            <div
              key={number}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-[background-color,border-color,transform] duration-200 hover:border-white/20 hover:bg-slate-900/60 hover:-translate-y-0.5"
            >
              <p className="mb-3 font-mono text-2xl tracking-widest text-indigo-500/60">
                {number}
              </p>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#conversion"
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-indigo-400 transition-colors duration-200 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
          >
            Start the process
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}