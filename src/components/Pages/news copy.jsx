import { useState } from "react";

export default function NewsCenter() {
  const [activeTab, setActiveTab] = useState("news");

  const newsItems = [
    {
      id: 1,
      title: "New Banking Platform Launch",
      description: "Our new digital banking platform is now available.",
    },
    {
      id: 2,
      title: "System Upgrade",
      description: "Infrastructure upgrades completed successfully.",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Scheduled Maintenance",
      description: "Services may be unavailable on Sunday from 1 AM to 3 AM.",
    },
    {
      id: 2,
      title: "Holiday Notice",
      description: "Our offices will be closed during the public holiday.",
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Annual Report 2025",
      description: "Download the latest annual report.",
    },
    {
      id: 2,
      title: "Financial Statement Q1 2026",
      description: "Quarterly financial performance report.",
    },
  ];

  return (
    <div className="news-center">
      <div className="tab-bar">
        {["news", "announcements", "publications"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "news" && (
        <div>
          <h2 className="section-title">Latest News</h2>
          <div className="grid">
            {newsItems.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "announcements" && (
        <div>
          <h2 className="section-title">Announcements</h2>
          <div className="grid">
            {announcements.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "publications" && (
        <div>
          <h2 className="section-title">Publications</h2>
          <div className="grid">
            {publications.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}