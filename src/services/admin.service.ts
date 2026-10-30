import type { Role, User } from "@/types/auth";
import { api } from "./api";

export interface BackendHealthStatus {
  online: boolean;
  url: string;
  statusText: string;
}

interface ServerUser {
  id: string;
  username?: string;
  email: string;
  role: Role;
  isemailVerified: boolean;
  createdAt?: string;
}

const toUser = (u: ServerUser): User => ({
  _id: u.id,
  username: u.username,
  email: u.email,
  role: u.role,
  isemailVerified: u.isemailVerified,
  createdAt: u.createdAt,
});

export interface AuditLogRecord {
  _id: string;
  timestamp: string;
  actorId: string;
  actorEmail: string;
  action: "LOGIN" | "ROLE_CHANGE" | "USER_DELETE" | "SETTING_UPDATE";
  targetResource: string;
  outcome: "SUCCESS" | "FAILURE";
  ipAddress?: string;
  metadata?: string; // JSON string
}

export interface AuditLogPage {
  logs: AuditLogRecord[];
  total: number;
  page: number;
  pages: number;
}

export interface OrgSettings {
  plantName: string;
  plantCode: string;
  contactEmail: string;
}

export interface MasterDataCounts {
  products: number;
  machines: number;
  inventory: number;
  suppliers: number;
}

export const adminService = {
  updateUserRole: (id: string, role: Role) =>
    api.patch<{ user: ServerUser }>(`/admin/users/${id}/role`, { role }).then((r) => toUser(r.data.user)),

  listAuditLogs: (params: { page?: number; limit?: number; action?: string; outcome?: string; actor?: string } = {}) =>
    api.get<AuditLogPage>("/admin/audit-logs", { params }).then((r) => r.data),

  masterDataCounts: () =>
    api.get<{ counts: MasterDataCounts }>("/admin/master-data").then((r) => r.data.counts),

  getSettings: () => api.get<{ settings: OrgSettings }>("/admin/settings").then((r) => r.data.settings),

  saveSettings: (payload: OrgSettings) =>
    api.put<{ settings: OrgSettings }>("/admin/settings", payload).then((r) => r.data.settings),

  listUsers: () =>
    api.get<{ users: ServerUser[] }>("/admin/data").then((r) => r.data.users.map(toUser)),

  async checkHealth(): Promise<BackendHealthStatus> {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
    try {
      const res = await api.get("/", { timeout: 5000 });
      return { online: true, url, statusText: `HTTP ${res.status}` };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unreachable";
      return { online: false, url, statusText: msg };
    }
  },
};