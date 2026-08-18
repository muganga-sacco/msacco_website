import { useState, useEffect } from "react";
import { FileText } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

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

const REQUIREMENTS = [
  "Be a health sector professional or eligible individual",
  "Be at least 18 years of age",
  "Provide a valid National ID or Passport",
  "Submit a passport-sized photo",
  "Provide proof of employment or professional affiliation",
  "Pay the registration fee and minimum share contribution",
  "Complete and sign the membership application form",
];

const LOAN_COLOR = "#1a4a2e";
const ACCENT = "#214f66";



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

function Modal({ product, onClose }) {
  if (!product) return null;
  const accent = ACCENT;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:1000, background:"rgba(0,0,0,0.45)", display:"flex", alignItems:"center", justifyContent:"center", padding:"16px" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background:"#fff", borderRadius:16, maxWidth:560, width:"100%", maxHeight:"85vh", overflowY:"auto", padding:"32px 28px", position:"relative", fontFamily:"'Source Sans 3', sans-serif" }}>
        <button onClick={onClose} style={{ position:"absolute", top:16, right:16, background:"#f0ede6", border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:"1rem", color:"#555", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>

        {product.imageUrl ? <img src={product.imageUrl.startsWith("/") ? API_ORIGIN + product.imageUrl : product.imageUrl} alt={product.title} style={{ width:"100%", height:220, objectFit:"cover", display:"block", borderRadius:12, marginBottom:20 }} /> : null}

        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.45rem", fontWeight:700, color:"#1a1a14", margin:0 }}>{product.title}</h2>
          {product.description ? <p style={{ fontSize:"0.95rem", color:"#7a7a6a", margin:"3px 0 0", fontWeight:300 }}>{product.description}</p> : null}
        </div>

        <div style={{ display:"flex", gap:12, marginBottom:20 }}>
          {product.rate > 0 ? (
          <div style={{ flex:1, background:"#e6f2f5", borderRadius:10, padding:"12px 16px" }}>
            <div style={{ fontSize:"0.8rem", color:"#7a7a6a", marginBottom:2, textTransform:"uppercase", letterSpacing:"0.05em" }}>Interest Rate</div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"2rem", fontWeight:700, color:accent, lineHeight:1 }}>{product.rate}%</div>
            <div style={{ fontSize:"0.8rem", color:"#7a7a6a" }}>{product.rateLabel === "Monthly Interest" ? "per month" : "per annum"}</div>
          </div>
          ) : null}
          {product.limit ? (
          <div style={{ flex:1, background:"#f5f5f0", borderRadius:10, padding:"12px 16px" }}>
            <div style={{ fontSize:"0.8rem", color:"#7a7a6a", marginBottom:2, textTransform:"uppercase", letterSpacing:"0.05em" }}>Limit</div>
            <div style={{ fontSize:"1.15rem", fontWeight:600, color:"#1a1a14", lineHeight:1.3, marginTop:4 }}>{product.limit}</div>
            </div>
          ) : null}
            <div className="ms-contact-card">
              <p className="ms-contact-heading">Need assistance?</p>
              <p className="ms-contact-text">
                Contact Muganga SACCO Contact Center at <strong>0788124500</strong> or email: <strong>customerservice@mugangasacco.rw</strong>
              </p>
            </div>
          </div>

        {product.details.overview && (
        <Section title="Overview" accent={accent}>
          <p style={{ fontSize:"0.95rem", color:"#4a4a3a", lineHeight:1.7, margin:0, fontWeight:300 }}>{product.details.overview}</p>
        </Section>
        )}

        {product.features?.length > 0 && (
          <Section title="Features" accent={accent}>
            <ul style={{ margin:0, padding:0, listStyle:"none" }}>
              {product.features.map((item, i) => (
                <li key={i} style={{ display:"flex", gap:8, fontSize:"0.92rem", color:"#4a4a3a", padding:"3px 0", fontWeight:300 }}>
                  <span style={{ color:accent, flexShrink:0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {product.details.eligibility?.length > 0 && (
        <Section title="Eligibility" accent={accent}>
          <ul style={{ margin:0, padding:0, listStyle:"none" }}>
            {product.details.eligibility.map((item, i) => (
              <li key={i} style={{ display:"flex", gap:8, fontSize:"0.92rem", color:"#4a4a3a", padding:"3px 0", fontWeight:300 }}>
                <span style={{ color:accent, flexShrink:0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </Section>
        )}

        {product.details.documents?.length > 0 && (
        <Section title="Required Documents" accent={accent}>
          <ul style={{ margin:0, padding:0, listStyle:"none" }}>
            {product.details.documents.map((doc, i) => (
              <li key={i} style={{ display:"flex", gap:8, fontSize:"0.92rem", color:"#4a4a3a", padding:"3px 0", fontWeight:300 }}>
                <span style={{ color:accent, flexShrink:0 }}><FileText size={16} /></span>{doc}
              </li>
            ))}
          </ul>
        </Section>
        )}

        {product.details.process && (
        <Section title="Application Process" accent={accent}>
          <p style={{ fontSize:"0.95rem", color:"#4a4a3a", lineHeight:1.7, margin:0, fontWeight:300 }}>{product.details.process}</p>
        </Section>
        )}

        {product.details.targeted_customers?.length > 0 && (
          <Section title="Targeted Customers" accent={accent}>
            <ul style={{ margin:0, padding:0, listStyle:"none" }}>
              {product.details.targeted_customers.map((item, i) => (
                <li key={i} style={{ display:"flex", gap:8, fontSize:"0.92rem", color:"#4a4a3a", padding:"3px 0", fontWeight:300 }}>
                  <span style={{ color:accent, flexShrink:0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {product.details.benefits?.length > 0 && (
          <Section title="Benefits" accent={accent}>
            <ul style={{ margin:0, padding:0, listStyle:"none" }}>
              {product.details.benefits.map((item, i) => (
                <li key={i} style={{ display:"flex", gap:8, fontSize:"0.92rem", color:"#4a4a3a", padding:"3px 0", fontWeight:300 }}>
                  <span style={{ color:accent, flexShrink:0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {product.details.required_forms?.length > 0 && (
          <Section title="Required Forms" accent={accent}>
            <ul style={{ margin:0, padding:0, listStyle:"none" }}>
              {product.details.required_forms.map((item, i) => (
                <li key={i} style={{ display:"flex", gap:8, fontSize:"0.92rem", color:"#4a4a3a", padding:"3px 0", fontWeight:300 }}>
                  <span style={{ color:accent, flexShrink:0 }}><FileText size={16} /></span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        <button onClick={onClose} style={{ width:"100%", padding:"13px", border:"none", borderRadius:9, background:ACCENT, color:"#fff", fontFamily:"'Source Sans 3', sans-serif", fontSize:"1rem", fontWeight:600, cursor:"pointer", marginTop:8, letterSpacing:"0.3px" }}>Close</button>
      </div>
    </div>
  );
}

export default function Membership() {
  const [activeTab, setActiveTab] = useState("loans");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isBenefits = activeTab === "benefits";
  const isLoans = activeTab === "loans";

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [prodRes, otherRes] = await Promise.all([
          fetch(`${API_BASE}/products`).then(r => r.json()),
          fetch(`${API_BASE}/other-services`).then(r => r.json()),
        ]);
        const products = prodRes.success ? prodRes.data : [];
        const others = otherRes.success ? otherRes.data : [];
        setAllProducts([...products, ...others]);
      } catch {
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const toFrontend = (api) => {
    const d = DETAILS_BY_TITLE[api.title] || {};
    const amount = api.max_amount ? `Up to RWF ${Number(api.max_amount).toLocaleString()}` : "";
    const rateLabel = api.interest_period === "monthly" ? "Monthly Interest" : "Annual Interest";
    return {
      id: api.id,
      imageUrl: api.image_url || "",
      title: api.title,
      description: api.description || "",
      rate: api.interest_rate ? parseFloat(api.interest_rate) : 0,
      rateLabel,
      limit: amount || "",
      features: api.features || [],
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

  const accountProducts = allProducts
    .filter(p => p.type === "account" || p.type === "account_opening" || !p.type)
    .map(toFrontend);

  return (
    <div style={{ minHeight:"100vh", background:"#fff" }}>
      

      <div className="ms-hero">
        <h1 className="ms-hero-title">Membership &amp; Other Services</h1>
        <p className="ms-hero-subtitle">Discover how to join Muganga SACCO and explore additional services available to our members.</p>
      </div>

      <div className="ms-tab-section">
        <div className="ms-tab-bar">
          <button className={`ms-tab-btn ${isBenefits ? "active" : ""}`} onClick={() => setActiveTab("benefits")}>Membership Benefits</button>
          <button className={`ms-tab-btn ${isLoans ? "active" : ""}`} onClick={() => setActiveTab("loans")}>How to become a member</button>
          <button className={`ms-tab-btn ${activeTab === "account" ? "active" : ""}`} onClick={() => setActiveTab("account")}>Account opening</button>
        </div>
      </div>

      <div className="ms-content ms-animate">
        {isBenefits ? (
          <div className="ms-card">
            <p className="ms-sublabel">Key Benefits</p>
            <div className="ms-list">
              {[
                { title: "Affordable credit solutions", desc: "Access loan products designed to support housing, education, emergencies, business, and personal development." },
                { title: "Savings for your future", desc: "Build financial discipline and grow your savings through products that support your goals." },
                { title: "Digital access to services", desc: "Use available digital channels such as internet banking, mobile/USSD services, and online loan application." },
                { title: "Healthcare-focused products", desc: "Benefit from financial services designed around the needs of Rwanda's healthcare community." },
                { title: "Member-owned cooperative model", desc: "Become part of a SACCO created to serve and grow with its members." },
                { title: "Financial education and support", desc: "Receive guidance and support to help you make informed financial decisions." },
                { title: "Transparent and regulated services", desc: "Access services delivered under applicable cooperative and financial sector requirements." },
              ].map((benefit, i) => (
                <div className="ms-item" key={i}>
                  <div className="ms-num">{i + 1}</div>
                  <div>
                    <p className="ms-text" style={{ fontWeight: 600 }}>{benefit.title}</p>
                    <p className="ms-text" style={{ marginTop: 2 }}>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ms-contact-card">
              <p className="ms-contact-heading">Need assistance?</p>
              <p className="ms-contact-text">
                Contact Muganga SACCO Contact Center at <strong>0788124500</strong> or email: <strong>customerservice@mugangasacco.rw</strong>
              </p>
            </div>
          </div>
        ) : isLoans ? (
          <div className="ms-card">
            <p className="ms-sublabel">How to Become a Member</p>
            <div className="ms-list">
              {[
                { title: "Check Eligibility", desc: "Confirm that you fall under Muganga SACCO's eligible membership categories." },
                { title: "Choose Account Type", desc: "Select the appropriate account opening category: Individual, Corporate Partner, or Student." },
                { title: "Submit Requirements", desc: "Complete the required forms and submit the supporting documents." },
                { title: "Get Confirmation", desc: "Once approved, start accessing Muganga SACCO savings, credit, and digital services." },
              ].map((step, i) => (
                <div className="ms-item" key={i}>
                  <div className="ms-num">{i + 1}</div>
                  <div>
                    <p className="ms-text" style={{ fontWeight: 600 }}>{step.title}</p>
                    <p className="ms-text" style={{ marginTop: 2 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ms-contact-card">
              <p className="ms-contact-heading">Need assistance?</p>
              <p className="ms-contact-text">
                Contact Muganga SACCO Contact Center at <strong>0788124500</strong> or email: <strong>customerservice@mugangasacco.rw</strong>
              </p>
            </div>
          </div>
        ) : (
          <div className="ms-products-grid">
            {loading ? (
              <p style={{ textAlign:"center", padding:60, color:"#7a7a6a", gridColumn:"1 / -1" }}>Loading services...</p>
            ) : !accountProducts.length ? (
              <p style={{ textAlign:"center", padding:60, color:"#7a7a6a", gridColumn:"1 / -1" }}>No services found.</p>
            ) : accountProducts.map(p => (
              <div key={p.id} className="ms-product-card">
                {p.imageUrl ? <img src={p.imageUrl.startsWith("/") ? API_ORIGIN + p.imageUrl : p.imageUrl} alt={p.title} style={{ width:"100%", height:180, objectFit:"cover", display:"block", borderRadius:12, marginBottom:12 }} /> : null}
                <div className="ms-card-title">{p.title}</div>
                <div className="ms-card-desc">{p.description}</div>
                {p.rate > 0 ? (
                <div className="ms-rate-row">
                  <span className="ms-rate-num">{p.rate}%</span>
                  <span className="ms-rate-label">{p.rateLabel || "Annual Interest"}</span>
                </div>
                ) : null}
                <div className="ms-card-limit">{p.limit}</div>
                <ul className="ms-features-list">
                  {p.features.map((f, i) => (
                    <li key={i}><span className="ms-check">✓</span>{f}</li>
                  ))}
                </ul>
                <button className="ms-cta-btn" onClick={() => setSelectedProduct(p)}>More Details</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
