import { useState, useEffect } from "react";

/**
 * useScrolled - returns true when the page has been scrolled past a threshold.
 * @param {number} threshold - Scroll Y distance in px (default 30).
 * @returns {boolean} scrolled
 */
export function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
