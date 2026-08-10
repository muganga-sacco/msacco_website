import { useState, useEffect } from "react";

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
    if (activeTab === "publications") return i.section === "publications" && i.subsection === pubSub;
    if (activeTab === "tenders") return i.section === "tender";
    return i.section === activeTab;
  });

  return (
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
                  <p>{item.description}</p>
                  {item.file_url && (
                    <a href={API_ORIGIN + item.file_url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: "0.8rem", color: "#2563eb", fontWeight: 600 }}>
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
                  <p>{item.description}</p>
                  {item.file_url && (
                    <a href={API_ORIGIN + item.file_url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: "0.8rem", color: "#2563eb", fontWeight: 600 }}>
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
  );
}
