import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home, Briefcase, PlusCircle, Globe, Smartphone, CreditCard,
  ArrowRight, CheckCircle2, TrendingUp,
  Users, Shield, Clock, Percent, Phone, Download, MonitorSmartphone,
  Play,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// ── Brand tokens ──────────────────────────────────────────────
const G  = "#1a5c2a";
const O  = "#e8622a";
const LG = "#f0f7f2";

// ── Quick-action cards ────────────────────────────────────────
const QUICK = [
  { icon: <MonitorSmartphone size={40} strokeWidth={1.5} color={G} />, title: "Install Mobile App",  sub: "Bank and manage your account on the go.", path: "/digital" },
  { icon: <Download           size={40} strokeWidth={1.5} color={G} />, title: "Download Forms",      sub: "Access important documents anytime.", path: "/forms" },
  { icon: <Phone              size={40} strokeWidth={1.5} color={G} />, title: "Contact Us",          sub: "Get help from our friendly team.", path: "/contactus" },
];

// ── Loan products ─────────────────────────────────────────────
const LOANS = [
  { icon: <Home      size={28} strokeWidth={1.5} color="white" />, label: "Housing Loan",   sub: "Up to 15 years", rate: "10%" },
  { icon: <Briefcase size={28} strokeWidth={1.5} color="white" />, label: "Business Loan",  sub: "Up to 15 years", rate: "14%" },
  { icon: <PlusCircle size={28} strokeWidth={1.5} color="white" />, label: "Emergency Loan", sub: "Quick approval",  rate: "16%" },
];

// ── Savings options ───────────────────────────────────────────
const SAVINGS = [
  { title: "Voluntary Savings",  sub: "Save regularly at your own pace" },
  { title: "Term deposit",      sub: "Saving for a period of time and get your saving with interest" },
  { title: "Compursory Savings",     sub: "Save 5% of your salary for your better future." },
];

// ── Digital services ──────────────────────────────────────────
const DIGITAL = [
  { icon: <Globe              size={36} strokeWidth={1.5} color={G} />, label: "Internet Banking" },
  { icon: <Smartphone         size={36} strokeWidth={1.5} color={G} />, label: "Mobile-USSD" },
  { icon: <MonitorSmartphone  size={36} strokeWidth={1.5} color={G} />, label: "Mobile app" },
  { icon: <CreditCard         size={36} strokeWidth={1.5} color={G} />, label: "Debit Card" },
];

// ── Why choose ────────────────────────────────────────────────
const WHY = [
  { icon: <Percent    size={30} strokeWidth={1.5} color={G} />, title: "Lowest Interest Rates",  sub: "Competitive and fair rates tailored for healthcare professionals." },
  { icon: <TrendingUp size={30} strokeWidth={1.5} color={G} />, title: "Competitive Returns",    sub: "Earn attractive returns on savings with our flexible savings accounts." },
  { icon: <Globe      size={30} strokeWidth={1.5} color={G} />, title: "Digital Banking",        sub: "Access your account anytime, anywhere with our secure platforms." },
  { icon: <Users      size={30} strokeWidth={1.5} color={G} />, title: "Community Support",      sub: "Together we build financial wellbeing for Rwanda's healthcare community." },
  { icon: <Clock      size={30} strokeWidth={1.5} color={G} />, title: "Fast Approval",          sub: "Get loan decisions within appropriate period." },
  { icon: <Shield     size={30} strokeWidth={1.5} color={G} />, title: "Secure & Regulated",     sub: "Licensed and regulated by BNR to ensure your funds are safe." },
];

// ── Trust & compliance ────────────────────────────────────────

// ── Video guides ──────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────

function TwitterTimeline() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.twttr) {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.onload = () => window.twttr && window.twttr.widgets.load();
      document.body.appendChild(s);
    }
  }, []);
  return (
    <div ref={ref}>
      <a className="twitter-timeline" data-height="400" data-chrome="noheader nofooter noborders noscrollbar transparent" href="https://twitter.com/mugangasaccorw">Tweets by Muganga SACCO</a>
    </div>
  );
}

