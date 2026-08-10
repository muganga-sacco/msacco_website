import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const TABS = ["Personal Info", "Documents", "References"];

export default function CareerApply() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tab, setTab] = useState(0);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    full_name: "",
    date_of_birth: "",
    phone: "",
    email: "",
    marital_status: "",
    gender: "",
    reference_1_name: "", reference_1_email: "", reference_1_phone: "",
    reference_2_name: "", reference_2_email: "", reference_2_phone: "",
    reference_3_name: "", reference_3_email: "", reference_3_phone: "",
  });

  const [files, setFiles] = useState({
    id_copy: null,
    cv: null,
    academic_paper: null,
    other_documents: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/careers/${jobId}`);
        const j = await r.json();
        if (j.success) setJob(j.data);
      } catch (_) {}
      setLoading(false);
    })();
  }, [jobId]);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const setFile = (k) => (e) => setFiles(f => ({ ...f, [k]: e.target.files?.[0] || null }));

  const validateTab = (t) => {
    const e = {};
    if (t === 0) {
      if (!form.full_name.trim()) e.full_name = "Name is required";
      if (!form.date_of_birth) e.date_of_birth = "Date of birth is required";
      if (!form.marital_status) e.marital_status = "Marital status is required";
      if (!form.gender) e.gender = "Gender is required";
      if (!form.phone.trim() && !form.email.trim()) e.phone_email = "Phone or Email is required";
    } else if (t === 1) {
      if (!files.id_copy) e.id_copy = "Copy of ID is required";
      if (!files.cv) e.cv = "CV is required";
      if (!files.academic_paper) e.academic_paper = "Academic paper is required";
    } else if (t === 2) {
      if (!form.reference_1_name.trim()) e.reference_1_name = "Reference 1 name is required";
      if (!form.reference_1_email.trim()) e.reference_1_email = "Reference 1 email is required";
      if (!form.reference_1_phone.trim()) e.reference_1_phone = "Reference 1 phone is required";
    }
    return e;
  };

  const nextTab = () => {
    const v = validateTab(tab);
    setErrors(v);
    if (Object.keys(v).length) return;
    setTab(t => Math.min(t + 1, TABS.length - 1));
  };

  const prevTab = () => {
    setErrors({});
    setTab(t => Math.max(t - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const all = { ...validateTab(0), ...validateTab(1), ...validateTab(2) };
    setErrors(all);
    if (Object.keys(all).length) { setTab(all.reference_1_name ? 2 : all.id_copy ? 1 : 0); return; }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("career_id", jobId);
      Object.entries(form).forEach(([k, val]) => fd.append(k, val));
      Object.entries(files).forEach(([k, file]) => { if (file) fd.append(k, file); });

      const r = await fetch(`${API_BASE}/careers/apply`, { method: "POST", body: fd });
      const j = await r.json();
      if (!j.success) throw new Error(j.message || "Submission failed");
      setSubmitted(true);
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 520, margin: "80px auto", textAlign: "center", fontFamily: "'Source Sans 3', sans-serif", padding: "0 20px" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#1a1a14", marginBottom: 8 }}>Application Submitted</h2>
        <p style={{ color: "#7a7a6a", lineHeight: 1.6, marginBottom: 24 }}>Thank you for applying. We will review your application and contact you if you are shortlisted.</p>
        <Link to="/careers" style={{ color: "#1a4a2e", fontWeight: 600 }}>Browse more jobs →</Link>
      </div>
    );
  }

  const isLastTab = tab === TABS.length - 1;

  const inputStyle = {
    width: "100%", padding: "11px 14px", border: "1px solid #d4d0c8", borderRadius: 8,
    fontSize: "0.9rem", fontFamily: "'Source Sans 3', sans-serif", background: "#fff",
    outline: "none", boxSizing: "border-box",
  };
  const labelStyle = { display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#1a1a14", marginBottom: 5 };
  const errorStyle = { fontSize: "0.78rem", color: "#c0392b", marginTop: 3 };
  const groupStyle = { marginBottom: 18 };
  const rowStyle = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 };
  const G = "#1a4a2e";

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 20px 80px", fontFamily: "'Source Sans 3', sans-serif" }}>


      <Link to="/careers" style={{ color: "#7a7a6a", fontSize: "0.85rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 24 }}>
        ← Back to careers
      </Link>

      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#1a1a14", marginBottom: 4 }}>
        Apply for {job ? job.title : "this position"}
      </h1>
      {job && (
        <p style={{ color: "#7a7a6a", fontSize: "0.92rem", marginBottom: 28 }}>
          {job.department} — {job.location}
        </p>
      )}

      {/* Tab indicators */}
      <div style={{ display: "flex", gap: 0, marginBottom: 24, background: "#f0ede6", borderRadius: 10, padding: 3 }}>
        {TABS.map((label, i) => (
          <button key={i} onClick={() => { setErrors({}); setTab(i); }} type="button"
            style={{
              flex: 1, padding: "10px 0", border: "none", borderRadius: 8,
              background: i === tab ? "#fff" : "transparent",
              color: i === tab ? G : "#8a8a7a",
              fontWeight: i === tab ? 700 : 500, fontSize: "0.85rem",
              cursor: "pointer", transition: "all .2s", boxShadow: i === tab ? "0 1px 4px rgba(0,0,0,.08)" : "none",
            }}
          >{label}</button>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ background: "#fafaf7", borderRadius: 14, padding: "32px 30px", border: "1px solid #e4e0d8" }}>
        {errors.submit && (
          <div style={{ background: "#fdecea", color: "#c0392b", padding: "10px 14px", borderRadius: 8, marginBottom: 18, fontSize: "0.85rem" }}>{errors.submit}</div>
        )}

        {/* ──── Tab 0: Personal Info ──── */}
        {tab === 0 && <>
          <div style={groupStyle}>
            <label style={labelStyle}>Full Name *</label>
            <input style={inputStyle} placeholder="e.g., Jean-Paul Hategekimana" value={form.full_name} onChange={set("full_name")} />
            {errors.full_name && <div style={errorStyle}>{errors.full_name}</div>}
          </div>

          <div style={{ ...rowStyle, ...groupStyle }}>
            <div>
              <label style={labelStyle}>Date of Birth *</label>
              <input style={inputStyle} type="date" value={form.date_of_birth} onChange={set("date_of_birth")} />
              {errors.date_of_birth && <div style={errorStyle}>{errors.date_of_birth}</div>}
            </div>
            <div>
              <label style={labelStyle}>Gender *</label>
              <select style={inputStyle} value={form.gender} onChange={set("gender")}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <div style={errorStyle}>{errors.gender}</div>}
            </div>
          </div>

          <div style={{ ...rowStyle, ...groupStyle }}>
            <div>
              <label style={labelStyle}>Phone Number {!form.email.trim() ? "*" : ""}</label>
              <input style={inputStyle} placeholder="e.g., 0788xxxxxx" value={form.phone} onChange={set("phone")} />
            </div>
            <div>
              <label style={labelStyle}>Email {!form.phone.trim() ? "*" : ""}</label>
              <input style={inputStyle} placeholder="e.g., jean@example.com" value={form.email} onChange={set("email")} />
            </div>
          </div>
          {errors.phone_email && <div style={{ ...errorStyle, marginTop: -14, marginBottom: 18 }}>{errors.phone_email}</div>}

          <div style={groupStyle}>
            <label style={labelStyle}>Marital Status *</label>
            <select style={inputStyle} value={form.marital_status} onChange={set("marital_status")}>
              <option value="">Select status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
            </select>
            {errors.marital_status && <div style={errorStyle}>{errors.marital_status}</div>}
          </div>
        </>}

        {/* ──── Tab 1: Documents ──── */}
        {tab === 1 && <>
          <div style={groupStyle}>
            <label style={labelStyle}>Copy of ID *</label>
            <input className="file-input" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={setFile("id_copy")} style={inputStyle} />
            {files.id_copy && <div style={{ fontSize: "0.78rem", color: G, marginTop: 4 }}>✓ {files.id_copy.name}</div>}
            {errors.id_copy && <div style={errorStyle}>{errors.id_copy}</div>}
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>CV *</label>
            <input className="file-input" type="file" accept=".pdf,.doc,.docx" onChange={setFile("cv")} style={inputStyle} />
            {files.cv && <div style={{ fontSize: "0.78rem", color: G, marginTop: 4 }}>✓ {files.cv.name}</div>}
            {errors.cv && <div style={errorStyle}>{errors.cv}</div>}
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>Academic Paper / Degree *</label>
            <input className="file-input" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={setFile("academic_paper")} style={inputStyle} />
            {files.academic_paper && <div style={{ fontSize: "0.78rem", color: G, marginTop: 4 }}>✓ {files.academic_paper.name}</div>}
            {errors.academic_paper && <div style={errorStyle}>{errors.academic_paper}</div>}
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>Other Documents / Certificate</label>
            <input className="file-input" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={setFile("other_documents")} style={inputStyle} />
            {files.other_documents && <div style={{ fontSize: "0.78rem", color: G, marginTop: 4 }}>✓ {files.other_documents.name}</div>}
          </div>
        </>}

        {/* ──── Tab 2: References ──── */}
        {tab === 2 && <>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#1a1a14", marginBottom: 14 }}>References (3 required)</h3>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ background: "#fff", borderRadius: 10, border: "1px solid #e4e0d8", padding: "16px 18px", marginBottom: 12 }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: G, marginBottom: 10 }}>Reference {n}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                <div>
                  <label style={{ ...labelStyle, fontSize: "0.8rem" }}>Full Name *</label>
                  <input style={inputStyle} placeholder="Full name" value={form[`reference_${n}_name`]} onChange={set(`reference_${n}_name`)} />
                  {errors[`reference_${n}_name`] && <div style={errorStyle}>{errors[`reference_${n}_name`]}</div>}
                </div>
                <div>
                  <label style={{ ...labelStyle, fontSize: "0.8rem" }}>Email *</label>
                  <input style={inputStyle} placeholder="Email" value={form[`reference_${n}_email`]} onChange={set(`reference_${n}_email`)} />
                  {errors[`reference_${n}_email`] && <div style={errorStyle}>{errors[`reference_${n}_email`]}</div>}
                </div>
                <div>
                  <label style={{ ...labelStyle, fontSize: "0.8rem" }}>Phone *</label>
                  <input style={inputStyle} placeholder="Phone" value={form[`reference_${n}_phone`]} onChange={set(`reference_${n}_phone`)} />
                  {errors[`reference_${n}_phone`] && <div style={errorStyle}>{errors[`reference_${n}_phone`]}</div>}
                </div>
              </div>
            </div>
          ))}
        </>}

        {/* ──── Navigation buttons ──── */}
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          {tab > 0 && (
            <button type="button" onClick={prevTab} style={{
              flex: 1, padding: 14, background: "#fff", color: G, border: `1.5px solid ${G}`,
              borderRadius: 9, fontSize: "1rem", fontWeight: 600, cursor: "pointer",
              fontFamily: "'Source Sans 3', sans-serif",
            }}>
              ← Previous
            </button>
          )}
          {!isLastTab ? (
            <button type="button" onClick={nextTab} style={{
              flex: 1, padding: 14, background: G, color: "#fff", border: "none",
              borderRadius: 9, fontSize: "1rem", fontWeight: 600, cursor: "pointer",
              fontFamily: "'Source Sans 3', sans-serif",
            }}>
              Next →
            </button>
          ) : (
            <button type="submit" disabled={submitting} style={{
              flex: 1, padding: 14, background: submitting ? "#9aba9a" : G, color: "#fff",
              border: "none", borderRadius: 9, fontSize: "1rem", fontWeight: 600,
              cursor: submitting ? "not-allowed" : "pointer",
              fontFamily: "'Source Sans 3', sans-serif",
            }}>
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}