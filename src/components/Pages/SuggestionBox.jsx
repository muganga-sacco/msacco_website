import { useState } from "react";

const GREEN = "#287C3D";
const GREEN_DARK = "#1f6030";
const GREEN_LIGHT = "#eaf3de";
const ORANGE = "#E87722";

export default function SuggestionBox() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Outfit', sans-serif" }}>
      {/* Page Title */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 24px 0", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: 12, lineHeight: 1.2 }}>
          Online Suggestion Box
        </h1>
        <p style={{ fontSize: "0.92rem", color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
          <strong style={{ fontWeight: 600, color: "#374151" }}>We value your feedback.</strong> Share your experiences with our services or suggest improvements. Your input guides us to serve you better.
        </p>
      </div>

      {/* Form / Success */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 24px 80px" }}>
        {submitted ? (
          <div className="fade-in" style={{ background: "#fff", borderRadius: 16, border: "1px solid #d4e8d9", padding: "56px 32px", textAlign: "center" }}>
            <div className="success-check" style={{ width: 72, height: 72, background: GREEN_LIGHT, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "2rem" }}>✅</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>Thank You!</h2>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7, maxWidth: 380, margin: "0 auto 28px" }}>
              Your suggestion has been received. We appreciate you taking the time to help us improve Muganga SACCO's services.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
              style={{ padding: "11px 32px", background: GREEN_LIGHT, color: GREEN, border: `1.5px solid ${GREEN}`, borderRadius: 9, fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer" }}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <div className="fade-in" style={{ background: "#fff", borderRadius: 16, border: "1px solid #d4e8d9", padding: "36px 32px", boxShadow: "0 4px 24px rgba(40,124,61,0.07)" }}>

            {/* Name row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div>
                <label className="sb-label">First Name</label>
                <input className="sb-input" placeholder="First Name" value={form.firstName} onChange={handleChange("firstName")} />
              </div>
              <div>
                <label className="sb-label">Last Name</label>
                <input className="sb-input" placeholder="Last Name" value={form.lastName} onChange={handleChange("lastName")} />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label className="sb-label">Email <span style={{ color: "#e53e3e" }}>*</span></label>
              <input className={`sb-input${errors.email ? " error" : ""}`} placeholder="Email Address" type="email" value={form.email} onChange={handleChange("email")} />
              {errors.email && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 4 }}>{errors.email}</p>}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 20 }}>
              <label className="sb-label">Phone Number <span style={{ color: "#e53e3e" }}>*</span></label>
              <input className={`sb-input${errors.phone ? " error" : ""}`} placeholder="+250 7XX XXX XXX" type="tel" value={form.phone} onChange={handleChange("phone")} />
              {errors.phone && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 4 }}>{errors.phone}</p>}
            </div>

            {/* Subject */}
            <div style={{ marginBottom: 20 }}>
              <label className="sb-label">Subject <span style={{ color: "#e53e3e" }}>*</span></label>
              <input className={`sb-input${errors.subject ? " error" : ""}`} placeholder="What is your suggestion about?" value={form.subject} onChange={handleChange("subject")} />
              {errors.subject && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 4 }}>{errors.subject}</p>}
            </div>

            {/* Message */}
            <div style={{ marginBottom: 28 }}>
              <label className="sb-label">Your Message <span style={{ color: "#e53e3e" }}>*</span></label>
              <textarea className={`sb-input${errors.message ? " error" : ""}`} placeholder="Share your feedback or suggestion in detail..." value={form.message} onChange={handleChange("message")} />
              {errors.message && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 4 }}>{errors.message}</p>}
            </div>

            {/* Privacy note */}
            <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "10px 14px", marginBottom: 20, display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>🔒</span>
              <p style={{ fontSize: "0.77rem", color: "#3B6D11", lineHeight: 1.5, margin: 0 }}>
                Your information is kept confidential and used only to process your feedback. We may contact you to follow up on your suggestion.
              </p>
            </div>

            <button className="sb-submit" onClick={handleSubmit}>Submit Suggestion</button>
          </div>
        )}
      </div>
    </div>
  );
}
