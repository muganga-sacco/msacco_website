import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants";
import { useScrolled } from "../../hooks/useScrolled";
import { Link, useNavigate } from "react-router-dom";

const UKFlag = () => (
  <svg viewBox="0 0 60 30" width="20" height="13">
    <clipPath id="u"><path d="M0 0h60v30H0z"/></clipPath>
    <g clipPath="url(#u)">
      <path fill="#012169" d="M0 0h60v30H0z"/>
      <path fill="#FFF" d="m0 0 8 5m0 0V0m0 5v25m0-20 8 5m4-6L8 10m4-6 8 5m8-9-8 5m0 0V0m0 5v25m0-20 8 5m4-6-8 5m4-6 8 5m3-13-4 9m-7 6L24 0m7 0-4 9m4 9-8 5m8-5 8 5m8-5-8 5m0 0 8 5m-8-15 4 9m0 0-4 9m7-18 4 9m-4 9 8 5m6-10-4 9m-7-6 4 9m0 0-4 9m4-9h10m0 0 4 9m-7-9 4 9m-22 2 4 9m2-9 4 9m0-9h10M8 10l-8 5m0 0L0 5m0-5 8 5m0 20 8 5m16-10 4 9m14-9 4 9m0-9-4 9m0 0-4 9m-4 9-4 9m-6 2-4 9m-4-9-4 9m-22 0 8 5m0 0 8-5m0 0 8 5m0 0 8-5m0 0 8 5m0 0V0"/>
    </g>
  </svg>
);

const FRFlag = () => (
  <svg viewBox="0 0 60 30" width="20" height="13">
    <clipPath id="f"><path d="M0 0h60v30H0z"/></clipPath>
    <g clipPath="url(#f)">
      <path fill="#fff" d="M0 0h60v30H0z"/>
      <path fill="#002654" d="M0 0h20v30H0z"/>
      <path fill="#CE1126" d="M40 0h20v30H40z"/>
    </g>
  </svg>
);

const RWFlag = () => (
  <svg viewBox="0 0 60 30" width="20" height="13">
    <clipPath id="rw"><path d="M0 0h60v30H0z"/></clipPath>
    <g clipPath="url(#rw)">
      <path fill="#00A1DE" d="M0 0h60v30H0z"/>
      <path fill="#FAD201" d="M0 20h60v4H0z"/>
      <path fill="#00A651" d="M0 24h60v6H0z"/>
      <path fill="#E5BE01" d="M46 5a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity="0.85"/>
    </g>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const scrolled = useScrolled();
  const navigate = useNavigate();

  const [currentLang, setCurrentLang] = useState(() => {
    const m = document.cookie.match(/googtrans=\/en\/(\w+)/);
    return m && m[1] === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    if (document.getElementById("gt-script")) return;
    const s = document.createElement("script");
    s.id = "gt-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "en,fr,rw",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, "google_translate_element");
    };
  }, []);

  const switchLang = (lang) => {
    document.cookie = `googtrans=/en/${lang}; path=/`;
    setCurrentLang(lang);
    setLangOpen(false);
    window.location.reload();
  };

  const langOptions = [
    { code: "en", label: "English", flag: UKFlag },
    { code: "fr", label: "Français", flag: FRFlag },
    { code: "rw", label: "Kinyarwanda", flag: RWFlag },
  ];
  const CurrentFlag = langOptions.find((o) => o.code === currentLang).flag;

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setOpenSubmenu(null);
    if (href.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff",
      borderBottom: scrolled ? "2px solid #246d36" : "1px solid #e5e7eb",
      transition: "border 0.2s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/mugangaSaccoLogo.jpg" alt="Muganga SACCO" style={{ height: 40, width: "auto" }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            link.children ? (
              <div
                key={link.label}
                className="nav-dropdown"
                onMouseEnter={() => setOpenSubmenu(link.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <button
                  type="button"
                  className="nav-link nav-dropdown-trigger"
                  onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                >
                  {link.label}
                  <span className="nav-dropdown-caret">▾</span>
                </button>
                {openSubmenu === link.label && (
                  <div className="nav-dropdown-menu">
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        type="button"
                        className="nav-dropdown-item"
                        onClick={() => handleNavClick(child.href)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={link.label} onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer" }}>
                {link.label}
              </button>
            )
          ))}
        </nav>

        {/* Language dropdown + Desktop CTA */}
        <div className="nav-desktop" style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "none", border: "1px solid #d0d0d0",
                borderRadius: 4, padding: "4px 8px", cursor: "pointer",
                fontSize: "0.78rem", color: "#333",
              }}
            >
              <CurrentFlag />
              {langOptions.find((o) => o.code === currentLang)?.label || "English"}
              <span style={{ fontSize: "0.6rem", marginLeft: 2 }}>▾</span>
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute", top: "100%", right: 0, marginTop: 4,
                  background: "#fff", border: "1px solid #d0d0d0",
                  borderRadius: 4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  minWidth: 130, zIndex: 200,
                }}
              >
                {langOptions.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => switchLang(opt.code)}
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      width: "100%", padding: "8px 12px",
                      background: currentLang === opt.code ? "#f0f7f2" : "transparent",
                      border: "none", cursor: "pointer", textAlign: "left",
                      fontSize: "0.82rem", color: "#333",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = currentLang === opt.code ? "#f0f7f2" : "transparent"; }}
                  >
                    <opt.flag />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div id="google_translate_element" style={{ display: "none" }} />
          <a href="https://ibank.mugangasacco.rw/" className="btn-outline-green" style={{ padding: "7px 16px", fontSize: "0.8rem" }}>Internet Banking Login</a>
        </div>

        {/* Hamburger - visible only on mobile via CSS media query */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}
          style={{ fontSize: "1.4rem", color: "#246d36", display: "none" }}
          aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {NAV_LINKS.map((link) => (
            link.children ? (
              <div key={link.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  {link.label}
                  <span>{openSubmenu === link.label ? "▴" : "▾"}</span>
                </button>
                {openSubmenu === link.label && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 16, borderLeft: "2px solid #e5e7eb" }}>
                    {link.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNavClick(child.href)}
                        className="nav-link"
                        style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button key={link.label} onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                {link.label}
              </button>
            )
          ))}
          <div style={{ display: "flex", gap: 12, paddingTop: 8, alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", color: "#666" }}>Language:</span>
            <div style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "none", border: "1px solid #d0d0d0",
                  borderRadius: 4, padding: "4px 8px", cursor: "pointer",
                  fontSize: "0.78rem", color: "#333",
                }}
              >
                <CurrentFlag />
                {langOptions.find((o) => o.code === currentLang)?.label || "English"}
                <span style={{ fontSize: "0.6rem", marginLeft: 2 }}>▾</span>
              </button>
              {langOpen && (
                <div
                  style={{
                    position: "absolute", top: "100%", left: 0, marginTop: 4,
                    background: "#fff", border: "1px solid #d0d0d0",
                    borderRadius: 4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    minWidth: 130, zIndex: 200,
                  }}
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => switchLang(opt.code)}
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        width: "100%", padding: "8px 12px",
                        background: currentLang === opt.code ? "#f0f7f2" : "transparent",
                        border: "none", cursor: "pointer", textAlign: "left",
                        fontSize: "0.82rem", color: "#333",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = currentLang === opt.code ? "#f0f7f2" : "transparent"; }}
                    >
                      <opt.flag />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, paddingTop: 8 }}>
            <a href="https://ibank.mugangasacco.rw/" className="btn-outline-green" style={{ flex: 1, textAlign: "center" }}>Internet Banking Login</a>
          </div>
        </div>
      )}
    </header>
  );
}
