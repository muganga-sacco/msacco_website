import { useState } from "react";


const ShieldIcon = ({ size = 22, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const PhoneIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17.5z" />
  </svg>
);
const MailIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapPinIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const BankIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);
const LockIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeOffIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const ShieldCheckIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const AlertTriangleIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const RefreshIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);
const ClockIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const PhoneCallIcon = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17.5z" />
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
const SECURITY_TIPS = [
  { text: <>Do <strong>not</strong> allow anyone else to use your card, know your Personal Identification Number (PIN), password, or any other personal data or information.</> },
  { text: <>Memorize your PIN and other security information, then <strong>destroy the notification immediately</strong> after receipt.</> },
  { text: <>Do <strong>not</strong> write down your PIN or password anywhere.</> },
  { text: <>Do <strong>not</strong> keep a record of your PIN or password together with your card.</> },
  { text: <>Do <strong>not</strong> use easy-to-guess dates, numbers, or passwords such as your passport number or birthday as your PIN or password.</> },
  { text: <><strong>Change</strong> your PIN or password regularly to maintain security.</> },
  { text: <>Wait at least <strong>3 minutes</strong> at an ATM while waiting for the release of cash after a transaction.</> },
  { text: <>Contact the <strong>Support Service number</strong> available at the ATM location if the 3-minute wait is exceeded, or if your card is retained by the Automated Teller Machine (ATM).</> },
  { text: <>Contact Muganga SACCO <strong>Customer Service on <a href="tel:0788124500" style={{ color: "#166534", fontWeight: 700, textDecoration: "none" }}>0788124500</a></strong> for any support needed.</> },
];

const KEY_HIGHLIGHTS = [
  { icon: <LockIcon size={22} />, title: "Protect Your PIN",       desc: "Never share your PIN or password with anyone — not even bank staff." },
  { icon: <EyeOffIcon size={22} />, title: "Stay Private",         desc: "Shield the keypad when entering your PIN at ATMs or POS terminals." },
  { icon: <RefreshIcon size={22} />, title: "Change Regularly",    desc: "Update your PIN and passwords periodically to reduce risk of compromise." },
  { icon: <AlertTriangleIcon size={22} />, title: "Avoid Obvious PINs", desc: "Never use birthdays, ID numbers, or sequential digits as your PIN." },
  { icon: <ClockIcon size={22} />, title: "ATM Patience",          desc: "Wait 3+ minutes for cash release. Contact support if your card is retained." },
  { icon: <PhoneCallIcon size={22} />, title: "Report Immediately", desc: "Call 0788124500 right away if you suspect fraud or unauthorized access." },
];

export default function ConsumerEmpowerment() {
  const [activeTab, setActiveTab] = useState("tips");

  return (
    <>
          
      <div className="ce-main">
        <div className="ce-content ce-animate">
          {/* SECURITY TIPS TAB */}
          {activeTab === "tips" && (
            <div className="ce-section-card">
              <p className="ce-section-eyebrow">Education on security tips on digital financial services</p>
              <h2 className="ce-section-title">CONSUMER EMPOWERMENT</h2>
              <p className="ce-section-intro">
                In accordance with the BNR's Regulation n° 55/2022 of 27/10/2022 relating to Financial Service Consumer
                Protection, and for purposes of protecting and securing a consumer's Personal Identification Number (PIN)
                and password including for card services, mobile-banking, internet banking and other digital financial
                services, a member of Muganga SACCO is advised on the following but not limited to:
              </p>

              <div className="ce-tips-list">
                {SECURITY_TIPS.map((tip, i) => (
                  <div className="ce-tip-item" key={i}>
                    <div className="ce-tip-number">{i + 1}</div>
                    <p className="ce-tip-text">{tip.text}</p>
                  </div>
                ))}
              </div>

              {/* Emergency highlight */}
              <div className="ce-highlight">
                <div className="ce-highlight-icon"><PhoneCallIcon size={24} /></div>
                <div className="ce-highlight-text">
                  <strong>Need Immediate Assistance?</strong>
                  If your card has been retained by an ATM, or you suspect unauthorized activity on your account,
                  contact Muganga SACCO Customer Service immediately on{" "}
                  <a href="tel:0788124500">0788 124 500</a> or email{" "}
                  <a href="mailto:customerservice@mugangasacco.rw">customerservice@mugangasacco.rw</a>.
                </div>
              </div>
            </div>
          )}

          {/* KEY HIGHLIGHTS TAB */}
          {activeTab === "overview" && (
            <div className="ce-section-card">
              <p className="ce-section-eyebrow">At a Glance</p>
              <h2 className="ce-section-title">Key Security Principles</h2>
              <p className="ce-section-intro">
                These six principles summarize the most critical actions every Muganga SACCO member should take
                to protect their digital financial accounts and personal data.
              </p>
              <div className="ce-key-tips">
                {KEY_HIGHLIGHTS.map((c, i) => (
                  <div className="ce-key-card" key={i}>
                    <div className="ce-key-card-icon">{c.icon}</div>
                    <div className="ce-key-card-title">{c.title}</div>
                    <div className="ce-key-card-desc">{c.desc}</div>
                  </div>
                ))}
              </div>

              <div className="ce-highlight" style={{ marginTop: 28 }}>
                <div className="ce-highlight-icon"><ShieldCheckIcon size={24} /></div>
                <div className="ce-highlight-text">
                  <strong>Your Security is Our Priority</strong>
                  Muganga SACCO will <em>never</em> ask for your PIN, password, or OTP via phone, email, or SMS.
                  Always verify before sharing any personal information. Report suspicious activity on{" "}
                  <a href="tel:0788124500">0788 124 500</a>.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
