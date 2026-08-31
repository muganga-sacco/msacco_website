import { useState, useEffect } from "react";
import { FileText } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

/* ── Rich detail data not stored in backend ── */
const DETAILS_BY_TITLE = {
  "Business Loans": {
    overview: "Our Business Loan is designed to help health sector professionals grow and expand their practices or side businesses. Whether you need working capital, want to expand your clinic, or launch a new venture, we have a solution for you.",
    eligibility: ["Must be a registered Muganga SACCO member", "Minimum 6 months of active membership", "Valid business registration documents", "Proof of income or business revenue"],
    documents: ["National ID / Passport", "Business registration certificate", "Bank statements (last 3 months)", "Business plan or financial projections"],
    process: "Apply online or visit any branch. Approval within 3–5 business days.",
  },
  "Giriwawe Home Loans": {
    overview: "Giriwawe Home Loans offer the most affordable housing financing in Rwanda exclusively for health workers. Built in partnership with the Government of Rwanda, this product helps you own your dream home with very low interest rates and long repayment terms.",
    eligibility: ["Active health sector employee", "Muganga SACCO member for at least 1 year", "Clean credit history", "Identifiable property or land"],
    documents: ["National ID / Passport", "Employment letter and payslips", "Title deed or land certificate", "Valuation report"],
    process: "Submit application with property documents. Approval in 5–10 business days.",
  },
  "Emergency Loans": {
    overview: "Emergency Loans provide instant financial relief for unexpected situations — medical bills, urgent repairs, family emergencies, or any urgent need. We prioritize speed and simplicity so you can focus on what matters.",
    eligibility: ["Active Muganga SACCO member", "Minimum 3 months membership", "Existing savings balance as security"],
    documents: ["National ID", "Recent payslip or proof of income", "Brief statement of emergency"],
    process: "Apply online or via mobile app. Funds disbursed within 24 hours of approval.",
  },
  "Personal Loans": {
    overview: "Personal Loans give you the freedom to meet your individual financial goals — whether it's a wedding, travel, household expenses, or any personal project. No collateral needed for qualifying members.",
    eligibility: ["Muganga SACCO member", "Stable monthly income", "Good repayment history"],
    documents: ["National ID / Passport", "3 months payslips", "Bank statements"],
    process: "Simple online application. Disbursement within 48 hours after approval.",
  },
  "Education Loans": {
    overview: "Education Loans help health professionals and their families invest in knowledge. From undergraduate degrees to specialized medical training, we cover tuition fees, accommodation, and living expenses with a grace period while you study.",
    eligibility: ["Muganga SACCO member or immediate family member", "Accepted offer from accredited institution", "Guarantor required for large amounts"],
    documents: ["Admission letter from institution", "Fee structure / invoice", "National ID", "Guarantor details"],
    process: "Apply before academic year begins. Funds paid directly to institution or member.",
  },
  "Asset Financing": {
    overview: "Asset Financing helps you acquire the tools you need to do your job better. Whether you're buying a vehicle for transport, medical equipment for your clinic, or office assets, we make it affordable with structured repayments.",
    eligibility: ["Registered Muganga SACCO member", "Asset must be from approved supplier", "Down payment of at least 20%"],
    documents: ["Pro-forma invoice from supplier", "National ID", "Proof of income", "Asset valuation (for second-hand assets)"],
    process: "Submit supplier invoice with application. Funds paid directly to supplier.",
  },
  "Voluntary Saving Account": {
    overview: "A savings account where deposits are made voluntarily by the member to build personal savings and earn interest.",
    eligibility: ["Member must provide valid identification", "Member must meet membership eligibility", "Member must agree on signing instructions"],
    documents: ["National ID / Passport", "Being a member of Muganga Sacco", "Have an active current account in Muganga Sacco"],
    process: "For more information, reachout to Muganga Sacco Branch, Main office or nearby Customer Relationship Officer.",
  },
  "Compursory Saving": {
    overview: "Fixed Deposit accounts let you lock in your money for a set period and earn the highest available interest rate. Perfect for members who have surplus funds and want guaranteed, risk-free returns.",
    eligibility: ["Active Muganga SACCO member", "Minimum deposit of RWF 1,000,000", "Commitment to agreed lock-in period"],
    documents: ["National ID", "Source of funds declaration (for large amounts)"],
    process: "Visit a branch or apply online. Account activated within 1 business day.",
  },
  "Term Deposit Account": {
    overview: "A Term deposit account is a type of account that member shall lock away an amount of money for an agreed length of time and in return, he/she will get a guaranteed rate of interest for the term he/she selects.",
    eligibility: ["Muganga Sacco Members."],
    documents: ["KYC (Know your customer Document completed)"],
    process: "Reach out to Muganga Sacco Main branch, Head Quorter or Nearby CRO (Customer Relationship Officer)",
  },
  "Current Account": {
    overview: "Individual Account opening helps health sector professionals become Muganga SACCO members and access savings, loans, and other member services through a personal account.",
    eligibility: ["Health sector professional or eligible SACCO member", "Must be 18 years or older", "Valid identification document"],
    documents: ["National ID / Passport", "Passport photo", "Proof of employment or professional affiliation"],
    process: "Start online or visit any branch with the required documents. Account activation is completed after verification.",
  },
  "Group or Institution Account": {
    overview: "Group or Institution Accounts support associations, clinics, departments, and other organized groups that need a shared SACCO account with authorized signatories.",
    eligibility: ["Registered group, association, clinic, or institution", "Approved representatives or signatories", "Valid registration or authorization documents"],
    documents: ["Registration certificate or authorization letter", "National ID / Passport for signatories", "Meeting minutes approving account opening"],
    process: "Submit the group documents, signatory details, and account mandate. Activation follows document verification.",
  },
};

