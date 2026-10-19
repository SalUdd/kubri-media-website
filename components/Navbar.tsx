export default function Navbar() {
  const links = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Pricing", href: "#pricing" },
    { label: "Trust", href: "#trust" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 transition-opacity duration-200 hover:opacity-90"
        >
          <span className="text-lg font-semibold tracking-tight text-white">
            Kubri
          </span>
          <span className="text-indigo-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://calendly.com/kubri/strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-500 px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Book a Strategy Call
        </a>
      </div>
    </header>
  );
}