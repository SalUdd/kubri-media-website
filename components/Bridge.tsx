"use client";

import { useState, type KeyboardEvent } from "react";

type Creator = {
  number: string;
  title: string;
  fit: string;
};

type Category = {
  id: string;
  label: string;
  product: {
    name: string;
    subtitle: string;
    tags: string[];
  };
  creators: Creator[];
};

const categories: Category[] = [
  {
    id: "api",
    label: "Developer API",
    product: {
      name: "Your API",
      subtitle: "REST or GraphQL endpoints",
      tags: ["#api", "#backend", "#sdk"],
    },
    creators: [
      {
        number: "01",
        title: "Backend Engineering Educator",
        fit: "Creates tutorials around APIs, databases, and backend development workflows.",
      },
      {
        number: "02",
        title: "API Tutorial Creator",
        fit: "Focuses on API integration patterns, SDKs, and developer onboarding.",
      },
      {
        number: "03",
        title: "Software Architecture Specialist",
        fit: "Explains system design and integration across distributed services.",
      },
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps Tool",
    product: {
      name: "Your DevOps Tool",
      subtitle: "CI/CD, observability, or infrastructure",
      tags: ["#devops", "#cloud", "#sre"],
    },
    creators: [
      {
        number: "01",
        title: "DevOps Educator",
        fit: "Covers CI/CD pipelines, containerization, and deployment workflows.",
      },
      {
        number: "02",
        title: "Cloud Infrastructure Creator",
        fit: "Teaches cloud services, infrastructure-as-code, and production scaling patterns.",
      },
      {
        number: "03",
        title: "Site Reliability Specialist",
        fit: "Explains monitoring, observability, and production reliability.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Developer Tool",
    product: {
      name: "Your AI Tool",
      subtitle: "LLM SDKs, agents, or developer workflows",
      tags: ["#ai", "#llm", "#ml"],
    },
    creators: [
      {
        number: "01",
        title: "AI Engineering Educator",
        fit: "Creates content on LLM integration, prompt engineering, and AI workflows.",
      },
      {
        number: "02",
        title: "Developer Workflow Creator",
        fit: "Covers developer tooling and AI-assisted coding workflows.",
      },
      {
        number: "03",
        title: "ML Engineering Specialist",
        fit: "Explains model training, deployment, and ML infrastructure.",
      },
    ],
  },
];

export default function Bridge() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + categories.length) % categories.length;
    const nextId = categories[nextIndex].id;
    setActiveId(nextId);
    document.getElementById(`tab-${nextId}`)?.focus();
  };

  return (
    <section id="bridge" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            THE BRIDGE
          </p>
          <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
            Connecting your product with the right technical voices.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Not every creator is right for every product. We look at what your
            software does, who it&apos;s designed for, and which creators are
            best positioned to introduce it to a relevant audience.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Product category examples"
          className="mx-auto mb-10 flex w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/40 p-1.5"
        >
          {categories.map((category, index) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                id={`tab-${category.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={
                  isActive
                    ? "flex-1 whitespace-nowrap rounded-lg bg-indigo-500 px-3 py-2 text-xs font-medium text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-4 sm:text-sm"
                    : "flex-1 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 sm:px-4 sm:text-sm"
                }
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center md:gap-3"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 md:w-56">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Your Product
            </p>
            <p className="text-sm font-semibold tracking-tight text-white">
              {active.product.name}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              {active.product.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {active.product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-slate-950/60 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div aria-hidden className="hidden h-px w-12 border-t border-dashed border-indigo-500/40 md:block md:w-16" />
          <div aria-hidden className="mx-auto h-6 w-px border-l border-dashed border-indigo-500/40 md:hidden" />

          <div className="self-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]">
            <span className="font-mono text-sm font-medium text-white">Kubri</span>
          </div>

          <div aria-hidden className="hidden h-px w-12 border-t border-dashed border-indigo-500/40 md:block md:w-16" />
          <div aria-hidden className="mx-auto h-6 w-px border-l border-dashed border-indigo-500/40 md:hidden" />

          <div className="flex flex-col gap-2 md:w-72">
            {active.creators.map((creator) => (
              <div
                key={creator.number}
                className="rounded-xl border border-white/10 bg-slate-900/60 p-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-[11px] text-indigo-400">
                    {creator.number}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-white">
                  {creator.title}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                  {creator.fit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center font-mono text-[10px] text-slate-600">
          Illustrative creator matching example - not an actual campaign or
          creator recommendation.
        </p>
      </div>
    </section>
  );
}