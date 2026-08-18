import { Stethoscope } from 'lucide-react';
import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const FALLBACK_STATS = [
  { value: "10%", label: "Interest Rate", color: "#246d36" },
  { value: "24/7", label: "Digital Access", color: "#e65520d7" },
  { value: "Fast", label: "Approval", color: "#246d36" },
];

const FALLBACK_CARD = {
  label: "Savings Growth",
  value: "+23.5%",
  sub: "Year-on-year average return",
};

export default function HeroSection() {
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [cardData, setCardData] = useState(FALLBACK_CARD);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/trends/kpis`);
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          const kpis = json.data.slice(0, 3);
          setStats(kpis.map((k, i) => ({
            value: k.value,
            label: k.label,
            color: i % 2 === 0 ? "#246d36" : "#e65520d7",
          })));
          if (json.data.length > 3) {
            const c = json.data[3];
            setCardData({
              label: c.label,
              value: c.change_pct ? `${c.is_positive ? "+" : "-"}${c.change_pct}%` : c.value,
              sub: c.label,
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch KPIs:", err);
      }
    })();
  }, []);

  return (
    <section id="home" style={{ background: "#FFF", color: "#fff", paddingTop: "70px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Left — Copy */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              border: "1.5px solid #d6d9d6",
              borderRadius: "999px",
              padding: "10px 22px",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: "1rem",
              color: "#2d2d2d",
              fontWeight: 450,
              letterSpacing: "0.01em",
            }}>
              <span style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#4e8c5f",
                flexShrink: 0,
                display: "inline-block",
              }} />
              Trusted by 10,000+ members
            </div>

            <h1 style={{ paddingTop: 50, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#000", fontWeight: 800, lineHeight: 1.18, marginBottom: 20, letterSpacing: "-0.02em" }}>
              Empowering Health Workers to
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#246d36", fontWeight: 800, lineHeight: 1.18, marginBottom: 20, letterSpacing: "-0.02em" }}>Dream and <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#e65520d7", fontWeight: 800, lineHeight: 1.18, marginBottom: 20, letterSpacing: "-0.02em" }}>Achieve</span></h1>
            </h1>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#000", marginBottom: 36, maxWidth: 480 }}>
              Access affordable loans, competitive savings accounts, and digital financial services designed specifically for Rwanda's healthcare community.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
              }}>

                {/* Explore Products Button */}
                <a href="h#products"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#246d36",
                    color: "#ffffff",
                    border: "3px solid #a8c5a8",
                    borderRadius: "12px",
                    padding: "14px 24px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  }}>
                  Explore Products <span>→</span>
                </a>

                {/* Login to Account Button */}
                <a href="https://ibank.mugangasacco.rw"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "#ffffff",
                    color: "#2d2d2d",
                    border: "1.5px solid #d6d9d6",
                    borderRadius: "12px",
                    padding: "14px 24px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  }}>
                  Login to Account
                </a>

              </div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#ffffff",
                border: "1.5px solid #d6d9d6",
                borderRadius: "12px",
                padding: "20px 32px",
                gap: "0",
              }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingRight: i < stats.length - 1 ? "32px" : 0,
                    borderRight: i < stats.length - 1 ? "1.5px solid #d6d9d6" : "none",
                    paddingLeft: i > 0 ? "32px" : 0,
                  }}>
                    <span style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: s.color,
                      lineHeight: 1.1,
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}>{s.value}</span>
                    <span style={{
                      fontSize: "0.88rem",
                      color: "#666",
                      marginTop: "4px",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat Pills */}
            <div style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: 28 }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ flex: 1, paddingRight: 16, borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none", paddingLeft: i > 0 ? 16 : 0 }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>{s.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Info Card */}
          <div>
            <div style={{ background: "#fff", borderRadius: 8, padding: 32, border: "none" }}>
              <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 20, marginBottom: 20 }}>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#246d36", fontWeight: 700, marginBottom: 6 }}>{cardData.label}</div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#246d36" }}>{cardData.value}</div>
                <div style={{ fontSize: "0.8rem", color: "#666", marginTop: 4 }}>{cardData.sub}</div>
              </div>

              {/* Bar chart */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 72, marginBottom: 8 }}>
                {[40, 55, 45, 65, 50, 75, 60, 90, 70, 100, 80, 95].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 9 ? "#246d36" : "#e5e7eb", borderRadius: "2px 2px 0 0" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", color: "#9ca3af", marginBottom: 24 }}>
                <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
              </div>

              {/* Account snapshot */}
              <div style={{ background: "#fff", borderRadius: 6, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, border: "1px solid #e5e7eb" }}>
                <div style={{ width: 38, height: 38, background: "#246d36", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1rem", flexShrink: 0 }}><Stethoscope color="#fff"/> </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#111" }}>Muganga SACCO Member</div>
                  <div style={{ fontSize: "0.7rem", color: "#246d36" }}>Account verified ✓</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#111" }}>RWF 450,000</div>
                  <div style={{ fontSize: "0.68rem", color: "#e65520d7", fontWeight: 600 }}>↑ +12% this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
