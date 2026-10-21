import { ArrowRight } from "lucide-react";

const criteria = [
  {
    number: "01",
    title: "Product & Audience Fit",
    body: "Creators whose content and audience align with your product and the developers you're trying to reach.",
  },
  {
    number: "02",
    title: "Engagement Quality",
    body: "We look beyond follower counts, reviewing audience interactions and available engagement signals.",
  },
  {
    number: "03",
    title: "Technical Credibility",
    body: "Creators who can explain technical concepts clearly and demonstrate software in a way that fits their content.",
  },
  {
    number: "04",
    title: "Content & Brand Quality",
    body: "Production standards, communication, and content suitability are considered before we make a recommendation.",
  },
];

export default function KubriStandard() {
  return (
    <section id="standard" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">

          <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              THE KUBRI STANDARD
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
              The right creator. The right audience. The right campaign.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
              A great sponsorship isn&apos;t just about reach. We evaluate how well a creator understands your category, whether their audience matches your buyers, and how naturally your product fits their content.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Then we coordinate the campaign from initial outreach through publication and performance reporting.
            </p>

            <a
              href="#why-kubri"
              className="mt-8 inline-flex items-center gap-1.5 rounded text-sm font-medium text-indigo-400 transition-colors duration-200 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
            >
              Why we built Kubri
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </a>
          </div>

          <ol className="md:col-span-7">
            {criteria.map(({ number, title, body }) => (
              <li
                key={number}
                className="border-t border-white/10 py-6 md:py-8"
              >
                <div className="flex gap-6 md:gap-8">
                  <span className="shrink-0 font-mono text-sm text-indigo-500/60 tracking-widest">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li className="border-t border-white/10" aria-hidden />
          </ol>

        </div>
      </div>
    </section>
  );
}