const steps = [
  { num: 1, title: "Choose Your Product", desc: "Select the loan, savings, or account option that fits your needs" },
  { num: 2, title: "Submit Application", desc: "Fill out our simple online form with required documents" },
  { num: 3, title: "Get Approved", desc: "Receive approval within short period and start benefiting" },
];

const LOAN_COLOR = "#1a4a2e";
const LOAN_ACCENT = "#2d6a4f";
const SAVINGS_COLOR = "#1a4a2e";
const SAVINGS_ACCENT = "#2d6a4f";
const ACCOUNT_COLOR = "#1a4a2e";
const ACCOUNT_ACCENT = "#2d6a4f";

const PRODUCT_THEME = {
  loan: { color: LOAN_COLOR, accent: LOAN_ACCENT, bg: "#faeae0" },
  savings: { color: SAVINGS_COLOR, accent: SAVINGS_ACCENT, bg: "#faeae0" },
  account: { color: ACCOUNT_COLOR, accent: ACCOUNT_ACCENT, bg: "#faeae0" },
};

const getProductTheme = (type) => PRODUCT_THEME[type] || PRODUCT_THEME.loan;

function Modal({ product, type, onClose }) {
  if (!product) return null;
  const theme = getProductTheme(type);
  const accent = theme.accent;
  const bg = theme.bg;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          maxWidth: 560,
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "32px 28px",
          position: "relative",
          fontFamily: "'Source Sans 3', sans-serif",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "#f0ede6", border: "none", borderRadius: "50%",
            width: 32, height: 32, cursor: "pointer",
            fontSize: "1rem", color: "#555", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}
        >✕</button>

        {/* Image */}
        {product.imageUrl ? <img src={product.imageUrl.startsWith("/") ? API_ORIGIN + product.imageUrl : product.imageUrl} alt={product.title} style={{ width:"100%", height:220, objectFit:"cover", display:"block", borderRadius:12, marginBottom:20 }} /> : null}

        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", fontWeight: 700, color: "#1a1a14", margin: 0 }}>{product.title}</h2>
          {/* {product.description ? <p style={{ fontSize: "0.95rem", color: "#7a7a6a", margin: "3px 0 0", fontWeight: 300 }}>{product.description}</p> : null} */}
        </div>

        {/* Rate + Limit */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          {product.rateDisplay || (product.rate > 0 && product.rate !== "") ? (
          <div style={{ flex: 1, background: bg, borderRadius: 10, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.8rem", color: "#7a7a6a", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{product.rateTitle || "Interest Rate"}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: accent, lineHeight: 1 }}>{product.rateDisplay || `${product.rate}%`}</div>
            <div style={{ fontSize: "0.8rem", color: "#7a7a6a" }}>{product.rateLabel || "per annum"}</div>
          </div>
          ) : null}
          {product.limit ? (
          <div style={{ flex: 1, background: "#f5f5f0", borderRadius: 10, padding: "12px 16px" }}>
            <div style={{ fontSize: "0.8rem", color: "#7a7a6a", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>Limit</div>
            <div style={{ fontSize: "1.15rem", fontWeight: 600, color: "#1a1a14", lineHeight: 1.3, marginTop: 4 }}>{product.limit}</div>
          </div>
          ) : null}
        </div>

        {/* Overview */}
        {product.details.overview && (
        <Section title="Overview" accent={accent}>
          <p style={{ fontSize: "0.95rem", color: "#4a4a3a", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{product.details.overview}</p>
        </Section>
        )}

        {/* Features */}
        {product.features?.length > 0 && (
          <Section title="Features" accent={accent}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {product.features.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.92rem", color: "#4a4a3a", padding: "3px 0", fontWeight: 300 }}>
                  <span style={{ color: accent, flexShrink: 0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Eligibility */}
        {product.details.eligibility?.length > 0 && (
        <Section title="Eligibility" accent={accent}>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {product.details.eligibility.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.92rem", color: "#4a4a3a", padding: "3px 0", fontWeight: 300 }}>
                <span style={{ color: accent, flexShrink: 0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </Section>
        )}

        {/* Documents */}
        {product.details.documents?.length > 0 && (
        <Section title="Required Documents" accent={accent}>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {product.details.documents.map((doc, i) => (
              <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.92rem", color: "#4a4a3a", padding: "3px 0", fontWeight: 300 }}>
                <span style={{ color: accent, flexShrink: 0 }}><FileText size={16} /></span>{doc}
              </li>
            ))}
          </ul>
        </Section>
        )}

        {/* Process */}
        {product.details.process && (
        <Section title="Application Process" accent={accent}>
          <p style={{ fontSize: "0.95rem", color: "#4a4a3a", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{product.details.process}</p>
        </Section>
        )}

        {/* Targeted Customers */}
        {product.details.targeted_customers?.length > 0 && (
          <Section title="Targeted Customers" accent={accent}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {product.details.targeted_customers.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.92rem", color: "#4a4a3a", padding: "3px 0", fontWeight: 300 }}>
                  <span style={{ color: accent, flexShrink: 0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Benefits */}
        {product.details.benefits?.length > 0 && (
          <Section title="Benefits" accent={accent}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {product.details.benefits.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.92rem", color: "#4a4a3a", padding: "3px 0", fontWeight: 300 }}>
                  <span style={{ color: accent, flexShrink: 0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Required Forms */}
        {product.details.required_forms?.length > 0 && (
          <Section title="Requirements" accent={accent}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {product.details.required_forms.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.92rem", color: "#4a4a3a", padding: "3px 0", fontWeight: 300 }}>
                  <span style={{ color: accent, flexShrink: 0 }}><FileText size={16} /></span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* CTA */}
        <button
          onClick={onClose}
          style={{
            width: "100%", padding: "13px", border: "none", borderRadius: 9,
            background: theme.color,
            color: "#fff", fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "1rem", fontWeight: 600, cursor: "pointer",
            marginTop: 8, letterSpacing: "0.3px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Section({ title, accent, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: "0.82rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: accent, marginBottom: 8, borderLeft: `3px solid ${accent}`, paddingLeft: 8 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("loans");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isLoans = activeTab === "loans";
  const isSavings = activeTab === "savings";

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then(r => r.json())
      .then(res => {
        if (res.success) setAllProducts(res.data || []);
        else setAllProducts([]);
      })
      .catch(() => setAllProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const toFrontend = (api) => {
    const d = DETAILS_BY_TITLE[api.title] || {};
    const amount = api.max_amount ? `Up to RWF ${Number(api.max_amount).toLocaleString()}` : "";
    const rateLabelFromPeriod = api.interest_period === "monthly" ? "per month" : "per annum";
    return {
      id: api.id,
      imageUrl: api.image_url || "",
      title: api.title,
      description: api.description || "",
      rate: api.interest_rate ? parseFloat(api.interest_rate) : "",
      rateDisplay: api.type === "savings" && !api.interest_rate ? "Free" : undefined,
      rateTitle: api.type === "savings" && !api.interest_rate ? "Opening Fee" : undefined,
      rateLabel: api.type === "savings" && !api.interest_rate ? "Opening Fee" : rateLabelFromPeriod,
      limit: amount || "",
      features: api.features || [],
      featured: api.is_featured || false,
      featuredLabel: api.featured_label || (api.is_featured ? "Featured" : null),
      cta: "More Details",
      details: {
        overview: d.overview || api.description || "",
        eligibility: api.eligibility || d.eligibility || [],
        documents: api.required_documents || d.documents || [],
        process: api.application_process || d.process || "",
        targeted_customers: api.targeted_customers || [],
        benefits: api.benefits || [],
        required_forms: api.required_forms || [],
      },
    };
  };

  const loanProducts = allProducts.filter(p => p.type === "loan").map(toFrontend);
  const savingsProducts = allProducts.filter(p => p.type === "savings" || p.type === "saving").map(toFrontend);

  const products = isLoans ? loanProducts : savingsProducts;
  const type = isLoans ? "loan" : "savings";

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <div className="products-page">
        {/* Hero */}
        <div className="hero">
          <h1 className="hero-title">Our Financial Products</h1>
          <p className="hero-subtitle">
            Discover a range of financial solutions tailored for health sector professionals.
          </p>
        </div>

        {/* Tabs */}
        <div className="tab-section">
          <div className="tab-bar">
            <button className={`tab-btn ${activeTab === "loans" ? "active-loan" : ""}`} onClick={() => setActiveTab("loans")}>Loan Products</button>
            <button className={`tab-btn ${activeTab === "savings" ? "active-savings" : ""}`} onClick={() => setActiveTab("savings")}>Savings Products</button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {loading ? (
            <p style={{ textAlign: "center", padding: 60, color: "#7a7a6a", gridColumn: "1 / -1" }}>Loading products...</p>
          ) : !products.length ? (
            <p style={{ textAlign: "center", padding: 60, color: "#7a7a6a", gridColumn: "1 / -1" }}>No products found in this category.</p>
          ) : products.map((p) => {
            const isFeatured = p.featured;
            return (
              <div key={p.id} className={`product-card ${isFeatured ? `featured-${type}` : ""}`}>
                {p.featuredLabel && <div className={`featured-badge ${type}`}>{p.featuredLabel}</div>}
                {p.imageUrl ? <img src={p.imageUrl.startsWith("/") ? API_ORIGIN + p.imageUrl : p.imageUrl} alt={p.title} style={{ width:"100%", height:180, objectFit:"cover", display:"block", borderRadius:12, marginTop: p.featuredLabel ? 36 : 0 }} /> : null}
                <div className="card-title">{p.title}</div>
                {p.rateDisplay || p.rate > 0 ? (
                <div className="rate-row">
                  {/* <span className={`rate-num ${type}`}>{p.rateDisplay || `${p.rate}%`}</span> */}
                  {/* <span className="rate-label">{p.rateLabel || "Annual Interest"}</span> */}
                </div>
                ) : null}
                <button className={`cta-btn ${type}`} onClick={() => setSelectedProduct(p)}>{p.cta}</button>
              </div>
            );
          })}
        </div>

        {/* Steps */}
        <div className="steps-section">
          <h2 className="steps-title">Simple Application Process</h2>
          <p className="steps-subtitle">Getting started with Muganga SACCO is easy. Follow these simple steps to apply for any of our products.</p>
          <div className="steps-row">
            {steps.map((s) => (
              <div className="step-item" key={s.num}>
                <div className={`step-num ${type}`}>{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          {/* <button className={`start-btn ${type}`}>Start Application</button> */}
          <a href="https://ibank.mugangasacco.rw/" className={`start-btn ${type}`}>Start Application</a>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          type={type}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
