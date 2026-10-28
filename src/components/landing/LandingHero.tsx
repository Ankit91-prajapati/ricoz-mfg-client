"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type CockpitTab = "execution" | "equipment" | "quality";

export default function LandingHero() {
  const [activeTab, setActiveTab] = useState<CockpitTab>("execution");

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Precision grid background with radial falloff */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "3.5rem 3.5rem",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      {/* Subtle top ambient light bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Asymmetric Hero Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column (7 cols): Editorial Manifesto */}
          <div className="lg:col-span-7">
            {/* Live Operational Status Capsule */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-700/80 bg-slate-900/90 px-3.5 py-1.5 text-xs font-mono text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-blue-400 font-semibold">RCZ-OS //</span>
              <span className="text-slate-300">ENTERPRISE MANUFACTURING OPERATING SYSTEM</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.1]">
              The factory floor,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                orchestrated.
              </span>
            </h1>

            {/* Distinctive Subtitle */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-relaxed">
              Ricoz unifies master production plans, workstation routing, machine telemetry,
              quality compliance, and multi-tier bills of materials into a singular industrial cockpit.
            </p>

            {/* Live Telemetry Chips in Text Flow */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 font-mono text-xs text-slate-400">
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                <Activity className="h-3 w-3 text-emerald-400" />
                <span>Station Telemetry: <strong className="text-slate-200">12.4k RPM</strong></span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                <ShieldCheck className="h-3 w-3 text-blue-400" />
                <span>Tolerance: <strong className="text-slate-200">±0.005mm</strong></span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1">
                <Zap className="h-3 w-3 text-amber-400" />
                <span>Batch Yield: <strong className="text-slate-200">99.4%</strong></span>
              </div>
            </div>

            {/* Primary Action Array */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/sign-up"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-150 hover:bg-blue-500 hover:shadow-blue-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Launch Ricoz Platform</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3.5 text-sm font-medium text-slate-200 transition duration-150 hover:border-slate-600 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Sign In to Console</span>
              </Link>

              <Link
                href="#modules"
                className="inline-flex items-center gap-1.5 rounded-xl border border-transparent px-4 py-3.5 text-sm font-medium text-slate-400 transition duration-150 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Capabilities ↓</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Spatial Telemetry Constellation */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md space-y-3.5">
              {/* Card 1: Live Dispatch Card */}
              <div className="bento-card p-4.5 bg-slate-900/90 backdrop-blur-md border-slate-700/70 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Cpu className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        DISPATCH BATCH
                      </span>
                      <p className="text-xs font-semibold text-slate-100">WO-2026-084 // Housing Cast</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-blue-300">
                    IN PRODUCTION
                  </span>
                </div>

                <div className="mt-3.5 space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-slate-400">Yield Completion</span>
                    <span className="font-semibold text-slate-100">482 / 500 Units</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: "96.4%" }} />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-slate-500">
                    <span>Routing: CNC Station 01 → QC</span>
                    <span>Scrap Count: 3 Units</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Equipment Sensor Card (Offset & Elevated) */}
              <div className="bento-card p-4.5 bg-slate-900/90 backdrop-blur-md border-slate-700/70 shadow-xl sm:translate-x-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Gauge className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        EQUIPMENT TELEMETRY
                      </span>
                      <p className="text-xs font-semibold text-slate-100">CNC Milling Cell 01 [MCH-004]</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
                    OPTIMAL
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-2">
                    <span className="block text-[10px] text-slate-500">Spindle Speed</span>
                    <span className="text-slate-200 font-semibold">12,400 RPM</span>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-2">
                    <span className="block text-[10px] text-slate-500">Cycle Maintenance</span>
                    <span className="text-emerald-400 font-semibold">Scheduled in 42h</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Quality Compliance Radar Card */}
              <div className="bento-card p-4 bg-slate-900/90 backdrop-blur-md border-slate-700/70 shadow-xl sm:-translate-x-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-sky-400" />
                    <span className="text-slate-300 font-medium">BOM Hierarchy & QA Audit</span>
                  </div>
                  <span className="font-semibold text-emerald-400">0 Critical Defects</span>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
                  <span>Target Spec: ±0.005mm</span>
                  <span className="text-blue-300">18 Sub-Assemblies Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Interactive "Factory Twin" Cockpit */}
        <div id="capabilities" className="mt-16 scroll-mt-24 rounded-2xl border border-slate-800/90 bg-slate-900/80 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
          {/* Cockpit Mode Switcher Bar */}
          <div className="flex flex-col gap-4 border-b border-slate-800/90 pb-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                <Factory className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold tracking-tight text-white">
                    Ricoz Factory Twin Cockpit
                  </h2>
                  <span className="rounded border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.2 font-mono text-[9px] font-medium text-blue-300">
                    INTERACTIVE PREVIEW
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Select a control mode to inspect cross-functional shop-floor telemetry.
                </p>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 rounded-xl border border-slate-800 bg-slate-950/80 p-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("execution")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition ${
                  activeTab === "execution"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>01 // Execution</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("equipment")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition ${
                  activeTab === "equipment"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Wrench className="h-3.5 w-3.5" />
                <span>02 // Equipment</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("quality")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition ${
                  activeTab === "quality"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>03 // Quality</span>
              </button>
            </div>
          </div>

          {/* Dynamic Cockpit Content depending on active tab */}
          <div className="mt-5">
            {activeTab === "execution" && (
              <div className="grid gap-4 lg:grid-cols-3">
                {/* Batch Status */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider">
                    Work Order Queue
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">WO-2026-084 // Housing Assembly</p>
                  <p className="text-xs text-slate-400">Station 01: High-Speed CNC</p>
                  <div className="mt-3 space-y-1 font-mono text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Batch Completed</span>
                      <span className="text-slate-100 font-bold">482 / 500 (96.4%)</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "96.4%" }} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px] font-mono text-slate-400">
                    <span>Target Finish: 17:30</span>
                    <span className="text-emerald-400">On Schedule</span>
                  </div>
                </div>

                {/* Production Plan Dispatch */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider">
                    Master Plan Schedule
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">PLAN-Q4-LINE-02</p>
                  <p className="text-xs text-slate-400">Target Output: 12,000 Units / Week</p>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Active Station Work Orders</span>
                      <span className="font-mono font-semibold text-slate-200">6 Released</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Scrap Variance</span>
                      <span className="font-mono font-semibold text-emerald-400">-0.12% Below Budget</span>
                    </div>
                  </div>
                </div>

                {/* Operation Execution */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider">
                    Routing Sequence
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">Step 03 // Precision Finish</p>
                  <p className="text-xs text-slate-400">Operator: Station Cell Alpha</p>
                  <div className="mt-3 space-y-1.5 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Step 01: Raw Ingot Staging [Complete]</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Step 02: CNC Primary Face [Complete]</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-300 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>Step 03: Optical Inspection [In Progress]</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "equipment" && (
              <div className="grid gap-4 lg:grid-cols-3">
                {/* Machine Diagnostics */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                    Operating State
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">CNC Milling Cell 01 (MCH-004)</p>
                  <p className="text-xs text-slate-400">Status: Running at full capacity</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-[10px] text-slate-500">Spindle Speed</span>
                      <span className="block font-semibold text-slate-100">12,400 RPM</span>
                    </div>
                    <div className="rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-[10px] text-slate-500">Bearing Temp</span>
                      <span className="block font-semibold text-emerald-400">42°C Normal</span>
                    </div>
                  </div>
                </div>

                {/* Maintenance Work Orders */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                    Maintenance Queue
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">MWO-2026-019 // Hydraulic Flush</p>
                  <p className="text-xs text-slate-400">Type: Preventative Maintenance</p>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Run Hours Logged</span>
                      <span className="font-mono text-slate-200">1,248 / 1,500 Hrs</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Scheduled Trigger</span>
                      <span className="font-mono text-blue-300">In 42 Run Hours</span>
                    </div>
                  </div>
                </div>

                {/* Machine Fleet Registry */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                    Fleet Utilization
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">14 Registered Workstations</p>
                  <p className="text-xs text-slate-400">Active Line Utilization Rate</p>
                  <div className="mt-3 space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Overall Equipment Effectiveness</span>
                      <span className="text-emerald-400 font-bold">98.8% OEE</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "98.8%" }} />
                    </div>
                  </div>
                  <div className="mt-3 border-t border-slate-800/80 pt-2 text-[11px] font-mono text-slate-400">
                    12 Active • 2 Maintenance Reserved
                  </div>
                </div>
              </div>
            )}

            {activeTab === "quality" && (
              <div className="grid gap-4 lg:grid-cols-3">
                {/* Tolerance & Specifications */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider">
                    Inspection Checkpoints
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">BOM Formulation P-10024</p>
                  <p className="text-xs text-slate-400">Optical CMM Automated Verification</p>
                  <div className="mt-3 space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Tolerance Window</span>
                      <span className="text-blue-300 font-semibold">±0.005 mm</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Deviation Mean</span>
                      <span className="text-emerald-400 font-semibold">+0.0008 mm</span>
                    </div>
                  </div>
                </div>

                {/* Quality Defect Log */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider">
                    Defect Classification
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">Zero Critical Defects</p>
                  <p className="text-xs text-slate-400">Audit Pass Rate: 99.4%</p>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Critical / Functional</span>
                      <span className="font-mono text-emerald-400 font-bold">0 Logged</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2 border border-slate-800">
                      <span className="text-slate-300">Minor Surface Blemish</span>
                      <span className="font-mono text-slate-400">3 Flagged & Quarantined</span>
                    </div>
                  </div>
                </div>

                {/* BOM Compliance */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider">
                    Multi-Level Traceability
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-100">18 Sub-Assemblies Verified</p>
                  <p className="text-xs text-slate-400">Lot & Batch Tracking Active</p>
                  <div className="mt-3 space-y-1.5 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Material Certificate 3.1 Attached</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Heat Treat Temperature Stamp Valid</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Supplier Batch Linked [SUP-003]</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Disclosures & Fact Ribbon */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>SIMULATED PLATFORM PREVIEW // SCHEMA SYNCHRONIZED</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-300">
              <span><strong>4</strong> Domains</span>
              <span>•</span>
              <span><strong>13</strong> Modules</span>
              <span>•</span>
              <span><strong>23</strong> Compiled Routes</span>
              <span>•</span>
              <span><strong>100%</strong> Traceability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
