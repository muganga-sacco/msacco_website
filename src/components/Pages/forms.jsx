import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText, Search, Download,
} from "lucide-react";
import logo from "/src/Images/mugangaSaccoLogo.jpg";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const CATEGORIES = {
  loan: { label: "Loan Forms" },
  account_opening: { label: "Account Opening Forms" },
  other: { label: "Other Forms" },
};

const TABS = [
  { key: "all", label: "All" },
  ...Object.entries(CATEGORIES).map(([key, cat]) => ({ key, label: cat.label })),
];

function FormCard({ title, file_url }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTop}>
        <div style={styles.iconBox}>
          <FileText size={18} strokeWidth={2} />
        </div>
        <div style={styles.cardInfo}>
          <p style={styles.cardTitle}>{title}</p>
        </div>
      </div>
      <div style={styles.cardMeta}>
        <a href={file_url} download target="_blank" rel="noreferrer" style={styles.downloadBtn}>
          <Download size={14} strokeWidth={2.5} /> Download
        </a>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div style={styles.sectionLabel}>{children}</div>;
}

export default function FormsPage() {
  const [query, setQuery] = useState("");
  const [forms, setForms] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch(`${API_BASE}/forms?is_active=true`)
      .then(r => r.json())
      .then(j => {
        if (j.success) setForms(j.data);
      })
      .catch(() => {});
  }, []);

  const matchesSearch = (f) =>
    f.title.toLowerCase().includes(query.toLowerCase());

  const filteredForms = activeTab === "all"
    ? forms
    : forms.filter(f => f.category === activeTab);

  const visible = filteredForms.filter(matchesSearch);

  const groupedByCategory = (categoryKey) =>
    visible.filter(f => f.category === categoryKey);

  const logoStyle = { width: 240, height: "auto", flexShrink: 0 };

  return (
    <div style={styles.page}>

      <div className="forms-hero-bg" style={styles.hero}>
        {/* <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="Muganga SACCO" style={logoStyle} />
        </Link> */}
        <h1 style={styles.heroTitle}>Download Forms</h1>
        <p style={styles.heroSubtitle}>
          Access and download all official Muganga SACCO forms
        </p>
        <div style={styles.searchBar}>
          <span style={styles.searchIcon}><Search size={14} strokeWidth={2.5} /></span>
          <input
            type="text"
            placeholder="Search forms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      <div style={styles.tabBar}>
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...styles.tab,
              ...(activeTab === tab.key ? styles.tabActive : {}),
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.container}>
        {activeTab === "all" ? (
          Object.entries(CATEGORIES).map(([key, cat]) => {
            const grouped = groupedByCategory(key);
            if (!grouped.length) return null;
            return (
              <div key={key}>
                <SectionLabel>{cat.label}</SectionLabel>
                <div style={styles.grid}>
                  {grouped.map(form => (
                    <FormCard key={form.id} {...form} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          (() => {
            const cat = CATEGORIES[activeTab];
            const grouped = groupedByCategory(activeTab);
            if (!grouped.length) return null;
            return (
              <div>
                <SectionLabel>{cat.label}</SectionLabel>
                <div style={styles.grid}>
                  {grouped.map(form => (
                    <FormCard key={form.id} {...form} />
                  ))}
                </div>
              </div>
            );
          })()
        )}

        {visible.length === 0 && (
          <p style={{ textAlign: "center", color: "#6b7280", marginTop: "2rem" }}>
            {forms.length === 0 ? "No forms available yet." : `No forms found for "${query}"`}
          </p>
        )}

      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Outfit', sans-serif",
    background: "#fff",
    minHeight: "100vh",
    paddingBottom: "3rem",
  },
  hero: {
    background: "linear-gradient(135deg, #0f3d22 0%, #1a4d2e 50%, #1e5c36 100%)",
    padding: "3rem 2rem 2.5rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  logoLink: {
    display: "inline-block",
    marginBottom: "1.5rem",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "1.9rem",
    fontWeight: 700,
    margin: "0 0 0.5rem",
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.9rem",
    margin: 0,
  },
  searchBar: {
    maxWidth: 480,
    margin: "1.5rem auto 0",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: 14,
  },
  searchInput: {
    width: "100%",
    padding: "10px 16px 10px 40px",
    borderRadius: 8,
    border: "none",
    fontSize: "0.85rem",
    fontFamily: "'Outfit', sans-serif",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    outline: "none",
  },
  tabBar: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    padding: "1.2rem 1rem 0.8rem",
    flexWrap: "wrap",
  },
  tab: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: "0.82rem",
    fontWeight: 500,
    padding: "8px 18px",
    borderRadius: 8,
    border: "0.5px solid #d4e8d9",
    background: "#fff",
    color: "#555",
    cursor: "pointer",
  },
  tabActive: {
    background: "#246d36",
    color: "#fff",
    borderColor: "#246d36",
  },
  container: {
    maxWidth: 820,
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  sectionLabel: {
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#246d36",
    margin: "2rem 0 1rem",
    borderLeft: "3px solid #246d36",
    paddingLeft: 10,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    border: "0.5px solid #d4e8d9",
    padding: "1.1rem 1.2rem",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    transition: "border-color 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  cardTop: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: "#eaf3de",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardInfo: {
    flex: 1,
    minWidth: 0,
  },
  cardTitle: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#111",
    lineHeight: 1.3,
    margin: "0 0 3px",
  },
  cardMeta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  downloadBtn: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    background: "#246d36",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 12px",
    fontSize: "0.75rem",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
  },
  infoBanner: {
    background: "#eaf3de",
    border: "0.5px solid #c0dd97",
    borderRadius: 10,
    padding: "0.9rem 1.1rem",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    marginTop: "2rem",
  },
  infoText: {
    fontSize: "0.8rem",
    color: "#3B6D11",
    margin: 0,
    lineHeight: 1.5,
  },
};
