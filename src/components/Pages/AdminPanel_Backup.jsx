import { useState } from "react";

// ══════════════════════════════════════════════════════════════════════════
//  ICONS
// ══════════════════════════════════════════════════════════════════════════
const ShieldIcon = ({ size = 20 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const LogoutIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>);
const ArrowLeftIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>);
const PlusIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>);
const EditIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>);
const TrashIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></svg>);
const CloseIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const BoxIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>);
const UsersIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const BriefcaseIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
const NewsIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>);
const TrendIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>);
const VideoIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>);
const SettingsIcon = ({ size = 24 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>);
const EyeIcon = ({ open }) => open ? (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>) : (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>);
const UserCircleIcon = ({ size = 80 }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);

// ══════════════════════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════════════════════
const INITIAL_PRODUCTS = [
  { id: 1, type: "Loan",    featured: false, name: "Business Loans",      desc: "Grow your healthcare practice or side business",  rate: "12%", amount: "Up to RWF 50,000,000",  features: ["Fast approval", "Flexible repayment"] },
  { id: 2, type: "Loan",    featured: true,  name: "Giriwawe Home Loans", desc: "Affordable housing loans for health workers",      rate: "10%", amount: "Up to RWF 100,000,000", features: ["Low interest", "Long tenure"] },
  { id: 3, type: "Loan",    featured: false, name: "Emergency Loans",     desc: "Quick access to funds when you need them most",   rate: "15%", amount: "Up to RWF 10,000,000",  features: ["Same-day disbursement"] },
  { id: 4, type: "Loan",    featured: false, name: "Personal Loans",      desc: "Flexible loans for your personal needs",          rate: "14%", amount: "Up to RWF 20,000,000",  features: ["No collateral required"] },
  { id: 5, type: "Loan",    featured: false, name: "Education Loans",     desc: "Invest in your professional development",         rate: "11%", amount: "Up to RWF 30,000,000",  features: ["Grace period available"] },
  { id: 6, type: "Loan",    featured: false, name: "Asset Financing",     desc: "Purchase equipment and vehicles",                 rate: "13%", amount: "Up to RWF 80,000,000",  features: ["Asset-backed", "Long tenure"] },
  { id: 7, type: "Savings", featured: false, name: "Voluntary Savings",   desc: "Flexible savings with competitive returns",       rate: "8%",  amount: "No minimum balance",     features: ["Withdraw anytime"] },
  { id: 8, type: "Savings", featured: true,  name: "Fixed Deposit",       desc: "Lock your savings for higher returns",            rate: "12%", amount: "Minimum RWF 1,000,000", features: ["Higher returns", "Fixed tenure"] },
  { id: 9, type: "Savings", featured: false, name: "Junior Savings",      desc: "Build a bright future for your children",         rate: "9%",  amount: "No minimum balance",     features: ["Parent-managed", "Zero fees"] },
];

const INITIAL_BOARD = [
  { id: 1, name: "Dr. Jean Baptiste Ngendahimana", role: "Board Chairperson", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face", bio: "Dr. Ngendahimana brings over 20 years of experience in healthcare management and financial governance." },
  { id: 2, name: "Dr. Marie Claire Uwimana",       role: "Vice Chairperson",  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face", bio: "Specialist in public health with extensive experience in cooperative financial management." },
  { id: 3, name: "Dr. Patrick Niyonzima",          role: "Board Secretary",   image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face", bio: "Healthcare administrator with a passion for financial inclusion in the medical sector." },
  { id: 4, name: "Nurse Florence Mukamana",        role: "Board Member",      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face", bio: "Dedicated nurse and advocate for healthcare workers' financial wellness." },
  { id: 5, name: "Dr. Emmanuel Habimana",          role: "Board Member",      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face", bio: "Physician and financial literacy champion for medical professionals." },
  { id: 6, name: "Nurse Grace Mukamusoni",         role: "Board Member",      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop&crop=face", bio: "Healthcare professional committed to empowering colleagues through financial services." },
  { id: 7, name: "Dr. Alice Uwera",                role: "Treasurer",         image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=200&h=200&fit=crop&crop=face", bio: "Experienced financial officer with a deep commitment to cooperative banking." },
  { id: 8, name: "Mr. Joseph Nkurunziza",          role: "Board Member",      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face", bio: "Health economist and policy advisor focused on sustainable healthcare financing." },
  { id: 9, name: "Dr. Diane Mukeshimana",          role: "Board Member",      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop&crop=face", bio: "Pediatrician and SACCO advocate promoting savings culture among junior health staff." },
];

const today = new Date().toISOString().split("T")[0];
const INITIAL_JOBS = [
  { id: 1, title: "Loan Officer",                  department: "Credit Department", location: "Kigali", type: "Full-time", desc: "We are seeking an experienced Loan Officer to join our credit team and help healthcare professionals access financial services.", responsibilities: ["Evaluate loan applications", "Assess creditworthiness of applicants", "Manage loan portfolios"], requirements: ["Bachelor's degree in Finance or related field", "2+ years banking experience", "Strong analytical skills"], postedDate: "2026-03-15" },
  { id: 2, title: "Customer Service Representative", department: "Operations",       location: "Kigali", type: "Full-time", desc: "Join our team to provide excellent service to healthcare workers accessing financial products.",                              responsibilities: ["Handle member inquiries", "Process transactions accurately", "Resolve complaints professionally"], requirements: ["Diploma in Business Administration", "1+ year customer service experience", "Excellent communication skills"], postedDate: "2026-03-18" },
  { id: 3, title: "ICT Officer",                   department: "Technology",         location: "Kigali", type: "Full-time", desc: "Manage and maintain our digital banking platforms and IT infrastructure.",                                                    responsibilities: ["Maintain banking software systems", "Provide technical support", "Ensure data security"], requirements: ["BSc in Computer Science or IT", "Experience with banking systems", "Knowledge of cybersecurity"], postedDate: "2026-03-20" },
];

const VALID_USER = "admin";
const VALID_PASS = "muganga2024";

// ══════════════════════════════════════════════════════════════════════════
//  STYLES
// ══════════════════════════════════════════════════════════════════════════
const STYLES = `

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,Helvetica,sans-serif}

/* LOGIN */
.login-root{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#fff;font-family:Arial,Helvetica,sans-serif;padding:24px;position:relative;overflow:hidden}
.login-root::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(22,101,52,.06) 0%,transparent 70%);top:-200px;right:-100px;pointer-events:none}
.login-card{background:#fff;border-radius:20px;box-shadow:0 1px 3px rgba(0,0,0,.04),0 8px 32px rgba(0,0,0,.08),0 24px 64px rgba(22,101,52,.06);padding:48px 44px 40px;width:100%;max-width:460px;border:1px solid rgba(22,101,52,.08);animation:slideUp .5s cubic-bezier(.22,1,.36,1) both}
.login-icon-wrap{width:72px;height:72px;border-radius:50%;background:linear-gradient(145deg,#dcf0dc,#e8f5e8);display:flex;align-items:center;justify-content:center;margin:0 auto 28px;color:#166534;box-shadow:0 4px 16px rgba(22,101,52,.15),inset 0 1px 0 rgba(255,255,255,.8);transition:transform .3s}
.login-icon-wrap:hover{transform:scale(1.05) rotate(-4deg)}
.login-title{font-family:Arial,Helvetica,sans-serif;font-size:30px;font-weight:700;color:#0d1f0d;text-align:center;letter-spacing:-.3px;margin-bottom:6px}
.login-sub{font-size:14px;color:#6b7f6b;text-align:center;font-weight:400;margin-bottom:36px}
.field-group{margin-bottom:20px}
.field-label{display:block;font-size:13.5px;font-weight:600;color:#1a2e1a;margin-bottom:8px}
.input-wrap{position:relative}
.field-input{width:100%;padding:13px 16px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1a2e1a;background:#fafafa;border:1.5px solid #dde8dd;border-radius:10px;outline:none;transition:border-color .2s,box-shadow .2s,background .2s;-webkit-appearance:none}
.field-input::placeholder{color:#aebdae}
.field-input:focus{background:#fff;border-color:#166534;box-shadow:0 0 0 3px rgba(22,101,52,.1)}
.field-input.has-toggle{padding-right:48px}
.toggle-btn{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#7a9a7a;display:flex;align-items:center;padding:4px;border-radius:4px;transition:color .2s}
.toggle-btn:hover{color:#166534}
.error-msg{margin-top:8px;font-size:13px;color:#c0392b;display:flex;align-items:center;gap:5px;animation:fadeIn .2s ease}
.login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#14532d,#166534);color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:15.5px;font-weight:600;border:none;border-radius:10px;cursor:pointer;margin-top:8px;box-shadow:0 4px 16px rgba(22,101,52,.3);transition:transform .15s,box-shadow .15s;display:flex;align-items:center;justify-content:center;gap:10px;position:relative;overflow:hidden}
.login-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.08) 0%,transparent 60%);pointer-events:none}
.login-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 6px 24px rgba(22,101,52,.38)}
.login-btn:disabled{opacity:.75;cursor:not-allowed}
.hint-box{background:#f4f8f4;border:1px solid #d4e8d4;border-radius:10px;padding:14px 16px;margin-top:20px;font-size:13px;color:#4a664a;line-height:1.7;cursor:pointer;transition:background .2s,border-color .2s}
.hint-box:hover{background:#e8f5e8;border-color:#b6d8b6}
.hint-box strong{color:#1a3d1a;font-weight:600}
.hint-label{font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:#8aaa8a;font-weight:600;margin-bottom:4px}
.hint-row{display:flex;gap:6px}
.hint-key{color:#8aaa8a;font-weight:500}

/* SHARED NAV */
.nav{background:#fff;border-bottom:1px solid #e0ebe0;padding:0 32px;height:56px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:0 1px 6px rgba(22,101,52,.06)}
.nav-brand{display:flex;align-items:center;gap:10px;font-weight:700;font-size:15.5px;color:#0d1f0d;letter-spacing:-.2px}
.nav-brand-icon{color:#166534;display:flex}
.nav-right{display:flex;align-items:center;gap:12px}
.nav-user{font-size:13px;color:#6b7f6b;font-weight:500}
.logout-btn{display:flex;align-items:center;gap:7px;padding:7px 16px;border:1.5px solid #dde8dd;background:#fff;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-size:13.5px;font-weight:500;color:#3a5a3a;cursor:pointer;transition:all .2s}
.logout-btn:hover{background:#f0f7f0;border-color:#b6d4b6;color:#0d1f0d}
.mgmt-subheader{background:#fff;border-bottom:1px solid #e0ebe0;padding:0 32px;height:50px;display:flex;align-items:center;gap:16px;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.back-btn{display:flex;align-items:center;gap:7px;background:none;border:none;font-family:Arial,Helvetica,sans-serif;font-size:13.5px;font-weight:500;color:#3a5a3a;cursor:pointer;padding:6px 10px;border-radius:7px;transition:background .2s,color .2s}
.back-btn:hover{background:#f0f7f0;color:#0d1f0d}
.subheader-divider{width:1px;height:20px;background:#dde8dd}
.subheader-title{font-size:15px;font-weight:700;color:#0d1f0d}

/* DASHBOARD */
.dash-root{min-height:100vh;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#0d1f0d;animation:slideUp .4s ease both}
.dash-main{max-width:1300px;margin:0 auto;padding:40px 32px 60px}
.page-title{font-family:Arial,Helvetica,sans-serif;font-size:34px;font-weight:700;color:#0d1f0d;letter-spacing:-.4px;margin-bottom:4px}
.page-sub{font-size:14px;color:#6b7f6b;font-weight:400}
.page-header{margin-bottom:32px}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}
.stat-card{background:#fff;border:1px solid #e4ede4;border-radius:14px;padding:20px 22px 18px;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:transform .2s,box-shadow .2s}
.stat-card:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(22,101,52,.1)}
.stat-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.stat-label{font-size:13px;font-weight:600;color:#6b7f6b;letter-spacing:.1px}
.stat-icon{width:34px;height:34px;border-radius:8px;background:#eef5ee;display:flex;align-items:center;justify-content:center;color:#166534}
.stat-value{font-size:36px;font-weight:700;color:#0d1f0d;line-height:1;letter-spacing:-1px;margin-bottom:4px}
.stat-sub{font-size:12.5px;color:#8aaa8a}
.section-label{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;color:#8aaa8a;margin-bottom:16px}
.modules-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.module-card{background:#fff;border:1.5px solid #e4ede4;border-radius:16px;padding:28px 24px 24px;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:transform .22s,box-shadow .22s,border-color .22s}
.module-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(22,101,52,.11);border-color:#c0dcc0}
.module-icon-wrap{width:52px;height:52px;border-radius:12px;background:linear-gradient(145deg,#e0f0e0,#eef7ee);display:flex;align-items:center;justify-content:center;color:#166534;margin-bottom:18px;box-shadow:0 2px 8px rgba(22,101,52,.1);transition:transform .2s}
.module-card:hover .module-icon-wrap{transform:scale(1.08) rotate(-3deg)}
.module-title{font-size:16px;font-weight:700;color:#0d1f0d;margin-bottom:6px;letter-spacing:-.1px}
.module-desc{font-size:13.5px;color:#7a917a;line-height:1.5;margin-bottom:22px;font-weight:400}
.manage-btn{width:100%;padding:11px 16px;background:linear-gradient(135deg,#14532d,#166534);color:#fff;border:none;border-radius:9px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 3px 12px rgba(22,101,52,.28);transition:transform .15s,box-shadow .15s;position:relative;overflow:hidden}
.manage-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 60%);pointer-events:none}
.manage-btn:hover{transform:translateY(-1px);box-shadow:0 5px 18px rgba(22,101,52,.36)}

/* MANAGE SHARED */
.mgmt-root{min-height:100vh;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#0d1f0d;animation:slideUp .35s ease both}
.mgmt-main{max-width:1300px;margin:0 auto;padding:36px 32px 60px}
.mgmt-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:16px}
.mgmt-page-title{font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:700;color:#0d1f0d;letter-spacing:-.4px;margin-bottom:4px}
.add-btn{display:flex;align-items:center;gap:8px;padding:10px 20px;background:linear-gradient(135deg,#14532d,#166534);color:#fff;border:none;border-radius:9px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 3px 12px rgba(22,101,52,.3);transition:transform .15s,box-shadow .15s}
.add-btn:hover{transform:translateY(-1px);box-shadow:0 5px 18px rgba(22,101,52,.38)}
.card-actions{display:flex;align-items:center;gap:8px}
.edit-btn{display:flex;align-items:center;gap:6px;padding:7px 14px;border:1.5px solid #dde8dd;background:#fff;border-radius:7px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:500;color:#3a5a3a;cursor:pointer;transition:all .15s}
.edit-btn:hover{background:#f0f7f0;border-color:#b0d0b0;color:#0d1f0d}
.delete-btn{display:flex;align-items:center;gap:6px;padding:7px 14px;border:1.5px solid #fde0e0;background:#fff5f5;border-radius:7px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:500;color:#c0392b;cursor:pointer;transition:all .15s}
.delete-btn:hover{background:#fdeaea;border-color:#f5b4b4}

/* PRODUCTS */
.products-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.product-card{background:#fff;border:1.5px solid #e4ede4;border-radius:14px;padding:22px;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:transform .2s,box-shadow .2s,border-color .2s}
.product-card:hover{transform:translateY(-2px);box-shadow:0 6px 22px rgba(22,101,52,.1);border-color:#c8dcc8}
.product-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.badges{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11.5px;font-weight:600;letter-spacing:.1px}
.badge-loan{background:#e6f4ec;color:#166534;border:1px solid #c0ddc8}
.badge-savings{background:#fff3e0;color:#b45309;border:1px solid #fde8b4}
.badge-featured{background:#fef9e7;color:#d97706;border:1px solid #fde68a}
.badge-fulltime{background:#166534;color:#fff;border:none;padding:4px 10px}
.badge-parttime{background:#0e4d8a;color:#fff;border:none;padding:4px 10px}
.badge-contract{background:#7c3aed;color:#fff;border:none;padding:4px 10px}
.badge-dept{background:#fff;color:#374151;border:1.5px solid #d1d5db;padding:4px 10px}
.card-icon-muted{color:#c8d8c8}
.product-name{font-size:16px;font-weight:700;color:#0d1f0d;margin-bottom:5px;letter-spacing:-.1px}
.product-desc{font-size:13px;color:#7a917a;line-height:1.5;margin-bottom:14px}
.product-rate{font-size:22px;font-weight:700;color:#166534;letter-spacing:-.5px;margin-bottom:2px}
.product-amount{font-size:12.5px;color:#8aaa8a;margin-bottom:16px}

/* BOARD */
.board-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.board-card{background:#fff;border:1.5px solid #e4ede4;border-radius:14px;padding:24px;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:transform .2s,box-shadow .2s,border-color .2s}
.board-card:hover{transform:translateY(-2px);box-shadow:0 6px 22px rgba(22,101,52,.1);border-color:#c8dcc8}
.board-avatar-wrap{width:90px;height:90px;border-radius:50%;overflow:hidden;margin-bottom:16px;border:3px solid #e4ede4;background:#f0f7f0;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.board-avatar-img{width:100%;height:100%;object-fit:cover;display:block}
.board-avatar-placeholder{color:#b0ccb0}
.board-name{font-size:15.5px;font-weight:700;color:#0d1f0d;margin-bottom:3px;letter-spacing:-.1px}
.board-role{font-size:13px;color:#6b7f6b;font-weight:500;margin-bottom:12px}
.board-bio{font-size:13px;color:#7a917a;line-height:1.55;margin-bottom:18px}

/* CAREERS */
.jobs-list{display:flex;flex-direction:column;gap:16px}
.job-card{background:#fff;border:1.5px solid #e4ede4;border-radius:14px;padding:22px 24px;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:transform .2s,box-shadow .2s,border-color .2s;display:flex;align-items:flex-start;justify-content:space-between;gap:20px}
.job-card:hover{transform:translateY(-2px);box-shadow:0 6px 22px rgba(22,101,52,.1);border-color:#c8dcc8}
.job-card-left{flex:1;min-width:0}
.job-card-top{display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap}
.job-title{font-size:17px;font-weight:700;color:#0d1f0d;margin-bottom:3px;letter-spacing:-.1px}
.job-location{font-size:13px;color:#6b7f6b;font-weight:500;margin-bottom:10px}
.job-desc{font-size:13.5px;color:#7a917a;line-height:1.55;margin-bottom:16px}
.job-meta{font-size:12px;color:#aabcaa;margin-top:10px}
.job-card-right{display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0}
.job-icon-muted{color:#c8d8c8}

/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);backdrop-filter:blur(3px);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .2s ease}
.modal{background:#fff;border-radius:16px;padding:32px;width:100%;max-width:560px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.2);animation:modalIn .3s cubic-bezier(.22,1,.36,1) both}
@keyframes modalIn{from{opacity:0;transform:scale(.95) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
.modal-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}
.modal-title{font-size:20px;font-weight:700;color:#0d1f0d;letter-spacing:-.2px}
.modal-sub{font-size:13px;color:#6b7f6b;margin-top:3px}
.modal-close{background:none;border:none;cursor:pointer;color:#8aaa8a;display:flex;padding:4px;border-radius:6px;transition:color .2s,background .2s}
.modal-close:hover{color:#0d1f0d;background:#f0f0f0}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.form-group{margin-bottom:18px}
.form-label{display:block;font-size:13px;font-weight:600;color:#2a3d2a;margin-bottom:7px;letter-spacing:.1px}
.form-hint{font-size:11.5px;color:#8aaa8a;margin-top:5px}
.form-input,.form-select,.form-textarea{width:100%;padding:10px 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1a2e1a;background:#fafafa;border:1.5px solid #dde8dd;border-radius:9px;outline:none;transition:border-color .2s,box-shadow .2s;-webkit-appearance:none}
.form-input::placeholder,.form-textarea::placeholder{color:#aebdae}
.form-input:focus,.form-select:focus,.form-textarea:focus{background:#fff;border-color:#166534;box-shadow:0 0 0 3px rgba(22,101,52,.1)}
.form-select{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7f6b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px}
.form-textarea{min-height:90px;resize:vertical;line-height:1.5}
.dyn-list{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}
.dyn-row{display:flex;align-items:center;gap:8px}
.dyn-input{flex:1;padding:9px 13px;font-family:Arial,Helvetica,sans-serif;font-size:13.5px;color:#1a2e1a;background:#fafafa;border:1.5px solid #dde8dd;border-radius:8px;outline:none;transition:border-color .2s,box-shadow .2s}
.dyn-input:focus{background:#fff;border-color:#166534;box-shadow:0 0 0 3px rgba(22,101,52,.1)}
.dyn-remove{background:none;border:none;cursor:pointer;color:#c0392b;font-size:20px;line-height:1;padding:4px 7px;border-radius:5px;transition:background .15s}
.dyn-remove:hover{background:#fff0f0}
.add-dyn-btn{display:flex;align-items:center;gap:6px;background:none;border:none;font-family:Arial,Helvetica,sans-serif;font-size:13.5px;font-weight:600;color:#166534;cursor:pointer;padding:6px 0;transition:opacity .15s}
.add-dyn-btn:hover{opacity:.75}
.checkbox-row{display:flex;align-items:center;gap:10px;margin-bottom:22px;cursor:pointer;user-select:none}
.checkbox-row input[type=checkbox]{width:17px;height:17px;accent-color:#166534;cursor:pointer}
.checkbox-label{font-size:14px;font-weight:500;color:#2a3d2a;cursor:pointer}
.modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:4px;padding-top:20px;border-top:1px solid #eef3ee}
.cancel-btn{padding:10px 20px;border:1.5px solid #dde8dd;background:#fff;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:500;color:#3a5a3a;cursor:pointer;transition:all .15s}
.cancel-btn:hover{background:#f0f7f0;border-color:#b0d0b0}
.submit-btn{padding:10px 22px;background:linear-gradient(135deg,#14532d,#166534);color:#fff;border:none;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 3px 10px rgba(22,101,52,.28);transition:transform .15s,box-shadow .15s}
.submit-btn:hover{transform:translateY(-1px);box-shadow:0 5px 16px rgba(22,101,52,.36)}
.img-preview-row{display:flex;align-items:center;gap:14px;margin-bottom:18px}
.img-preview-circle{width:60px;height:60px;border-radius:50%;overflow:hidden;border:2px solid #e4ede4;background:#f0f7f0;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.img-preview-circle img{width:100%;height:100%;object-fit:cover}
.img-preview-placeholder{color:#b0ccb0}

/* CONFIRM */
.confirm-modal{max-width:400px;text-align:center}
.confirm-emoji{font-size:40px;margin-bottom:14px}
.confirm-title{font-size:18px;font-weight:700;color:#0d1f0d;margin-bottom:8px}
.confirm-sub{font-size:14px;color:#6b7f6b;line-height:1.5;margin-bottom:24px}
.confirm-footer{display:flex;justify-content:center;gap:10px}
.danger-btn{padding:10px 22px;background:#c0392b;color:#fff;border:none;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:background .15s,transform .15s}
.danger-btn:hover{background:#a93226;transform:translateY(-1px)}

/* TOAST & SPINNER */
.toast{position:fixed;bottom:28px;right:28px;color:#fff;padding:12px 20px;border-radius:10px;font-size:14px;font-weight:500;box-shadow:0 6px 24px rgba(0,0,0,.18);animation:toastIn .3s cubic-bezier(.22,1,.36,1) both;z-index:999;display:flex;align-items:center;gap:8px}
.spinner{width:18px;height:18px;border:2.5px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite}

/* ANIMATIONS */
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes toastIn{from{opacity:0;transform:translateY(16px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes shakeAnim{0%,100%{transform:translateX(0)}15%{transform:translateX(-6px)}30%{transform:translateX(6px)}45%{transform:translateX(-4px)}60%{transform:translateX(4px)}75%{transform:translateX(-2px)}90%{transform:translateX(2px)}}
.shake{animation:shakeAnim .5s ease}

/* RESPONSIVE */
@media(max-width:1000px){.products-grid,.board-grid{grid-template-columns:repeat(2,1fr)}.stats-grid{grid-template-columns:repeat(2,1fr)}.modules-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.job-card{flex-direction:column}.job-card-right{flex-direction:row;align-items:center;width:100%}}
@media(max-width:640px){.products-grid,.board-grid,.modules-grid,.stats-grid{grid-template-columns:1fr}.dash-main,.mgmt-main{padding:24px 16px 48px}.nav,.mgmt-subheader{padding:0 16px}.form-row{grid-template-columns:1fr}}
`;

// ══════════════════════════════════════════════════════════════════════════
//  SHARED HELPERS
// ══════════════════════════════════════════════════════════════════════════
function TopNav({ user, onLogout }) {
  return (
    <nav className="nav">
      <div className="nav-brand"><span className="nav-brand-icon"><ShieldIcon size={19} /></span>Muganga SACCO Admin</div>
      <div className="nav-right">
        <span className="nav-user">👋 {user}</span>
        <button className="logout-btn" onClick={onLogout}><LogoutIcon /> Logout</button>
      </div>
    </nav>
  );
}

function SubHeader({ title, onBack }) {
  return (
    <div className="mgmt-subheader">
      <button className="back-btn" onClick={onBack}><ArrowLeftIcon /> Back to Dashboard</button>
      <div className="subheader-divider" />
      <span className="subheader-title">{title}</span>
    </div>
  );
}

function ConfirmModal({ name, onClose, onConfirm }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal confirm-modal">
        <div className="confirm-emoji">🗑️</div>
        <div className="confirm-title">Are you sure?</div>
        <div className="confirm-sub">You are about to delete <strong>{name}</strong>. This action cannot be undone.</div>
        <div className="confirm-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="danger-btn" onClick={onConfirm}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
}

function useToast() {
  const [toast, setToast] = useState(null);
  const fire = (msg, color = "#14532d") => { setToast({ msg, color }); setTimeout(() => setToast(null), 2500); };
  const Toast = toast ? <div className="toast" style={{ background: toast.color }}>{toast.msg}</div> : null;
  return [fire, Toast];
}

function DynList({ items, setItems, placeholder }) {
  const update = (i, v) => { const a = [...items]; a[i] = v; setItems(a); };
  const remove = (i) => setItems(items.filter((_, idx) => idx !== i));
  const add    = () => setItems([...items, ""]);
  return (
    <>
      <div className="dyn-list">
        {items.map((it, i) => (
          <div className="dyn-row" key={i}>
            <input className="dyn-input" placeholder={`${placeholder} ${i + 1}`} value={it} onChange={e => update(i, e.target.value)} />
            {items.length > 1 && <button className="dyn-remove" onClick={() => remove(i)}>×</button>}
          </div>
        ))}
      </div>
      <button className="add-dyn-btn" onClick={add}><PlusIcon /> Add {placeholder}</button>
    </>
  );
}

function jobTypeBadge(t) {
  if (t === "Part-time") return "badge badge-parttime";
  if (t === "Contract")  return "badge badge-contract";
  return "badge badge-fulltime";
}

// ══════════════════════════════════════════════════════════════════════════
//  LOGIN
// ══════════════════════════════════════════════════════════════════════════
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");
  const [shake,    setShake]    = useState(false);
  const triggerShake = () => { setShake(true); setTimeout(() => setShake(false), 500); };
  const handleLogin = () => {
    if (!username || !password) { setError("Please fill in all fields."); triggerShake(); return; }
    if (username === VALID_USER && password === VALID_PASS) { setLoading(true); setError(""); setTimeout(() => onLogin(username), 1200); }
    else { setError("Invalid credentials. Please try again."); triggerShake(); }
  };
  return (
    <div className="login-root">
      <div className={`login-card${shake ? " shake" : ""}`}>
        <div className="login-icon-wrap"><ShieldIcon size={32} /></div>
        <h1 className="login-title">Admin Login</h1>
        <p className="login-sub">Muganga SACCO Content Management</p>
        <div className="field-group">
          <label className="field-label">Username</label>
          <input className="field-input" type="text" placeholder="Enter username" value={username} onChange={e => { setUsername(e.target.value); setError(""); }} onKeyDown={e => e.key === "Enter" && handleLogin()} />
        </div>
        <div className="field-group">
          <label className="field-label">Password</label>
          <div className="input-wrap">
            <input className="field-input has-toggle" type={showPass ? "text" : "password"} placeholder="Enter password" value={password} onChange={e => { setPassword(e.target.value); setError(""); }} onKeyDown={e => e.key === "Enter" && handleLogin()} />
            <button className="toggle-btn" onClick={() => setShowPass(v => !v)} tabIndex={-1}><EyeIcon open={showPass} /></button>
          </div>
        </div>
        {error && <p className="error-msg"><span>⚠</span> {error}</p>}
        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? <><span className="spinner" /> Signing in…</> : "Login"}
        </button>
        <div className="hint-box" onClick={() => { setUsername("admin"); setPassword("muganga2024"); setError(""); }}>
          <p className="hint-label">Default credentials — click to autofill</p>
          <div className="hint-row"><span className="hint-key">Username:</span> <strong>admin</strong></div>
          <div className="hint-row"><span className="hint-key">Password:</span> <strong>muganga2024</strong></div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE PRODUCTS
// ══════════════════════════════════════════════════════════════════════════
function ProductModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial ? { ...initial, features: [...(initial.features || [])] } : { type: "Loan", name: "", desc: "", rate: "", amount: "", features: ["", "", ""], featured: false });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const setFeat = (i, v) => setForm(f => { const a = [...f.features]; a[i] = v; return { ...f, features: a }; });
  const addFeat = () => setForm(f => ({ ...f, features: [...f.features, ""] }));
  const remFeat = i => setForm(f => ({ ...f, features: f.features.filter((_, idx) => idx !== i) }));
  const handleSave = () => { if (!form.name.trim() || !form.rate.trim() || !form.amount.trim()) return; onSave({ ...form, features: form.features.filter(f => f.trim()) }); };
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Product" : "Add New Product"}</div><div className="modal-sub">Fill in the product details below</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="form-group"><label className="form-label">Product Type</label><select className="form-select" value={form.type} onChange={e => set("type", e.target.value)}><option value="Loan">Loan</option><option value="Savings">Savings</option></select></div>
        <div className="form-group"><label className="form-label">Product Name</label><input className="form-input" placeholder="e.g., Business Loans" value={form.name} onChange={e => set("name", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Brief description of the product" value={form.desc} onChange={e => set("desc", e.target.value)} /></div>
        <div className="form-row">
          <div className="form-group"><label className="form-label">Interest Rate</label><input className="form-input" placeholder="e.g., 12%" value={form.rate} onChange={e => set("rate", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Max Amount</label><input className="form-input" placeholder="e.g., Up to RWF 50M" value={form.amount} onChange={e => set("amount", e.target.value)} /></div>
        </div>
        <div className="form-group"><label className="form-label">Features</label>
          <div className="dyn-list">{form.features.map((f, i) => (<div className="dyn-row" key={i}><input className="dyn-input" placeholder={`Feature ${i + 1}`} value={f} onChange={e => setFeat(i, e.target.value)} />{form.features.length > 1 && <button className="dyn-remove" onClick={() => remFeat(i)}>×</button>}</div>))}</div>
          <button className="add-dyn-btn" onClick={addFeat}><PlusIcon /> Add Feature</button>
        </div>
        <label className="checkbox-row"><input type="checkbox" checked={form.featured} onChange={e => set("featured", e.target.checked)} /><span className="checkbox-label">Mark as Featured</span></label>
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Create Product"}</button></div>
      </div>
    </div>
  );
}

function ManageProducts({ user, onBack, onLogout }) {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();
  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Products" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header"><div><h1 className="mgmt-page-title">Products</h1><p className="page-sub">Manage loan and savings products</p></div><button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Product</button></div>
        <div className="products-grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-card-top"><div className="badges"><span className={`badge ${p.type === "Loan" ? "badge-loan" : "badge-savings"}`}>{p.type}</span>{p.featured && <span className="badge badge-featured">Featured</span>}</div><span className="card-icon-muted"><BoxIcon size={18} /></span></div>
              <div className="product-name">{p.name}</div><div className="product-desc">{p.desc}</div>
              <div className="product-rate">{p.rate}</div><div className="product-amount">{p.amount}</div>
              <div className="card-actions"><button className="edit-btn" onClick={() => setEditing(p)}><EditIcon /> Edit</button><button className="delete-btn" onClick={() => setDeleting(p)}><TrashIcon /> Delete</button></div>
            </div>
          ))}
        </div>
      </main>
      {showAdd  && <ProductModal onClose={() => setShowAdd(false)} onSave={d => { setProducts(p => [...p, { ...d, id: Date.now() }]); setShowAdd(false); fire("✓ Product created!"); }} />}
      {editing  && <ProductModal initial={editing} onClose={() => setEditing(null)} onSave={d => { setProducts(p => p.map(x => x.id === editing.id ? { ...x, ...d } : x)); setEditing(null); fire("✓ Product updated!"); }} />}
      {deleting && <ConfirmModal name={deleting.name} onClose={() => setDeleting(null)} onConfirm={() => { setProducts(p => p.filter(x => x.id !== deleting.id)); setDeleting(null); fire("Product deleted.", "#c0392b"); }} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE BOARD MEMBERS
// ══════════════════════════════════════════════════════════════════════════
function BoardMemberModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial ? { ...initial } : { name: "", role: "", image: "", bio: "" });
  const [imgError, setImgError] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = () => { if (!form.name.trim() || !form.role.trim()) return; onSave({ ...form }); };
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Board Member" : "Add New Board Member"}</div><div className="modal-sub">Fill in the board member details below</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="img-preview-row">
          <div className="img-preview-circle">
            {form.image && !imgError ? <img src={form.image} alt="preview" onError={() => setImgError(true)} /> : <span className="img-preview-placeholder"><UserCircleIcon size={36} /></span>}
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label">Image URL</label>
            <input className="form-input" placeholder="/path/to/image.jpg" value={form.image} onChange={e => { set("image", e.target.value); setImgError(false); }} />
            <p className="form-hint">Enter the path to the member's photo</p>
          </div>
        </div>
        <div className="form-group"><label className="form-label">Full Name</label><input className="form-input" placeholder="Dr. John Doe" value={form.name} onChange={e => set("name", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Role / Position</label><input className="form-input" placeholder="Board Chairperson" value={form.role} onChange={e => set("role", e.target.value)} /></div>
        <div className="form-group"><label className="form-label">Biography</label><textarea className="form-textarea" placeholder="Brief biography and qualifications" value={form.bio} onChange={e => set("bio", e.target.value)} /></div>
        <div className="modal-footer"><button className="cancel-btn" onClick={onClose}>Cancel</button><button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Add Member"}</button></div>
      </div>
    </div>
  );
}

function ManageBoard({ user, onBack, onLogout }) {
  const [members, setMembers] = useState(INITIAL_BOARD);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();
  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Board Members" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header"><div><h1 className="mgmt-page-title">Board Members</h1><p className="page-sub">Manage board member profiles</p></div><button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Member</button></div>
        <div className="board-grid">
          {members.map(m => (
            <div className="board-card" key={m.id}>
              <div className="board-avatar-wrap">
                {m.image ? <img className="board-avatar-img" src={m.image} alt={m.name} onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} /> : null}
                <span className="board-avatar-placeholder" style={{ display: m.image ? "none" : "flex" }}><UserCircleIcon size={50} /></span>
              </div>
              <div className="board-name">{m.name}</div><div className="board-role">{m.role}</div><div className="board-bio">{m.bio}</div>
              <div className="card-actions"><button className="edit-btn" onClick={() => setEditing(m)}><EditIcon /> Edit</button><button className="delete-btn" onClick={() => setDeleting(m)}><TrashIcon /> Delete</button></div>
            </div>
          ))}
        </div>
      </main>
      {showAdd  && <BoardMemberModal onClose={() => setShowAdd(false)} onSave={d => { setMembers(m => [...m, { ...d, id: Date.now() }]); setShowAdd(false); fire("✓ Board member added!"); }} />}
      {editing  && <BoardMemberModal initial={editing} onClose={() => setEditing(null)} onSave={d => { setMembers(m => m.map(x => x.id === editing.id ? { ...x, ...d } : x)); setEditing(null); fire("✓ Member updated!"); }} />}
      {deleting && <ConfirmModal name={deleting.name} onClose={() => setDeleting(null)} onConfirm={() => { setMembers(m => m.filter(x => x.id !== deleting.id)); setDeleting(null); fire("Member deleted.", "#c0392b"); }} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  MANAGE CAREERS
// ══════════════════════════════════════════════════════════════════════════
function JobModal({ initial, onClose, onSave }) {
  const isEdit = !!initial;
  const [form, setForm] = useState(initial
    ? { ...initial, responsibilities: [...(initial.responsibilities || ["", ""])], requirements: [...(initial.requirements || ["", ""])] }
    : { title: "", department: "", location: "", type: "Full-time", desc: "", responsibilities: ["", ""], requirements: ["", ""], postedDate: today }
  );
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSave = () => { if (!form.title.trim() || !form.department.trim()) return; onSave({ ...form, responsibilities: form.responsibilities.filter(r => r.trim()), requirements: form.requirements.filter(r => r.trim()) }); };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div><div className="modal-title">{isEdit ? "Edit Job Posting" : "Add New Job Posting"}</div><div className="modal-sub">Fill in the job details below</div></div>
          <button className="modal-close" onClick={onClose}><CloseIcon /></button>
        </div>

        <div className="form-group"><label className="form-label">Job Title</label><input className="form-input" placeholder="e.g., Loan Officer" value={form.title} onChange={e => set("title", e.target.value)} /></div>

        <div className="form-row">
          <div className="form-group"><label className="form-label">Department</label><input className="form-input" placeholder="e.g., Credit Department" value={form.department} onChange={e => set("department", e.target.value)} /></div>
          <div className="form-group"><label className="form-label">Location</label><input className="form-input" placeholder="e.g., Kigali" value={form.location} onChange={e => set("location", e.target.value)} /></div>
        </div>

        <div className="form-group">
          <label className="form-label">Job Type</label>
          <select className="form-select" value={form.type} onChange={e => set("type", e.target.value)}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="form-group"><label className="form-label">Description</label><textarea className="form-textarea" placeholder="Brief job description" value={form.desc} onChange={e => set("desc", e.target.value)} /></div>

        <div className="form-group">
          <label className="form-label">Responsibilities</label>
          <DynList items={form.responsibilities} setItems={v => set("responsibilities", v)} placeholder="Responsibility" />
        </div>

        <div className="form-group">
          <label className="form-label">Requirements</label>
          <DynList items={form.requirements} setItems={v => set("requirements", v)} placeholder="Requirement" />
        </div>

        <div className="form-group"><label className="form-label">Posted Date</label><input className="form-input" type="date" value={form.postedDate} onChange={e => set("postedDate", e.target.value)} /></div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn" onClick={handleSave}>{isEdit ? "Save Changes" : "Create Job"}</button>
        </div>
      </div>
    </div>
  );
}

function ManageCareers({ user, onBack, onLogout }) {
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [fire, Toast] = useToast();

  const fmtDate = d => { if (!d) return ""; const [y, m, day] = d.split("-"); return `${day}/${m}/${y}`; };

  return (
    <div className="mgmt-root">
      <TopNav user={user} onLogout={onLogout} /><SubHeader title="Manage Careers" onBack={onBack} />
      <main className="mgmt-main">
        <div className="mgmt-header">
          <div><h1 className="mgmt-page-title">Job Openings</h1><p className="page-sub">Manage career opportunities</p></div>
          <button className="add-btn" onClick={() => setShowAdd(true)}><PlusIcon /> Add Job</button>
        </div>

        <div className="jobs-list">
          {jobs.map(j => (
            <div className="job-card" key={j.id}>
              <div className="job-card-left">
                <div className="job-card-top">
                  <span className={jobTypeBadge(j.type)}>{j.type}</span>
                  <span className="badge badge-dept">{j.department}</span>
                </div>
                <div className="job-title">{j.title}</div>
                <div className="job-location">{j.location}</div>
                <div className="job-desc">{j.desc}</div>
                <div className="card-actions">
                  <button className="edit-btn" onClick={() => setEditing(j)}><EditIcon /> Edit</button>
                  <button className="delete-btn" onClick={() => setDeleting(j)}><TrashIcon /> Delete</button>
                </div>
                {j.postedDate && <div className="job-meta">Posted: {fmtDate(j.postedDate)}</div>}
              </div>
              <div className="job-card-right">
                <span className="job-icon-muted"><BriefcaseIcon size={20} /></span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showAdd  && <JobModal onClose={() => setShowAdd(false)} onSave={d => { setJobs(j => [...j, { ...d, id: Date.now() }]); setShowAdd(false); fire("✓ Job posting created!"); }} />}
      {editing  && <JobModal initial={editing} onClose={() => setEditing(null)} onSave={d => { setJobs(j => j.map(x => x.id === editing.id ? { ...x, ...d } : x)); setEditing(null); fire("✓ Job posting updated!"); }} />}
      {deleting && <ConfirmModal name={deleting.title} onClose={() => setDeleting(null)} onConfirm={() => { setJobs(j => j.filter(x => x.id !== deleting.id)); setDeleting(null); fire("Job posting deleted.", "#c0392b"); }} />}
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════════════════════════
const DASH_STATS = [
  { label: "Total Products", value: 9, sub: "6 loans, 3 savings", icon: <BoxIcon size={18} /> },
  { label: "Board Members",  value: 9, sub: "Active members",     icon: <UsersIcon size={18} /> },
  { label: "Job Openings",   value: 3, sub: "Active positions",   icon: <BriefcaseIcon size={18} /> },
  { label: "News Articles",  value: 6, sub: "Published articles", icon: <NewsIcon size={18} /> },
];
const DASH_MODULES = [
  { id: "products", icon: <BoxIcon />,       title: "Products",       desc: "Manage loan and savings products",  btn: "Manage Products", page: "products" },
  { id: "board",    icon: <UsersIcon />,     title: "Board Members",  desc: "Update board member profiles",      btn: "Manage Board",    page: "board"    },
  { id: "careers",  icon: <BriefcaseIcon />, title: "Careers",        desc: "Post and manage job openings",      btn: "Manage Careers",  page: "careers"  },
  { id: "news",     icon: <NewsIcon />,      title: "News & Updates", desc: "Publish news and announcements",    btn: "Manage News",     page: null       },
  { id: "trends",   icon: <TrendIcon />,     title: "Trends & Stats", desc: "Update financial indicators",       btn: "Manage Trends",   page: null       },
  { id: "videos",   icon: <VideoIcon />,     title: "Video Guides",   desc: "Manage tutorial videos for users",  btn: "Manage Guides",   page: null       },
  { id: "settings", icon: <SettingsIcon />,  title: "Settings",       desc: "Configure website settings",        btn: "Manage Settings", page: null       },
];

function Dashboard({ user, onLogout, onNavigate }) {
  const [fire, Toast] = useToast();
  return (
    <div className="dash-root">
      <TopNav user={user} onLogout={onLogout} />
      <main className="dash-main">
        <div className="page-header"><h1 className="page-title">Dashboard</h1><p className="page-sub">Manage your website content and settings</p></div>
        <div className="stats-grid">
          {DASH_STATS.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-header"><span className="stat-label">{s.label}</span><div className="stat-icon">{s.icon}</div></div>
              <div className="stat-value">{s.value}</div><div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="section-label">Content Modules</p>
        <div className="modules-grid">
          {DASH_MODULES.map(m => (
            <div className="module-card" key={m.id}>
              <div className="module-icon-wrap">{m.icon}</div>
              <div className="module-title">{m.title}</div>
              <div className="module-desc">{m.desc}</div>
              <button className="manage-btn" onClick={() => m.page ? onNavigate(m.page) : fire(`Opening ${m.title}…`)}>{m.btn}</button>
            </div>
          ))}
        </div>
      </main>
      {Toast}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
//  ROOT
// ══════════════════════════════════════════════════════════════════════════
export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");
  const handleLogout = () => { setUser(null); setPage("dashboard"); };
  const back = () => setPage("dashboard");

  return (
    <>
      <style>{STYLES}</style>
      {!user                     && <LoginPage      onLogin={u => setUser(u)} />}
      {user && page==="dashboard" && <Dashboard      user={user} onLogout={handleLogout} onNavigate={setPage} />}
      {user && page==="products"  && <ManageProducts user={user} onBack={back} onLogout={handleLogout} />}
      {user && page==="board"     && <ManageBoard    user={user} onBack={back} onLogout={handleLogout} />}
      {user && page==="careers"   && <ManageCareers  user={user} onBack={back} onLogout={handleLogout} />}
    </>
  );
}
