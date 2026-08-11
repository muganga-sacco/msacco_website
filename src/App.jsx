import "./styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import LoansSection from "./components/sections/LoansSection";
import SavingsSection from "./components/sections/SavingsSection";
import CTASection from "./components/sections/CTASection";
import AdminPanel from "./components/Pages/AdminPanel";
import Board from "./components/Pages/board";
import Products from "./components/Pages/products";
import Careers from "./components/Pages/careers";
import CareerApply from "./components/Pages/CareerApply";
import News from "./components/Pages/news";
import Forms from "./components/Pages/forms";
import Digital from "./components/Pages/digital";
import Guides from "./components/Pages/guides";
import About from "./components/Pages/About";
import ContactPage from "./components/Pages/ContactPage"
import ConsumerEmpowerment from "./components/Pages/ConsumerEmpowerment";
import ReportingFraud from "./components/Pages/reportfraud";
import SuggestionBox from "./components/Pages/SuggestionBox";
import HomePage from "./components/Pages/HomePage";
import Membership from "./components/Pages/membership";
import Terms from "./components/Pages/terms";
import Tariff from "./components/Pages/tariff";
import ExamResultViewer from "./components/Pages/ExamResultViewer";

// Home page content only
function Home() {
  return <HomePage />;
}

// App is the main wrapper with Router, Navbar, Footer and Routes
export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply/:jobId" element={<CareerApply />} />
          <Route path="/news" element={<News />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactPage/>}/>
          <Route path="/consumerEmpowerment" element={< ConsumerEmpowerment/>}/>
          <Route path="/reportfraud" element = {< ReportingFraud/>} />
          <Route path="/suggestion" element = {<SuggestionBox />} />
          <Route path="/membership" element = {<Membership />} />
          <Route path="/terms" element = {<Terms />} />
          <Route path="/tariff" element = {<Tariff />} />
          <Route path="/exam-result/:id" element={<ExamResultViewer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
