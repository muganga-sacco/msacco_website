import { Percent, MapPinned, Smartphone, Zap, TrendingUp, Users, Shield, Briefcase, Home, AlertCircle, Phone, Mail } from 'lucide-react';

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Leadership", href: "/board" },
      { label: "Profile", href: "/about" },
      { label: "Contact us", href: "/contactus" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Membership", href: "/membership" },
  { 
    label: "Digital Services", 
    children: [
      { label: "Digital Platforms", href: "/digital" },
      { label: "Guides", href: "/guides" },
    ],

  },
  { label: "Forms", href: "/forms" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

export const FEATURES = [
  { icon: <Percent size={20} />, title: "Lowest Interest Rates", desc: "Competitive loan rates starting at 10% — the most affordable in the market for our members." },
  { icon: <Smartphone size={20} />, title: "Digital Banking", desc: "Access your account anytime, anywhere with our mobile app and internet banking platform." },
  { icon: <Zap size={20} />, title: "Fast Approval", desc: "Get loan decisions within 24 hours with our streamlined application process." },
  { icon: <TrendingUp size={20} />, title: "Competitive Returns", desc: "Earn attractive interest on your savings with our flexible savings accounts." },
  { icon: <Users size={20} />, title: "Community Support", desc: "Join a community of members working together towards financial stability." },
  { icon: <Shield size={20} />, title: "Secure & Regulated", desc: "Your deposits are safe with full regulatory compliance and transparent operations." },
];

export const STATS = [
  { value: "12,000+", label: "Active Members" },
  { value: "10%", label: "Interest Rate" },
  { value: "24/7", label: "Digital Access" },
  { value: "24h", label: "Loan Approval" },
];

export const LOAN_PRODUCTS = [
  { name: "Business Loan", rate: "14% p.a.", term: "Up to 5 years", icon: <Briefcase size={18} /> },
  { name: "Housing Loan", rate: "10% p.a.", term: "Up to 15 years", icon: <Home size={18} /> },
  { name: "Emergency Loan", rate: "16% p.a.", term: "Quick approval", icon: <AlertCircle size={18} /> },
];

export const SAVINGS_BREAKDOWN = [
  { label: "Voluntary Savings", pct: 72, color: "#246d36" },
  { label: "Fixed Deposit",     pct: 45, color: "#e65520d7" },
  { label: "Education Savings", pct: 28, color: "#111"    },
];

export const FOOTER_QUICK_LINKS = [
  {text :"Products", href:"/products"}, 
  {text:"Board Members", href:"/board"},
  {text:"Careers", href:"/careers"},
  {text: "News/Tenders", href:"/news"}, 
];

export const FOOTER_SERVICES    = [
  {text: "Digital Services", href:"/digital"},
  {text: "Internet Banking" , href:"https://ibank.mugangasacco.rw/"}, 
  { text: "Support Platform", href: "https://support.mugangasacco.rw/"},
  {text:"Video Guides", href:"/guides"},
  {text: "Help" , href:"/contactus"}
];

export const CONTACT_INFO = [
  { icon: <MapPinned size={16} />, text: "Kigali, Rwanda" },
  { icon: <Phone size={16} />, text: "+250788124500" },
  { icon: <Mail size={16} />, text: "customerservice@mugangasacco.rw" },
  { icon: <Mail size={16} />, text: "info@mugangasacco.rw" },
];

export const IMPORTANT_INFO = [
  { text: "Consumer Empowerment", href : "/ConsumerEmpowerment" },
  { text: "Report Fraud/Corruption", href: "/reportfraud"},
  { text: "Terms and Condition", href : "/terms" },
  { text: "Tariff", href : "/tariff"},
  { text: "Suggestion Box", href:"/suggestion"},
  { text: "Customer service charter", href:"https://mugangasacco.rw/wp-content/uploads/2024/08/MUGANGA-SACCO-CUSTOMER-SERVICE-CHARTER-FROM-2024-Approved-Published.pdf" },
];
