"use client";

import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  FileText,
  Forklift,
  Handshake,
  Network,
  Package,
  PlayCircle,
  ShieldAlert,
  ShoppingCart,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  actionText?: string;
}

function DashboardCard({
  title,
  description,
  href,
  icon: Icon,
  actionText = "Open module",
}: DashboardCardProps) {
  return (
    <div className="ui-card-interactive group flex flex-col justify-between rounded-xl p-5 transition duration-150 motion-reduce:transition-none">
      <div>
        <div className="flex items-start justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/80 text-blue-400 shadow-xs">
            <Icon className="h-4 w-4" />
          </span>
        </div>
        <h3 className="mt-3.5 text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-800/80">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded py-0.5"
        >
          <span>{actionText}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none" />
        </Link>
      </div>
    </div>
  );
}

export default function DashboardModuleGrid() {
  return (
    <div className="space-y-8">
      {/* SECTION 1: Production & Shop-Floor Execution */}
      <section className="space-y-3.5">
        <div className="flex flex-col gap-1 border-b border-slate-800/80 pb-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-blue-400" />
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              Production & Shop-Floor Execution
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Work orders, manufacturing plans, and station operations
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Production Work Orders"
            description="Track batch progress, manage scheduled order cycles, and record completed output and scrap counts."
            href="/production/work-orders"
            icon={FileText}
            actionText="View work orders"
          />
          <DashboardCard
            title="Production Plans"
            description="Establish manufacturing schedules, set target completion dates, prioritize lines, and release orders."
            href="/production/plans"
            icon={ClipboardCheck}
            actionText="View production plans"
          />
          <DashboardCard
            title="Operation Execution"
            description="Monitor line workstation operations, record real-time operational states, and advance step execution."
            href="/production/operations"
            icon={PlayCircle}
            actionText="Track operations"
          />
        </div>
      </section>

      {/* SECTION 2: Equipment & Maintenance */}
      <section className="space-y-3.5">
        <div className="flex flex-col gap-1 border-b border-slate-800/80 pb-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-blue-400" />
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              Equipment & Maintenance
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Machine inventory, operating parameters, and maintenance orders
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Machines Directory"
            description="Comprehensive equipment directory, shop floor assignments, and machine operating status."
            href="/machines"
            icon={Cpu}
            actionText="View machines"
          />
          <DashboardCard
            title="Machine Details"
            description="Inspect hardware telemetry, configure specifications, and audit individual equipment profiles."
            href="/machines/details"
            icon={Activity}
            actionText="View machine details"
          />
          <DashboardCard
            title="Maintenance Work Orders"
            description="Manage preventative maintenance routines, assign technical staff, and resolve repair requests."
            href="/maintenance/work-orders"
            icon={Wrench}
            actionText="View maintenance orders"
          />
        </div>
      </section>

      {/* SECTION 3: Quality Assurance */}
      <section className="space-y-3.5">
        <div className="flex flex-col gap-1 border-b border-slate-800/80 pb-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-blue-400" />
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              Quality Assurance
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Defect management, inspection logs, and compliance records
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <DashboardCard
            title="Quality Issues"
            description="Log defects, categorize severity levels, assign corrective actions, and track resolution lifecycles."
            href="/quality/issues"
            icon={ShieldAlert}
            actionText="View quality issues"
          />
          <DashboardCard
            title="Quality Details"
            description="Review in-depth inspection reports, verify compliance evidence, and audit historical quality resolutions."
            href="/quality/details"
            icon={FileCheck2}
            actionText="View quality details"
          />
        </div>
      </section>

      {/* SECTION 4: Supply Chain, Catalog & Materials */}
      <section className="space-y-3.5">
        <div className="flex flex-col gap-1 border-b border-slate-800/80 pb-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-blue-400" />
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              Supply Chain, Catalog & Materials
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Products, bills of materials, inventory stock, suppliers, and purchasing
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <DashboardCard
            title="Products Catalog"
            description="Product catalog, item specifications, SKUs, and default units of measure."
            href="/products"
            icon={Package}
            actionText="View products"
          />
          <DashboardCard
            title="Bill of Materials"
            description="Formulate multi-level bills of materials, component ratios, and production recipes."
            href="/bom"
            icon={Network}
            actionText="View BOMs"
          />
          <DashboardCard
            title="Inventory Stock"
            description="Monitor on-hand inventory levels, track allocations, and manage stock reorder points."
            href="/inventory/stock"
            icon={Forklift}
            actionText="View stock"
          />
          <DashboardCard
            title="Purchase Orders"
            description="Generate procurement orders, track supplier deliveries, and verify incoming receipts."
            href="/purchase/orders"
            icon={ShoppingCart}
            actionText="View purchase orders"
          />
          <DashboardCard
            title="Suppliers"
            description="Manage vendor directory, procurement contacts, commercial payment terms, and delivery records."
            href="/suppliers"
            icon={Handshake}
            actionText="View suppliers"
          />
        </div>
      </section>
    </div>
  );
}
