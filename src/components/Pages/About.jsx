import coreValuesImg from "../../Images/Core_Values.png";

const profileStats = [
  { value: "Health", label: "Sector focus" },
  { value: "Public & Private", label: "Member coverage" },
  { value: "CHWs", label: "Community reach" },
  { value: "Rwanda", label: "Service area" },
];

const audiences = [
  "Public health professionals",
  "Private health professionals",
  "Public & Private health facilitiess",
  "Community Health Workers",
];

export default function About() {
  return (
    <div className="profile-page">


      <section className="profile-hero">
        <div className="profile-hero-inner">
          <div>
            <span className="eyebrow">Muganga SACCO Profile</span>
            <h1>Financial solutions built for Rwanda's health sector.</h1>
            <p>
              Muganga SACCO is a Savings and Credit Cooperative serving health sector staff in Rwanda.
              It exists to improve members' socio-economic conditions, promote savings, and expand access
              to low-rate loans that support our members and their institutions.
            </p>
            <div className="hero-actions">
              <a className="profile-btn primary" href="/products">Explore Products</a>
              <a className="profile-btn secondary" href="#profile-history">Read Our Story</a>
            </div>
          </div>
          <div className="hero-image-wrap" aria-hidden="true">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=80"
                alt=""
              />
            </div>
            <div className="hero-note">
              <strong>Member first</strong>
              <span>Supporting our members with accessible, professional, and inclusive financial services.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section" aria-label="Profile highlights">
        <div className="stats-grid">
          {profileStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section" id="profile-history">
        <div className="history-grid">
          <div className="history-panel">
            <span className="eyebrow">Our History</span>
            <h3>Created to motivate, retain, and empower our members.</h3>
            <p>
              The SACCO was established after the Government of Rwanda advised the Ministry of Health to
              find practical strategies that improve motivation and retention in the healthcare workforce.
            </p>
          </div>
          <div>
            <div className="story-card">
              <p>
                Muganga SACCO's primary objective is to improve members' socio-economic conditions and
                promote access to finance by helping members save and access affordable loans.
              </p>
            </div>
            <div className="story-card">
              <p>
                Its mandate extends beyond public health sector staff. The cooperative also serves private
                health sector staff and facilities, as well as Community Health Workers, widening access
                to financial services across Rwanda's healthcare industry.
              </p>
            </div>
            <div className="story-card">
              <p>
                By serving both public and private healthcare sectors, Muganga SACCO demonstrates a commitment
                to financial inclusivity and long-term support for the people and institutions behind Rwanda's care system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="section-head">
          <span className="eyebrow">Direction</span>
          <h2>Vision and mission</h2>
          <p>Clear purpose, practical services, and a commitment to the sustainable development of health professionals.</p>
        </div>
        <div className="mission-grid">
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To be the leader in provision of financial products, services and solutions to the healthcare
              professional, contributing to sustainable development and work retention.
            </p>
          </div>
          <div className="mission-card mission">
            <h3>Our Mission</h3>
            <p>
              To provide reputable and innovative financial and personal development solutions through excellent
              services that exceed stakeholder expectations while caring for members' needs efficiently,
              friendly, and professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="section-head">
          <span className="eyebrow">Who We Serve</span>
          <h2>Inclusive support for the healthcare ecosystem</h2>
          <p>Muganga SACCO is built around the people, teams, and facilities that keep Rwanda's health sector moving.</p>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <div className="audience-card" key={audience}>
              <span className="audience-dot" />
              {audience}
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section" style={{ textAlign: "center" }}>
        <img src={coreValuesImg} alt="Core Values" style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }} />
      </section>

      <section className="profile-section">
        <div className="profile-cta">
          <div>
            <h2>Ready to learn more about Muganga SACCO?</h2>
            <p>
              Visit our products, leadership, or contact sections to explore how the SACCO supports members
              through savings, credit, digital services, and professional care.
            </p>
          </div>
          <a className="profile-btn" href="contactus">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
