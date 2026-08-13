import { useState, useEffect } from "react";

// ══════════════════════════════════════════════════════════════════════════
//  ICONS
// ══════════════════════════════════════════════════════════════════════════
const ShieldIcon = ({ size = 20 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const LogoutIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>);
const ArrowLeftIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>);
const PlusIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>);
const EditIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>);
const TrashIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>);
const CloseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const BoxIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>);
const UsersIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const BriefcaseIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
const NewsIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>);
const TrendIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>);
const VideoIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>);
const SettingsIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>);
const ServerIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>);
const FileIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="16 13 12 17 8 13" /></svg>);
const EyeIcon = ({ open }) => open ? (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>) : (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>);
const UserCircleIcon = ({ size = 80 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);

// ══════════════════════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════════════════════
const INITIAL_PRODUCTS = [
  { id: 1, type: "Loan",    featured: false, name: "Business Loans",      desc: "Grow your healthcare practice or side business",  rate: "12%", amount: "Up to RWF 50,000,000",  features: ["Fast approval", "Flexible repayment"] },
  { id: 2, type: "Loan",    featured: true,  name: "Giriwawe Home Loans", desc: "Affordable housing loans for health workers",      rate: "10%", amount: "Up to RWF 100,000,000", features: ["Low interest", "Long tenure"] },
  { id: 3, type: "Loan",    featured: false, name: "Emergency Loans",     desc: "Quick access to funds when you need them most",   rate: "15%", amount: "Up to RWF 10,000,000",  features: ["Same-day disbursement"] },
  { id: 4, type: "Loan",    featured: false, name: "Personal Loans",      desc: "Flexible loans for your personal needs",          rate: "14%", amount: "Up to RWF 20,000,000",  features: ["No collateral required"] },
  { id: 5, type: "Loan",    featured: false, name: "Education Loans",     desc: "Invest in your professional development",         rate: "11%", amount: "Up to RWF 30,000,000",  features: ["Grace period available"] },
  { id: 6, type: "Loan",    featured: false, name: "Asset Financing",     desc: "Purchase equipment and vehicles",                 rate: "13%", amount: "Up to RWF 80,000,000",  features: ["Asset-backed", "Long tenure"] },
  { id: 7, type: "Savings", featured: false, name: "Voluntary Savings",   desc: "Flexible savings with competitive returns",       rate: "8%",  amount: "No minimum balance",     features: ["Withdraw anytime"] },
  { id: 8, type: "Savings", featured: true,  name: "Fixed Deposit",       desc: "Lock your savings for higher returns",            rate: "12%", amount: "Minimum RWF 1,000,000", features: ["Higher returns", "Fixed tenure"] },
  { id: 9, type: "Savings", featured: false, name: "Junior Savings",      desc: "Build a bright future for your children",         rate: "9%",  amount: "No minimum balance",     features: ["Parent-managed", "Zero fees"] },
];

const today = new Date().toISOString().split("T")[0];

const VALID_USER = "admin";
const VALID_PASS = "muganga2024";

/* ── API ───────────────────────────────────────────── */
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

function apiHeaders() {
  const token = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function toApiProduct(fp) {
  const typeMap = { loan: "loan", savings: "savings" };
  const rawRate = String(fp.rate || "").replace(/%/g, "").trim();
  const rawAmt  = String(fp.amount || "").replace(/[^0-9]/g, "").trim();
  return {
    type: typeMap[fp.type?.toLowerCase()] || fp.type?.toLowerCase() || "loan",
    title: fp.name || "",
    description: fp.desc || "",
    interest_rate: rawRate ? parseFloat(rawRate) || 0 : 0,
    max_amount: rawAmt ? parseInt(rawAmt, 10) || null : null,
    features: Array.isArray(fp.features) ? fp.features.filter(f => String(f || "").trim()) : [],
    is_featured: !!fp.featured,
    eligibility: Array.isArray(fp.eligibility) ? fp.eligibility.filter(f => String(f || "").trim()) : [],
    required_documents: Array.isArray(fp.requiredDocuments) ? fp.requiredDocuments.filter(f => String(f || "").trim()) : [],
    application_process: fp.applicationProcess || "",
    image_url: fp.imageUrl || "",
    targeted_customers: Array.isArray(fp.targetedCustomers) ? fp.targetedCustomers.filter(f => String(f || "").trim()) : [],
    benefits: Array.isArray(fp.benefits) ? fp.benefits.filter(f => String(f || "").trim()) : [],
    required_forms: Array.isArray(fp.requiredForms) ? fp.requiredForms.filter(f => String(f || "").trim()) : [],
  };
}

function toFrontendProduct(api) {
  let amount = "";
  if (api.max_amount) {
    amount = `Up to RWF ${Number(api.max_amount).toLocaleString()}`;
  }
  return {
    id: api.id,
    type: api.type === "loan" ? "Loan" : "Savings",
    name: api.title,
    desc: api.description || "",
    rate: `${api.interest_rate}%`,
    amount,
    features: api.features || [],
    featured: api.is_featured || false,
    eligibility: api.eligibility || [],
    requiredDocuments: api.required_documents || [],
    applicationProcess: api.application_process || "",
    imageUrl: api.image_url || "",
    targetedCustomers: api.targeted_customers || [],
    benefits: api.benefits || [],
    requiredForms: api.required_forms || [],
  };
}

function toApiBoardMember(fp) {
  return { name: fp.name, role: (fp.role||"").toLowerCase().replace(/ /g,"_")||"member", bio: fp.bio||"", image_url: fp.image||"", board_type: fp.board_type||"board_of_directors" };
}
function toFrontendBoardMember(api) {
  const raw = api.image_url || "";
  const image = raw.startsWith("/") ? API_ORIGIN + raw : raw;
  return { id: api.id, name: api.name, role: (api.role||"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase()), image, bio: api.bio||"", board_type: api.board_type||"board_of_directors" };
}

function toApiJob(fp) {
  return { title: fp.title, department: fp.department, location: fp.location||"Kigali", employment_type: (fp.type||"full-time").toLowerCase(), description: fp.desc||"", requirements: fp.responsibilities||[], benefits: fp.requirements||[], deadline: fp.deadline||null, max_age: fp.max_age ? parseInt(fp.max_age) : null };
}
function toFrontendJob(api) {
  const et = (api.employment_type || "").toLowerCase();
  const type = et === "full-time" ? "Full-time" : et === "part-time" ? "Part-time" : et === "contract" ? "Contract" : et.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase());
  return { id: api.id, title: api.title, department: api.department, location: api.location, type, desc: api.description||"", responsibilities: Array.isArray(api.requirements)?api.requirements:[], requirements: Array.isArray(api.benefits)?api.benefits:[], deadline: api.deadline?api.deadline.split("T")[0]:"", max_age: api.max_age||"" };
}

// ══════════════════════════════════════════════════════════════════════════
//  STYLES
// ══════════════════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════════════════
//  SHARED HELPERS
// ══════════════════════════════════════════════════════════════════════════
function TopNav({ user, onLogout }) {
  return (
    <nav className="nav">
      <div className="nav-brand"><span className="nav-brand-icon"><ShieldIcon size={19} /></span>Muganga SACCO Admin</div>
      <div className="nav-right">
        <span className="nav-user">👋 {user?.name || user}</span>
        <button className="logout-btn" onClick={onLogout}><LogoutIcon /> Logout</button>
      </div>
    </nav>
  );
}

function SubHeader({ title, onBack }) {
  return (
    <div className="mgmt-subheader">
      <button className="back-btn" onClick={onBack}><ArrowLeftIcon /> Back to Dashboard</button>
      <div className="subheader-divider" />
      <span className="subheader-title">{title}</span>
    </div>
  );
}

function ConfirmModal({ name, onClose, onConfirm }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal confirm-modal">
        <div className="confirm-emoji">🗑️</div>
        <div className="confirm-title">Are you sure?</div>
        <div className="confirm-sub">You are about to delete <strong>{name}</strong>. This action cannot be undone.</div>
        <div className="confirm-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="danger-btn" onClick={onConfirm}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
}

function useToast() {
  const [toast, setToast] = useState(null);
  const fire = (msg, color = "#14532d") => { setToast({ msg, color }); setTimeout(() => setToast(null), 2500); };
  const Toast = toast ? <div className="toast" style={{ background: toast.color }}>{toast.msg}</div> : null;
  return [fire, Toast];
}

function DynList({ items, setItems, placeholder }) {
  const update = (i, v) => { const a = [...items]; a[i] = v; setItems(a); };
  const remove = (i) => setItems(items.filter((_, idx) => idx !== i));
  const add    = () => setItems([...items, ""]);
  return (
    <>
      <div className="dyn-list">
        {items.map((it, i) => (
          <div className="dyn-row" key={i}>
            <input className="dyn-input" placeholder={`${placeholder} ${i + 1}`} value={it} onChange={e => update(i, e.target.value)} />
            {items.length > 1 && <button className="dyn-remove" onClick={() => remove(i)}>×</button>}
          </div>
        ))}
      </div>
      <button className="add-dyn-btn" onClick={add}><PlusIcon /> Add {placeholder}</button>
    </>
  );
}

function jobTypeBadge(t) {
  if (t === "Part-time") return "badge badge-parttime";
  if (t === "Contract")  return "badge badge-contract";
  return "badge badge-fulltime";
}

// ══════════════════════════════════════════════════════════════════════════
//  LOGIN
// ══════════════════════════════════════════════════════════════════════════
function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const triggerShake =  () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      triggerShake();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Invalid credentials. Please try again.");
      }

      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(result.data.user));

      onLogin(result.data.user);
    } catch (err) {
      console.error("Login API error:", err);
      if (email === VALID_USER && password === VALID_PASS) {
        const fallbackUser = { name: "Admin", email, role: "admin" };
        localStorage.setItem("user", JSON.stringify(fallbackUser));
        onLogin(fallbackUser);
        return;
      }
      setError(err.message || "Login failed. Please try again.");
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-root">
      <div className={`login-card${shake ? " shake" : ""}`}>
        <div className="login-icon-wrap"><ShieldIcon size={32} /></div>
        <h1 className="login-title">Admin Login</h1>
        <p className="login-sub">Muganga SACCO Content Management</p>

        <div className="field-group">
          <label className="field-label">Email</label>
          <input
            className="field-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setError("");
            }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Password</label>
          <div className="input-wrap">
            <input
              className="field-input has-toggle"
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
            />
            <button
              className="toggle-btn"
              type="button"
              onClick={() => setShowPass(v => !v)}
              tabIndex={-1}
            >
              <EyeIcon open={showPass} />
            </button>
          </div>
        </div>

        {error && <p className="error-msg"><span>⚠</span> {error}</p>}

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <><span className="spinner" /> Signing in...</> : "Login"}
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE PRODUCTS
// ══════════════════════════════════════════════════════════════════════════
function ProductModal({ initial, onClose, onSave }) {
  const [fire, Toast] = useToast();
  const isEdit = !!initial;
  const defaultForm = {
    type: "Loan", name: "", desc: "", rate: "", amount: "",
    features: ["", "", ""], featured: false,
    eligibility: ["", "", ""], requiredDocuments: ["", "", ""], applicationProcess: "",
    imageUrl: "", targetedCustomers: ["", "", ""], benefits: ["", "", ""], requiredForms: ["", "", ""],
  };
  const [form, setForm] = useState(initial ? { ...initial, features: [...(initial.features || [])], eligibility: [...(initial.eligibility || [])], requiredDocuments: [...(initial.requiredDocuments || [])], targetedCustomers: [...(initial.targetedCustomers || [])], benefits: [...(initial.benefits || [])], requiredForms: [...(initial.requiredForms || [])] } : { ...defaultForm });
  const [imgErr, setImgErr] = useState(false);
  const [uploading, setUploading] = useState(false);
  function updateField(k, v) { setForm(f => ({ ...f, [k]: v })); }

  const handleImageUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const token = localStorage.getItem("accessToken");
      const r = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Upload failed");
      updateField("imageUrl", j.data.url);
      setImgErr(false);
      fire("Image uploaded ✓", "#166534");
    } catch (err) {
      fire(err.message, "#c0392b");
    } finally {
      setUploading(false);
    }
  };
  function updateFeat(i, v) { setForm(f => { const a = [...f.features]; a[i] = v; return { ...f, features: a }; }); }
  function addFeat() { setForm(f => ({ ...f, features: [...f.features, ""] })); }
  function remFeat(i) { setForm(f => ({ ...f, features: f.features.filter((_, idx) => idx !== i) })); }
  function updateElig(i, v) { setForm(f => { const a = [...f.eligibility]; a[i] = v; return { ...f, eligibility: a }; }); }
  function addElig() { setForm(f => ({ ...f, eligibility: [...f.eligibility, ""] })); }
  function remElig(i) { setForm(f => ({ ...f, eligibility: f.eligibility.filter((_, idx) => idx !== i) })); }
  function updateDoc(i, v) { setForm(f => { const a = [...f.requiredDocuments]; a[i] = v; return { ...f, requiredDocuments: a }; }); }
  function addDoc() { setForm(f => ({ ...f, requiredDocuments: [...f.requiredDocuments, ""] })); }
  function remDoc(i) { setForm(f => ({ ...f, requiredDocuments: f.requiredDocuments.filter((_, idx) => idx !== i) })); }
  function updateCust(i, v) { setForm(f => { const a = [...f.targetedCustomers]; a[i] = v; return { ...f, targetedCustomers: a }; }); }
  function addCust() { setForm(f => ({ ...f, targetedCustomers: [...f.targetedCustomers, ""] })); }
  function remCust(i) { setForm(f => ({ ...f, targetedCustomers: f.targetedCustomers.filter((_, idx) => idx !== i) })); }
  function updateBen(i, v) { setForm(f => { const a = [...f.benefits]; a[i] = v; return { ...f, benefits: a }; }); }
  function addBen() { setForm(f => ({ ...f, benefits: [...f.benefits, ""] })); }
  function remBen(i) { setForm(f => ({ ...f, benefits: f.benefits.filter((_, idx) => idx !== i) })); }
  function updateFormField(i, v) { setForm(f => { const a = [...f.requiredForms]; a[i] = v; return { ...f, requiredForms: a }; }); }
  function addFormField() { setForm(f => ({ ...f, requiredForms: [...f.requiredForms, ""] })); }
  function remFormField(i) { setForm(f => ({ ...f, requiredForms: f.requiredForms.filter((_, idx) => idx !== i) })); }
  function handleSave() {
    const features = Array.isArray(form.features) ? form.features.filter(f => String(f || "").trim()) : [];
    const eligibility = Array.isArray(form.eligibility) ? form.eligibility.filter(f => String(f || "").trim()) : [];
    const requiredDocuments = Array.isArray(form.requiredDocuments) ? form.requiredDocuments.filter(f => String(f || "").trim()) : [];
    const targetedCustomers = Array.isArray(form.targetedCustomers) ? form.targetedCustomers.filter(f => String(f || "").trim()) : [];
    const benefits = Array.isArray(form.benefits) ? form.benefits.filter(f => String(f || "").trim()) : [];
    const requiredForms = Array.isArray(form.requiredForms) ? form.requiredForms.filter(f => String(f || "").trim()) : [];
    onSave({ ...form, features, eligibility, requiredDocuments, targetedCustomers, benefits, requiredForms });
  }
  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Product" : "Add New Product"}</div><div className="modal-sub">Fill in the product details below</div></div>
          <button className="modal-close" onClick={onClose} type="button"><CloseIcon /></button>
        </div>
        <div className="form-group"><label className="form-label">Product Type</label><select className="form-select" value={form.type} onChange={e => updateField("type", e.target.value)}><option value="Loan">Loan</option><option value="Savings">Savings</option></select></div>
        <div className="form-group"><label className="form-label">Product Name</label><input className="form-input" placeholder="e.g., Business Loans" value={form.name} onChange={e => updateField("name", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Brief description of the product" value={form.desc} onChange={e => updateField("desc", e.target.value)} /></div>
        <div className="form-row">
          <div className="form-group"><label className="form-label">Interest Rate</label><input className="form-input" placeholder="e.g., 12%" value={form.rate} onChange={e => updateField("rate", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Max Amount</label><input className="form-input" placeholder="e.g., Up to RWF 50M" value={form.amount} onChange={e => updateField("amount", e.target.value)} /></div>
        </div>
        <div className="form-group"><label className="form-label">Features</label>
          <div className="dyn-list">{form.features.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Feature ${i + 1}`} value={f} onChange={e => updateFeat(i, e.target.value)} />{form.features.length > 1 && <button className="dyn-remove" onClick={() => remFeat(i)} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addFeat} type="button"><PlusIcon /> Add Feature</button>
        </div>
        <label className="checkbox-row"><input type="checkbox" checked={form.featured} onChange={e => updateField("featured", e.target.checked)} /><span className="checkbox-label">Mark as Featured</span></label>

        <div className="form-group"><label className="form-label">Eligibility</label>
          <div className="dyn-list">{form.eligibility.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Eligibility ${i + 1}`} value={f} onChange={e => updateElig(i, e.target.value)} />{form.eligibility.length > 1 && <button className="dyn-remove" onClick={() => remElig(i)} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addElig} type="button"><PlusIcon /> Add Criterion</button>
        </div>

        <div className="form-group"><label className="form-label">Targeted Customers</label>
          <div className="dyn-list">{form.targetedCustomers.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Customer ${i + 1}`} value={f} onChange={e => updateCust(i, e.target.value)} />{form.targetedCustomers.length > 1 && <button className="dyn-remove" onClick={() => remCust(i)} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addCust} type="button"><PlusIcon /> Add Customer</button>
        </div>

        <div className="form-group"><label className="form-label">Benefits</label>
          <div className="dyn-list">{form.benefits.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Benefit ${i + 1}`} value={f} onChange={e => updateBen(i, e.target.value)} />{form.benefits.length > 1 && <button className="dyn-remove" onClick={() => remBen(i)} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addBen} type="button"><PlusIcon /> Add Benefit</button>
        </div>

        <div className="form-group"><label className="form-label">Required Forms</label>
          <div className="dyn-list">{form.requiredForms.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Form ${i + 1}`} value={f} onChange={e => updateFormField(i, e.target.value)} />{form.requiredForms.length > 1 && <button className="dyn-remove" onClick={() => remFormField(i)} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addFormField} type="button"><PlusIcon /> Add Form</button>
        </div>

        <div className="form-group"><label className="form-label">Required Documents</label>
          <div className="dyn-list">{form.requiredDocuments.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Document ${i + 1}`} value={f} onChange={e => updateDoc(i, e.target.value)} />{form.requiredDocuments.length > 1 && <button className="dyn-remove" onClick={() => remDoc(i)} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addDoc} type="button"><PlusIcon /> Add Document</button>
        </div>

        <div className="form-group"><label className="form-label">Application Process</label>
          <textarea className="form-textarea" placeholder="Describe the application process" value={form.applicationProcess} onChange={e => updateField("applicationProcess", e.target.value)} />
        </div>

        <div className="form-group"><label className="form-label">Product Image</label>
          <div className="img-preview-row">
            <div className="img-preview-circle">
              {form.imageUrl && !imgErr
                ? <img src={form.imageUrl.startsWith("/") ? API_ORIGIN + form.imageUrl : form.imageUrl} alt="preview" onError={() => setImgErr(true)} style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%" }} />
                : <BoxIcon size={28} />
              }
            </div>
            <div style={{ flex:1 }}>
              <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} style={{ fontSize:"0.8rem" }} />
              {uploading && <span style={{ marginLeft:8, fontSize:12, color:"#166534" }}>Uploading...</span>}
              {form.imageUrl && <span style={{ marginLeft:8, fontSize:12, color:"#166534" }}>✓ {form.imageUrl.split("/").pop()}</span>}
              <p className="form-hint" style={{ margin:"4px 0 0" }}>Upload an image for the product card, or paste a URL below</p>
            </div>
          </div>
          <input className="form-input" placeholder="Or paste image URL directly" value={form.imageUrl} onChange={e => { updateField("imageUrl", e.target.value); setImgErr(false); }} style={{ marginTop:8 }} />
        </div>

        <div className="modal-footer"><button className="cancel-btn" onClick={onClose} type="button">Cancel</button><button className="submit-btn" onClick={handleSave} type="button">{isEdit ? "Save Changes" : "Create Product"}</button></div>
      </div>
      {Toast}
    </div>
  );
}

function ManageProducts({ user, onBack, onLogout }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then(r => r.json())
      .then(res => {
        if (res.success) setProducts((res.data || []).map(toFrontendProduct));
        else fire("Failed to load products", "#c0392b");
      })
      .catch(() => fire("Failed to load products", "#c0392b"))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async data => {
    try {
      const body = toApiProduct(data);
      console.log("API request payload:", JSON.stringify(body));
      const r = await fetch(`${API_BASE}/products`, {
        method: "POST", headers: apiHeaders(),
        body: JSON.stringify(body),
      });
      const j = await r.json();
      console.log("API response:", JSON.stringify(j));
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setProducts(p => [...p, toFrontendProduct(j.data)]);
      setShowAdd(false);
      fire("✓ Product created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleUpdate = async data => {
    try {
      const r = await fetch(`${API_BASE}/products/${editing.id}`, {
        method: "PUT", headers: apiHeaders(),
        body: JSON.stringify(toApiProduct(data)),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setProducts(p => p.map(x => x.id === editing.id ? toFrontendProduct(j.data) : x));
      setEditing(null);
      fire("✓ Product updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/products/${deleting.id}`, {
        method: "DELETE", headers: apiHeaders(),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setProducts(p => p.filter(x => x.id !== deleting.id));
      setDeleting(null);
      fire("Product deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Products" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header"><div><h1 className="mgmt-page-title">Products</h1><p className="page-sub">Manage loan and savings products</p></div><button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Product</button></div>
        {loading ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>Loading products...</p>
        ) : (
          <div className="products-grid">
            {products.map(p => (
              <div className="product-card" key={p.id}>
                <div className="product-card-top"><div className="badges"><span className={`badge ${p.type === "Loan" ? "badge-loan" : "badge-savings"}`}>{p.type}</span>{p.featured && <span className="badge badge-featured">Featured</span>}</div>
                  {p.imageUrl ? <img src={p.imageUrl.startsWith("/") ? API_ORIGIN + p.imageUrl : p.imageUrl} alt="" style={{ width:36, height:36, borderRadius:8, objectFit:"cover" }} onError={(e) => { e.target.style.display="none"; }} /> : <span className="card-icon-muted"><BoxIcon size={18} /></span>}
                </div>
                <div className="product-name">{p.name}</div><div className="product-desc">{p.desc}</div>
                <div className="product-rate">{p.rate}</div><div className="product-amount">{p.amount}</div>
                <div className="card-actions"><button className="edit-btn" onClick={() => setEditing(p)}><EditIcon /> Edit</button><button className="delete-btn" onClick={() => setDeleting(p)}><TrashIcon /> Delete</button></div>
              </div>
            ))}
          </div>
        )}
      </main>
      {showAdd  && <ProductModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <ProductModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.name} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE OTHER SERVICES
// ══════════════════════════════════════════════════════════════════════════
const serviceDefaultForm = {
  title: "", description: "", interest_rate: "", max_amount: "",
  features: ["", "", ""], eligibility: ["", "", ""], requiredDocuments: ["", "", ""],
  applicationProcess: "", featured: false, imageUrl: "",
  targetedCustomers: ["", "", ""], benefits: ["", "", ""], requiredForms: ["", "", ""],
};

function ServiceModal({ initial, onClose, onSave }) {
  const [form, setForm] = useState(initial ? { ...initial, features: [...(initial.features || [])], eligibility: [...(initial.eligibility || [])], requiredDocuments: [...(initial.requiredDocuments || [])], targetedCustomers: [...(initial.targetedCustomers || [])], benefits: [...(initial.benefits || [])], requiredForms: [...(initial.requiredForms || [])] } : { ...serviceDefaultForm });
  const [imgErr, setImgErr] = useState(false);
  const [uploading, setUploading] = useState(false);

  function updateField(k, v) { setForm(f => ({ ...f, [k]: v })); }

  const handleImageUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const r = await fetch(`${API_BASE}/upload`, { method: "POST", headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }, body: fd });
      const j = await r.json();
      if (j.success) { updateField("imageUrl", j.data?.url || j.url || ""); setImgErr(false); }
      else { setImgErr(true); }
    } catch { setImgErr(true); }
    setUploading(false);
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{initial ? "Edit Service" : "Add New Service"}</div><div className="modal-sub">Fill in the service details below</div></div>
          <button className="modal-close" onClick={onClose} type="button"><CloseIcon /></button>
        </div>
        <div className="form-group"><label className="form-label">Service Name</label><input className="form-input" placeholder="e.g., Account Opening" value={form.title} onChange={e => updateField("title", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Brief description" value={form.description} onChange={e => updateField("description", e.target.value)} /></div>
        <div className="form-row">
          <div className="form-group"><label className="form-label">Rate</label><input className="form-input" placeholder="e.g., 5%" value={form.interest_rate} onChange={e => updateField("interest_rate", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Max Amount</label><input className="form-input" placeholder="e.g., Up to RWF 10M" value={form.max_amount} onChange={e => updateField("max_amount", e.target.value)} /></div>
        </div>
        <div className="form-group"><label className="form-label">Features</label>
          <div className="dyn-list">{form.features.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Feature ${i + 1}`} value={f} onChange={e => { const n = [...form.features]; n[i] = e.target.value; setForm(f => ({ ...f, features: n })); }} />{form.features.length > 1 && <button className="dyn-remove" onClick={() => { setForm(f => ({ ...f, features: f.features.filter((_, j) => j !== i) })); }} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={() => { setForm(f => ({ ...f, features: [...f.features, ""] })); }} type="button"><PlusIcon /> Add Feature</button>
        </div>
        <div className="form-group"><label className="form-label">Eligibility</label>
          <div className="dyn-list">{form.eligibility.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Eligibility ${i + 1}`} value={f} onChange={e => { const n = [...form.eligibility]; n[i] = e.target.value; setForm(f => ({ ...f, eligibility: n })); }} />{form.eligibility.length > 1 && <button className="dyn-remove" onClick={() => { setForm(f => ({ ...f, eligibility: f.eligibility.filter((_, j) => j !== i) })); }} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={() => { setForm(f => ({ ...f, eligibility: [...f.eligibility, ""] })); }} type="button"><PlusIcon /> Add Eligibility</button>
        </div>
        <div className="form-group"><label className="form-label">Required Documents</label>
          <div className="dyn-list">{form.requiredDocuments.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Document ${i + 1}`} value={f} onChange={e => { const n = [...form.requiredDocuments]; n[i] = e.target.value; setForm(f => ({ ...f, requiredDocuments: n })); }} />{form.requiredDocuments.length > 1 && <button className="dyn-remove" onClick={() => { setForm(f => ({ ...f, requiredDocuments: f.requiredDocuments.filter((_, j) => j !== i) })); }} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={() => { setForm(f => ({ ...f, requiredDocuments: [...f.requiredDocuments, ""] })); }} type="button"><PlusIcon /> Add Document</button>
        </div>

        <div className="form-group"><label className="form-label">Targeted Customers</label>
          <div className="dyn-list">{form.targetedCustomers.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Customer ${i + 1}`} value={f} onChange={e => { const n = [...form.targetedCustomers]; n[i] = e.target.value; setForm(f => ({ ...f, targetedCustomers: n })); }} />{form.targetedCustomers.length > 1 && <button className="dyn-remove" onClick={() => { setForm(f => ({ ...f, targetedCustomers: f.targetedCustomers.filter((_, j) => j !== i) })); }} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={() => { setForm(f => ({ ...f, targetedCustomers: [...f.targetedCustomers, ""] })); }} type="button"><PlusIcon /> Add Customer</button>
        </div>

        <div className="form-group"><label className="form-label">Benefits</label>
          <div className="dyn-list">{form.benefits.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Benefit ${i + 1}`} value={f} onChange={e => { const n = [...form.benefits]; n[i] = e.target.value; setForm(f => ({ ...f, benefits: n })); }} />{form.benefits.length > 1 && <button className="dyn-remove" onClick={() => { setForm(f => ({ ...f, benefits: f.benefits.filter((_, j) => j !== i) })); }} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={() => { setForm(f => ({ ...f, benefits: [...f.benefits, ""] })); }} type="button"><PlusIcon /> Add Benefit</button>
        </div>

        <div className="form-group"><label className="form-label">Required Forms</label>
          <div className="dyn-list">{form.requiredForms.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Form ${i + 1}`} value={f} onChange={e => { const n = [...form.requiredForms]; n[i] = e.target.value; setForm(f => ({ ...f, requiredForms: n })); }} />{form.requiredForms.length > 1 && <button className="dyn-remove" onClick={() => { setForm(f => ({ ...f, requiredForms: f.requiredForms.filter((_, j) => j !== i) })); }} type="button">×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={() => { setForm(f => ({ ...f, requiredForms: [...f.requiredForms, ""] })); }} type="button"><PlusIcon /> Add Form</button>
        </div>

        <div className="form-group"><label className="form-label">Application Process</label><textarea className="form-textarea" placeholder="Describe the application process" value={form.applicationProcess} onChange={e => updateField("applicationProcess", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} style={{ fontSize: 13 }} />
          {uploading && <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>Uploading...</span>}
          {imgErr && <span style={{ marginLeft: 8, fontSize: 12, color: "#c0392b" }}>Upload failed</span>}
          {form.imageUrl && <div style={{ marginTop: 6 }}><img src={form.imageUrl.startsWith("/") ? API_ORIGIN + form.imageUrl : form.imageUrl} alt="" style={{ width:60, height:60, borderRadius:6, objectFit:"cover" }} /></div>}
        </div>
        <div className="form-group">
          <label className="form-label">Image URL</label>
          <input className="form-input" placeholder="Or paste image URL directly" value={form.imageUrl} onChange={e => updateField("imageUrl", e.target.value)} />
        </div>
        <label className="checkbox-row"><input type="checkbox" checked={form.featured} onChange={e => updateField("featured", e.target.checked)} /><span className="checkbox-label">Mark as Featured</span></label>
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={() => onSave(form)}><PlusIcon size={15} /> {initial ? "Update" : "Create"} Service</button></div>
      </div>
    </div>
  );
}

function ManageServices({ user, onBack, onLogout }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  const fetchServices = () => {
    setLoading(true);
    fetch(`${API_BASE}/other-services`)
      .then(r => r.json())
      .then(res => {
        if (res.success) setServices(toFrontendList(res.data || []));
        else setServices([]);
      })
      .catch(() => setServices([]))
      .finally(() => setLoading(false));
  };

  useEffect(fetchServices, []);

  function toFrontendList(data) {
    return data.map(s => ({
      id: s.id,
      title: s.title,
      description: s.description || "",
      rate: `${s.interest_rate}%`,
      amount: s.max_amount ? `Up to RWF ${Number(s.max_amount).toLocaleString()}` : "",
      featured: s.is_featured || false,
      imageUrl: s.image_url || "",
      features: s.features || [],
      eligibility: s.eligibility || [],
      requiredDocuments: s.required_documents || [],
      applicationProcess: s.application_process || "",
      targetedCustomers: s.targeted_customers || [],
      benefits: s.benefits || [],
      requiredForms: s.required_forms || [],
    }));
  }

  function toApi(fp) {
    const rawRate = String(fp.interest_rate || "").replace(/%/g, "").trim();
    const rawAmt  = String(fp.max_amount || "").replace(/[^0-9]/g, "").trim();
    return {
      title: fp.title || "",
      description: fp.description || "",
      interest_rate: rawRate ? parseFloat(rawRate) || 0 : 0,
      max_amount: rawAmt ? parseInt(rawAmt, 10) || null : null,
      features: Array.isArray(fp.features) ? fp.features.filter(f => String(f || "").trim()) : [],
      eligibility: Array.isArray(fp.eligibility) ? fp.eligibility.filter(f => String(f || "").trim()) : [],
      required_documents: Array.isArray(fp.requiredDocuments) ? fp.requiredDocuments.filter(f => String(f || "").trim()) : [],
      application_process: fp.applicationProcess || "",
      is_featured: !!fp.featured,
      image_url: fp.imageUrl || "",
      targeted_customers: Array.isArray(fp.targetedCustomers) ? fp.targetedCustomers.filter(f => String(f || "").trim()) : [],
      benefits: Array.isArray(fp.benefits) ? fp.benefits.filter(f => String(f || "").trim()) : [],
      required_forms: Array.isArray(fp.requiredForms) ? fp.requiredForms.filter(f => String(f || "").trim()) : [],
    };
  }

  const handleCreate = async (form) => {
    try {
      const r = await fetch(`${API_BASE}/other-services`, {
        method: "POST", headers: apiHeaders(), body: JSON.stringify(toApi(form)),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setShowAdd(false);
      fetchServices();
      fire("Service created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleUpdate = async (form) => {
    try {
      const r = await fetch(`${API_BASE}/other-services/${editing.id}`, {
        method: "PUT", headers: apiHeaders(), body: JSON.stringify(toApi(form)),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setEditing(null);
      fetchServices();
      fire("Service updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/other-services/${deleting.id}`, {
        method: "DELETE", headers: apiHeaders(),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setServices(p => p.filter(x => x.id !== deleting.id));
      setDeleting(null);
      fire("Service deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Other Services" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header"><div><h1 className="mgmt-page-title">Other Services</h1><p className="page-sub">Manage additional member services</p></div><button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Service</button></div>
        {loading ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>Loading services...</p>
        ) : !services.length ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>No services yet. Click "Add Service" to create one.</p>
        ) : (
          <div className="products-grid">
            {services.map(s => (
              <div className="product-card" key={s.id}>
                <div className="product-card-top">
                  <div className="badges">{s.featured && <span className="badge badge-featured">Featured</span>}</div>
                  {s.imageUrl ? <img src={s.imageUrl.startsWith("/") ? API_ORIGIN + s.imageUrl : s.imageUrl} alt="" style={{ width:36, height:36, borderRadius:8, objectFit:"cover" }} onError={(e) => { e.target.style.display="none"; }} /> : <span className="card-icon-muted"><ServerIcon size={18} /></span>}
                </div>
                <div className="product-name">{s.title}</div>
                <div className="product-desc">{s.description}</div>
                <div className="product-rate">{s.rate}</div>
                <div className="product-amount">{s.amount}</div>
                <div className="card-actions"><button className="edit-btn" onClick={() => setEditing(s)}><EditIcon /> Edit</button><button className="delete-btn" onClick={() => setDeleting(s)}><TrashIcon /> Delete</button></div>
              </div>
            ))}
          </div>
        )}
      </main>
      {showAdd  && <ServiceModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <ServiceModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE BOARD MEMBERS
// ══════════════════════════════════════════════════════════════════════════
const BOARD_TYPES = [
  { value: "board_of_directors", label: "Board of Directors" },
  { value: "supervisory_board", label: "Supervisory Board" },
  { value: "management_team", label: "Management Team" },
];

function BoardMemberModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial ? { ...initial } : { name: "", role: "", image: "", bio: "", board_type: "board_of_directors" });
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleImageUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const r = await fetch(`${API_BASE}/upload`, { method: "POST", headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }, body: fd });
      const j = await r.json();
      if (j.success) { set("image", j.data?.url || j.url || ""); setImgError(false); }
      else { setImgError(true); }
    } catch { setImgError(true); }
    setUploading(false);
  };

  const handleSave = () => { if (!form.name.trim() || !form.role.trim()) return; onSave({ ...form }); };
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Board Member" : "Add New Board Member"}</div><div className="modal-sub">Fill in the board member details below</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="img-preview-row">
          <div className="img-preview-circle">
            {form.image && !imgError ? <img src={form.image} alt="preview" onError={() => setImgError(true)} /> : <span className="img-preview-placeholder"><UserCircleIcon size={36} /></span>}
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label">Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} style={{ fontSize: 13, marginBottom: 6 }} />
            {uploading && <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>Uploading...</span>}
            <input className="form-input" placeholder="Or paste image URL" value={form.image} onChange={e => { set("image", e.target.value); setImgError(false); }} />
          </div>
        </div>
        <div className="form-group"><label className="form-label">Board Type</label><select className="form-select" value={form.board_type} onChange={e => set("board_type", e.target.value)}>{BOARD_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}</select></div>
        <div className="form-group"><label className="form-label">Full Name</label><input className="form-input" placeholder="Dr. John Doe" value={form.name} onChange={e => set("name", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Role / Position</label><input className="form-input" placeholder="Board Chairperson" value={form.role} onChange={e => set("role", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Biography</label><textarea className="form-textarea" placeholder="Brief biography and qualifications" value={form.bio} onChange={e => set("bio", e.target.value)} /></div>
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Add Member"}</button></div>
      </div>
    </div>
  );
}

const BOARD_TYPE_LABEL = { board_of_directors: "Board of Directors", supervisory_board: "Supervisory Board", management_team: "Management Team" };
const BOARD_TYPE_COLOR = { board_of_directors: "#166534", supervisory_board: "#b45309", management_team: "#0e5a6e" };

function ManageBoard({ user, onBack, onLogout }) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [typeFilter, setTypeFilter] = useState("all");
  const [fire, Toast] = useToast();

  useEffect(() => {
    fetch(`${API_BASE}/board/members`)
      .then(r => r.json())
      .then(res => { if (res.success) setMembers((res.data || []).map(toFrontendBoardMember)); else fire("Failed to load members", "#c0392b"); })
      .catch(() => fire("Failed to load members", "#c0392b"))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async data => {
    try {
      const r = await fetch(`${API_BASE}/board/members`, { method: "POST", headers: apiHeaders(), body: JSON.stringify(toApiBoardMember(data)) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setMembers(p => [...p, toFrontendBoardMember(j.data)]); setShowAdd(false); fire("✓ Board member added!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const handleUpdate = async data => {
    try {
      const r = await fetch(`${API_BASE}/board/members/${editing.id}`, { method: "PUT", headers: apiHeaders(), body: JSON.stringify(toApiBoardMember(data)) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setMembers(p => p.map(x => x.id === editing.id ? toFrontendBoardMember(j.data) : x)); setEditing(null); fire("✓ Member updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/board/members/${deleting.id}`, { method: "DELETE", headers: apiHeaders() });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setMembers(p => p.filter(x => x.id !== deleting.id)); setDeleting(null); fire("Member deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const filtered = typeFilter === "all" ? members : members.filter(m => m.board_type === typeFilter);

  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Board Members" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header"><div><h1 className="mgmt-page-title">Board Members</h1><p className="page-sub">Manage board member profiles</p></div><button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Member</button></div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          {[{ value: "all", label: "All" }, ...BOARD_TYPES].map(t => (
            <button key={t.value} onClick={() => setTypeFilter(t.value)} style={{ padding: "6px 14px", borderRadius: 20, border: typeFilter === t.value ? "2px solid #14532d" : "1px solid #d0d0d0", background: typeFilter === t.value ? "#e6f4ec" : "#fff", color: typeFilter === t.value ? "#14532d" : "#555", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>{t.label}</button>
          ))}
        </div>
        {loading ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>Loading members...</p>
        ) : (
          <div className="board-grid">
            {filtered.map(m => (
              <div className="board-card" key={m.id}>
                <div className="board-avatar-wrap">
                  {m.image ? <img className="board-avatar-img" src={m.image} alt={m.name} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} /> : null}
                  <span className="board-avatar-placeholder" style={{ display: m.image ? "none" : "flex" }}><UserCircleIcon size={50} /></span>
                </div>
                <div className="board-name">{m.name}</div><div className="board-role">{m.role}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: BOARD_TYPE_COLOR[m.board_type] || "#555", marginBottom: 6 }}>{BOARD_TYPE_LABEL[m.board_type] || m.board_type}</div>
                <div className="board-bio">{m.bio}</div>
                <div className="card-actions"><button className="edit-btn" onClick={() => setEditing(m)}><EditIcon /> Edit</button><button className="delete-btn" onClick={() => setDeleting(m)}><TrashIcon /> Delete</button></div>
              </div>
            ))}
          </div>
        )}
      </main>
      {showAdd  && <BoardMemberModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <BoardMemberModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.name} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE CAREERS
// ══════════════════════════════════════════════════════════════════════════

// ── Exam Result form modal (add / edit a single entry) ───────────────────
function ExamResultFormModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(
    initial
      ? { ...initial }
      : { title: "", category: "written", published_at: "", is_latest: false }
  );
  const [file, setFile] = useState(null);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.title.trim() || !form.published_at) return;
    // on create, file is required; on edit it's optional
    if (!isEdit && !file) return;
    onSave({ ...form, file });
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div>
            <div className="modal-title">{isEdit ? "Edit Exam Result" : "Add Exam Result"}</div>
            <div className="modal-sub">Fill in the result details below</div>
          </div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>

        <div className="form-group">
          <label className="form-label">Title</label>
          <input className="form-input" placeholder="e.g., Loan Officer – Written Exam Results" value={form.title} onChange={e => set("title", e.target.value)} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Category</label>
            <select className="form-select" value={form.category} onChange={e => set("category", e.target.value)}>
              <option value="written">Written Exam Results</option>
              <option value="oral">Oral Interview / Final Results</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Published Date</label>
            <input className="form-input" type="date" value={form.published_at} onChange={e => set("published_at", e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            {isEdit ? "Replace File (PDF / DOC)" : "Upload File (PDF / DOC) *"}
          </label>
          <input
            className="form-input"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={e => setFile(e.target.files?.[0] || null)}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          />
          {isEdit && initial?.file_url && !file && (
            <div style={{ fontSize: "0.78rem", color: "#7a7a6a", marginTop: 4 }}>
              Current file: <a href={initial.file_url} target="_blank" rel="noopener noreferrer" style={{ color: "#1a4a2e" }}>view existing</a>
            </div>
          )}
          {file && (
            <div style={{ fontSize: "0.78rem", color: "#2d6a4f", marginTop: 4 }}>
              ✓ {file.name}
            </div>
          )}
        </div>

        <label className="checkbox-row">
          <input type="checkbox" checked={form.is_latest} onChange={e => set("is_latest", e.target.checked)} />
          <span className="checkbox-label">Mark as Latest <span style={{ color: "#9a9a8a", fontWeight: 400 }}>(clears Latest from others in same category)</span></span>
        </label>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Add Result"}</button>
        </div>
      </div>
    </div>
  );
}

// ── Exam Results manager modal (the full list + CRUD) ────────────────────
function ExamResultsModal({ onClose, user }) {
  const [tab, setTab] = useState("written");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  const loadResults = (category) => {
    setLoading(true);
    fetch(`${API_BASE}/exam-results?category=${category}`, { headers: apiHeaders() })
      .then(r => r.json())
      .then(res => { if (res.success) setResults(res.data || []); else fire("Failed to load results", "#c0392b"); })
      .catch(() => fire("Failed to load results", "#c0392b"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadResults(tab); }, [tab]);

  const handleCreate = async (data) => {
    try {
      const fd = new FormData();
      fd.append("title", data.title);
      fd.append("category", data.category);
      fd.append("published_at", data.published_at);
      fd.append("is_latest", String(data.is_latest));
      fd.append("file", data.file);
      const token = localStorage.getItem("accessToken");
      const r = await fetch(`${API_BASE}/exam-results`, {
        method: "POST",
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: fd,
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setShowAdd(false);
      loadResults(tab);
      fire("✓ Result added!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleUpdate = async (data) => {
    try {
      const fd = new FormData();
      fd.append("title", data.title);
      fd.append("category", data.category);
      fd.append("published_at", data.published_at);
      fd.append("is_latest", String(data.is_latest));
      if (data.file) fd.append("file", data.file); // only if a new file was chosen
      const token = localStorage.getItem("accessToken");
      const r = await fetch(`${API_BASE}/exam-results/${editing.id}`, {
        method: "PUT",
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: fd,
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setEditing(null);
      loadResults(tab);
      fire("✓ Result updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/exam-results/${deleting.id}`, { method: "DELETE", headers: apiHeaders() });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setDeleting(null);
      loadResults(tab);
      fire("Result removed.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const fmtDate = d => {
    if (!d) return "";
    try { return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); }
    catch { return d; }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 680, width: "100%" }}>
        <div className="modal-header">
          <div>
            <div className="modal-title">Exam Results &amp; Interview Notices</div>
            <div className="modal-sub">Add, edit or remove published results</div>
          </div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, borderBottom: "2px solid #e4e0d8", marginBottom: 20 }}>
          {[{ key: "written", label: "Written Exam Results" }, { key: "oral", label: "Oral / Final Results" }].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: "10px 20px", border: "none", background: tab === t.key ? "#1a4a2e" : "transparent",
                color: tab === t.key ? "#fff" : "#7a7a6a", fontWeight: 600, fontSize: "0.85rem",
                cursor: "pointer", borderRadius: "8px 8px 0 0", borderBottom: tab === t.key ? "2px solid #1a4a2e" : "2px solid transparent",
                marginBottom: -2, fontFamily: "inherit", transition: "all 0.15s"
              }}
            >{t.label}</button>
          ))}
          <button
            onClick={() => setShowAdd(true)}
            style={{
              marginLeft: "auto", display: "flex", alignItems: "center", gap: 6,
              padding: "8px 16px", background: "#1a4a2e", color: "#fff",
              border: "none", borderRadius: 8, fontWeight: 600, fontSize: "0.83rem",
              cursor: "pointer", fontFamily: "inherit", alignSelf: "center", marginBottom: 4
            }}
          ><PlusIcon /> Add Result</button>
        </div>

        {/* List */}
        {loading ? (
          <p style={{ textAlign: "center", padding: "32px 0", color: "#9a9a8a", fontSize: "0.9rem" }}>Loading...</p>
        ) : results.length === 0 ? (
          <p style={{ textAlign: "center", padding: "32px 0", color: "#9a9a8a", fontSize: "0.9rem" }}>No results published yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e4e0d8", borderRadius: 12, overflow: "hidden" }}>
            {results.map((item, idx) => (
              <div key={item.id} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
                borderBottom: idx < results.length - 1 ? "1px solid #f0ece4" : "none",
                background: "#fff"
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#1a1a14" }}>{item.title}</span>
                    {item.is_latest && (
                      <span style={{ background: "#c1440e", color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>Latest</span>
                    )}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#9a9a8a", marginTop: 2 }}>Published: {fmtDate(item.published_at)}</div>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                  <button className="edit-btn" onClick={() => setEditing(item)}><EditIcon /> Edit</button>
                  <button className="delete-btn" onClick={() => setDeleting(item)}><TrashIcon /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="modal-footer" style={{ marginTop: 20 }}>
          <button className="cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>

      {showAdd  && <ExamResultFormModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <ExamResultFormModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
      {Toast}
    </div>
  );
}

function JobModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial
    ? { ...initial, responsibilities: [...(initial.responsibilities || ["", ""])], requirements: [...(initial.requirements || ["", ""])] }
    : { title: "", department: "", location: "", type: "Full-time", desc: "", responsibilities: ["", ""], requirements: ["", ""], deadline: "", max_age: "" }
  );
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = () => { if (!form.title.trim() || !form.department.trim()) return; onSave({ ...form, responsibilities: form.responsibilities.filter(r => r.trim()), requirements: form.requirements.filter(r => r.trim()) }); };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Job Posting" : "Add New Job Posting"}</div><div className="modal-sub">Fill in the job details below</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>

        <div className="form-group"><label className="form-label">Job Title</label><input className="form-input" placeholder="e.g., Loan Officer" value={form.title} onChange={e => set("title", e.target.value)} /></div>

        <div className="form-row">
          <div className="form-group"><label className="form-label">Department</label><input className="form-input" placeholder="e.g., Credit Department" value={form.department} onChange={e => set("department", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Location</label><input className="form-input" placeholder="e.g., Kigali" value={form.location} onChange={e => set("location", e.target.value)} /></div>
        </div>

        <div className="form-group">
          <label className="form-label">Job Type</label>
          <select className="form-select" value={form.type} onChange={e => set("type", e.target.value)}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="form-group"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Brief job description" value={form.desc} onChange={e => set("desc", e.target.value)} /></div>

        <div className="form-group">
          <label className="form-label">Responsibilities</label>
          <DynList items={form.responsibilities} setItems={v => set("responsibilities", v)} placeholder="Responsibility" />
        </div>

        <div className="form-group">
          <label className="form-label">Requirements</label>
          <DynList items={form.requirements} setItems={v => set("requirements", v)} placeholder="Requirement" />
        </div>

        <div className="form-row">
          <div className="form-group"><label className="form-label">Maximum Age</label><input className="form-input" type="number" placeholder="e.g., 40" value={form.max_age} onChange={e => set("max_age", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Deadline to Apply</label><input className="form-input" type="date" value={form.deadline} onChange={e => set("deadline", e.target.value)} /></div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Create Job"}</button>
        </div>
      </div>
    </div>
  );
}

function ManageCareers({ user, onBack, onLogout }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [showExamResults, setShowExamResults] = useState(false);
  const [fire, Toast] = useToast();

  useEffect(() => {
    fetch(`${API_BASE}/careers`)
      .then(r => r.json())
      .then(res => { if (res.success) setJobs((res.data || []).map(toFrontendJob)); else fire("Failed to load jobs", "#c0392b"); })
      .catch(() => fire("Failed to load jobs", "#c0392b"))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async data => {
    try {
      const r = await fetch(`${API_BASE}/careers`, { method: "POST", headers: apiHeaders(), body: JSON.stringify(toApiJob(data)) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setJobs(p => [toFrontendJob(j.data), ...p]); setShowAdd(false); fire("✓ Job posting created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const handleUpdate = async data => {
    try {
      const r = await fetch(`${API_BASE}/careers/${editing.id}`, { method: "PUT", headers: apiHeaders(), body: JSON.stringify(toApiJob(data)) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setJobs(p => p.map(x => x.id === editing.id ? toFrontendJob(j.data) : x)); setEditing(null); fire("✓ Job posting updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/careers/${deleting.id}`, { method: "DELETE", headers: apiHeaders() });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setJobs(p => p.filter(x => x.id !== deleting.id)); setDeleting(null); fire("Job posting deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const fmtDate = d => { if (!d) return ""; const [y, m, day] = d.split("-"); return `${day}/${m}/${y}`; };

  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Careers" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header">
          <div><h1 className="mgmt-page-title">Job Openings</h1><p className="page-sub">Manage career opportunities</p></div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="add-btn" style={{ background: "#2d6a4f" }} onClick={() => setShowExamResults(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
              Exam Results
            </button>
            <button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Job</button>
          </div>
        </div>

        {loading ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>Loading jobs...</p>
        ) : (
          <div className="jobs-list">
            {jobs.map(j => (
              <div className="job-card" key={j.id}>
                <div className="job-card-left">
                  <div className="job-card-top">
                    <span className={jobTypeBadge(j.type)}>{j.type}</span>
                    <span className="badge badge-dept">{j.department}</span>
                  </div>
                  <div className="job-title">{j.title}</div>
                  <div className="job-location">{j.location}</div>
                  <div className="job-desc">{j.desc}</div>
                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => setEditing(j)}><EditIcon /> Edit</button>
                    <button className="delete-btn" onClick={() => setDeleting(j)}><TrashIcon /> Delete</button>
                  </div>
                  {(j.postedDate || j.deadline) && <div className="job-meta">Deadline: {fmtDate(j.deadline || j.postedDate)}</div>}
                </div>
                <div className="job-card-right">
                  <span className="job-icon-muted"><BriefcaseIcon size={20} /></span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showAdd  && <JobModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <JobModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
      {showExamResults && <ExamResultsModal user={user} onClose={() => setShowExamResults(false)} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE NEWS (popup modal)
// ══════════════════════════════════════════════════════════════════════════
function NewsFormModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial ? { ...initial } : {
    title: "", excerpt: "", content: "", tag: "", image_url: "", file_url: "",
    is_featured: false, status: "draft", section: "news", subsection: ""
  });
  const [uploading, setUploading] = useState(false);
  const [fire, Toast] = useToast();
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = () => { if (!form.title.trim()) return; onSave({ ...form }); };

  const handleFileUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const token = localStorage.getItem("accessToken");
      const r = await fetch(`${API_BASE}/upload`, { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: fd });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Upload failed");
      set("file_url", j.data.url);
      fire("File uploaded ✓", "#166534");
    } catch (err) {
      fire(err.message, "#c0392b");
    } finally {
      setUploading(false);
    }
  };

  const SECTIONS = ["news", "announcements", "publications", "tender"];
  const SUBSECTIONS = ["annual_report", "financial_report"];

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Article" : "Add New Article"}</div><div className="modal-sub">Fill in the article details below</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="form-group"><label className="form-label">Title *</label><input className="form-input" placeholder="Article title" value={form.title} onChange={e => set("title", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Excerpt</label><textarea className="form-textarea" placeholder="Brief summary for preview cards" value={form.excerpt} onChange={e => set("excerpt", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Content</label><textarea className="form-textarea" style={{ minHeight: 140 }} placeholder="Full article content (HTML supported)" value={form.content} onChange={e => set("content", e.target.value)} /></div>
        <div className="form-row">
          <div className="form-group"><label className="form-label">Section</label>
            <select className="form-select" value={form.section} onChange={e => set("section", e.target.value)}>
              {SECTIONS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
            </select>
          </div>
          <div className="form-group"><label className="form-label">Image URL</label><input className="form-input" placeholder="https://..." value={form.image_url} onChange={e => set("image_url", e.target.value)} /></div>
        </div>
        {form.section === "publications" && (
          <div className="form-group"><label className="form-label">Publication Type</label>
            <select className="form-select" value={form.subsection} onChange={e => set("subsection", e.target.value)}>
              <option value="">Select type...</option>
              {SUBSECTIONS.map(s => <option key={s} value={s}>{s.replace(/_/g, " ").replace(/\b\w/g, x => x.toUpperCase())}</option>)}
            </select>
          </div>
        )}
        <div className="form-row">
          <div className="form-group"><label className="form-label">Tag / Category</label><input className="form-input" placeholder="e.g., loans, savings" value={form.tag} onChange={e => set("tag", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Status</label>
            <select className="form-select" value={form.status} onChange={e => set("status", e.target.value)}>
              <option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Attach File (PDF, DOC, etc.)</label>
            <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" onChange={handleFileUpload} disabled={uploading} />
            {uploading && <span style={{ marginLeft: 8, fontSize: 12, color: "#166534" }}>Uploading...</span>}
            {form.file_url && <span style={{ marginLeft: 8, fontSize: 12, color: "#166534" }}>✓ {form.file_url.split("/").pop()}</span>}
          </div>
          <div className="form-group" style={{ display: "flex", alignItems: "flex-end", paddingBottom: 18 }}>
            <label className="checkbox-row" style={{ marginBottom: 0 }}>
              <input type="checkbox" checked={form.is_featured} onChange={e => set("is_featured", e.target.checked)} />
              <span className="checkbox-label">Featured Article</span>
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Create Article"}</button>
        </div>
      </div>
      {Toast}
    </div>
  );
}

function ManageNews({ user, onClose, onLogout }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  const fetchNews = () => {
    setLoading(true);
    fetch(`${API_BASE}/news`)
      .then(r => r.json())
      .then(res => { if (res.success) setArticles(res.data || []); else fire("Failed to load news", "#c0392b"); })
      .catch(() => fire("Failed to load news", "#c0392b"))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchNews(); }, []);

  const handleCreate = async data => {
    try {
      const r = await fetch(`${API_BASE}/news`, { method: "POST", headers: apiHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setArticles(p => [j.data, ...p]); setShowAdd(false); fire("✓ Article created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleUpdate = async data => {
    try {
      const r = await fetch(`${API_BASE}/news/${editing.id}`, { method: "PUT", headers: apiHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setArticles(p => p.map(x => x.id === editing.id ? j.data : x)); setEditing(null); fire("✓ Article updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/news/${deleting.id}`, { method: "DELETE", headers: apiHeaders() });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setArticles(p => p.filter(x => x.id !== deleting.id)); setDeleting(null); fire("Article deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const fmtDate = d => d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 760, maxHeight: "85vh" }}>
        <div className="modal-header">
          <div><div className="modal-title">Manage News</div><div className="modal-sub">Publish news and announcements</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Article</button>
            <button className="modal-close" onClick={onClose}><CloseIcon /></button>
          </div>
        </div>
        {loading ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>Loading articles...</p>
        ) : !articles.length ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>No articles yet. Click "Add Article" to create one.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {articles.map(a => (
              <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "#fafafa", border: "1.5px solid #e4ede4", borderRadius: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <strong style={{ fontSize: 14, color: "#0d1f0d" }}>{a.title}</strong>
                    <span className="badge badge-account" style={{ fontSize: 10, padding: "2px 7px", textTransform: "capitalize" }}>{a.section || "news"}{a.subsection ? ` · ${a.subsection.replace(/_/g, " ")}` : ""}</span>
                    <span className={`badge ${a.status === "published" ? "badge-featured" : a.status === "archived" ? "" : "badge-savings"}`} style={{ fontSize: 10.5, padding: "2px 7px", textTransform: "capitalize" }}>{a.status}</span>
                    {a.is_featured && <span className="badge badge-featured" style={{ fontSize: 10.5, padding: "2px 7px" }}>Featured</span>}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#8aaa8a" }}>{a.tag && <span>{a.tag} · </span>}{fmtDate(a.published_at || a.created_at)}</div>
                </div>
                <div className="card-actions">
                  <button className="edit-btn" onClick={() => setEditing(a)}><EditIcon /> Edit</button>
                  <button className="delete-btn" onClick={() => setDeleting(a)}><TrashIcon /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showAdd  && <NewsFormModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <NewsFormModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE TRENDS (popup modal)
// ══════════════════════════════════════════════════════════════════════════
const TREND_TABS = [
  { id: "kpis",     label: "KPIs" },
  { id: "savings",  label: "Savings" },
  { id: "loans",    label: "Loans" },
  { id: "insights", label: "Insights" },
];

const ts = { display: "flex", gap: 10, marginBottom: 20, borderBottom: "1.5px solid #e4ede4", paddingBottom: 0 };
const tabActive = { padding: "10px 18px", border: "none", background: "#166534", color: "#fff", borderRadius: "8px 8px 0 0", fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, fontWeight: 600, cursor: "pointer" };
const tabInactive = { padding: "10px 18px", border: "none", background: "none", color: "#6b7f6b", fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, fontWeight: 500, cursor: "pointer", transition: "color .15s" };

function ManageTrends({ user, onClose, onLogout }) {
  const [tab, setTab] = useState("kpis");
  const [fire, Toast] = useToast();

  /* ── KPIs ── */
  const [kpis, setKpis] = useState([]); const [kpiLoading, setKpiLoading] = useState(true);
  const [showKpiAdd, setShowKpiAdd] = useState(false); const [editingKpi, setEditingKpi] = useState(null); const [deletingKpi, setDeletingKpi] = useState(null);
  const fetchKpis = () => { setKpiLoading(true); fetch(`${API_BASE}/trends/kpis`).then(r=>r.json()).then(res=>{if(res.success)setKpis(res.data||[]);else fire("Failed to load KPIs","#c0392b")}).catch(()=>fire("Failed to load KPIs","#c0392b")).finally(()=>setKpiLoading(false)) };
  const kpiCrud = useCrud(`${API_BASE}/trends/kpis`, setKpis, fire);

  /* ── Savings ── */
  const [savings, setSavings] = useState([]); const [savLoading, setSavLoading] = useState(true);
  const [showSavAdd, setShowSavAdd] = useState(false); const [editingSav, setEditingSav] = useState(null); const [deletingSav, setDeletingSav] = useState(null);
  const fetchSavings = () => { setSavLoading(true); fetch(`${API_BASE}/trends/savings`).then(r=>r.json()).then(res=>{if(res.success)setSavings(res.data||[]);else fire("Failed to load savings","#c0392b")}).catch(()=>fire("Failed to load savings","#c0392b")).finally(()=>setSavLoading(false)) };
  const savCrud = useCrud(`${API_BASE}/trends/savings`, setSavings, fire);

  /* ── Loans ── */
  const [loans, setLoans] = useState([]); const [loanLoading, setLoanLoading] = useState(true);
  const [showLoanAdd, setShowLoanAdd] = useState(false); const [editingLoan, setEditingLoan] = useState(null); const [deletingLoan, setDeletingLoan] = useState(null);
  const fetchLoans = () => { setLoanLoading(true); fetch(`${API_BASE}/trends/loans`).then(r=>r.json()).then(res=>{if(res.success)setLoans(res.data||[]);else fire("Failed to load loans","#c0392b")}).catch(()=>fire("Failed to load loans","#c0392b")).finally(()=>setLoanLoading(false)) };
  const loanCrud = useCrud(`${API_BASE}/trends/loans`, setLoans, fire);

  /* ── Insights ── */
  const [insights, setInsights] = useState([]); const [insLoading, setInsLoading] = useState(true);
  const [showInsAdd, setShowInsAdd] = useState(false); const [editingIns, setEditingIns] = useState(null); const [deletingIns, setDeletingIns] = useState(null);
  const fetchInsights = () => { setInsLoading(true); fetch(`${API_BASE}/trends/insights`).then(r=>r.json()).then(res=>{if(res.success)setInsights(res.data||[]);else fire("Failed to load insights","#c0392b")}).catch(()=>fire("Failed to load insights","#c0392b")).finally(()=>setInsLoading(false)) };
  const insCrud = useCrud(`${API_BASE}/trends/insights`, setInsights, fire);

  useEffect(() => { if (tab==="kpis") fetchKpis(); else if (tab==="savings") fetchSavings(); else if (tab==="loans") fetchLoans(); else if (tab==="insights") fetchInsights(); }, [tab]);

  const listItem = (item, fields, onEdit, onDelete) => (
    <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#fafafa", border: "1.5px solid #e4ede4", borderRadius: 10 }}>
      <div style={{ flex: 1, minWidth: 0, fontSize: 13.5, color: "#0d1f0d" }}>
        {fields.map((f, i) => <span key={f}>{i > 0 && <span style={{ color: "#c8dcc8", margin: "0 8px" }}>|</span>}<strong>{item[f]}</strong></span>)}
      </div>
      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(item)}><EditIcon /> Edit</button>
        <button className="delete-btn" onClick={() => onDelete(item)}><TrashIcon /> Delete</button>
      </div>
    </div>
  );

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 760, maxHeight: "85vh" }}>
        <div className="modal-header">
          <div><div className="modal-title">Manage Trends & Stats</div><div className="modal-sub">Update financial indicators and charts</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div style={ts}>{TREND_TABS.map(t => <button key={t.id} style={tab===t.id?tabActive:tabInactive} onClick={()=>setTab(t.id)}>{t.label}</button>)}</div>

        {/* KPIs */}
        {tab === "kpis" && <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}><button className="add-btn" onClick={()=>setShowKpiAdd(true)}><PlusIcon /> Add KPI</button></div>
          {kpiLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !kpis.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No KPIs yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{kpis.map(k => listItem(k, ["label","value"], ()=>setEditingKpi(k), ()=>setDeletingKpi(k)))}</div>}
        </>}

        {/* Savings */}
        {tab === "savings" && <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}><button className="add-btn" onClick={()=>setShowSavAdd(true)}><PlusIcon /> Add Record</button></div>
          {savLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !savings.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No savings data yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{savings.map(s => listItem(s, ["period","label","amount"], ()=>setEditingSav(s), ()=>setDeletingSav(s)))}</div>}
        </>}

        {/* Loans */}
        {tab === "loans" && <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}><button className="add-btn" onClick={()=>setShowLoanAdd(true)}><PlusIcon /> Add Category</button></div>
          {loanLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !loans.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No loan distribution data yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{loans.map(l => listItem(l, ["label","percentage"], ()=>setEditingLoan(l), ()=>setDeletingLoan(l)))}</div>}
        </>}

        {/* Insights */}
        {tab === "insights" && <>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}><button className="add-btn" onClick={()=>setShowInsAdd(true)}><PlusIcon /> Add Insight</button></div>
          {insLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !insights.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No insights yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{insights.map(i => listItem(i, ["title","body"], ()=>setEditingIns(i), ()=>setDeletingIns(i)))}</div>}
        </>}
      </div>

      {/* KPI Modal */}
      {showKpiAdd && <TrendForm fields={["label","value","change_pct","icon","sort_order"]} booleans={["is_positive"]} onClose={()=>setShowKpiAdd(false)} onSave={d=>kpiCrud.create(d,()=>{setShowKpiAdd(false);fetchKpis()})} />}
      {editingKpi && <TrendForm initial={editingKpi} fields={["label","value","change_pct","icon","sort_order","is_active"]} booleans={["is_positive"]} onClose={()=>setEditingKpi(null)} onSave={d=>kpiCrud.update(editingKpi.id,d,()=>{setEditingKpi(null);fetchKpis()})} />}
      {deletingKpi && <ConfirmModal name={deletingKpi.label} onClose={()=>setDeletingKpi(null)} onConfirm={()=>kpiCrud.remove(deletingKpi.id,()=>{setDeletingKpi(null);fetchKpis()})} />}

      {/* Savings Modal */}
      {showSavAdd && <TrendForm fields={["period","amount","label","year","quarter"]} onClose={()=>setShowSavAdd(false)} onSave={d=>savCrud.create(d,()=>{setShowSavAdd(false);fetchSavings()})} />}
      {editingSav && <TrendForm initial={editingSav} fields={["period","amount","label","year","quarter"]} onClose={()=>setEditingSav(null)} onSave={d=>savCrud.update(editingSav.id,d,()=>{setEditingSav(null);fetchSavings()})} />}
      {deletingSav && <ConfirmModal name={deletingSav.period||deletingSav.label} onClose={()=>setDeletingSav(null)} onConfirm={()=>savCrud.remove(deletingSav.id,()=>{setDeletingSav(null);fetchSavings()})} />}

      {/* Loan Modal */}
      {showLoanAdd && <TrendForm fields={["label","percentage","color","sort_order"]} onClose={()=>setShowLoanAdd(false)} onSave={d=>loanCrud.create(d,()=>{setShowLoanAdd(false);fetchLoans()})} />}
      {editingLoan && <TrendForm initial={editingLoan} fields={["label","percentage","color","sort_order","is_active"]} onClose={()=>setEditingLoan(null)} onSave={d=>loanCrud.update(editingLoan.id,d,()=>{setEditingLoan(null);fetchLoans()})} />}
      {deletingLoan && <ConfirmModal name={deletingLoan.label} onClose={()=>setDeletingLoan(null)} onConfirm={()=>loanCrud.remove(deletingLoan.id,()=>{setDeletingLoan(null);fetchLoans()})} />}

      {/* Insight Modal */}
      {showInsAdd && <TrendForm fields={["title","body","sort_order"]} onClose={()=>setShowInsAdd(false)} onSave={d=>insCrud.create(d,()=>{setShowInsAdd(false);fetchInsights()})} />}
      {editingIns && <TrendForm initial={editingIns} fields={["title","body","sort_order","is_active"]} onClose={()=>setEditingIns(null)} onSave={d=>insCrud.update(editingIns.id,d,()=>{setEditingIns(null);fetchInsights()})} />}
      {deletingIns && <ConfirmModal name={deletingIns.title} onClose={()=>setDeletingIns(null)} onConfirm={()=>insCrud.remove(deletingIns.id,()=>{setDeletingIns(null);fetchInsights()})} />}
      {Toast}
    </div>
  );
}

/* ── Reusable trend form & CRUD helper ── */
function TrendForm({ initial, fields, booleans = [], onClose, onSave }) {
  const isEdit = !!initial;
  const init = {};
  fields.forEach(f => init[f] = initial?.[f] ?? "");
  booleans.forEach(b => init[b] = initial?.[b] ?? false);
  const [form, setForm] = useState(init);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = () => { if (!fields.some(f => form[f] === "")) onSave(form); };
  const labelMap = { change_pct: "Change %", sort_order: "Sort Order", is_positive: "Positive Trend?" };
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit" : "Add"} Entry</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        {fields.map(f => f.startsWith("is_") || booleans.includes(f) ? null :
          f === "body" ? (
            <div className="form-group" key={f}><label className="form-label">{labelMap[f] || f.charAt(0).toUpperCase()+f.slice(1)}</label><textarea className="form-textarea" placeholder={f} value={form[f]} onChange={e=>set(f,e.target.value)} /></div>
          ) : f === "sort_order" ? (
            <div className="form-group" key={f}><label className="form-label">Sort Order</label><input className="form-input" type="number" placeholder="0" value={form[f]} onChange={e=>set(f,parseInt(e.target.value)||0)} /></div>
          ) : (
            <div className="form-group" key={f}><label className="form-label">{labelMap[f] || f.charAt(0).toUpperCase()+f.slice(1)}</label><input className="form-input" placeholder={f} value={form[f]} onChange={e=>set(f,e.target.value)} /></div>
          )
        )}
        {booleans.map(b => (
          <label className="checkbox-row" key={b} style={{ marginBottom: 12 }}>
            <input type="checkbox" checked={form[b]} onChange={e=>set(b,e.target.checked)} />
            <span className="checkbox-label">{labelMap[b] || b.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>
          </label>
        ))}
        {fields.includes("color") && (
          <div className="form-group"><label className="form-label">Color</label><input className="form-input" type="color" value={form.color||"#166534"} onChange={e=>set("color",e.target.value)} /></div>
        )}
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Create"}</button></div>
      </div>
    </div>
  );
}

function useCrud(baseUrl, setData, fire) {
  const create = async (data, done) => {
    try {
      const r = await fetch(baseUrl, { method: "POST", headers: apiHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      done(); fire("✓ Created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const update = async (id, data, done) => {
    try {
      const r = await fetch(`${baseUrl}/${id}`, { method: "PUT", headers: apiHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      done(); fire("✓ Updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const remove = async (id, done) => {
    try {
      const r = await fetch(`${baseUrl}/${id}`, { method: "DELETE", headers: apiHeaders() });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      done(); fire("Deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  return { create, update, remove };
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE GUIDES (popup modal)
// ══════════════════════════════════════════════════════════════════════════
const GUIDE_CATS = ["getting_started","loans","digital_services","education","savings"];

function GuideFormModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial ? { ...initial } : {
    title: "", description: "", category: "getting_started", duration: "",
    thumbnail: "", video_url: "", is_featured: false, sort_order: 0
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = () => { if (!form.title.trim() || !form.video_url.trim()) return; onSave({ ...form }); };
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Guide" : "Add New Guide"}</div><div className="modal-sub">Manage tutorial video</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="form-group"><label className="form-label">Title *</label><input className="form-input" placeholder="e.g., How to Apply for a Loan" value={form.title} onChange={e=>set("title",e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Brief description of the guide" value={form.description} onChange={e=>set("description",e.target.value)} /></div>
        <div className="form-row">
          <div className="form-group"><label className="form-label">Category</label>
            <select className="form-select" value={form.category} onChange={e=>set("category",e.target.value)}>
              {GUIDE_CATS.map(c => <option key={c} value={c}>{c.replace(/_/g," ").replace(/\b\w/g,x=>x.toUpperCase())}</option>)}
            </select>
          </div>
          <div className="form-group"><label className="form-label">Duration</label><input className="form-input" placeholder="e.g., 5:30" value={form.duration} onChange={e=>set("duration",e.target.value)} /></div>
        </div>
        <div className="form-group"><label className="form-label">Video URL *</label><input className="form-input" placeholder="https://youtube.com/..." value={form.video_url} onChange={e=>set("video_url",e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Thumbnail URL</label><input className="form-input" placeholder="https://..." value={form.thumbnail} onChange={e=>set("thumbnail",e.target.value)} /></div>
        <div className="form-row">
          <div className="form-group"><label className="form-label">Sort Order</label><input className="form-input" type="number" placeholder="0" value={form.sort_order} onChange={e=>set("sort_order",parseInt(e.target.value)||0)} /></div>
          <div className="form-group" style={{ display: "flex", alignItems: "flex-end", paddingBottom: 18 }}>
            <label className="checkbox-row" style={{ marginBottom: 0 }}>
              <input type="checkbox" checked={form.is_featured} onChange={e=>set("is_featured",e.target.checked)} />
              <span className="checkbox-label">Featured</span>
            </label>
          </div>
        </div>
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Create Guide"}</button></div>
      </div>
    </div>
  );
}

function ManageGuides({ user, onClose, onLogout }) {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  const fetchGuides = () => {
    setLoading(true);
    fetch(`${API_BASE}/guides`)
      .then(r => r.json())
      .then(res => { if (res.success) setGuides(res.data || []); else fire("Failed to load guides", "#c0392b"); })
      .catch(() => fire("Failed to load guides", "#c0392b"))
      .finally(() => setLoading(false));
  };
  useEffect(() => { fetchGuides(); }, []);

  const crud = useCrud(`${API_BASE}/guides`, null, fire);

  const handleCreate = async data => {
    try {
      const r = await fetch(`${API_BASE}/guides`, { method: "POST", headers: apiHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setShowAdd(false); fetchGuides(); fire("✓ Guide created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const handleUpdate = async data => {
    try {
      const r = await fetch(`${API_BASE}/guides/${editing.id}`, { method: "PUT", headers: apiHeaders(), body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setEditing(null); fetchGuides(); fire("✓ Guide updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };
  const handleDelete = async () => {
    try { await crud.remove(deleting.id, () => setDeleting(null)); fetchGuides(); }
    catch (e) { fire(e.message, "#c0392b"); }
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 760, maxHeight: "85vh" }}>
        <div className="modal-header">
          <div><div className="modal-title">Manage Video Guides</div><div className="modal-sub">Manage tutorial videos for users</div></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Guide</button>
            <button className="modal-close" onClick={onClose}><CloseIcon /></button>
          </div>
        </div>
        {loading ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>Loading guides...</p>
        ) : !guides.length ? (
          <p style={{ textAlign: "center", padding: 40, color: "#8aaa8a" }}>No guides yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {guides.map(g => (
              <div key={g.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "#fafafa", border: "1.5px solid #e4ede4", borderRadius: 10 }}>
                <div style={{ width: 80, height: 52, borderRadius: 8, overflow: "hidden", background: "#e4ede4", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#8aaa8a" }}>
                  {g.thumbnail ? <img src={g.thumbnail} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="flex"}} /> : null}
                  <span style={{display: g.thumbnail?"none":"flex"}}><VideoIcon size={18} /></span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
                    <strong style={{ fontSize: 14, color: "#0d1f0d" }}>{g.title}</strong>
                    {g.is_featured && <span className="badge badge-featured" style={{ fontSize: 10.5, padding: "2px 7px" }}>Featured</span>}
                  </div>
                  <div style={{ fontSize: 12.5, color: "#8aaa8a" }}>
                    <span>{g.category?.replace(/_/g," ").replace(/\b\w/g,x=>x.toUpperCase())}</span>
                    {g.duration && <span> · {g.duration}</span>}
                  </div>
                </div>
                <div className="card-actions">
                  <button className="edit-btn" onClick={() => setEditing(g)}><EditIcon /> Edit</button>
                  <button className="delete-btn" onClick={() => setDeleting(g)}><TrashIcon /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showAdd  && <GuideFormModal onClose={()=>setShowAdd(false)} onSave={handleCreate} />}
      {editing  && <GuideFormModal initial={editing} onClose={()=>setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={()=>setDeleting(null)} onConfirm={handleDelete} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE SETTINGS (popup modal)
// ══════════════════════════════════════════════════════════════════════════
const SETT_TABS = [
  { id: "site",     label: "Site Info" },
  { id: "socials",  label: "Social Links" },
  { id: "banners",  label: "Hero Banners" },
  { id: "toggles",  label: "Feature Toggles" },
  { id: "users",    label: "Users" },
];

function ManageSettings({ user, onClose, onLogout }) {
  const [tab, setTab] = useState("site");
  const [fire, Toast] = useToast();
  const [saving, setSaving] = useState(false);
  const crud = useCrud("", null, fire);

  /* ── Site Info ── */
  const [site, setSite] = useState(null);
  const [siteLoading, setSiteLoading] = useState(true);
  const fetchSite = () => {
    setSiteLoading(true);
    fetch(`${API_BASE}/settings/site`).then(r=>r.json()).then(res=>{if(res.success)setSite(res.data||{});else fire("Failed to load settings","#c0392b")}).catch(()=>fire("Failed to load settings","#c0392b")).finally(()=>setSiteLoading(false));
  };
  useEffect(() => { if (tab==="site") fetchSite(); }, [tab]);
  const handleSaveSite = async () => {
    setSaving(true);
    try {
      const r = await fetch(`${API_BASE}/settings/site`, { method: "PUT", headers: apiHeaders(), body: JSON.stringify(site) });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message||"Save failed");
      fire("✓ Site settings saved!");
    } catch (e) { fire(e.message, "#c0392b"); } finally { setSaving(false); }
  };

  /* ── Social Links ── */
  const [socials, setSocials] = useState([]); const [socLoading, setSocLoading] = useState(true);
  const [showSocAdd, setShowSocAdd] = useState(false); const [editingSoc, setEditingSoc] = useState(null); const [deletingSoc, setDeletingSoc] = useState(null);
  const fetchSocials = () => { setSocLoading(true); fetch(`${API_BASE}/settings/socials`).then(r=>r.json()).then(res=>{if(res.success)setSocials(res.data||[]);else fire("Failed","#c0392b")}).catch(()=>fire("Failed","#c0392b")).finally(()=>setSocLoading(false)) };

  /* ── Banners ── */
  const [banners, setBanners] = useState([]); const [banLoading, setBanLoading] = useState(true);
  const [showBanAdd, setShowBanAdd] = useState(false); const [editingBan, setEditingBan] = useState(null); const [deletingBan, setDeletingBan] = useState(null);
  const fetchBanners = () => { setBanLoading(true); fetch(`${API_BASE}/settings/banners`).then(r=>r.json()).then(res=>{if(res.success)setBanners(res.data||[]);else fire("Failed","#c0392b")}).catch(()=>fire("Failed","#c0392b")).finally(()=>setBanLoading(false)) };

  /* ── Toggles ── */
  const [toggles, setToggles] = useState([]); const [togLoading, setTogLoading] = useState(true);
  const [showTogAdd, setShowTogAdd] = useState(false); const [editingTog, setEditingTog] = useState(null); const [deletingTog, setDeletingTog] = useState(null);
  const fetchToggles = () => { setTogLoading(true); fetch(`${API_BASE}/settings/toggles`).then(r=>r.json()).then(res=>{if(res.success)setToggles(res.data||[]);else fire("Failed","#c0392b")}).catch(()=>fire("Failed","#c0392b")).finally(()=>setTogLoading(false)) };

  /* ── Users ── */
  const [userList, setUserList] = useState([]); const [usrLoading, setUsrLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null); const [deletingUser, setDeletingUser] = useState(null);
  const fetchUsers = () => { setUsrLoading(true); fetch(`${API_BASE}/settings/users`, { headers: apiHeaders() }).then(r=>r.json()).then(res=>{if(res.success)setUserList(res.data||[]);else fire("Failed","#c0392b")}).catch(()=>fire("Failed","#c0392b")).finally(()=>setUsrLoading(false)) };

  useEffect(() => {
    if (tab==="socials") fetchSocials(); else if (tab==="banners") fetchBanners();
    else if (tab==="toggles") fetchToggles(); else if (tab==="users") fetchUsers();
  }, [tab]);

  const setSiteField = (k, v) => setSite(s => ({ ...s, [k]: v }));

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 760, maxHeight: "85vh" }}>
        <div className="modal-header">
          <div><div className="modal-title">Manage Settings</div><div className="modal-sub">Configure website settings</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div style={ts}>{SETT_TABS.map(t => <button key={t.id} style={tab===t.id?tabActive:tabInactive} onClick={()=>setTab(t.id)}>{t.label}</button>)}</div>

        {/* Site Info */}
        {tab === "site" && <>{siteLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : <>
          <div className="form-group"><label className="form-label">Site Name</label><input className="form-input" value={site?.site_name||""} onChange={e=>setSiteField("site_name",e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Tagline</label><input className="form-input" value={site?.tagline||""} onChange={e=>setSiteField("tagline",e.target.value)} /></div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Logo URL</label><input className="form-input" value={site?.logo_url||""} onChange={e=>setSiteField("logo_url",e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Favicon URL</label><input className="form-input" value={site?.favicon_url||""} onChange={e=>setSiteField("favicon_url",e.target.value)} /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={site?.email||""} onChange={e=>setSiteField("email",e.target.value)} /></div>
            <div className="form-group"><label className="form-label">Phone</label><input className="form-input" value={site?.phone||""} onChange={e=>setSiteField("phone",e.target.value)} /></div>
          </div>
          <div className="form-group"><label className="form-label">Address</label><input className="form-input" value={site?.address||""} onChange={e=>setSiteField("address",e.target.value)} /></div>
          <div className="form-group"><label className="form-label">About</label><textarea className="form-textarea" style={{minHeight:100}} value={site?.about||""} onChange={e=>setSiteField("about",e.target.value)} /></div>
          <div className="modal-footer"><button className="submit-btn" onClick={handleSaveSite} disabled={saving}>{saving ? "Saving..." : "Save Settings"}</button></div>
        </>}</>}

        {/* Social Links */}
        {tab === "socials" && <>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:14}}><button className="add-btn" onClick={()=>setShowSocAdd(true)}><PlusIcon /> Add Social Link</button></div>
          {socLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !socials.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No social links yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{socials.map(s => <div key={s.id} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 16px",background:"#fafafa",border:"1.5px solid #e4ede4",borderRadius:10}}>
            <div style={{flex:1,minWidth:0,fontSize:13.5,color:"#0d1f0d"}}><strong>{s.platform}</strong><span style={{color:"#c8dcc8",margin:"0 8px"}}>|</span>{s.url}</div>
            <div className="card-actions"><button className="edit-btn" onClick={()=>setEditingSoc(s)}><EditIcon/> Edit</button><button className="delete-btn" onClick={()=>setDeletingSoc(s)}><TrashIcon/> Delete</button></div>
          </div>)}</div>}
        </>}

        {/* Banners */}
        {tab === "banners" && <>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:14}}><button className="add-btn" onClick={()=>setShowBanAdd(true)}><PlusIcon /> Add Banner</button></div>
          {banLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !banners.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No banners yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{banners.map(b => <div key={b.id} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 16px",background:"#fafafa",border:"1.5px solid #e4ede4",borderRadius:10}}>
            <div style={{flex:1,minWidth:0,fontSize:13.5,color:"#0d1f0d"}}><strong>{b.title}</strong><span style={{color:"#c8dcc8",margin:"0 8px"}}>|</span>{b.page||"all"}</div>
            <div className="card-actions"><button className="edit-btn" onClick={()=>setEditingBan(b)}><EditIcon/> Edit</button><button className="delete-btn" onClick={()=>setDeletingBan(b)}><TrashIcon/> Delete</button></div>
          </div>)}</div>}
        </>}

        {/* Toggles */}
        {tab === "toggles" && <>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:14}}><button className="add-btn" onClick={()=>setShowTogAdd(true)}><PlusIcon /> Add Toggle</button></div>
          {togLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !toggles.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No feature toggles yet.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{toggles.map(t => <div key={t.key} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 16px",background:"#fafafa",border:"1.5px solid #e4ede4",borderRadius:10}}>
            <div style={{flex:1,minWidth:0,fontSize:13.5,color:"#0d1f0d"}}>
              <strong>{t.key}</strong><span style={{color:"#c8dcc8",margin:"0 8px"}}>|</span>{t.label}
              <span style={{marginLeft:8}} className={`badge ${t.is_enabled?"badge-featured":"badge-savings"}`}>{t.is_enabled?"ON":"OFF"}</span>
            </div>
            <div className="card-actions"><button className="edit-btn" onClick={()=>setEditingTog(t)}><EditIcon/> Edit</button><button className="delete-btn" onClick={()=>setDeletingTog(t)}><TrashIcon/> Delete</button></div>
          </div>)}</div>}
        </>}

        {/* Users */}
        {tab === "users" && <>
          {usrLoading ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>Loading...</p> : !userList.length ? <p style={{textAlign:"center",padding:28,color:"#8aaa8a"}}>No users found.</p> :
          <div style={{display:"flex",flexDirection:"column",gap:10}}>{userList.map(u => <div key={u.id} style={{display:"flex",alignItems:"center",gap:14,padding:"12px 16px",background:"#fafafa",border:"1.5px solid #e4ede4",borderRadius:10}}>
            <div style={{flex:1,minWidth:0,fontSize:13.5,color:"#0d1f0d"}}>
              <strong>{u.name}</strong><span style={{color:"#c8dcc8",margin:"0 8px"}}>|</span>{u.email}
              <span className={`badge ${u.role==="admin"?"badge-loan":"badge-dept"}`} style={{marginLeft:8,fontSize:10.5,padding:"2px 7px"}}>{u.role}</span>
              <span className={`badge ${u.is_active?"badge-featured":""}`} style={{marginLeft:4,fontSize:10.5,padding:"2px 7px"}}>{u.is_active?"Active":"Inactive"}</span>
            </div>
            <div className="card-actions"><button className="edit-btn" onClick={()=>setEditingUser(u)}><EditIcon/> Edit</button><button className="delete-btn" onClick={()=>setDeletingUser(u)}><TrashIcon/> Delete</button></div>
          </div>)}</div>}
        </>}
      </div>

      {/* Social Form */}
      {showSocAdd && <SettForm fields={["platform","url","icon","sort_order"]} onClose={()=>setShowSocAdd(false)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/socials`,{method:"POST",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setShowSocAdd(false);fetchSocials();fire("✓ Created!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {editingSoc && <SettForm initial={editingSoc} fields={["platform","url","icon","sort_order","is_active"]} onClose={()=>setEditingSoc(null)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/socials/${editingSoc.id}`,{method:"PUT",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setEditingSoc(null);fetchSocials();fire("✓ Updated!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {deletingSoc && <ConfirmModal name={deletingSoc.platform} onClose={()=>setDeletingSoc(null)} onConfirm={async()=>{try{const r=await fetch(`${API_BASE}/settings/socials/${deletingSoc.id}`,{method:"DELETE",headers:apiHeaders()});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setDeletingSoc(null);fetchSocials();fire("Deleted.","#c0392b")}catch(e){fire(e.message,"#c0392b")}}} />}

      {/* Banner Form */}
      {showBanAdd && <SettForm fields={["title","subtitle","image_url","cta_label","cta_link","page","sort_order"]} onClose={()=>setShowBanAdd(false)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/banners`,{method:"POST",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setShowBanAdd(false);fetchBanners();fire("✓ Created!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {editingBan && <SettForm initial={editingBan} fields={["title","subtitle","image_url","cta_label","cta_link","page","sort_order","is_active"]} onClose={()=>setEditingBan(null)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/banners/${editingBan.id}`,{method:"PUT",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setEditingBan(null);fetchBanners();fire("✓ Updated!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {deletingBan && <ConfirmModal name={deletingBan.title} onClose={()=>setDeletingBan(null)} onConfirm={async()=>{try{const r=await fetch(`${API_BASE}/settings/banners/${deletingBan.id}`,{method:"DELETE",headers:apiHeaders()});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setDeletingBan(null);fetchBanners();fire("Deleted.","#c0392b")}catch(e){fire(e.message,"#c0392b")}}} />}

      {/* Toggle Form */}
      {showTogAdd && <SettForm fields={["key","label","description"]} booleans={["is_enabled"]} onClose={()=>setShowTogAdd(false)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/toggles`,{method:"POST",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setShowTogAdd(false);fetchToggles();fire("✓ Created!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {editingTog && <SettForm initial={editingTog} fields={["label","description"]} booleans={["is_enabled"]} onClose={()=>setEditingTog(null)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/toggles/${editingTog.key}`,{method:"PUT",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setEditingTog(null);fetchToggles();fire("✓ Updated!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {deletingTog && <ConfirmModal name={deletingTog.key} onClose={()=>setDeletingTog(null)} onConfirm={async()=>{try{const r=await fetch(`${API_BASE}/settings/toggles/${deletingTog.key}`,{method:"DELETE",headers:apiHeaders()});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setDeletingTog(null);fetchToggles();fire("Deleted.","#c0392b")}catch(e){fire(e.message,"#c0392b")}}} />}

      {/* User Form */}
      {editingUser && <SettForm initial={editingUser} fields={["name","role","is_active"]} booleans={["is_active"]} onClose={()=>setEditingUser(null)} onSave={async d=>{try{const r=await fetch(`${API_BASE}/settings/users/${editingUser.id}`,{method:"PUT",headers:apiHeaders(),body:JSON.stringify(d)});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setEditingUser(null);fetchUsers();fire("✓ Updated!")}catch(e){fire(e.message,"#c0392b")}}} />}
      {deletingUser && <ConfirmModal name={deletingUser.name} onClose={()=>setDeletingUser(null)} onConfirm={async()=>{try{const r=await fetch(`${API_BASE}/settings/users/${deletingUser.id}`,{method:"DELETE",headers:apiHeaders()});const j=await r.json();if(!r.ok||!j.success)throw new Error(j.message||"Failed");setDeletingUser(null);fetchUsers();fire("Deleted.","#c0392b")}catch(e){fire(e.message,"#c0392b")}}} />}

      {Toast}
    </div>
  );
}

function SettForm({ initial, fields, booleans = [], onClose, onSave }) {
  const isEdit = !!initial;
  const init = {};
  fields.forEach(f => init[f] = initial?.[f] ?? "");
  booleans.forEach(b => init[b] = initial?.[b] ?? false);
  const [form, setForm] = useState(init);
  const [saving, setSaving] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = async () => {
    setSaving(true);
    try { await onSave({ ...form }); } finally { setSaving(false); }
  };
  const labelMap = { cta_label: "CTA Label", cta_link: "CTA Link", image_url: "Image URL", sort_order: "Sort Order", is_active: "Active?", is_enabled: "Enabled?" };
  const roleOptions = ["admin","editor","member"];
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit" : "Add"} Entry</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        {fields.map(f => {
          if (booleans.includes(f) || f.startsWith("is_")) return null;
          if (f === "description" || f === "subtitle" || f === "body" || f === "about")
            return <div className="form-group" key={f}><label className="form-label">{labelMap[f]||f.charAt(0).toUpperCase()+f.slice(1)}</label><textarea className="form-textarea" placeholder={f} value={form[f]||""} onChange={e=>set(f,e.target.value)} /></div>;
          if (f === "sort_order")
            return <div className="form-group" key={f}><label className="form-label">Sort Order</label><input className="form-input" type="number" placeholder="0" value={form[f]??0} onChange={e=>set(f,parseInt(e.target.value)||0)} /></div>;
          if (f === "role")
            return <div className="form-group" key={f}><label className="form-label">Role</label><select className="form-select" value={form[f]} onChange={e=>set(f,e.target.value)}>{roleOptions.map(r=><option key={r} value={r}>{r.charAt(0).toUpperCase()+r.slice(1)}</option>)}</select></div>;
          if (f === "url")
            return <div className="form-group" key={f}><label className="form-label">URL</label><input className="form-input" placeholder="https://..." value={form[f]||""} onChange={e=>set(f,e.target.value)} /></div>;
          return <div className="form-group" key={f}><label className="form-label">{labelMap[f]||f.charAt(0).toUpperCase()+f.slice(1)}</label><input className="form-input" placeholder={f} value={form[f]||""} onChange={e=>set(f,e.target.value)} /></div>;
        })}
        {booleans.map(b => (
          <label className="checkbox-row" key={b}>
            <input type="checkbox" checked={form[b]} onChange={e=>set(b,e.target.checked)} />
            <span className="checkbox-label">{labelMap[b]||b.replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>
          </label>
        ))}
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={handleSave} disabled={saving}>{saving ? "Saving..." : isEdit ? "Save Changes" : "Create"}</button></div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════════════════════
const DASH_MODULES = [
  { id: "products", icon: <BoxIcon />,       title: "Products",       desc: "Manage loan and savings products",        btn: "Manage Products",    page: "products" },
  { id: "services", icon: <ServerIcon />,    title: "Other Services", desc: "Manage additional member services",        btn: "Manage Services",  page: "services" },
  { id: "board",    icon: <UsersIcon />,     title: "Board Members",  desc: "Update board member profiles",              btn: "Manage Board",       page: "board"    },
  { id: "careers",  icon: <BriefcaseIcon />, title: "Careers",        desc: "Post and manage job openings",      btn: "Manage Careers",  page: "careers"  },
  { id: "news",     icon: <NewsIcon />,      title: "News & Updates", desc: "Publish news and announcements",    btn: "Manage News",     page: null       },
  { id: "trends",   icon: <TrendIcon />,     title: "Trends & Stats", desc: "Update financial indicators",       btn: "Manage Trends",   page: null       },
  { id: "videos",   icon: <VideoIcon />,     title: "Video Guides",   desc: "Manage tutorial videos for users",  btn: "Manage Guides",   page: null       },
  { id: "settings", icon: <SettingsIcon />,  title: "Settings",       desc: "Configure website settings",        btn: "Manage Settings", page: null       },
  { id: "forms",    icon: <FileIcon />,       title: "Forms",          desc: "Manage downloadable forms for members", btn: "Manage Forms", page: null       },
];

function Dashboard({ user, onLogout, onNavigate, onModalOpen }) {
  const [fire, Toast] = useToast();
  const [stats, setStats] = useState(null);
  useEffect(() => {
    fetch(`${API_BASE}/dashboard/stats`)
      .then(r => r.json())
      .then(res => { if (res.success) setStats(res.data); })
      .catch(() => {});
  }, []);
  const s = stats || { products: 0, board: 0, careers: 0, news: 0, other_services: 0 };
  return (
    <div className="dash-root">
      <TopNav user={user} onLogout={onLogout} />
      <main className="dash-main">
        <div className="page-header"><h1 className="page-title">Dashboard</h1><p className="page-sub">Manage your website content and settings</p></div>
        <div className="stats-grid">
          {[
            { label: "Total Products",     value: s.products,       sub: "Active products",  icon: <BoxIcon size={18} /> },
            { label: "Other Services",     value: s.other_services, sub: "Active services",  icon: <ServerIcon size={18} /> },
            { label: "Board Members",      value: s.board,          sub: "Active members",   icon: <UsersIcon size={18} /> },
            { label: "Job Openings",       value: s.careers,        sub: "Active positions", icon: <BriefcaseIcon size={18} /> },
            { label: "News Articles",  value: s.news,     sub: "Published articles", icon: <NewsIcon size={18} /> },
          ].map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-header"><span className="stat-label">{s.label}</span><div className="stat-icon">{s.icon}</div></div>
              <div className="stat-value">{s.value}</div><div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="section-label">Content Modules</p>
        <div className="modules-grid">
          {DASH_MODULES.map(m => (
            <div className="module-card" key={m.id}>
              <div className="module-icon-wrap">{m.icon}</div>
              <div className="module-title">{m.title}</div>
              <div className="module-desc">{m.desc}</div>
              <button className="manage-btn" onClick={() => m.page ? onNavigate(m.page) : onModalOpen(m.id)}>{m.btn}</button>
            </div>
          ))}
        </div>
      </main>
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE FORMS
// ══════════════════════════════════════════════════════════════════════════
function ManageForms({ user, onClose, onLogout }) {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  const fetchForms = () => {
    setLoading(true);
    fetch(`${API_BASE}/forms`)
      .then(r => r.json())
      .then(res => {
        if (res.success) setForms(res.data || []);
        else setForms([]);
      })
      .catch(() => setForms([]))
      .finally(() => setLoading(false));
  };

  useEffect(fetchForms, []);

  const handleCreate = async (data) => {
    try {
      const r = await fetch(`${API_BASE}/forms`, {
        method: "POST", headers: apiHeaders(),
        body: JSON.stringify({ title: data.title, category: data.category, file_url: data.file_url }),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Create failed");
      setShowAdd(false);
      fetchForms();
      fire("Form created!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleUpdate = async (data) => {
    try {
      const r = await fetch(`${API_BASE}/forms/${editing.id}`, {
        method: "PUT", headers: apiHeaders(),
        body: JSON.stringify({ title: data.title, category: data.category, file_url: data.file_url }),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Update failed");
      setEditing(null);
      fetchForms();
      fire("Form updated!");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  const handleDelete = async () => {
    try {
      const r = await fetch(`${API_BASE}/forms/${deleting.id}`, {
        method: "DELETE", headers: apiHeaders(),
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Delete failed");
      setForms(p => p.filter(x => x.id !== deleting.id));
      setDeleting(null);
      fire("Form deleted.", "#c0392b");
    } catch (e) { fire(e.message, "#c0392b"); }
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ maxWidth: 640 }}>
        <div className="modal-header">
          <div><div className="modal-title">Manage Forms</div><div className="modal-sub">Upload and manage downloadable forms</div></div>
          <button className="modal-close" onClick={onClose} type="button"><CloseIcon /></button>
        </div>
        <div style={{ padding: "16px 24px", borderBottom: "1px solid #e4e0d8", display: "flex", justifyContent: "flex-end" }}>
          <button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Form</button>
        </div>
        <div style={{ padding: 24, maxHeight: "60vh", overflowY: "auto" }}>
          {loading ? (
            <p style={{ textAlign: "center", color: "#8aaa8a" }}>Loading forms...</p>
          ) : forms.length === 0 ? (
            <p style={{ textAlign: "center", color: "#8aaa8a" }}>No forms yet. Click "Add Form" to upload one.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {forms.map(f => (
                  <div key={f.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f9faf7", borderRadius: 10, padding: "12px 16px", border: "1px solid #e4e0d8" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "#1a1a14" }}>{f.title}</div>
                      <div style={{ fontSize: "0.78rem", color: "#7a7a6a", marginTop: 2 }}>{f.file_url}</div>
                      <span style={{ fontSize: "0.65rem", fontWeight: 500, background: "#eaf3de", color: "#3B6D11", padding: "2px 6px", borderRadius: 4, marginTop: 4, display: "inline-block" }}>
                        {({ loan: "Loan Forms", account_opening: "Account Opening", other: "Other Forms" })[f.category] || "Other Forms"}
                      </span>
                    </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <button className="edit-btn" onClick={() => setEditing(f)}><EditIcon /> Edit</button>
                    <button className="delete-btn" onClick={() => setDeleting(f)}><TrashIcon /> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {Toast}
      </div>

      {showAdd && <FormModal onClose={() => setShowAdd(false)} onSave={handleCreate} />}
      {editing && <FormModal initial={editing} onClose={() => setEditing(null)} onSave={handleUpdate} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={() => setDeleting(null)} onConfirm={handleDelete} />}
    </div>
  );
}

function FormModal({ initial, onClose, onSave }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [category, setCategory] = useState(initial?.category || "account_opening");
  const [fileUrl, setFileUrl] = useState(initial?.file_url || "");
  const [uploading, setUploading] = useState(false);
  const [fire, Toast] = useToast();

  const handleFileUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const token = localStorage.getItem("accessToken");
      const r = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const j = await r.json();
      if (!r.ok || !j.success) throw new Error(j.message || "Upload failed");
      setFileUrl(j.data.url);
      fire("File uploaded ✓", "#166534");
    } catch (err) {
      fire(err.message, "#c0392b");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = () => {
    if (!title.trim()) { fire("Title is required", "#c0392b"); return; }
    if (!fileUrl) { fire("Please upload a file", "#c0392b"); return; }
    onSave({ title: title.trim(), category, file_url: fileUrl });
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{initial ? "Edit Form" : "Add New Form"}</div><div className="modal-sub">Upload a document for members to download</div></div>
          <button className="modal-close" onClick={onClose} type="button"><CloseIcon /></button>
        </div>
        <div className="form-group" style={{ padding: "16px 24px 0" }}>
          <label className="form-label">Form Title</label>
          <input className="form-input" placeholder="e.g., Loan Application Form" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group" style={{ padding: "16px 24px 0" }}>
          <label className="form-label">Category</label>
          <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="account_opening">Account Opening Forms</option>
            <option value="loan">Loan Forms</option>
            <option value="other">Other Forms</option>
          </select>
        </div>
        <div className="form-group" style={{ padding: "16px 24px 0" }}>
          <label className="form-label">File Upload</label>
          <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" onChange={handleFileUpload} disabled={uploading} style={{ fontSize: "0.85rem" }} />
          {uploading && <p style={{ fontSize: 12, color: "#166534", margin: "4px 0 0" }}>Uploading...</p>}
          {fileUrl && <p style={{ fontSize: 12, color: "#166534", margin: "4px 0 0" }}>✓ {fileUrl.split("/").pop()}</p>}
          <input className="form-input" placeholder="Or paste file URL directly" value={fileUrl} onChange={e => setFileUrl(e.target.value)} style={{ marginTop: 8 }} />
        </div>
        <div className="modal-footer" style={{ marginTop: 16 }}>
          <button className="cancel-btn" onClick={onClose} type="button">Cancel</button>
          <button className="submit-btn" onClick={handleSave} type="button">{initial ? "Save Changes" : "Create Form"}</button>
        </div>
        {Toast}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  ROOT
// ══════════════════════════════════════════════════════════════════════════
export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");
  const [showNews, setShowNews] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const handleLogout = () => { setUser(null); setPage("dashboard"); setShowNews(false); setShowTrends(false); setShowGuides(false); setShowSettings(false); setShowForms(false); };
  const back = () => setPage("dashboard");
  const handleModalOpen = id => {
    if (id === "news") setShowNews(true);
    else if (id === "trends") setShowTrends(true);
    else if (id === "videos") setShowGuides(true);
    else if (id === "settings") setShowSettings(true);
    else if (id === "forms") setShowForms(true);
  };

  return (
    <>
      
      {!user                     && <LoginPage      onLogin={u => setUser(u)} />}
      {user && page==="dashboard" && <Dashboard      user={user} onLogout={handleLogout} onNavigate={setPage} onModalOpen={handleModalOpen} />}
      {user && page==="products"  && <ManageProducts user={user} onBack={back} onLogout={handleLogout} />}
      {user && page==="services"  && <ManageServices user={user} onBack={back} onLogout={handleLogout} />}
      {user && page==="board"     && <ManageBoard    user={user} onBack={back} onLogout={handleLogout} />}
      {user && page==="careers"   && <ManageCareers  user={user} onBack={back} onLogout={handleLogout} />}
      {showNews    && <ManageNews    user={user} onClose={() => setShowNews(false)}    onLogout={handleLogout} />}
      {showTrends  && <ManageTrends  user={user} onClose={() => setShowTrends(false)}  onLogout={handleLogout} />}
      {showGuides  && <ManageGuides  user={user} onClose={() => setShowGuides(false)}  onLogout={handleLogout} />}
      {showSettings && <ManageSettings user={user} onClose={() => setShowSettings(false)} onLogout={handleLogout} />}
      {showForms && <ManageForms user={user} onClose={() => setShowForms(false)} onLogout={handleLogout} />}
    </>
  );
}
