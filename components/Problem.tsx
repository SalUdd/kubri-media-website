import { Banknote, Bot, Clock } from "lucide-react";

const cards = [
  {
    icon: Banknote,
    title: "The Influencer Tax",
    body: "Paying lifestyle influencers for audiences that will never buy your B2B software.",
  },
  {
    icon: Bot,
    title: "Bot Traffic",
    body: "Paying for views that vanish the second the video is posted.",
  },
  {
    icon: Clock,
    title: "Wasted Time",
    body: "Founders spending 20 hours a week cold-DMing creators instead of building their product.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
          THE PROBLEM
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-[background-color,border-color,transform] duration-200 hover:border-white/20 hover:bg-slate-900/60 hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-indigo-400 transition-colors duration-200 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}