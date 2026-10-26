import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ExamResultViewer() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const title = state?.title || "Exam Result";
  const published = state?.published || "";
  const rawUrl = state?.url || "";

  const isImage = /\.(jpg|jpeg|png|gif|webp|svg)(\?|$)/i.test(rawUrl);

  // Fetch the file as a blob so the browser can render it inline
  // regardless of cross-origin restrictions on iframes
  const [blobUrl, setBlobUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!rawUrl || rawUrl === "#" || isImage) return;

    setLoading(true);
    setFetchError(false);

    fetch(rawUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));

    // Revoke the blob URL when component unmounts or URL changes
    return () => {
      setBlobUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    };
  }, [rawUrl, isImage]);

  return (
    <div className="erv-page">
      {/* Top bar */}
      <div className="erv-topbar">
        <button className="erv-back-btn" onClick={() => navigate(-1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Careers
        </button>

        <div className="erv-title-block">
          <div className="erv-doc-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
              <line x1="9" y1="11" x2="15" y2="11"/>
            </svg>
          </div>
          <div>
            <h1 className="erv-title">{title}</h1>
            {published && <p className="erv-date">Published: {published}</p>}
          </div>
        </div>

        {rawUrl && rawUrl !== "#" && (
          <a
            href={rawUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="erv-open-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Open in new tab
          </a>
        )}
      </div>

      {/* Document viewer */}
      <div className="erv-viewer">
        {!rawUrl || rawUrl === "#" ? (
          <div className="erv-unavailable">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.3">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <p>Document not available.</p>
          </div>

        ) : isImage ? (
          <img src={rawUrl} alt={title} className="erv-img" />

        ) : loading ? (
          <div className="erv-loading">
            <div className="erv-spinner" />
            <p>Loading document…</p>
          </div>

        ) : fetchError ? (
          <div className="erv-unavailable">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.3">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <p>Could not load the document.</p>
            <a href={rawUrl} target="_blank" rel="noopener noreferrer" className="erv-open-btn">
              Open document directly
            </a>
          </div>

        ) : blobUrl ? (
          <iframe
            src={blobUrl}
            title={title}
            className="erv-iframe"
            frameBorder="0"
          />
        ) : null}
      </div>
    </div>
  );
}
