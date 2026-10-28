import {
  ArrowRight,
  Cpu,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function LandingModules() {
  return (
    <section id="modules" className="relative py-16 md:py-24 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-mono text-blue-400">
              <span>DOMAIN ARCHITECTURE // 04 PILLARS</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineered for the physical factory.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Every module is purpose-built around real shop-floor constraints: machine cycle times,
            scrap tracking, material lot traceability, and ISO-grade audit trails.
          </p>
        </div>

        {/* Asymmetric Bento Grid (8+4 on row 1, 4+8 on row 2) */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* -------------------------------------------------------------
              BENTO 01 (8 cols): Production & Shop-Floor Execution
             ------------------------------------------------------------- */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Cpu className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
                      DOMAIN 01 // PRODUCTION
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Shop-Floor & Work Order Execution
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-0.5 font-mono text-xs text-slate-300">
                  3 System Modules
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-2xl">
                Convert master manufacturing schedules into releaseable production batches.
                Track station-level operator jobs, live completed output, and scrap counts with zero delay.
              </p>

              {/* Interactive Module Micro-Preview */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span>DISPATCH QUEUE // ACTIVE WORK ORDERS</span>
                  <span className="text-emerald-400">● 14 Lines Online</span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2.5 border border-slate-800/80">
                    <div>
                      <span className="font-semibold text-slate-200">WO-2026-084</span>
                      <span className="ml-2 text-[11px] text-slate-400">Housing Casting</span>
                    </div>
                    <span className="text-blue-300">Routing: Station 01 → QC</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-900/60 p-2.5 border border-slate-800/80">
                    <div>
                      <span className="font-semibold text-slate-200">WO-2026-085</span>
                      <span className="ml-2 text-[11px] text-slate-400">Flange Joint Batch</span>
                    </div>
                    <span className="text-slate-400">Scheduled: 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Module Links */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-slate-800/80 pt-4">
              <Link
                href="/production/work-orders"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-blue-500/40 hover:text-white transition"
              >
                <span>Work Orders</span>
                <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
              </Link>
              <Link
                href="/production/plans"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-blue-500/40 hover:text-white transition"
              >
                <span>Production Plans</span>
                <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
              </Link>
              <Link
                href="/production/operations"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-blue-500/40 hover:text-white transition"
              >
                <span>Operation Execution</span>
                <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------------
              BENTO 02 (4 cols): Equipment & Maintenance
             ------------------------------------------------------------- */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Wrench className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    DOMAIN 02 // ASSETS
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Equipment & Maintenance
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Centralized machinery fleet registry with runtime telemetry and automated preventative
                maintenance work orders.
              </p>

              {/* Machine Health Micro-Metrics */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Fleet Uptime OEE</span>
                  <span className="font-bold text-emerald-400">98.8%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "98.8%" }} />
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>14 Units Logged</span>
                  <span>0 Emergency Stops</span>
                </div>
              </div>
            </div>

            {/* Direct Module Links */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-4">
              <Link
                href="/machines"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-emerald-500/40 hover:text-white transition"
              >
                <span>Machines Directory</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              </Link>
              <Link
                href="/maintenance/work-orders"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-emerald-500/40 hover:text-white transition"
              >
                <span>Maintenance Orders</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------------
              BENTO 03 (4 cols): Quality Assurance & Compliance
             ------------------------------------------------------------- */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
                    DOMAIN 03 // COMPLIANCE
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Precision Quality Assurance
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Log dimensional defects, track root-cause corrective actions, and quarantine
                non-compliant lots with audit-ready traceability.
              </p>

              {/* Quality Radar Micro-Metrics */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Batch Scrap Rate</span>
                  <span className="font-bold text-sky-400">0.04%</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                  <span>Audit Pass Rate</span>
                  <span className="text-emerald-400">99.4% Verified</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400">
                  <span>Critical Defect Tally</span>
                  <span className="text-slate-100">0 Active</span>
                </div>
              </div>
            </div>

            {/* Direct Module Links */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-4">
              <Link
                href="/quality/issues"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-sky-500/40 hover:text-white transition"
              >
                <span>Quality Issues Log</span>
                <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
              </Link>
              <Link
                href="/quality/details"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-sky-500/40 hover:text-white transition"
              >
                <span>Audit Details</span>
                <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------------
              BENTO 04 (8 cols): Supply Chain & Multi-Level BOM
             ------------------------------------------------------------- */}
          <div className="bento-card p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                    <Network className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
                      DOMAIN 04 // SUPPLY CHAIN
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      BOM Hierarchy & Material Logistics
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-0.5 font-mono text-xs text-slate-300">
                  4 System Modules
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-2xl">
                Define deep multi-level Bills of Materials, track supplier inventory replenishments,
                and maintain end-to-end component traceability from raw ingot to finished delivery.
              </p>

              {/* BOM Hierarchy Tree Preview */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span>BOM STRUCTURE // P-10024 HIGH-PRESSURE CASING</span>
                  <span className="text-indigo-400">18 Sub-Components</span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-900/60 p-2.5 border border-slate-800/80 flex items-center justify-between">
                    <span>├─ RAW-AL-6061 Ingot</span>
                    <span className="text-emerald-400">Stock: 4,800 kg</span>
                  </div>
                  <div className="rounded-lg bg-slate-900/60 p-2.5 border border-slate-800/80 flex items-center justify-between">
                    <span>├─ FAST-M8-TITANIUM Bolt</span>
                    <span className="text-emerald-400">Stock: 12,000 pcs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Module Links */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-slate-800/80 pt-4">
              <Link
                href="/bom"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-indigo-500/40 hover:text-white transition"
              >
                <span>Bills of Materials</span>
                <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
              </Link>
              <Link
                href="/inventory/stock"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-indigo-500/40 hover:text-white transition"
              >
                <span>Inventory Stock</span>
                <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
              </Link>
              <Link
                href="/purchase/orders"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-indigo-500/40 hover:text-white transition"
              >
                <span>Purchase Orders</span>
                <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
              </Link>
              <Link
                href="/suppliers"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-indigo-500/40 hover:text-white transition"
              >
                <span>Supplier Registry</span>
                <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
