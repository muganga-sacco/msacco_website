import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const CATEGORY_MAP = {
  getting_started: "Getting Started",
  loans: "Loans",
  digital_services: "Digital Services",
  education: "Education",
  savings: "Savings",
};

const categories = ["All", "Getting Started", "Loans", "Digital Services", "Education", "Savings"];

const categoryIcons = {
  "All": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  ),
  "Getting Started": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "Loans": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  "Digital Services": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
    </svg>
  ),
  "Education": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
};

function toDisplayCat(cat) {
  return CATEGORY_MAP[cat] || cat;
}

function toApiCat(cat) {
  const rev = Object.entries(CATEGORY_MAP).find(([, v]) => v === cat);
  return rev ? rev[0] : cat;
}

function getYoutubeThumbnail(url) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

function PlayBtn() {
  return (
    <div style={{
      position: "absolute", top: "50%", left: "50%",
      transform: "translate(-50%,-50%)",
      width: 44, height: 44,
      background: "rgba(255,255,255,0.92)",
      borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#1a4a2e">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </div>
  );
}

export default function GuidesAndTutorials() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [tutorials, setTutorials] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/guides?limit=50`);
        const json = await res.json();
        if (json.success) {
          setTutorials(
            (json.data || []).map((t) => ({
              id: t.id,
              category: toDisplayCat(t.category),
              categoryColor: "#c1440e",
              title: t.title,
              desc: t.description || "",
              duration: t.duration || "",
              videoUrl: t.video_url || null,
              image: t.thumbnail || getYoutubeThumbnail(t.video_url) || "",
              hasPlay: !!t.video_url,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch guides:", err);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  const filtered = tutorials.filter((t) => {
    const matchCat = active === "All" || t.category === active;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="gt-page">
      {/* HERO */}
      <div className="gt-hero">
        <div className="hero-tag">Video Tutorials</div>
        <h1>User Guides and Tutorials</h1>
        <p>Learn how to use our services with step-by-step video guides. From opening accounts to mobile banking, we have got you covered.</p>
      </div>

      {/* FILTERS */}
      <div className="filters-bar">
        <div className="search-wrap">
          <span className="search-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            className="search-input"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="cat-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`cat-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {categoryIcons[c]}
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* TUTORIALS GRID */}
      {!loaded ? (
        <div className="spinner-wrap">Loading...</div>
      ) : (
        <div className="tutorials-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">No tutorials found. Try a different search or category.</div>
          ) : filtered.map((t) => (
            <div
              className="tut-card"
              key={t.id}
              onClick={() => t.videoUrl && window.open(t.videoUrl, "_blank", "noopener,noreferrer")}
            >
              <div className="tut-thumb">
                <img src={t.image} alt={t.title} onError={(e) => { e.target.style.display = "none"; }} />
                {t.hasPlay && <PlayBtn />}
                {t.duration && (
                  <div className="duration-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {t.duration}
                  </div>
                )}
              </div>
              <div className="tut-body">
                <span className="tut-cat">{t.category}</span>
                <div className="tut-title">{t.title}</div>
                <div className="tut-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* HELP FOOTER */}
      <div className="help-footer">
        <h2>Need More Help?</h2>
        <p>Cannot find what you are looking for? Our customer support team is ready to assist you.</p>
        <div className="help-btns">
          <Link to="/contactus"><button className="btn-solid">Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
