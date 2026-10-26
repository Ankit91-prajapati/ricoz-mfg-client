import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Factory,
  Layers,
  Network,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Industrial geometric grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Technical Protocol Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1 text-xs font-mono text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse motion-reduce:animate-none" />
            <span className="text-slate-400">RCZ-OPS //</span>
            <span className="text-blue-300">INDUSTRIAL ERP CONTROL CENTER</span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-tight">
            Run your manufacturing floor from{" "}
            <span className="text-blue-400">one dashboard.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-relaxed">
            Ricoz unifies production plans, work order batches, equipment telemetry, quality
            inspections, and bills of materials into a singular industrial operating system.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-150 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-medium text-slate-200 transition duration-150 hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Sign In to Portal</span>
            </Link>

            <Link
              href="#modules"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-400 transition duration-150 hover:border-slate-700 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>

        {/* Industrial Shop-Floor Operations Console (Labeled as Illustrative Platform Preview) */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-6 shadow-2xl">
          {/* Top Control Header with Clear Preview Disclaimer */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                <Factory className="h-4 w-4" />
              </span>
              <div>
                <span className="text-xs font-semibold tracking-tight text-slate-100">
                  Platform Preview // Operations Console
                </span>
                <span className="ml-2 font-mono text-[10px] text-slate-500">SIMULATED SCHEMA DATA</span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse motion-reduce:animate-none" />
                Simulated Preview
              </span>
              <span className="hidden sm:inline-block text-slate-500">•</span>
              <span className="hidden sm:inline-block text-[11px] text-slate-400">23 System Routes</span>
            </div>
          </div>

          {/* 3 Real-World Schema Demonstration Cards */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* 1. Production Batch Card */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Batch Preview // Work Order
                  </span>
                  <span className="rounded bg-blue-600/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                    IN PROGRESS
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-100">WO-2026-084</p>
                <p className="text-xs text-slate-400">Precision Housing Casting Assembly</p>

                <div className="mt-3.5 space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-400">Yield Progress</span>
                    <span className="text-slate-100">482 / 500 units</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-blue-500" style={{ width: "96.4%" }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>Target Yield: 99.4%</span>
                    <span>Scrap Log: 3 units</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-800/80 pt-2.5 text-[11px] font-mono text-slate-400">
                Routing: <span className="text-blue-300">Milling → QC Bay</span>
              </div>
            </div>

            {/* 2. Equipment Telemetry Card */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Equipment Preview // Telemetry
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                    <Activity className="h-3 w-3" /> Target 98.8%
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-100">CNC Milling Cell 01</p>
                <p className="text-xs text-slate-400">Machine Profile: MCH-004</p>

                <div className="mt-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Cpu className="h-3.5 w-3.5 text-blue-400" />
                      <span>Configured Operating Speed</span>
                    </div>
                    <span className="font-mono text-slate-200">12,400 RPM</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Preventative Maintenance</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-300">Scheduled</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-800/80 pt-2.5 text-[11px] font-mono text-slate-400">
                Service Interval: <span className="text-slate-300">42 Run Hours</span>
              </div>
            </div>

            {/* 3. Quality & BOM Card */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Formulation Preview // Quality
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-400">
                    <ShieldCheck className="h-3 w-3" /> Audit Criteria
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-100">BOM Formulation P-10024</p>
                <p className="text-xs text-slate-400">Component Hierarchy Model</p>

                <div className="mt-3.5 space-y-2 text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Layers className="h-3.5 w-3.5 text-indigo-400" />
                      <span>BOM Sub-Assemblies</span>
                    </div>
                    <span className="font-mono text-slate-200">18 Defined</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Network className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Critical Defect Tally</span>
                    </div>
                    <span className="font-mono font-semibold text-emerald-400">0 Logged</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-800/80 pt-2.5 text-[11px] font-mono text-slate-400">
                Spec Target: <span className="text-slate-300">± 0.005 mm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Ribbon (Verified Code & Architectural Capabilities) */}
        <div className="mt-10 grid grid-cols-2 gap-4 border-y border-slate-800 py-6 sm:grid-cols-4 font-mono">
          <div className="text-center">
            <span className="block text-2xl font-bold text-white sm:text-3xl">4</span>
            <span className="mt-1 block text-xs font-medium text-slate-400 uppercase tracking-wider">
              Operational Domains
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white sm:text-3xl">13</span>
            <span className="mt-1 block text-xs font-medium text-slate-400 uppercase tracking-wider">
              Active Modules
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white sm:text-3xl">23</span>
            <span className="mt-1 block text-xs font-medium text-slate-400 uppercase tracking-wider">
              Compiled Routes
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white sm:text-3xl">100%</span>
            <span className="mt-1 block text-xs font-medium text-slate-400 uppercase tracking-wider">
              Batch Traceability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
