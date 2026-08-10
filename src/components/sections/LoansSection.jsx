import { LOAN_PRODUCTS } from "../../constants";
import AnimatedSection from "../ui/AnimatedSection";

const LOAN_BULLETS = [
  "Business loans with flexible terms",
  "Home loans at 10% interest rate",
  "Emergency loans with quick approval",
];

export default function LoansSection() {
  return (
    <section id="products" style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* Visual — green card */}
          <AnimatedSection>
            <div style={{ background: "#246d36", borderRadius: 8, padding: "36px 32px", color: "#fff" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 20, fontWeight: 600 }}>Featured Loan Products</div>
              {LOAN_PRODUCTS.map((loan, i) => (
                <div key={loan.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < LOAN_PRODUCTS.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 6, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.15rem", flexShrink: 0, color: "#fff" }}>{loan.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{loan.name}</div>
                    <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{loan.term}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.88rem", background: "#e65520d7", padding: "4px 10px", borderRadius: 4 }}>{loan.rate}</div>
                </div>
              ))}
              <div style={{ marginTop: 22, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 18, fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}>
                ✓ Flexible repayment &nbsp;&nbsp; ✓ No hidden charges
              </div>
            </div>
          </AnimatedSection>

          {/* Copy */}
          <AnimatedSection>
            <span className="section-label">Loan Services</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, color: "#111" }}>
              Quick Loans for Your Needs
            </h2>
            <p style={{ color: "#555", lineHeight: 1.75, marginBottom: 28, fontSize: "0.95rem" }}>
              Whether you need to run your business, buy a home, or handle an emergency, we have the right loan product for you with competitive interest rates and flexible repayment terms.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {LOAN_BULLETS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.9rem", color: "#333" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#246d36", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#products" className="btn-green">View All Loan Products</a>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
