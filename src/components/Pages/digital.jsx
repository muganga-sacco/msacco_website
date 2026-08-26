import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

function resolveImg(url) {
  if (!url) return null;
  return url.startsWith("/") ? API_ORIGIN + url : url;
}

/* ── Service Detail Modal ─────────────────────────────────────── */
function ServiceModal({ service: s, onClose }) {
  // close on backdrop click
  const handleBackdrop = e => { if (e.target === e.currentTarget) onClose(); };

  // prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="svc-modal-overlay" onClick={handleBackdrop} role="dialog" aria-modal="true" aria-label={s.title}>
      <div className="svc-modal">
        {/* header image */}
        {resolveImg(s.image_url) ? (
          <img
            src={resolveImg(s.image_url)}
            alt={s.title}
            className="svc-modal-img"
          />
        ) : (
          <div className="svc-modal-img-placeholder" style={{ background: s.icon_bg || "#e8f0eb" }} />
        )}

        {/* close button */}
        <button className="svc-modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="svc-modal-body">
          <h2 className="svc-modal-title">{s.title}</h2>
          {s.description && <p className="svc-modal-desc">{s.description}</p>}

          {s.features && s.features.length > 0 && (
            <div className="svc-modal-section">
              <h3 className="svc-modal-section-title">Features</h3>
              <ul className="svc-modal-features">
                {s.features.map((f, i) => (
                  <li key={i}><span className="svc-dot" />{f}</li>
                ))}
              </ul>
            </div>
          )}

          {s.cta_label && (
            <div className="svc-modal-cta">
              {s.cta_link ? (
                <a
                  href={s.cta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-btn"
                >
                  {s.cta_label}
                </a>
              ) : (
                <button className="svc-btn">{s.cta_label}</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ────────────────────────────────────────────────── */
export default function DigitalBanking() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/digital-services`)
      .then(r => {
        if (!r.ok) throw new Error(`Server error: ${r.status}`);
        return r.json();
      })
      .then(res => {
        if (res.success && res.data) {
          setServices(res.data);
        } else {
          throw new Error(res.message || "Failed to load services");
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="db-page">
      {/* HERO */}
      <div className="db-hero-wrap">
        <div className="db-hero">
          <div className="hero-left">
            <h1>Digital Banking Made Simple</h1>
            <p>Access your Muganga SACCO account 24/7 with our comprehensive suite of digital banking services designed for members on the go.</p>
            <div className="hero-btns">
              <button className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 8 8 12 12 16"/><line x1="16" y1="12" x2="8" y2="12"/>
                </svg>
                Login to Internet Banking
              </button>
              <a href="https://play.google.com/store/apps/details?id=com.v.mugangasacco" target="_blank" rel="noopener noreferrer">
                <button className="btn-android">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 16.433a.78.78 0 0 0-.78.78v3.308a.78.78 0 1 0 1.56 0v-3.308a.78.78 0 0 0-.78-.78Zm-11.046 0a.78.78 0 0 0-.78.78v3.308a.78.78 0 1 0 1.56 0v-3.308a.78.78 0 0 0-.78-.78Zm.78-9.757 1.257-2.177a.468.468 0 0 0-.402-.704.468.468 0 0 0-.402.234L6.482 6.391a6.86 6.86 0 0 0-4.574 5.153l-.022.156h16.228l-.022-.156a6.86 6.86 0 0 0-4.574-5.153l1.272-2.201a.468.468 0 0 0-.402-.234.469.469 0 0 0-.402.234l-1.257 2.177a7.322 7.322 0 0 0-4.93 0ZM1.886 11.879a1.092 1.092 0 0 0-1.092 1.092v3.928a1.092 1.092 0 1 0 2.184 0v-3.928a1.092 1.092 0 0 0-1.092-1.092Zm20.228 0a1.092 1.092 0 0 0-1.092 1.092v3.928a1.092 1.092 0 1 0 2.184 0v-3.928a1.092 1.092 0 0 0-1.092-1.092Z"/>
                  </svg>
                  Download Android Mobile App
                </button>
              </a>
              <a href="https://apps.apple.com/rw/app/muganga-sacco-app/id6761417456" target="_blank" rel="noopener noreferrer">
                <button className="btn-ios">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Download iOS Mobile App
                </button>
              </a>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img src="/rotated_phone_dialer_v4.png" alt="Mobile banking" style={{ width:"100%", maxWidth:380, height:240, objectFit:"cover", borderRadius:16 }} />
          </div>
        </div>
      </div>

      {/* OUR DIGITAL SERVICES */}
      <div className="services-section">
        <h2>Our Digital Services</h2>
        <p>Experience banking without boundaries with our full range of digital solutions.</p>

        {loading && (
          <p style={{ textAlign: "center", padding: "40px 0", color: "#8aaa8a" }}>Loading services...</p>
        )}
        {error && (
          <p style={{ textAlign: "center", padding: "40px 0", color: "#c0392b" }}>
            Could not load services. Please try again later.
          </p>
        )}

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.id || i}>
              {/* image area */}
              <div className="svc-card-img-wrap">
                {resolveImg(s.image_url) ? (
                  <img
                    src={resolveImg(s.image_url)}
                    alt={s.title}
                    className="svc-card-img"
                  />
                ) : (
                  <div className="svc-card-img-placeholder" style={{ background: s.icon_bg || "#e8f0eb" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={s.icon_color || "#2d6a4f"} strokeWidth="1.5" width="40" height="40">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* title */}
              <div className="svc-card-info">
                <div className="svc-title">{s.title}</div>
                <button
                  className="svc-details-btn"
                  onClick={() => setSelected(s)}
                >
                  More Details
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
