import {
  CalendarClock,
  ClipboardList,
  Network,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "PHASE 01 // SOURCING",
    title: "Sourcing & Formulation",
    subtitle: "Establish product definitions and material recipes",
    icon: Network,
    details:
      "Construct multi-level Bills of Materials (BOM), define component ratios, register supplier profiles, and track replenishment purchase orders.",
    deliverable: "Active BOM & Supplier Links",
  },
  {
    step: "02",
    phase: "PHASE 02 // PLANNING",
    title: "Planning & Scheduling",
    subtitle: "Set high-level manufacturing schedules",
    icon: CalendarClock,
    details:
      "Build production plans, allocate target finish dates, assign line priorities, and convert planned requirements into executable batch work orders.",
    deliverable: "Released Work Orders",
  },
  {
    step: "03",
    phase: "PHASE 03 // EXECUTION",
    title: "Shop-Floor Execution",
    subtitle: "Dispatch work and track batch yields",
    icon: ClipboardList,
    details:
      "Monitor machine stations, route operator jobs, track live completed output quantities, and instantly record scrap counts to keep counts accurate.",
    deliverable: "Recorded Batch Yields",
  },
  {
    step: "04",
    phase: "PHASE 04 // QUALITY",
    title: "Quality & Reliability",
    subtitle: "Enforce standards and equipment uptime",
    icon: ShieldCheck,
    details:
      "Inspect batches, log defect tickets with severity categorization, execute scheduled maintenance work orders, and audit historical resolution logs.",
    deliverable: "Compliance & Uptime Verified",
  },
];

export default function LandingWorkflow() {
  return (
    <section id="workflow" className="border-t border-slate-800 bg-slate-900/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-400">
            OPERATIONAL LIFECYCLE // 4 STAGES
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            How Ricoz coordinates the manufacturing lifecycle.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            From raw bill of materials formulation to finished product quality verification, every
            step connects seamlessly without data silos or paper bottlenecks.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-6 transition duration-150 hover:border-slate-700/80"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900 text-blue-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-2xl font-extrabold text-slate-700">
                      {item.step}
                    </span>
                  </div>

                  <span className="mt-4 block font-mono text-[10px] uppercase tracking-wider text-blue-400">
                    {item.phase}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">{item.subtitle}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">{item.details}</p>
                </div>

                <div className="mt-5 border-t border-slate-800/80 pt-3">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-500">Milestone:</span>
                    <span className="text-slate-300">{item.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
