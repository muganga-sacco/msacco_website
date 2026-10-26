import { FEATURES } from "../../constants";
import AnimatedSection from "../ui/AnimatedSection";

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div style={{ width: 44, height: 44, background: "#246d36", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: 16, color: "#fff" }}>{icon}</div>
      <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#111" }}>{title}</h3>
      <p style={{ fontSize: "0.87rem", color: "#555", lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section style={{ paddingTop: "10px", paddingBottom:"10px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">Our Advantages</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#111" }}>
              Why Choose Muganga SACCO?
            </h2>
            <p style={{ color: "#555", marginTop: 12, maxWidth: 520, margin: "12px auto 0", lineHeight: 1.7 }}>
              We understand the unique financial needs of health sector professionals and provide tailored solutions to help you achieve your goals.
            </p>
          </div>
        </AnimatedSection>

        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {FEATURES.map((feature) => (
            <AnimatedSection key={feature.title}>
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
