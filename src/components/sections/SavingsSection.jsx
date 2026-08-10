import { SAVINGS_BREAKDOWN } from "../../constants";
import AnimatedSection from "../ui/AnimatedSection";

const SAVINGS_BULLETS = [
  "Competitive interest rates on savings",
  "No minimum balance requirements",
  "Flexible withdrawal options",
];

function SavingsVisual() {
  return (
    <div style={{ background: "#fff", borderRadius: 8, padding: 32, border: "1px solid #e5e7eb" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, borderBottom: "1px solid #e5e7eb", paddingBottom: 20 }}>
        <div>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#246d36", fontWeight: 700, marginBottom: 4 }}>Total Savings</div>
          <div style={{ fontSize: "1.9rem", fontWeight: 800, color: "#111" }}>RWF 1,250,000</div>
        </div>
        <div style={{ background: "#246d36", borderRadius: 4, padding: "8px 14px", textAlign: "center" }}>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>+8.5%</div>
          <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.85)", marginTop: 1 }}>Annual Return</div>
        </div>
      </div>

      {SAVINGS_BREAKDOWN.map((bar) => (
        <div key={bar.label} style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.82rem", color: "#333" }}>{bar.label}</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: bar.color }}>{bar.pct}%</span>
          </div>
          <div style={{ height: 7, background: "#e5e7eb", borderRadius: 100 }}>
            <div style={{ height: "100%", width: `${bar.pct}%`, background: bar.color, borderRadius: 100 }} />
          </div>
        </div>
      ))}

      <div style={{ marginTop: 20, padding: "12px 14px", background: "#fff", borderRadius: 6, border: "1px solid #e5e7eb" }}>
        <div style={{ fontSize: "0.78rem", color: "#246d36", fontWeight: 600 }}>
          💡 Save consistently to maximize your returns and unlock better loan rates!
        </div>
      </div>
    </div>
  );
}

export default function SavingsSection() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* Copy */}
          <AnimatedSection>
            <span className="section-label">Savings Accounts</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, color: "#111" }}>
              Build Your Future with Smart Savings
            </h2>
            <p style={{ color: "#555", lineHeight: 1.75, marginBottom: 28, fontSize: "0.95rem" }}>
              Start saving today and earn competitive interest rates on your deposits. Our voluntary saving accounts give you the flexibility to save at your own pace while building financial stability.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {SAVINGS_BULLETS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.9rem", color: "#333" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#246d36", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#products" className="btn-green">Open Savings Account</a>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection>
            <SavingsVisual />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
