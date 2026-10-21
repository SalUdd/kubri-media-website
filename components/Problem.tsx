import { Clock, Eye, UserX } from "lucide-react";

const cards = [
  {
    icon: UserX,
    title: "The Wrong Audience",
    body: "A large following doesn't always mean the right audience. Your software needs to reach people who understand its value and have a reason to use it.",
  },
  {
    icon: Eye,
    title: "Vanity Metrics",
    body: "Views and follower counts only tell part of the story. What matters is whether your product is being introduced to a relevant, engaged audience.",
  },
  {
    icon: Clock,
    title: "Campaign Overhead",
    body: "Finding creators, negotiating terms, coordinating content, and managing delivery takes time your team could spend elsewhere.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          THE PROBLEM
        </p>

        <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
          Views mean little if you&apos;re reaching the wrong audience.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-[background-color,border-color,transform] duration-200 hover:border-white/20 hover:bg-slate-900/60 hover:-translate-y-0.5"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-indigo-400 transition-colors duration-200 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-base leading-relaxed text-slate-400">
          That&apos;s why we focus on relevance, credibility, and execution - not follower count alone.
        </p>
      </div>
    </section>
  );
}