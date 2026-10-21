"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { config } from "@/lib/config";

const links = [
  { label: "Why Kubri", href: "/#why-kubri" },
  { label: "The Standard", href: "/#standard" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 transition-opacity duration-200 hover:opacity-90"
          >
            <span className="text-lg font-semibold tracking-tight text-white">
              Kubri
            </span>
            <span className="text-indigo-400">.</span>
          </Link>

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

          <div className="hidden md:block">
            <a
              href={config.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-indigo-500 px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {config.booking.label}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 md:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-slate-950/[0.98] backdrop-blur-md"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="relative flex h-full flex-col px-6 py-5">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
              >
                <span className="text-lg font-semibold tracking-tight text-white">
                  Kubri
                </span>
                <span className="text-indigo-400">.</span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
              >
                <X className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <a
                href={config.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-indigo-500 px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {config.booking.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}