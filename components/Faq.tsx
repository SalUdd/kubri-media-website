import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do you vet creators?",
    a: "We evaluate creators based on their technical niche, relevance to your product, audience engagement, content quality, and brand suitability. We review available performance signals and request additional audience information where appropriate.",
  },
  {
    q: "How much does a campaign cost?",
    a: "Every campaign is different. We provide a tailored proposal based on your objectives, creator selection, and project scope, with creator fees and management costs clearly outlined.",
  },
  {
    q: "Can we approve creators and content before publication?",
    a: "Yes. You'll have the opportunity to review proposed creators and agreed content deliverables through the campaign approval process.",
  },
  {
    q: "What results can we expect?",
    a: "Our focus is helping your product reach relevant technical audiences through credible creator partnerships. Campaign reporting covers agreed performance measures such as views, engagement, and other available metrics. We don't guarantee sales or conversions.",
  },
  {
    q: "What if you can't find the right creators?",
    a: "We'll reassess your requirements and discuss possible alternatives. If we don't believe a suitable partnership can be achieved, we'll communicate that rather than recommend creators who aren't a good fit.",
  },
  {
    q: "Which platforms do you work with?",
    a: "We focus on technical content creators. The platforms and content formats are selected based on your product, target audience, and campaign requirements.",
  },
  {
    q: "How long does a campaign take?",
    a: "Timelines depend on the campaign scope, creator availability, and content requirements. We'll discuss the expected schedule during planning and confirm milestones before the campaign begins.",
  },
  {
    q: "Can Kubri manage the entire creator partnership?",
    a: "Yes. We coordinate creator research, outreach, negotiations, campaign briefs, content reviews, and publication, with your team involved in key approvals.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-24 md:py-32">
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
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-left text-base font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 [&::-webkit-details-marker]:hidden">
                <span>{q}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}