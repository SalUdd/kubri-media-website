import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import KubriStandard from "@/components/KubriStandard";
import Bridge from "@/components/Bridge";
import CredibilityStrip from "@/components/CredibilityStrip";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Guardrails from "@/components/Guardrails";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-slate-950">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-0 h-[720px] overflow-hidden"
      >
        {/* Ambient glow - the only gradient */}
        <div className="absolute left-1/2 top-[-320px] h-[640px] w-[1400px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[140px]" />
        {/* Focal center - tighter indigo layer */}
        <div className="absolute left-1/2 top-[-220px] h-[440px] w-[980px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-[120px]" />
        {/* structural grid - bridge motif; do not replace with generic decoration. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(100 116 139 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(100 116 139 / 0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1">
        <Hero />
        <CredibilityStrip />
        <Problem />
        <KubriStandard />
        <Bridge />
        <Process />
        <Guardrails />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}