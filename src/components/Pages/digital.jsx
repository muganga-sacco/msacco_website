import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

const FALLBACK_SERVICES = [
  { title: "Mobile Banking App", description: "Access your account anywhere, anytime with our feature-rich mobile application. iOS and Android application are available.", icon_bg: "#e8f0eb", icon_color: "#2d6a4f", features: ["Balance inquiries", "Fund transfers", "Loan applications", "Transaction history"], cta_label: "Download App on Apple Store and Playstore" },
  { title: "Internet Banking", description: "Manage your finances from your computer with our secure web portal.", icon_bg: "#e8f0eb", icon_color: "#2d6a4f", features: ["Account management", "Bill payments", "Statement downloads", "Profile updates"], cta_label: "Access Portal" },
  { title: "Debit Card Services", description: "Convenient access to your funds with our VISA debit card.", icon_bg: "#e8f0eb", icon_color: "#2d6a4f", features: ["ATM withdrawals", "POS payments", "Online shopping", "Contactless payments"], cta_label: "Request Card" },
  { title: "USSD Banking", description: "Check balances, Do transfers and get quick loan via USSD application on any mobile device.", icon_bg: "#e8f0eb", icon_color: "#2d6a4f", features: ["Balance Check", "Transactions between account", "MoMo transfers", "Quick loan request", "USSD access"], cta_label: "Access it through *565#" },
  { title: "Regular Support", description: "Get help anytime through our digital support channels, call center and other channel available.", icon_bg: "#e8f0eb", icon_color: "#2d6a4f", features: ["Call center", "Email support", "Online Support", "Video tutorials"], cta_label: "Get Support" },
];

export default function DigitalBanking() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/digital-services`)
      .then(r => r.json())
      .then(res => {
        if (res.success && res.data && res.data.length) setServices(res.data);
        else setServices(FALLBACK_SERVICES);
      })
      .catch(() => setServices(FALLBACK_SERVICES));
  }, []);

  return (
    <div className="db-page">
      {/* HERO — full-width gradient wrapper */}
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
              <button className="btn-android">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 16.433a.78.78 0 0 0-.78.78v3.308a.78.78 0 1 0 1.56 0v-3.308a.78.78 0 0 0-.78-.78Zm-11.046 0a.78.78 0 0 0-.78.78v3.308a.78.78 0 1 0 1.56 0v-3.308a.78.78 0 0 0-.78-.78Zm.78-9.757 1.257-2.177a.468.468 0 0 0-.402-.704.468.468 0 0 0-.402.234L6.482 6.391a6.86 6.86 0 0 0-4.574 5.153l-.022.156h16.228l-.022-.156a6.86 6.86 0 0 0-4.574-5.153l1.272-2.201a.468.468 0 0 0-.402-.234.469.469 0 0 0-.402.234l-1.257 2.177a7.322 7.322 0 0 0-4.93 0ZM1.886 11.879a1.092 1.092 0 0 0-1.092 1.092v3.928a1.092 1.092 0 1 0 2.184 0v-3.928a1.092 1.092 0 0 0-1.092-1.092Zm20.228 0a1.092 1.092 0 0 0-1.092 1.092v3.928a1.092 1.092 0 1 0 2.184 0v-3.928a1.092 1.092 0 0 0-1.092-1.092Z"/>
                </svg>
                Download Android Mobile App
              </button>
              <button className="btn-ios">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download iOS Mobile App
              </button>
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
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.id || i}>
              {s.image_url ? <img src={s.image_url.startsWith("/") ? API_ORIGIN + s.image_url : s.image_url} alt={s.title} style={{ width:"100%", height:180, objectFit:"cover", display:"block", borderRadius:10, marginBottom:4 }} /> : <div className="svc-icon" style={{ background: s.icon_bg || "#e8f0eb", color: s.icon_color || "#2d6a4f" }}></div>}
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.description}</div>
              <ul className="svc-features">
                {(s.features || []).map((f, j) => (
                  <li key={j}><span className="svc-dot" />{f}</li>
                ))}
              </ul>
              {s.cta_label && (s.cta_link ? (
                <a href={s.cta_link} target="_blank" rel="noopener noreferrer" className="svc-btn">{s.cta_label}</a>
              ) : (
                <button className="svc-btn">{s.cta_label}</button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
