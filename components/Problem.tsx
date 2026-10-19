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
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60 text-indigo-400">
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