import { useState } from "react";

// ══════════════════════════════════════════════════════════════════════════
//  ICONS
// ══════════════════════════════════════════════════════════════════════════
const PhoneIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17.5z" />
  </svg>
);
const MailIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapPinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const SendIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const CheckIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

// ══════════════════════════════════════════════════════════════════════════
//  STYLES
// ══════════════════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════════════════════
const CONTACT_INFO = [
  {
    icon: <PhoneIcon />,
    label: "Phone Numbers",
    content: (
      <>
        <a href="tel:+250788124500">+(250) 788 124 500</a><br />
        <a href="tel:+250788124500">+(250) 0788 124 500</a>
      </>
    ),
  },
  {
    icon: <MailIcon />,
    label: "Email Addresses",
    content: (
      <>
        <a href="mailto:info@mugangasacco.rw">info@mugangasacco.rw</a><br />
        <a href="mailto:customerservice@mugangasacco.rw">customerservice@mugangasacco.rw</a>
      </>
    ),
  },
  {
    icon: <MapPinIcon />,
    label: "Address",
    content: (
      <>
        KK 15 Road, Kicukiro<br />
        Silverback Mall, 1st Floor<br />
        P.O. Box 84, Kigali, Rwanda
      </>
    ),
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM", closed: false },
  { day: "Saturday",        time: "9:00 AM – 1:00 PM", closed: false },
  { day: "Sunday",          time: "Closed",             closed: true  },
  { day: "Public Holidays", time: "Closed",             closed: true  },
];

const SOCIALS = [
  { icon: <FacebookIcon />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100088929791062" },
  { icon: <TwitterIcon />,  label: "Twitter",  href: "https://twitter.com/mugangasaccorw" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/company/muganga-sacco/" },
  { icon: <YouTubeIcon />,  label: "YouTube",  href: "https://www.youtube.com/@mugangasaccorw" },
];

const SUBJECTS = [
  "Account Opening", "Loan Application", "Savings Products",
  "Digital Services", "Technical Support", "General Enquiry", "Complaint / Feedback",
];


// ══════════════════════════════════════════════════════════════════════════
//  COMPONENT
// ══════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  const [form, setForm] = useState({ fname: "", lname: "", email: "", phone: "", subject: "", message: "" });
  const [errors,  setErrors]  = useState({});
  const [success, setSuccess] = useState(false);
  const [toast,   setToast]   = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: false }));
  };

  const validate = () => {
    const errs = {};
    if (!form.fname.trim())   errs.fname   = true;
    if (!form.email.trim())   errs.email   = true;
    if (!form.subject)        errs.subject = true;
    if (!form.message.trim()) errs.message = true;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

  const handleSubmit = async () => {
    if (!validate()) return;
    setSuccess(false);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message");
      setSuccess(true);
      setToast(true);
      setForm({ fname: "", lname: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setErrors(e => ({ ...e, _general: err.message }));
    } finally {
      setLoading(false);
      setTimeout(() => setToast(false), 3500);
    }
  };

  return (
    <>
      

      {/* ── TOPBAR ── */}
      <div className="ct-topbar">
        <div className="ct-topbar-items">
          <span className="ct-topbar-item"><PhoneIcon size={13} /> +(250) 788 124 500</span>
          <span className="ct-topbar-item"><MailIcon size={13} /> info@mugangasacco.rw</span>
          <span className="ct-topbar-item"><MapPinIcon size={13} /> KK 15 Road, Kicukiro · Silverback Mall · 1st Floor</span>
        </div>
      </div>


      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <div className="ct-hero-eyebrow"><span className="ct-hero-dot" /> We're here to help</div>
          <h1 className="ct-hero-title">Contact <span>Muganga SACCO</span></h1>
          <p className="ct-hero-desc">
            Have a question about your account, products, or services? Our team is ready to assist
            members across Rwanda.
          </p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <div className="ct-main">

        {/* CONTACT FORM */}
        <div className="ct-form-card">
          <div className="ct-form-title">Send us a Message</div>
          <p className="ct-form-sub">Fill in the form below and we'll get back to you within 24 hours.</p>

          <div className="ct-form-row">
            <div className="ct-form-group">
              <label className="ct-label">First Name <span style={{ color: "#ef4444" }}>*</span></label>
              <input className={`ct-input${errors.fname ? " error" : ""}`} type="text" placeholder="Jean" value={form.fname} onChange={e => set("fname", e.target.value)} />
            </div>
            <div className="ct-form-group">
              <label className="ct-label">Last Name</label>
              <input className="ct-input" type="text" placeholder="Uwimana" value={form.lname} onChange={e => set("lname", e.target.value)} />
            </div>
          </div>

          <div className="ct-form-row">
            <div className="ct-form-group">
              <label className="ct-label">Email Address <span style={{ color: "#ef4444" }}>*</span></label>
              <input className={`ct-input${errors.email ? " error" : ""}`} type="email" placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
            </div>
            <div className="ct-form-group">
              <label className="ct-label">Phone Number</label>
              <input className="ct-input" type="tel" placeholder="+(250) 7XX XXX XXX" value={form.phone} onChange={e => set("phone", e.target.value)} />
            </div>
          </div>

          <div className="ct-form-group">
            <label className="ct-label">Subject <span style={{ color: "#ef4444" }}>*</span></label>
            <select className={`ct-select${errors.subject ? " error" : ""}`} value={form.subject} onChange={e => set("subject", e.target.value)}>
              <option value="" disabled>Select a subject…</option>
              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="ct-form-group">
            <label className="ct-label">Message <span style={{ color: "#ef4444" }}>*</span></label>
            <textarea className={`ct-textarea${errors.message ? " error" : ""}`} placeholder="Tell us how we can help you…" value={form.message} onChange={e => set("message", e.target.value)} />
          </div>

          <button className="ct-submit" onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                Sending…
              </>
            ) : (
              <><SendIcon /> Send Message</>
            )}
          </button>

          {errors._general && (
            <div className="ct-error">
              {errors._general}
            </div>
          )}
          {success && (
            <div className="ct-success">
              <CheckIcon size={18} />
              Thank you! Your message has been received. We'll respond within 24 hours.
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="ct-sidebar">

          {/* Contact Details */}
          <div className="ct-info-card">
            <div className="ct-info-title">Contact Details</div>
            {CONTACT_INFO.map((item, i) => (
              <div className="ct-contact-item" key={i}>
                <div className="ct-contact-icon">{item.icon}</div>
                <div>
                  <div className="ct-contact-label">{item.label}</div>
                  <div className="ct-contact-value">{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="ct-info-card">
            <div className="ct-info-title" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ClockIcon size={18} /> Office Hours
            </div>
            {HOURS.map((h, i) => (
              <div className="ct-hours-row" key={i}>
                <span className="ct-hours-day">{h.day}</span>
                <span className={`ct-hours-badge${h.closed ? " closed" : ""}`}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Follow Us */}
          <div className="ct-info-card">
            <div className="ct-info-title">Follow Us</div>
            <div className="ct-social-grid">
              {SOCIALS.map(s => (
                <a key={s.label} className="ct-social-link" href={s.href} target="_blank" rel="noreferrer" title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── MAP ── */}
      <div className="ct-map-section">
        <div className="ct-map-eyebrow">Our Location</div>
        <div className="ct-map-title">Find Us on the Map</div>
        <div className="ct-map-wrap">
          <iframe
            src="https://maps.google.com/maps?q=KK+15+Road+Kicukiro+Silverback+Mall+Kigali+Rwanda&t=m&z=15&output=embed&iwloc=near"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Muganga SACCO Location"
          />
          <div className="ct-map-strip">
            <MapPinIcon size={18} />
            KK 15 Road, Kicukiro · Silverback Mall, 1st Floor · Kigali, Rwanda
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      
      {/* ── TOAST ── */}
      {toast && (
        <div className="ct-toast">
          <CheckIcon size={16} /> Message sent successfully!
        </div>
      )}


    </>
  );
}
