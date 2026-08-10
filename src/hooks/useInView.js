import { useState, useEffect } from "react";

/**
 * useInView - triggers true when the given ref enters the viewport.
 * @param {React.RefObject} ref - A React ref attached to the element to observe.
 * @param {number} threshold - Intersection ratio to trigger (default 0.15).
 * @returns {boolean} inView
 */
export function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