export default function HomePage(){
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const SLIDES = [
    { title: "Financial Freedom", text: "At Muganga SACCO, we believe in empowering healthcare professionals with accessible financial solutions. Our tailored loan products help you achieve your goals while maintaining financial stability." },
    { title: "Grow Your Savings", text: "Build a secure financial future with our competitive savings accounts. Enjoy flexible deposit options, attractive interest rates, and the peace of mind that comes with knowing your money is working for you." },
    { title: "Digital Banking", text: "Access your accounts anytime, anywhere through our secure digital platforms. From mobile banking to online transfers, manage your finances with just a few taps on your device." },
    { title: "Community First", text: "Join a community of over 10,000 healthcare professionals who trust Muganga SACCO. Together, we build financial wellbeing and support the growth of Rwanda's healthcare sector." },
    { title: "Fast & Transparent", text: "Experience quick loan approvals with transparent terms and no hidden fees. Our streamlined process ensures you get the funds you need when you need them most." },
  ];

  useEffect(() => {
    const t = setInterval(() => setSlideIdx(i => (i + 1) % SLIDES.length), 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/guides?limit=10`)
      .then(r => r.json())
      .then(res => { if (res.success) setVideos(res.data || []); })
      .catch(() => {});
  }, []);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a1a", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:460, background:"white", overflow:"hidden" }}>
        {/* Left */}
        <div style={{ padding:"60px 40px 60px 60px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <CheckCircle2 size={18} color={G}/>
            <span style={{ fontSize:13, color:"#555" }}>Trusted by 10,000+ healthcare professionals</span>
          </div>
          <h1 style={{ fontSize:42, fontWeight:800, lineHeight:1.2, margin:"0 0 12px" }}>
            Empowering Healthcare<br/>Professionals to<br/>
            <span style={{ color:G }}>Dream </span>
            <span style={{ color:"#1a1a1a" }}>and </span>
            <span style={{ color:O }}>Achieve</span>
          </h1>
          <p style={{ color:"#555", fontSize:15, lineHeight:1.7, margin:"0 0 28px", maxWidth:420 }}>
            Access affordable loans, competitive savings, and digital financial solutions designed specifically for Rwanda's healthcare community.
          </p>
          <div style={{ display:"flex", gap:14 }}>
            <button style={{ display:"flex", alignItems:"center", gap:8, background:G, color:"white", border:"none", borderRadius:8, padding:"13px 24px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
              Explore Products <ArrowRight size={16}/>
            </button>
            <button style={{ display:"flex", alignItems:"center", gap:8, background:"white", color:G, border:`1.5px solid ${G}`, borderRadius:8, padding:"13px 24px", fontWeight:600, fontSize:14, cursor:"pointer" }}>
              Open an Account <ArrowRight size={16}/>
            </button>
          </div>
        </div>

        {/* Right — hero video */}
        <div style={{ position:"relative", width:"100%", height:"100%", overflow:"hidden" }}>
          <video src="/videosacco.mp4" autoPlay muted loop playsInline style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", position:"absolute", inset:0 }} />
          <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,.45)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
            <div style={{ position:"relative", width:"100%", maxWidth:360, textAlign:"center", padding:"0 24px" }}>
              {SLIDES.map((s, i) => (
                <div key={i} style={{ position:"absolute", left:0, right:0, top:"50%", transform:"translateY(-50%)", transition:"opacity .6s ease", opacity: i === slideIdx ? 1 : 0 }}>
                  <div style={{ color:"white", fontSize:34, fontWeight:700, marginBottom:16 }}>{s.title}</div>
                  <div style={{ color:"rgba(255,255,255,.85)", fontSize:18, lineHeight:1.8 }}>{s.text}</div>
                </div>
              ))}
            </div>
            <div style={{ position:"absolute", bottom:16, left:"50%", transform:"translateX(-50%)", display:"flex", gap:6 }}>
              {SLIDES.map((_, i) => (
                <div key={i} style={{ width: i===slideIdx?20:8, height:8, borderRadius:4, background: i===slideIdx?"white":"rgba(255,255,255,.4)", transition:"width .3s" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section style={{ background:"#f8faf8", padding:"30px 60px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {QUICK.map(({icon,title,sub,path})=>(
            <div key={title} onClick={() => navigate(path)}
              onMouseEnter={() => setHovered(title)} onMouseLeave={() => setHovered(null)}
              style={{ background:"white", borderRadius:12, padding:"22px 24px", display:"flex", alignItems:"center", gap:18, boxShadow:hovered===title?"0 4px 20px rgba(0,0,0,.12)":"0 2px 10px rgba(0,0,0,.06)", transform:hovered===title?"translateY(-2px)":"none", transition:"all .2s ease", cursor:"pointer" }}>
              <div style={{ flexShrink:0 }}>{icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:15 }}>{title}</div>
                <div style={{ color:"#666", fontSize:13, marginTop:3 }}>{sub}</div>
              </div>
              <button style={{ width:36, height:36, borderRadius:"50%", background:G, border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", flexShrink:0 }}>
                <ArrowRight size={16} color="white"/>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOANS + SMART SAVINGS + SAVINGS OPTIONS ── */}
      <section style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr 1fr", gap:0, padding:"50px 60px", background:"white", alignItems:"start" }}>

        {/* Featured Loan Products */}
        <div style={{ background:G, borderRadius:16, padding:"28px 24px", color:"white" }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:2, marginBottom:20, opacity:.8 }}>FEATURED LOAN PRODUCTS</div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {LOANS.map(({icon,label,sub,rate})=>(
              <div key={label} style={{ display:"flex", alignItems:"center", gap:14, background:"rgba(255,255,255,.1)", borderRadius:10, padding:"14px 16px" }}>
                <div style={{ width:48, height:48, borderRadius:"50%", border:"2px solid rgba(255,255,255,.4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:14 }}>{label}</div>
                  <div style={{ fontSize:12, opacity:.75 }}>{sub}</div>
                </div>
                <div style={{ background:O, borderRadius:8, padding:"6px 12px", fontWeight:800, fontSize:13, whiteSpace:"nowrap" }}>{rate} p.a.</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:18, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
            {["Flexible repayment","No hidden charges"].map(t=>(
              <div key={t} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, opacity:.85 }}>
                <CheckCircle2 size={13}/> {t}
              </div>
            ))}
            <button onClick={() => navigate("/products")} style={{ background:O, color:"white", border:"none", borderRadius:6, padding:"6px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>View all loan products</button>
          </div>
        </div>

        {/* Build Your Future */}
        <div style={{ padding:"0 40px" }}>
          <h2 style={{ fontSize:28, fontWeight:800, lineHeight:1.3, marginBottom:14 }}>Build Your Future with<br/>Smart Savings</h2>
          <p style={{ color:"#555", fontSize:14, lineHeight:1.7, marginBottom:20 }}>
            Start saving today and earn competitive interest rates on your deposits. Our accounts give you the flexibility to save at your own pace while building financial stability.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
            {["Competitive interest rates on savings","No minimum balance requirements","Flexible withdrawal options"].map(t=>(
              <div key={t} style={{ display:"flex", alignItems:"center", gap:10, fontSize:14 }}>
                <CheckCircle2 size={18} color={G}/> {t}
              </div>
            ))}
          </div>
          <button style={{ display:"flex", alignItems:"center", gap:8, background:G, color:"white", border:"none", borderRadius:8, padding:"13px 24px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
            Open Savings Account <ArrowRight size={16}/>
          </button>
        </div>

        {/* Savings Options */}
        <div>
          <h3 style={{ fontSize:22, fontWeight:800, marginBottom:20 }}>Savings Options for<br/>your Future</h3>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {SAVINGS.map(({title,sub})=>(
              <div key={title} style={{ borderLeft:`3px solid ${G}`, paddingLeft:14 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>{title}</div>
                <div style={{ color:"#666", fontSize:13, marginTop:2 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIGITAL SERVICES ── */}
      <section style={{ background:LG, padding:"50px 60px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:40, alignItems:"center" }}>
          <div>
            <h2 style={{ fontSize:26, fontWeight:800, marginBottom:10 }}>Access Services Digitally</h2>
            <p style={{ color:"#555", fontSize:14, lineHeight:1.7, marginBottom:14 }}>Manage your account securely from anywhere.<br/>Fast, simple and always within reach.</p>
            <a href="#" style={{ color:G, fontWeight:700, fontSize:14, textDecoration:"none", display:"flex", alignItems:"center", gap:6 }}>
              Explore digital services <ArrowRight size={15}/>
            </a>
          </div>
          <div style={{ display:"flex", justifyContent:"space-around", alignItems:"center" }}>
            {DIGITAL.map(({icon,label})=>(
              <div key={label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
                <div style={{ width:64, height:64, borderRadius:16, background:"white", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 3px 12px rgba(0,0,0,.1)" }}>
                  {icon}
                </div>
                <span style={{ fontSize:13, fontWeight:600, color:"#333" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section style={{ background:"white", padding:"60px 60px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:40 }}>
          <div>
            <h2 style={{ fontSize:30, fontWeight:800, lineHeight:1.3 }}>Why Choose<br/>Muganga SACCO?</h2>
            <div style={{ width:40, height:4, background:G, borderRadius:2, marginTop:12 }}/>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:28 }}>
            {WHY.map(({icon,title,sub})=>(
              <div key={title}>
                <div style={{ width:52, height:52, borderRadius:12, background:LG, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12 }}>{icon}</div>
                <div style={{ fontWeight:700, fontSize:14, marginBottom:5 }}>{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY + TRUST + VIDEOS + TWITTER ── */}
      <section style={{ background:"#f8faf8", padding:"40px 60px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr 1fr", gap:20 }}>

          {/* Serving Rwanda */}
          <div>
            <h3 style={{ fontSize:20, fontWeight:800, marginBottom:14 }}>Serving Rwanda's<br/>Healthcare Community</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:16 }}>
              {["Solutions designed specifically for healthcare professionals","Understand your unique financial needs","Supporting your growth and wellbeing","Building a stronger healthcare community together"].map(t=>(
                <div key={t} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:13, color:"#444" }}>
                  <CheckCircle2 size={15} color={G} style={{marginTop:2, flexShrink:0}}/> {t}
                </div>
              ))}
            </div>
            <p style={{ color:"#555", fontSize:13, lineHeight:1.6 }}>Join thousands of healthcare professionals who trust Muganga SACCO for their financial journey.</p>
          </div>

          {/* Provider Image */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <img src="/provider-Circle.png" alt="Provider" style={{ width:288, height:288, objectFit:"contain" }} />
          </div>

          {/* Video Guides */}
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
              <h3 style={{ fontSize:20, fontWeight:800 }}>Video Guides</h3>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <a href="#" style={{ color:G, fontSize:13, fontWeight:600, textDecoration:"none", display:"flex", alignItems:"center", gap:4 }}>View all guides <ArrowRight size={14}/></a>
            </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {videos.map(v => (
                <div key={v.id} onClick={() => v.video_url && window.open(v.video_url, "_blank")} style={{ display:"flex", alignItems:"center", gap:12, background:"white", borderRadius:10, padding:"10px 14px", boxShadow:"0 1px 6px rgba(0,0,0,.07)", cursor:v.video_url?"pointer":"default" }}>
                  <div style={{ position:"relative", width:60, height:40, borderRadius:6, background:"#1a1a1a", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Play size={18} color="white" fill="white"/>
                    {v.duration && <span style={{ position:"absolute", bottom:3, right:4, color:"white", fontSize:10, fontWeight:700 }}>{v.duration}</span>}
                  </div>
                  <div>
                    <div style={{ fontWeight:600, fontSize:13 }}>{v.title}</div>
                    <div style={{ color:"#888", fontSize:11, marginTop:2 }}>Watch on YouTube</div>
                  </div>
                </div>
              ))}
              {!videos.length && <p style={{ color:"#888", fontSize:13, textAlign:"center", padding:"20px 0" }}>No guides available</p>}
            </div>
          </div>

          {/* Twitter Feed */}
          <div>
            <h3 style={{ fontSize:20, fontWeight:800, marginBottom:14 }}>X Feed</h3>
            <div style={{ background:"white", borderRadius:10, padding:10, boxShadow:"0 1px 6px rgba(0,0,0,.07)" }}>
              <TwitterTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background:G, padding:"40px 60px", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:20 }}>
          <Users size={48} color="white" strokeWidth={1.2}/>
          <div>
            <div style={{ color:"white", fontWeight:800, fontSize:20 }}>Ready to take the next step?</div>
            <div style={{ color:"rgba(255,255,255,.8)", fontSize:14, marginTop:4 }}>Whether you need a loan, want to save, or have questions, we're here to help you achieve your financial goals.</div>
          </div>
        </div>
        <div style={{ display:"flex", gap:14 }}>
          <button style={{ background:"white", color:G, border:"none", borderRadius:8, padding:"13px 28px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
            Become a Member
          </button>
          <button style={{ background:O, color:"white", border:"none", borderRadius:8, padding:"13px 28px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
            Apply for a Loan
          </button>
        </div>
      </section>

    </div>
  );
}
