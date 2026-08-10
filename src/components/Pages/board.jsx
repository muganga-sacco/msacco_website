import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const PRINCIPLE_COLORS = [
  { color: "#2d6a4f", bg: "#e8f0eb" },
  { color: "#c1440e", bg: "#faeae0" },
];

function toRoleColor(role) {
  const lc = (role || "").toLowerCase();
  if (lc.includes("chairperson") || lc.includes("secretary") || lc.includes("member")) return "#2d6a4f";
  return "#c1440e";
}

function toTitleRole(role) {
  return (role || "").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ─── AVATAR PLACEHOLDER ───────────────────────────── */
function AvatarPlaceholder() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#e8e4dc",
    }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="19" r="9" stroke="#b0a898" strokeWidth="2" fill="none"/>
        <path d="M6 42c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="#b0a898" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

/* ─── PERSON CARD ───────────────────────────────────── */
function PersonCard({ person, imageHeight = 200 }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div className="person-card">
      <div className="card-photo" style={{ height: imageHeight }}>
        {(person.image || person.image_url) && !imgErr ? (
          <img
            src={person.image || person.image_url}
            alt={person.name}
            onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>
      <div className="card-body">
        <span className="role-badge" style={{ background: person.roleColor + "18", color: person.roleColor }}>
          {toTitleRole(person.role)}
        </span>
        <h3 className="person-name">{person.name}</h3>
        <p className="person-bio">{person.bio}</p>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────── */
function mapMember(m) {
  return { id: m.id, name: m.name, role: m.role, roleColor: toRoleColor(m.role), bio: m.bio || "", image: m.image_url || "" };
}

export default function board() {
  const [boardMembers, setBoardMembers] = useState([]);
  const [supervisoryBoard, setSupervisoryBoard] = useState([]);
  const [managementTeam, setManagementTeam] = useState([]);
  const [principles, setPrinciples] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [boardRes, superRes, mgmtRes, prinRes] = await Promise.all([
          fetch(`${API_BASE}/board/members?type=board_of_directors&is_active=true`),
          fetch(`${API_BASE}/board/members?type=supervisory_board&is_active=true`),
          fetch(`${API_BASE}/board/members?type=management_team&is_active=true`),
          fetch(`${API_BASE}/board/principles`),
        ]);
        const boardData = await boardRes.json();
        const superData = await superRes.json();
        const mgmtData = await mgmtRes.json();
        const prinData = await prinRes.json();

        if (boardData.success) setBoardMembers((boardData.data || []).map(mapMember));
        if (superData.success) setSupervisoryBoard((superData.data || []).map(mapMember));
        if (mgmtData.success) setManagementTeam((mgmtData.data || []).map(mapMember));
        if (prinData.success) {
          setPrinciples(
            (prinData.data || []).map((p, i) => ({
              num: i + 1,
              color: PRINCIPLE_COLORS[i % 2].color,
              bg: PRINCIPLE_COLORS[i % 2].bg,
              title: p.title,
              desc: p.description,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch board data:", err);
      } finally {
        setLoaded(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="lg-page">


      {/* HERO */}
      <div className="lg-hero">
        <h1>Leadership & Governance</h1>
        <p>
          Meet the dedicated team of healthcare professionals leading Muganga SACCO
          towards sustainable growth and member prosperity.
        </p>
      </div>

      {!loaded ? (
        <div className="spinner-wrap">Loading...</div>
      ) : (
        <>
          {/* BOARD OF DIRECTORS */}
          <div className="lg-section">
            <div className="section-header">
              <h2>Board of Directors</h2>
              <p>Our board comprises experienced healthcare professionals committed to transparent governance and member value.</p>
            </div>
            <div className="board-grid">
              {boardMembers.length === 0 ? (
                <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#9a9a8a", padding: "40px 0" }}>No board members found.</p>
              ) : boardMembers.map((m) => (
                <PersonCard key={m.id} person={m} imageHeight={190} />
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* SUPERVISORY BOARD */}
          <div className="lg-section">
            <div className="section-header">
              <h2>Supervisory Board</h2>
              <p>Our supervisory board ensures compliance, accountability, and alignment with the SACCO's mission and regulatory standards.</p>
            </div>
            <div className="board-grid">
              {supervisoryBoard.length === 0 ? (
                <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#9a9a8a", padding: "40px 0" }}>No supervisory board members found.</p>
              ) : supervisoryBoard.map((m) => (
                <PersonCard key={m.id} person={m} imageHeight={190} />
              ))}
            </div>
          </div>

          <hr className="section-divider" />

          {/* MANAGEMENT TEAM */}
          <div className="lg-section">
            <div className="section-header">
              <h2>Management Team</h2>
              <p>Our executive team brings decades of combined experience in financial services and healthcare administration.</p>
            </div>
            <div className="mgmt-grid">
              {managementTeam.length === 0 ? (
                <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#9a9a8a", padding: "40px 0" }}>No management team found.</p>
              ) : managementTeam.map((m) => (
                <PersonCard key={m.id} person={m} imageHeight={230} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
