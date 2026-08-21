import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

const tabs = [
  { id: "news", label: "News" },
  { id: "announcements", label: "Announcements" },
  { id: "publications", label: "Publications" },
  { id: "tenders", label: "Tender" },
];

const PUB_SUBS = [
  { id: "annual_report", label: "Annual Report" },
  { id: "financial_report", label: "Financial Report" },
];

export default function NewsCenter() {
  const [activeTab, setActiveTab] = useState("news");
  const [pubSub, setPubSub] = useState("annual_report");
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/news?status=published&limit=50`);
        const json = await res.json();
        if (json.success) {
          setItems(
            (json.data || []).map((item) => ({
              id: item.id,
              title: item.title,
              description: item.excerpt || item.title,
              tag: item.tag || null,
              image_url: item.image_url || null,
              file_url: item.file_url || null,
              section: item.section || "news",
              subsection: item.subsection || null,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const filtered = items.filter(i => {
    const matchesTab =
      activeTab === "publications"
        ? i.section === "publications" && i.subsection === pubSub
        : activeTab === "tenders"
        ? i.section === "tender"
        : i.section === activeTab;
    const matchesQuery =
      !query || i.title.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div>

      <div className="forms-hero-bg" style={heroStyles.hero}>
        <h1 style={heroStyles.heroTitle}>Stay Informed</h1>
        <p style={heroStyles.heroSubtitle}>Stay up to date with the latest news, announcements, publications, and tenders from Muganga SACCO.</p>
        <div style={heroStyles.searchBar}>
          <span style={heroStyles.searchIcon}><Search size={14} strokeWidth={2.5} /></span>
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={heroStyles.searchInput}
          />
        </div>
      </div>

      <div className="news-center">
      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "publications" && (
        <div>
          <h2 className="section-title">Publications</h2>
          <div className="tab-bar" style={{ borderBottom: "none", paddingBottom: 0, marginBottom: 16 }}>
            {PUB_SUBS.map(s => (
              <button
                key={s.id}
                className={`tab-btn ${pubSub === s.id ? "active" : ""}`}
                onClick={() => setPubSub(s.id)}
                style={{ padding: "6px 16px", fontSize: "0.85rem" }}
              >
                {s.label}
              </button>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p style={{ color: "#6b7280" }}>No publications in this category yet.</p>
          ) : (
            <div className="grid">
              {filtered.map(item => (
                <div key={item.id} className="card">
                  {item.tag && <span className="tag">{item.tag}</span>}
                  <h3>{item.title}</h3>
                  {item.file_url && (
                    <a href={API_ORIGIN + item.file_url} target="_blank" rel="noopener noreferrer"
                      className="download-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

          {activeTab !== "publications" && (
        <div>
          <h2 className="section-title">{tabs.find(t => t.id === activeTab)?.label || activeTab}</h2>
          {!loaded ? (
            <div className="spinner-wrap">Loading...</div>
          ) : filtered.length === 0 ? (
            <p style={{ color: "#6b7280" }}>No articles published yet.</p>
          ) : (
            <div className="grid">
              {filtered.map(item => (
                <div key={item.id} className="card">
                  {item.tag && <span className="tag">{item.tag}</span>}
                  <h3>{item.title}</h3>
                  {item.file_url && (
                    <a href={API_ORIGIN + item.file_url} target="_blank" rel="noopener noreferrer"
                      className="download-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
}

const heroStyles = {
  hero: {
    background: "linear-gradient(135deg, #0f3d22 0%, #1a4d2e 50%, #1e5c36 100%)",
    padding: "3rem 2rem 2.5rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "1.9rem",
    fontWeight: 700,
    margin: "0 0 0.5rem",
    fontFamily: "'Outfit', sans-serif",
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.9rem",
    margin: 0,
    fontFamily: "'Outfit', sans-serif",
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
    color: "rgba(255,255,255,0.7)",
    display: "flex",
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
};