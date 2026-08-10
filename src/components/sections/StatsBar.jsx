import { STATS } from "../../constants";

export default function StatsBar() {
  return (
    <section style={{ background: "#fff", color: "#111", padding: "28px 24px" }}>
      <div className="stats-row" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ borderRight: i < 3 ? "1px solid #e5e7eb" : "none", paddingRight: 16 }}>
            <div style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#111" }}>{stat.value}</div>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#555", marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
