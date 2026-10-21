import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiLogOut,
  FiRefreshCw,
  FiSearch,
  FiX,
  FiCopy,
  FiChevronLeft,
  FiChevronRight,
  FiInbox,
} from "react-icons/fi";

const API_BASE =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
  "http://localhost:5000";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
interface Contact {
  id: number;
  first_name: string;
  last_name: string | null;
  email: string;
  mobile: string | null;
  enquiry: string | null;
  message: string;
  status: "new" | "read" | "replied" | "closed";
  ip_address: string | null;
  created_at: string;
  updated_at: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ApiResponse {
  success: boolean;
  data: Contact[];
  pagination: Pagination;
}

type StatusFilter = "all" | Contact["status"];

/* ------------------------------------------------------------------ */
/* Scoped CSS guard                                                    */
/* ------------------------------------------------------------------ */
const SCOPED_CSS = `
.iliq-admin{
  width:100%;
  min-height:calc(100vh - 160px);
  margin:-2rem;                 /* cancel App.js main padding */
  padding:40px 16px 56px;
  background:
    radial-gradient(1200px 600px at 10% 0%, rgba(91,99,230,0.14), transparent 60%),
    radial-gradient(900px 500px at 95% 100%, rgba(240,45,115,0.12), transparent 60%),
    #070b16;
  color:#fff;
  text-align:left;
  font-family:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  box-sizing:border-box;
}
.iliq-admin *,
.iliq-admin *::before,
.iliq-admin *::after{ box-sizing:border-box; }

.iliq-admin h1,
.iliq-admin h2,
.iliq-admin h3,
.iliq-admin p,
.iliq-admin ul,
.iliq-admin li{ text-align:left; margin:0; }
.iliq-admin h1,
.iliq-admin h2,
.iliq-admin h3{
  color:#ffffff;
  font-family:inherit;
  font-weight:800;
  letter-spacing:-0.02em;
}
.iliq-admin ul{ list-style:none; padding:0; }

.iliq-admin input{ font-family:inherit; margin:0; text-align:left; }
.iliq-admin button{
  font-family:inherit;
  margin:0;
  border:0;
  cursor:pointer;
}
.iliq-admin .iliq-btn-ghost{
  color:#b4bdd6;
  background:#131a2c;
  border:1px solid #232c45;
}
.iliq-admin .iliq-btn-ghost:hover{ background:#1a2340; color:#fff; }
.iliq-admin .iliq-btn-primary{
  color:#fff;
  background-image:linear-gradient(90deg,#5b63e6 0%,#f02d73 100%);
  outline:none;
}
.iliq-admin .iliq-btn-primary:hover{ filter:brightness(1.1); }
.iliq-admin .iliq-btn-primary:active{ transform:scale(0.99); }

.iliq-admin table{ border-collapse:collapse; }
`;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const fullName = (c: Contact) =>
  `${c.first_name}${c.last_name ? " " + c.last_name : ""}`.trim();

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
const AdminContacts = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selected, setSelected] = useState<Contact | null>(null);

  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const adminEmail = sessionStorage.getItem("admin_email") || "admin";

  const fetchContacts = async (pageNum: number, soft = false) => {
    if (soft) setRefreshing(true);
    else setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${API_BASE}/api/contact?page=${pageNum}&limit=20`
      );
      const data: ApiResponse = await res.json();
      if (!res.ok || !data.success) {
        throw new Error("Failed to load contacts");
      }
      setContacts(data.data);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchContacts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_logged_in");
    sessionStorage.removeItem("admin_email");
    navigate("/admin", { replace: true });
  };

  /* ----- derived stats ----- */
  const stats = useMemo(() => {
    const total = pagination?.total ?? contacts.length;
    const newCount = contacts.filter((c) => c.status === "new").length;
    const readCount = contacts.filter((c) => c.status === "read").length;
    const repliedCount = contacts.filter((c) => c.status === "replied").length;
    return { total, newCount, readCount, repliedCount };
  }, [contacts, pagination]);

  /* ----- filtered list (client-side on current page) ----- */
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return contacts.filter((c) => {
      if (statusFilter !== "all" && c.status !== statusFilter) return false;
      if (!q) return true;
      return (
        fullName(c).toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.mobile ?? "").toLowerCase().includes(q) ||
        (c.enquiry ?? "").toLowerCase().includes(q) ||
        c.message.toLowerCase().includes(q)
      );
    });
  }, [contacts, search, statusFilter]);

  /* ----- lock scroll when modal open ----- */
  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <div className="iliq-admin">
      <style>{SCOPED_CSS}</style>

      <div className="mx-auto w-full max-w-6xl">
        {/* ---------------- Header ---------------- */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0559b]">
              Admin Panel
            </p>
            <h1 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Contact Submissions
            </h1>
            <p className="mt-1 text-xs text-[#9aa3b8]">
              Signed in as{" "}
              <span className="font-medium text-slate-200">{adminEmail}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => fetchContacts(page, true)}
              disabled={refreshing || loading}
              className="iliq-btn-ghost flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-semibold disabled:opacity-50"
            >
              <FiRefreshCw
                className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`}
              />
              {refreshing ? "Refreshing" : "Refresh"}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="iliq-btn-primary flex h-10 items-center gap-2 rounded-xl px-4 text-xs font-semibold text-white shadow-[0_10px_30px_-8px_rgba(240,45,115,0.55)]"
            >
              <FiLogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* ---------------- Stats ---------------- */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="Total" value={stats.total} tone="indigo" />
          <StatCard label="New" value={stats.newCount} tone="pink" />
          <StatCard label="Read" value={stats.readCount} tone="sky" />
          <StatCard label="Replied" value={stats.repliedCount} tone="emerald" />
        </div>

        {/* ---------------- Toolbar ---------------- */}
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#222b42] bg-[#0f1526] p-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <FiSearch
              className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#6b7491]"
              aria-hidden="true"
            />
            <input
              type="text"
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder="Search by name, email, phone, enquiry or message…"
              className="h-10 w-full rounded-xl border border-[#1f2842] bg-[#0a0e1b] pl-9 pr-9 text-xs text-slate-200 placeholder:text-[#4d566b] outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="iliq-btn-ghost absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md"
                aria-label="Clear search"
              >
                <FiX className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {(
              ["all", "new", "read", "replied", "closed"] as StatusFilter[]
            ).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={`h-8 rounded-lg px-3 text-[11px] font-semibold capitalize transition ${
                  statusFilter === s
                    ? "bg-gradient-to-r from-[#5b63e6] to-[#f02d73] text-white"
                    : "iliq-btn-ghost"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- Error ---------------- */}
        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-xs text-rose-300"
          >
            {error}
          </div>
        )}

        {/* ---------------- Loading ---------------- */}
        {loading && (
          <div className="rounded-3xl border border-[#222b42] bg-[#0f1526] p-12 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#232c45] border-t-[#f02d73]" />
            <p className="mt-4 text-xs text-[#9aa3b8]">Loading contacts…</p>
          </div>
        )}

        {/* ---------------- Empty ---------------- */}
        {!loading && !error && contacts.length === 0 && (
          <div className="rounded-3xl border border-[#222b42] bg-[#0f1526] p-12 text-center">
            <FiInbox className="mx-auto h-10 w-10 text-[#4d566b]" />
            <p className="mt-4 text-sm font-bold text-white">
              No submissions yet
            </p>
            <p className="mt-1 text-xs text-[#9aa3b8]">
              New enquiries will appear here automatically.
            </p>
          </div>
        )}

        {/* ---------------- No results for filter ---------------- */}
        {!loading &&
          !error &&
          contacts.length > 0 &&
          filtered.length === 0 && (
            <div className="rounded-3xl border border-[#222b42] bg-[#0f1526] p-12 text-center">
              <p className="text-sm font-bold text-white">No matches</p>
              <p className="mt-1 text-xs text-[#9aa3b8]">
                Try a different search term or status filter.
              </p>
            </div>
          )}

        {/* ---------------- Table / Cards ---------------- */}
        {!loading && !error && filtered.length > 0 && (
          <>
            {/* Desktop */}
            <div className="hidden overflow-hidden rounded-3xl border border-[#222b42] bg-[#0f1526] md:block">
              <div className="max-h-[70vh] overflow-auto">
                <table className="w-full text-left text-xs">
                  <thead className="sticky top-0 z-10 bg-[#111830]">
                    <tr className="border-b border-[#1f2842]">
                      {[
                        "Contact",
                        "Email",
                        "Mobile",
                        "Enquiry",
                        "Status",
                        "Received",
                        "",
                      ].map((h, i) => (
                        <th
                          key={i}
                          className="whitespace-nowrap px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-[#9aa3b8]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c) => (
                      <tr
                        key={c.id}
                        className="border-b border-[#1a2136] last:border-0 transition hover:bg-[#131a2c]"
                      >
                        <td className="px-4 py-3">
                          <p className="font-semibold text-slate-100">
                            {fullName(c)}
                          </p>
                          <p className="mt-0.5 text-[10px] text-[#6b7491]">
                            #{c.id}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-[#b4bdd6]">
                          {c.email}
                        </td>
                        <td className="px-4 py-3 text-[#b4bdd6]">
                          {c.mobile || "—"}
                        </td>
                        <td className="px-4 py-3 text-[#b4bdd6]">
                          {c.enquiry || "—"}
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={c.status} />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-[#9aa3b8]">
                          {formatDate(c.created_at)}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => setSelected(c)}
                            className="iliq-btn-ghost rounded-lg px-3 py-1.5 text-[11px] font-semibold"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-3 md:hidden">
              {filtered.map((c) => (
                <div
                  key={c.id}
                  className="rounded-2xl border border-[#222b42] bg-[#0f1526] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">
                        {fullName(c)}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-[#9aa3b8]">
                        {c.email}
                      </p>
                    </div>
                    <StatusBadge status={c.status} />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                    <Field label="Mobile" value={c.mobile || "—"} />
                    <Field label="Enquiry" value={c.enquiry || "—"} />
                  </div>
                  <p className="mt-2 text-[10px] text-[#6b7491]">
                    {formatDate(c.created_at)}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelected(c)}
                    className="iliq-btn-primary mt-3 h-9 w-full rounded-lg text-[11px] font-semibold text-white"
                  >
                    View Message
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-[#9aa3b8] sm:flex-row">
                <p>
                  Showing{" "}
                  <span className="text-slate-200">
                    {(pagination.page - 1) * pagination.limit + 1}–
                    {Math.min(
                      pagination.page * pagination.limit,
                      pagination.total
                    )}
                  </span>{" "}
                  of <span className="text-slate-200">{pagination.total}</span>
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={pagination.page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="iliq-btn-ghost flex h-8 items-center gap-1 rounded-lg px-3 text-[11px] font-semibold disabled:opacity-40"
                  >
                    <FiChevronLeft className="h-3 w-3" /> Prev
                  </button>
                  <span className="rounded-lg border border-[#232c45] bg-[#131a2c] px-3 py-1.5 text-[11px] font-semibold text-slate-200">
                    {pagination.page} / {pagination.totalPages}
                  </span>
                  <button
                    type="button"
                    disabled={pagination.page >= pagination.totalPages}
                    onClick={() =>
                      setPage((p) => Math.min(pagination.totalPages, p + 1))
                    }
                    className="iliq-btn-ghost flex h-8 items-center gap-1 rounded-lg px-3 text-[11px] font-semibold disabled:opacity-40"
                  >
                    Next <FiChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* ---------------- Detail modal ---------------- */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl border border-[#222b42] bg-[#0f1526] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#1f2842] bg-[#111830] p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0559b]">
                  Message #{selected.id}
                </p>
                <h3 className="mt-1.5 text-lg font-extrabold text-white">
                  {fullName(selected)}
                </h3>
                <p className="mt-0.5 text-[11px] text-[#9aa3b8]">
                  {formatDate(selected.created_at)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="iliq-btn-ghost flex h-8 w-8 items-center justify-center rounded-lg"
                aria-label="Close"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>

            {/* Modal body */}
            <div className="max-h-[70vh] overflow-y-auto p-5">
              <div className="mb-4 flex flex-wrap gap-2">
                <StatusBadge status={selected.status} />
                {selected.enquiry && (
                  <span className="rounded-full border border-[#232c45] bg-[#131a2c] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#b4bdd6]">
                    {selected.enquiry}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoTile
                  label="Email"
                  value={selected.email}
                  copyValue={selected.email}
                />
                <InfoTile
                  label="Mobile"
                  value={selected.mobile || "—"}
                  copyValue={selected.mobile || undefined}
                />
                <InfoTile
                  label="IP Address"
                  value={selected.ip_address || "—"}
                  mono
                />
                <InfoTile
                  label="Last Updated"
                  value={formatDate(selected.updated_at)}
                />
              </div>

              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9aa3b8]">
                    Message
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      navigator.clipboard?.writeText(selected.message)
                    }
                    className="iliq-btn-ghost flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold"
                  >
                    <FiCopy className="h-3 w-3" /> Copy
                  </button>
                </div>
                <p className="whitespace-pre-wrap rounded-xl border border-[#1f2842] bg-[#0a0e1b] p-3.5 text-xs leading-relaxed text-slate-200">
                  {selected.message}
                </p>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end gap-2 border-t border-[#1f2842] bg-[#0a0e1b] p-4">
              <a
                href={`mailto:${selected.email}?subject=Re: ${
                  selected.enquiry ?? "Your enquiry"
                }`}
                className="iliq-btn-primary flex h-9 items-center rounded-lg px-4 text-[11px] font-semibold text-white"
              >
                Reply via Email
              </a>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="iliq-btn-ghost h-9 rounded-lg px-4 text-[11px] font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */
const toneClass: Record<string, string> = {
  indigo: "from-indigo-500/20 to-indigo-500/0 text-indigo-300",
  pink: "from-pink-500/20 to-pink-500/0 text-pink-300",
  sky: "from-sky-500/20 to-sky-500/0 text-sky-300",
  emerald: "from-emerald-500/20 to-emerald-500/0 text-emerald-300",
};

const StatCard = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: keyof typeof toneClass;
}) => (
  <div className="relative overflow-hidden rounded-2xl border border-[#222b42] bg-[#0f1526] p-4">
    <div
      className={`absolute inset-0 bg-gradient-to-br opacity-60 ${toneClass[tone]}`}
      aria-hidden="true"
    />
    <div className="relative">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[#9aa3b8]">
        {label}
      </p>
      <p className="mt-1.5 text-xl font-extrabold text-white">{value}</p>
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: Contact["status"] }) => {
  const map: Record<Contact["status"], string> = {
    new: "bg-indigo-500/15 text-indigo-300 border-indigo-500/40",
    read: "bg-sky-500/15 text-sky-300 border-sky-500/40",
    replied: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
    closed: "bg-slate-500/15 text-slate-300 border-slate-500/40",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${map[status]}`}
    >
      {status}
    </span>
  );
};

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7491]">
      {label}
    </p>
    <p className="mt-0.5 text-slate-200">{value}</p>
  </div>
);

const InfoTile = ({
  label,
  value,
  copyValue,
  mono,
}: {
  label: string;
  value: string;
  copyValue?: string;
  mono?: boolean;
}) => (
  <div className="rounded-xl border border-[#1f2842] bg-[#0a0e1b] p-3">
    <div className="flex items-center justify-between gap-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6b7491]">
        {label}
      </p>
      {copyValue && (
        <button
          type="button"
          onClick={() => navigator.clipboard?.writeText(copyValue)}
          className="iliq-btn-ghost rounded-md p-1"
          aria-label={`Copy ${label}`}
        >
          <FiCopy className="h-3 w-3" />
        </button>
      )}
    </div>
    <p
      className={`mt-1 break-words text-xs text-slate-200 ${
        mono ? "font-mono" : ""
      }`}
    >
      {value}
    </p>
  </div>
);

export default AdminContacts;