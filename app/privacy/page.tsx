import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Kubri Media collects, uses, and protects information. We do not use tracking cookies, analytics, or advertising pixels.",
  alternates: {
    canonical: "/privacy",
  },
};

async function getLastUpdated() {
  "use cache";
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export default async function PrivacyPage() {
  const lastUpdated = await getLastUpdated();

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950">
      <Navbar />

      <main className="relative z-10 flex-1">
        <section className="relative scroll-mt-20 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              LEGAL
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-12 space-y-10 text-base leading-relaxed text-slate-400">
              <div>
                <p>
                  Kubri Media (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates kubrimedia.com. This policy explains what information we collect, how we use it, and the choices available to you.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Information we collect
                </h2>
                <p>
                  We only collect information you provide directly to us:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-6">
                  <li>Your email address when you contact us at salah@kubrimedia.com or book a strategy call</li>
                  <li>Information you share during a strategy call (company name, product details, marketing goals)</li>
                </ul>
                <p className="mt-3">
                  We do not use tracking cookies, analytics platforms, or third-party advertising pixels. The site does not set any non-essential cookies.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  How we use your information
                </h2>
                <p>We use the information you share to:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-6">
                  <li>Respond to your inquiry</li>
                  <li>Schedule and conduct strategy calls</li>
                  <li>Prepare campaign proposals</li>
                  <li>Coordinate creator partnerships you engage us for</li>
                </ul>
                <p className="mt-3">
                  We never sell your information to third parties.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Third-party services
                </h2>
                <p>
                  When you book a strategy call, you interact directly with Calendly, which has its own privacy policy and data handling practices. We do not control how Calendly processes information. Our site is hosted on infrastructure provided by our hosting provider, which processes requests on our behalf under its own standard terms.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Data retention
                </h2>
                <p>
                  We retain communication and campaign records for as long as needed for legitimate business purposes, or as required by applicable law. You may request deletion at any time using the contact method below.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Your rights
                </h2>
                <p>
                  You may request access to, correction of, or deletion of personal information we hold about you by emailing salah@kubrimedia.com. We respond to verified requests within a reasonable timeframe.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Changes to this policy
                </h2>
                <p>
                  If we materially change how we handle information, we will update this page and revise the &quot;Last updated&quot; date above.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Contact
                </h2>
                <p>
                  Questions about this policy? Email{" "}
                  <a
                    href="mailto:salah@kubrimedia.com"
                    className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50"
                  >
                    salah@kubrimedia.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}