import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");


const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Competitive Salary",
    desc: "Industry-leading compensation packages with performance bonuses",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Health Insurance",
    desc: "Comprehensive medical coverage for you and your family",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Professional Development",
    desc: "Training programs and opportunities for career advancement",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Culture",
    desc: "Collaborative environment with supportive colleagues",
  },
];

const steps = [
  {
    num: 1,
    color: "#2d6a4f",
    bg: "#e8f0eb",
    title: "Submit Application",
    desc: "Complete application through Career platform",
  },
  {
    num: 2,
    color: "#2d6a4f",
    bg: "#e8f0eb",
    title: "Exams and Interviews",
    desc: "Shortlisted candidates will be invited for Exams",
  },
  {
    num: 3,
    color: "#2d6a4f",
    bg: "#e8f0eb",
    title: "Result",
    desc: "Results will be published on Muganga Sacco Website",
  },
  {
    num: 4,
    color: "#2d6a4f",
    bg: "#e8f0eb",
    title: "Offer",
    desc: "Successful candidates receive formal job offers",
  },
];

function formatEmploymentType(t) {
  return (t || "full-time").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatDate(d) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return d;
  }
}

function ExamResultsSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("written");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`${API_BASE}/exam-results?category=${activeTab}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setResults(
            (json.data || []).map((r) => ({
              id: r.id,
              title: r.title,
              published: formatDate(r.published_at),
              isLatest: r.is_latest,
              url: r.file_url ? API_ORIGIN + r.file_url : "#",
            }))
          );
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [activeTab]);

  const viewAllLabel =
    activeTab === "written"
      ? "View all written exam results"
      : "View all oral / final results";

  return (
    <div className="exam-results-section">
      {/* Header row */}
      <div className="er-header">
        <div className="er-header-left">
          <div className="er-header-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
              <line x1="9" y1="11" x2="15" y2="11"/>
            </svg>
          </div>
          <div>
            <h2>Exam Results &amp; Interview Notices</h2>
            <p>Stay updated on written exam results, interview schedules and final results.</p>
          </div>
        </div>
        <button className="er-updates-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          Latest Updates
        </button>
      </div>

      {/* Tabs */}
      <div className="er-tabs">
        <button
          className={`er-tab${activeTab === "written" ? " er-tab--active" : ""}`}
          onClick={() => setActiveTab("written")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="1"/>
          </svg>
          Written Exam Results
        </button>
        <button
          className={`er-tab${activeTab === "oral" ? " er-tab--active" : ""}`}
          onClick={() => setActiveTab("oral")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Oral Interview / Final Results
        </button>
      </div>

      {/* Results list */}
      <div className="er-list">
        {loading ? (
          <div className="er-state">Loading...</div>
        ) : error ? (
          <div className="er-state">Failed to load results. Please try again later.</div>
        ) : results.length === 0 ? (
          <div className="er-state">No results published yet. Check back soon.</div>
        ) : (
          results.map((item) => (
            <div className="er-item" key={item.id}>
              <div className="er-item-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <circle cx="9" cy="14" r="2"/>
                  <path d="M13 20l-2-2 2-2"/>
                </svg>
              </div>
              <div className="er-item-body">
                <div className="er-item-title">
                  {item.title}
                  {item.isLatest && <span className="er-latest-badge">Latest</span>}
                </div>
                <div className="er-item-date">Published on: {item.published}</div>
              </div>
              <button
                className="er-action-btn"
                onClick={() => navigate(`/exam-result/${item.id}`, { state: { title: item.title, published: item.published, url: item.url } })}
                aria-label={`View results for ${item.title}`}
              >
                View Results
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* View all link */}
      {!loading && !error && results.length > 0 && (
        <div className="er-view-all">
          <a href="#">{viewAllLabel} &gt;</a>
        </div>
      )}
    </div>
  );
}

export default function Careers() {
  const navigate = useNavigate();
  const [openings, setOpenings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/careers?is_active=true&limit=20`);
        const json = await res.json();
        if (json.success) {
          setOpenings(
            (json.data || []).map((j) => ({
              id: j.id,
              type: formatEmploymentType(j.employment_type),
              posted: formatDate(j.deadline || j.created_at),
              title: j.title,
              dept: j.department,
              location: j.location || "Kigali",
              desc: j.description || "",
              max_age: j.max_age,
              requirements: Array.isArray(j.requirements) ? j.requirements : [],
              benefits: Array.isArray(j.benefits) ? j.benefits : [],
              salary_range: j.salary_range || "",
              employment_type: j.employment_type || "",
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch careers:", err);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return (
    <div className="careers-page">


      {/* HERO */}
      <div className="c-hero">
        <h1>Join Our Team</h1>
        <p>
          Be part of a mission-driven organization that empowers healthcare workers.
          Explore exciting career opportunities at Muganga SACCO.
        </p>
      </div>

      {/* WHY WORK WITH US */}
      <div className="why-section">
        <h2>Why Work With Us?</h2>
        <p>Join a team dedicated to making a difference in the lives of healthcare professionals.</p>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CURRENT OPENINGS */}
      <div className="openings-section">
        <h2>Current Openings</h2>
        <p>Explore our latest job opportunities and find the perfect role for your skills and experience.</p>
        {!loaded ? (
          <div className="spinner-wrap">Loading...</div>
        ) : openings.length === 0 ? (
          <p style={{ textAlign: "center", color: "#9a9a8a", padding: "40px 0" }}>No open positions at this time. Check back later.</p>
        ) : (
          <div className="openings-grid">
            {openings.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-meta">
                  <span className="full-time-badge">{job.type}</span>
                </div>
                <div className="job-title">{job.title}</div>
                <div className="job-details">
                  <span className="job-detail">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    </svg>
                    {job.dept}
                  </span>
                  <span className="job-detail">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {job.location}
                  </span>
                </div>
                {job.posted && <div className="job-deadline">Deadline to Apply: {job.posted}</div>}
                <p className="job-desc">{job.desc}</p>
                <button className="apply-btn" onClick={() => setSelectedJob(job)}>More details</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="job-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedJob(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="job-modal-type">{selectedJob.type}</div>
            <div className="job-modal-title">{selectedJob.title}</div>
            <div className="job-modal-meta">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> {selectedJob.dept}</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {selectedJob.location}</span>
              {selectedJob.salary_range && <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> {selectedJob.salary_range}</span>}
            </div>
            {selectedJob.posted && <div className="job-modal-deadline">Deadline to Apply: {selectedJob.posted}</div>}
            <p className="job-modal-desc">{selectedJob.desc}</p>

            {selectedJob.requirements.length > 0 && (
              <div className="job-modal-section">
                <h4>Responsibilities</h4>
                <ul>{selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
            )}

            {selectedJob.benefits.length > 0 && (
              <div className="job-modal-section">
                <h4>Requirements</h4>
                <ul>{selectedJob.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
              </div>
            )}

            <button className="job-modal-apply" onClick={() => { setSelectedJob(null); navigate(`/apply/${selectedJob.id}`); }}>Apply Now</button>
          </div>
        </div>
      )}

      {/* EXAM RESULTS & INTERVIEW NOTICES */}
      <ExamResultsSection />

      {/* HOW TO APPLY */}
      <div className="how-section">
        <h2>How to Apply</h2>
        <p>Our recruitment process is designed to be transparent and efficient.</p>
        <div className="steps-row">
          {steps.map((s) => (
            <div className="step-item" key={s.num}>
              <div className="step-num" style={{ background: s.bg, color: s.color }}>{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
