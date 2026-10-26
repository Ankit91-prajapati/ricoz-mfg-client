import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Package,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const domains = [
  {
    id: "production",
    code: "DOMAIN 01 // PRODUCTION",
    title: "Production & Shop-Floor Execution",
    description:
      "Coordinate master manufacturing schedules, release work order batches, and monitor station-level operation execution in real time.",
    icon: Cpu,
    modules: [
      { name: "Production Work Orders", href: "/production/work-orders" },
      { name: "Production Plans", href: "/production/plans" },
      { name: "Operation Execution", href: "/production/operations" },
    ],
    features: [
      "Job batch tracking with real-time completed output and scrap counts",
      "Master production scheduling with target completion dates and line priorities",
      "Workstation operational states and step-by-step progress tracking",
    ],
  },
  {
    id: "equipment",
    code: "DOMAIN 02 // EQUIPMENT",
    title: "Equipment & Maintenance",
    description:
      "Maintain a centralized equipment registry, monitor operating status, and manage preventative and corrective maintenance orders.",
    icon: Wrench,
    modules: [
      { name: "Machines Directory", href: "/machines" },
      { name: "Machine Details", href: "/machines/details" },
      { name: "Maintenance Work Orders", href: "/maintenance/work-orders" },
    ],
    features: [
      "Centralized machinery registry with shop-floor location mapping",
      "Hardware telemetry, technical specifications, and operating parameters",
      "Maintenance work orders with full lifecycle transitions (Open → In Progress → Completed)",
    ],
  },
  {
    id: "quality",
    code: "DOMAIN 03 // QUALITY",
    title: "Quality Assurance",
    description:
      "Log defects, classify severity levels, assign corrective actions, and maintain an end-to-end compliance audit trail across every run.",
    icon: ShieldCheck,
    modules: [
      { name: "Quality Issues", href: "/quality/issues" },
      { name: "Quality Details", href: "/quality/details" },
    ],
    features: [
      "Immediate defect logging with severity categorization (Minor, Major, Critical)",
      "Inspection logs with verification evidence and corrective resolution tracking",
      "Historical quality audit records tied directly to product SKUs and batches",
    ],
  },
  {
    id: "materials",
    code: "DOMAIN 04 // SUPPLY CHAIN",
    title: "Supply Chain, Catalog & Materials",
    description:
      "Formulate multi-level bills of materials, manage inventory stock reservations, and oversee procurement with verified suppliers.",
    icon: Package,
    modules: [
      { name: "Products Catalog", href: "/products" },
      { name: "Bill of Materials (BOM)", href: "/bom" },
      { name: "Inventory Stock", href: "/inventory/stock" },
      { name: "Purchase Orders", href: "/purchase/orders" },
      { name: "Suppliers", href: "/suppliers" },
    ],
    features: [
      "Complete finished-product catalog with SKU codes and default units of measure",
      "Active multi-level BOM formulation with component ratios and quantities",
      "On-hand inventory stock tracking with reorder thresholds and supplier purchase orders",
    ],
  },
];

export default function LandingModules() {
  return (
    <section id="capabilities" className="border-t border-slate-800 bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-medium text-blue-400">
            <Layers className="h-3.5 w-3.5" />
            <span>CORE ARCHITECTURE // 4 DOMAINS</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Everything your plant needs, in four core domains.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            Every module in Ricoz is built for manufacturing operations: zero superficial filler,
            100% focused on shop-floor execution and material control.
          </p>
        </div>

        {/* 4 Domain Cards Grid */}
        <div id="modules" className="mt-16 grid gap-6 md:grid-cols-2">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="ui-card-interactive flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-blue-400">
                      {domain.code}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800 text-blue-400 shadow-xs">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-100">{domain.title}</h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {domain.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-5 space-y-2.5">
                    {domain.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modules list & Action cue */}
                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Active System Modules:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.modules.map((mod) => (
                      <span
                        key={mod.name}
                        className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {mod.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-800/60 flex items-center justify-between">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded py-0.5 transition duration-150"
                    >
                      <span>Access {domain.title.split(" ")[0]} in Portal</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
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
