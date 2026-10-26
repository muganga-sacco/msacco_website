const LOAN_COLOR = "#1a4a2e";



export default function Tariff() {
  return (
    <div style={{ minHeight:"100vh", background:"#fff" }}>
      

      <div className="ms-hero">
        <h1 className="ms-hero-title">Tariff of Products &amp; Services from 2023</h1>
        <p className="ms-hero-subtitle"></p>
      </div>

      <div className="ms-content ms-animate">
        <div className="ms-card" style={{ marginBottom: 28 }}>
          <p style={{ fontSize:"14.5px", color:"#3a4a3a", lineHeight:1.75, margin:0 }}>
            Muganga SACCO Tariff is a schedule of charges, fees, and interest rates applied to the various products and services offered by Muganga SACCO. It helps members understand the costs associated with transactions such as account maintenance, loan processing, withdrawals, transfers, and other financial services. The tariff promotes transparency, ensures fair and consistent service delivery, and enables members to make informed financial decisions while using MUGANGA SACCO services.
          </p>
        </div>
        <div className="tariff-grid">
          <a href="/NEW-TARRIFS-2023-Approved-by-BoD_July-2023.pdf" target="_blank" rel="noopener noreferrer" className="tariff-card">
            <div className="tariff-icon">📄</div>
            <div className="tariff-title">General Tariff</div>
            <div className="tariff-arrow">View →</div>
          </a>
          <a href="/Giriwawe-Loan-New-Tarrifs-and-Terms-Conditions-from-June-1st2025.pdf" target="_blank" rel="noopener noreferrer" className="tariff-card">
            <div className="tariff-icon">📄</div>
            <div className="tariff-title">GIRIWAWE Tariff</div>
            <div className="tariff-arrow">View →</div>
          </a>
        </div>
      </div>
    </div>
  );
}
