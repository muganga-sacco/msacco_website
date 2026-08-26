import { Link } from "react-router-dom";
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES, CONTACT_INFO, IMPORTANT_INFO } from "../../constants";

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

const SOCIALS = [
  { icon: <FacebookIcon />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100088929791062" },
  { icon: <TwitterIcon />,  label: "Twitter",  href: "https://twitter.com/mugangasaccorw" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/company/muganga-sacco/" },
  { icon: <YouTubeIcon />,  label: "YouTube",  href: "https://www.youtube.com/@mugangasaccorw" },
];

function FooterLink({ label, url }) {
  const isExternal = url.startsWith("http") || url.startsWith("/src/");
  if (isExternal) {
    return (
      <a href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", fontSize: "0.85rem", color: "#000", marginBottom: 10, transition: "color 0.2s" }}
        onMouseEnter={e => e.target.style.color = "#000"}
        onMouseLeave={e => e.target.style.color = "#000"}
      >{label}</a>
    );
  }
  return (
    <Link to={url}
      style={{ display: "block", fontSize: "0.85rem", color: "#000", marginBottom: 10, transition: "color 0.2s" }}
    >{label}</Link>
  );
}

function FooterHeading({ children }) {
  return (
    <div style={{ color: "#000", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#fff", color: "#000", padding: "56px 24px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 0.5fr 0.5fr 0.5fr 0.5fr", gap: 40, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>

          {/* Brand */}
          <div style={{color:"#000", textAlign: "center"}}>
            <div style={{ marginBottom: 16 }}>
              <img src="/mugangaSaccoLogo.jpg" alt="Muganga SACCO" style={{ height: 60, width: "auto" }} />
            </div>
            <p style={{ fontSize: "0.86rem", lineHeight: 1.75, maxWidth: 280, margin: "0 auto 16px" }}>
              Empowering health sector professionals with trusted microfinance solutions.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, background: "#eaf3de", color: "#246d36", transition: "background 0.2s, color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#246d36"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#eaf3de"; e.currentTarget.style.color = "#246d36"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            {FOOTER_QUICK_LINKS.map((l, i) => <FooterLink key={l.text + i} label={l.text} url={l.href} />)}
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            {FOOTER_SERVICES.map((l, i) => <FooterLink key={l.text + i} label={l.text} url={l.href} />)}
          </div>

          {/* Contact */}
          <div id="contact" style={{color:'#000'}}>
            <FooterHeading>Contact Us</FooterHeading>
            {CONTACT_INFO.map(c => (
              <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ color: "#246d36", flexShrink: 0 }}>{c.icon}</span>
                <span style={{ fontSize: "0.85rem" }}>{c.text}</span>
              </div>
            ))}
          </div>

          <div style={{color:'#000'}}>
            <FooterHeading>IMPORTANT LINKS</FooterHeading>
            {IMPORTANT_INFO.map((l, i) => <FooterLink key={l.text + i} label={l.text} url={l.href} />)}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 24, display: "flex", color:"#000", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.8rem", color: "#000" }}>© 2026 Muganga SACCO. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem", color: "#000" }}>Muganga SACCO is regulated by the National Bank of Rwanda</p>
        </div>
      </div>
    </footer>
  );
}