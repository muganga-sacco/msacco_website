import AnimatedSection from "../ui/AnimatedSection";

export default function CTASection() {
  return (
    <section style={{ background: "#fff", color: "#111", padding: "80px 24px", textAlign: "center" }}>
      <AnimatedSection>
        <div style={{ display: "inline-block", background: "#e65520d7", color: "#fff", borderRadius: 4, padding: "4px 14px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
          Get Started Today
        </div>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
          Ready to Start Your Financial Journey?
        </h2>
        <p style={{ color: "#555", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.75, fontSize: "0.97rem" }}>
          Join thousands of members who trust Muganga SACCO for their financial needs. Open an account today and take control of your financial future.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#products" className="btn-green">Get Started</a>
          <a href="#digital" style={{ background: "#e65520d7", color: "#fff", padding: "11px 26px", borderRadius: 4, fontSize: "0.88rem", fontWeight: 600, display: "inline-block", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Explore Digital Services
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
