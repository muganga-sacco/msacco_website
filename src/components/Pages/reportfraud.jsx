
// ══════════════════════════════════════════════════════════════════════════
//  ICONS
// ══════════════════════════════════════════════════════════════════════════
const PhoneCallIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17.5z" />
  </svg>
);
const MailIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const ShieldAlertIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ══════════════════════════════════════════════════════════════════════════
//  STYLES
// ══════════════════════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════════════════════
const MEASURES = [
  {
    title: "Whistleblower Mechanism",
    text: "Muganga SACCO has established confidential and secure channels for whistleblowers, enabling employees, members, and stakeholders to report suspected instances of corruption/fraud without fear of reprisal.",
  },
  {
    title: "Ethical Business Practices",
    text: "Muganga SACCO actively promotes a culture of integrity and ethical conduct, emphasizing honesty, transparency, and fairness in all interactions among employees, members, and stakeholders.",
  },
  {
    title: "Sanctions and Disciplinary Actions",
    text: "Muganga SACCO communicates the severe consequences associated with involvement in corrupt/fraud activities, including termination of employment contract, legal action, and reporting to appropriate authorities.",
  },
];

// ══════════════════════════════════════════════════════════════════════════
//  COMPONENT
// ══════════════════════════════════════════════════════════════════════════
export default function ReportingFraud() {
  return (
    <>
      

      <div className="rf-page">
        <div className="rf-container rf-animate">
          <div className="rf-card">

            {/* Header */}
            <p className="rf-eyebrow">Transparency &amp; Accountability</p>
            <h2 className="rf-title">Reporting Fraud / Corruption</h2>
            <div className="rf-divider" />
            <p className="rf-intro">
              Muganga SACCO takes fraud and corruption seriously and encourages individuals to report
              any suspected cases through the published channels below.
            </p>

            {/* Measures */}
            <p className="rf-sublabel">
              Measures implemented by Muganga SACCO to combat Corruption / Fraud:
            </p>
            <div className="rf-list">
              {MEASURES.map((m, i) => (
                <div className="rf-item" key={i}>
                  <div className="rf-num">{i + 1}</div>
                  <p className="rf-text">
                    <strong>{m.title}:</strong> {m.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <p className="rf-sublabel" style={{ marginTop: 32 }}>
              Contact Us to Report Fraud / Corruption:
            </p>
            <div className="rf-contact-grid">
              <div className="rf-contact-card">
                <div className="rf-contact-icon"><MailIcon size={20} /></div>
                <div>
                  <div className="rf-contact-label">Whistleblowing Email</div>
                  <div className="rf-contact-value">
                    <a href="mailto:whistleblowing@mugangasacco.rw">
                      whistleblowing@mugangasacco.rw
                    </a>
                  </div>
                </div>
              </div>
              <div className="rf-contact-card">
                <div className="rf-contact-icon"><PhoneCallIcon size={20} /></div>
                <div>
                  <div className="rf-contact-label">Phone Number</div>
                  <div className="rf-contact-value">
                    <a href="tel:0788752578">0788 752 578</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight */}
            <div className="rf-highlight">
              <div className="rf-highlight-icon"><ShieldAlertIcon size={24} /></div>
              <div className="rf-highlight-text">
                <strong>Your Report Matters</strong>
                All reports are treated with strict confidentiality. Whistleblowers are fully protected
                from reprisal. To report suspected fraud or corruption, email{" "}
                <a href="mailto:whistleblowing@mugangasacco.rw">whistleblowing@mugangasacco.rw</a>{" "}
                or call <a href="tel:0788752578">0788 752 578</a>.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
